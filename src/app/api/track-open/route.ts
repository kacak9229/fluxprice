import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendFbEvent } from "@/lib/fb-capi";

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    process.env.APP_URL ||
    "https://fluxpriceai.com"
  );
}

// 43-byte 1x1 transparent GIF (standard)
const ONE_PX_GIF = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return new NextResponse(ONE_PX_GIF, {
      headers: { "Content-Type": "image/gif" },
    });
  }

  try {
    const row = await prisma.emailOpenEvent.findUnique({
      where: { token },
    });

    if (!row) {
      return new NextResponse(ONE_PX_GIF, {
        headers: { "Content-Type": "image/gif" },
      });
    }

    if (row.convertedAt != null) {
      return new NextResponse(ONE_PX_GIF, {
        headers: { "Content-Type": "image/gif" },
      });
    }

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;
    const userAgent = request.headers.get("user-agent") || undefined;

    await sendFbEvent({
      eventName: "Lead",
      eventId: row.eventId,
      eventSourceUrl: getBaseUrl(),
      userData: {
        email: row.email,
        clientIp,
        userAgent,
      },
      customData: { content_name: "EmailOpened" },
    });

    await prisma.emailOpenEvent.update({
      where: { token },
      data: { convertedAt: new Date() },
    });
  } catch (err) {
    console.error("track-open error:", err);
  }

  return new NextResponse(ONE_PX_GIF, {
    headers: { "Content-Type": "image/gif" },
  });
}
