import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { signVerifySession, COOKIE_NAME, COOKIE_MAX_AGE_SEC } from "@/lib/verify-email-session";

/** Token valid for 7 days from creation */
const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * GET: Read-only validation of token. Sets short-lived httpOnly ve_session cookie.
 * No side effects (no DB write). Used by /verify-email page to prove the user loaded the link.
 */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  try {
    const row = await prisma.emailOpenEvent.findUnique({
      where: { token },
      select: { createdAt: true, convertedAt: true },
    });

    if (!row) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const age = Date.now() - row.createdAt.getTime();
    if (age > TOKEN_TTL_MS) {
      return NextResponse.json({ error: "Link expired" }, { status: 400 });
    }

    // Already verified (converted): idempotent success
    if (row.convertedAt) {
      return NextResponse.json({ ok: true, alreadyVerified: true });
    }

    const { value, maxAge } = signVerifySession(token);
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge,
      path: "/",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("verify-email session error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
