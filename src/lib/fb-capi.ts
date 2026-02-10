const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const FB_TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

type UserData = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
};

type EventData = {
  eventName: string;
  eventTime?: number;
  eventId?: string;
  eventSourceUrl: string;
  userData: UserData;
  customData?: Record<string, any>;
};

/**
 * Generates a unique event ID for deduplication between Pixel and CAPI
 */
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Hashes a string using SHA-256 as required by Meta CAPI.
 * Per Facebook: all customer information must be hashed except
 * client_ip_address, client_user_agent, click ID (fbc), and browser ID (fbp).
 */
async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

/**
 * Sends an event to the Facebook Conversion API (v24.0)
 */
export async function sendFbEvent(event: EventData) {
  if (!FB_ACCESS_TOKEN || !FB_PIXEL_ID) {
    console.warn("Facebook Conversion API: Missing Access Token or Pixel ID");
    return;
  }

  const hashedUserData: Record<string, string> = {};

  if (event.userData.email) {
    hashedUserData.em = await hashData(event.userData.email.toLowerCase().trim());
  }
  if (event.userData.phone) {
    hashedUserData.ph = await hashData(event.userData.phone.replace(/\D/g, ""));
  }
  if (event.userData.firstName) {
    hashedUserData.fn = await hashData(event.userData.firstName.toLowerCase().trim());
  }
  if (event.userData.lastName) {
    hashedUserData.ln = await hashData(event.userData.lastName.toLowerCase().trim());
  }

  const eventPayload: Record<string, any> = {
    event_name: event.eventName,
    event_time: event.eventTime || Math.floor(Date.now() / 1000),
    event_source_url: event.eventSourceUrl,
    action_source: "website",
    user_data: {
      client_ip_address: event.userData.clientIp,
      client_user_agent: event.userData.userAgent,
      fbp: event.userData.fbp,
      fbc: event.userData.fbc,
      ...hashedUserData,
    },
  };

  // Add event_id for deduplication with client-side Pixel
  if (event.eventId) {
    eventPayload.event_id = event.eventId;
  }

  // Add custom_data if provided
  if (event.customData) {
    eventPayload.custom_data = event.customData;
  }

  const payload: Record<string, any> = {
    data: [eventPayload],
  };

  // Add test_event_code for testing (events appear in Test Events in Events Manager)
  if (FB_TEST_EVENT_CODE) {
    payload.test_event_code = FB_TEST_EVENT_CODE;
  }

  // Log request payload for testing (server logs only)
  console.log("[FB CAPI] Request URL:", `https://graph.facebook.com/v24.0/${FB_PIXEL_ID}/events?access_token=...`);
  console.log("[FB CAPI] Request payload:", JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(
      `https://graph.facebook.com/v24.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Facebook CAPI Error:", data);
    } else {
      console.log("Facebook CAPI Success:", data);
    }

    return data;
  } catch (error) {
    console.error("Facebook CAPI Network Error:", error);
  }
}
