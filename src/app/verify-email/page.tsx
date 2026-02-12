"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

/**
 * Redirects to thank-you with the same token so one page handles both confirm + success.
 */
function VerifyEmailRedirect() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_APP_URL || "";
    const thankYou = token
      ? `${base}/thank-you?token=${encodeURIComponent(token)}`
      : `${base}/thank-you`;
    window.location.href = thankYou;
  }, [token]);

  return null;
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailRedirect />
    </Suspense>
  );
}
