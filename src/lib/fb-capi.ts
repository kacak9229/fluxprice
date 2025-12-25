const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

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
  eventSourceUrl: string;
  userData: UserData;
  customData?: Record<string, any>;
};

/**
 * Hashes a string using SHA-256 as required by Meta CAPI
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
 * Sends an event to the Facebook Conversion API
 */
export async function sendFbEvent(event: EventData) {
  if (!FB_ACCESS_TOKEN || !FB_PIXEL_ID) {
    console.warn("Facebook Conversion API: Missing Access Token or Pixel ID");
    return;
  }

  const hashedUserData: Record<string, string> = {};

  if (event.userData.email) {
    hashedUserData.em = await hashData(event.userData.email.toLowerCase());
  }
  if (event.userData.phone) {
    hashedUserData.ph = await hashData(event.userData.phone);
  }
  // Add other hashed fields as needed (fn, ln, etc.)

  const payload = {
    data: [
      {
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
        custom_data: event.customData,
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
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


