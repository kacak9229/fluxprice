import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendFbEvent } from "@/lib/fb-capi";

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    process.env.APP_URL ||
    "https://fluxpriceai.com"
  );
}

/**
 * POST: Mark email verified (set convertedAt). Token in body. One click from email = verify.
 * Fires FB Lead once. Idempotent: already converted → 200 + redirect.
 */
export async function POST(request: NextRequest) {
  let body: { token?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const token = body.token;
  if (!token || typeof token !== "string") {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  try {
    const row = await prisma.emailOpenEvent.findUnique({
      where: { token },
    });

    if (!row) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const age = Date.now() - row.createdAt.getTime();
    if (age > TOKEN_TTL_MS) {
      return NextResponse.json({ error: "Link expired" }, { status: 400 });
    }

    const baseUrl = getBaseUrl();
    const thankYouUrl = `${baseUrl}/thank-you?token=${encodeURIComponent(token)}`;

    if (row.convertedAt) {
      return NextResponse.json({ ok: true, alreadyVerified: true, redirect: thankYouUrl });
    }

    const r = row as Record<string, unknown>;
    await sendFbEvent({
      eventName: "Lead",
      eventId: row.eventId,
      eventSourceUrl: baseUrl,
      userData: {
        email: row.email,
        clientIp: (r.clientIp as string | null) ?? undefined,
        userAgent: (r.userAgent as string | null) ?? undefined,
        fbp: (r.fbp as string | null) ?? undefined,
        fbc: (r.fbc as string | null) ?? undefined,
      },
      customData: { content_name: "EmailOpened" },
    });

    await prisma.emailOpenEvent.update({
      where: { token },
      data: { convertedAt: new Date() },
    });

    return NextResponse.json({ ok: true, redirect: thankYouUrl });
  } catch (err) {
    console.error("verify-email POST error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
