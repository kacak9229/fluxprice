import { NextRequest, NextResponse } from "next/server";
import { sendFbEvent } from "@/lib/fb-capi";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { eventName, eventSourceUrl, userData, customData } = body;

    // Get client IP and User Agent from request headers
    const clientIp = req.headers.get("x-forwarded-for") || req.ip;
    const userAgent = req.headers.get("user-agent");

    await sendFbEvent({
      eventName,
      eventSourceUrl,
      userData: {
        ...userData,
        clientIp,
        userAgent,
      },
      customData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing FB event:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


