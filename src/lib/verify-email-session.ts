import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "ve_session";
const COOKIE_MAX_AGE_SEC = 60 * 10; // 10 minutes
const ALGORITHM = "sha256";

function getSecret(): string {
  const secret = process.env.VERIFY_EMAIL_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("VERIFY_EMAIL_SECRET must be set and at least 32 characters");
  }
  return secret;
}

/** Create a signed payload for the ve_session cookie. Payload expires in COOKIE_MAX_AGE_SEC. */
export function signVerifySession(token: string): { value: string; maxAge: number } {
  const exp = Math.floor(Date.now() / 1000) + COOKIE_MAX_AGE_SEC;
  const payload = `${token}:${exp}`;
  const secret = getSecret();
  const sig = createHmac(ALGORITHM, secret).update(payload).digest("hex");
  const value = `${payload}:${sig}`;
  return { value, maxAge: COOKIE_MAX_AGE_SEC };
}

/** Verify ve_session cookie and return the token if valid. */
export function verifySessionCookie(cookieValue: string | null): string | null {
  if (!cookieValue) return null;
  const parts = cookieValue.split(":");
  if (parts.length !== 3) return null;
  const [token, expStr, sig] = parts;
  const exp = parseInt(expStr, 10);
  if (Number.isNaN(exp) || exp < Math.floor(Date.now() / 1000)) return null;
  const payload = `${token}:${expStr}`;
  const secret = getSecret();
  const expected = createHmac(ALGORITHM, secret).update(payload).digest("hex");
  let expectedBuf: Buffer;
  let sigBuf: Buffer;
  try {
    expectedBuf = Buffer.from(expected, "hex");
    sigBuf = Buffer.from(sig, "hex");
  } catch {
    return null;
  }
  if (expectedBuf.length !== sigBuf.length || !timingSafeEqual(expectedBuf, sigBuf)) {
    return null;
  }
  return token;
}

export { COOKIE_NAME, COOKIE_MAX_AGE_SEC };
