"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";

type Step = "loading" | "success" | "error" | "expired";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [step, setStep] = useState<Step>("loading");
  const [errorMessage, setErrorMessage] = useState("");

  // One click from email: land with token → verify immediately via POST → show success
  const verifyOnLoad = useCallback(async () => {
    if (!token) {
      setStep("error");
      setErrorMessage("Missing link.");
      return;
    }
    try {
      const base =
        typeof window !== "undefined"
          ? window.location.origin
          : process.env.NEXT_PUBLIC_APP_URL || "";
      const res = await fetch(`${base}/api/verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 400 && (data.error === "Link expired" || data.error === "Invalid token")) {
          setStep("expired");
          setErrorMessage(data.error === "Link expired" ? "This link has expired." : "This link is invalid.");
        } else {
          setStep("error");
          setErrorMessage(data.error || "Something went wrong.");
        }
        return;
      }

      setStep("success");
    } catch {
      setStep("error");
      setErrorMessage("Something went wrong.");
    }
  }, [token]);

  useEffect(() => {
    verifyOnLoad();
  }, [verifyOnLoad]);

  if (step === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>
    );
  }

  if (step === "expired" || step === "error") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
        <header className="px-6 h-16 flex items-center border-b border-slate-100 bg-white/50 backdrop-blur-md fixed top-0 w-full z-50">
          <Link href="/" className="flex items-center gap-2">
            <img src="/fluxprice2.png" alt="FluxPrice" className="h-8 object-contain" />
          </Link>
        </header>
        <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-12">
          <div className="max-w-md w-full text-center space-y-6">
            <h1 className="text-2xl font-bold text-slate-900">
              {step === "expired" ? "Link expired" : "Something went wrong"}
            </h1>
            <p className="text-slate-600">{errorMessage}</p>
            <Link href="/">
              <Button variant="outline" className="rounded-xl">Return home</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // step === "success"
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      <header className="px-6 h-16 flex items-center justify-between border-b border-slate-100 bg-white/50 backdrop-blur-md fixed top-0 w-full z-50">
        <Link href="/" className="flex items-center gap-2">
        <div className="w-30 h-30 rounded-lg flex items-center justify-center overflow-hidden">
             <img src="/fluxprice2.png" alt="FluxPrice" className="w-full h-full object-contain" />
          </div>
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-12">
        <div className="max-w-2xl w-full text-center space-y-12">
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full h-full bg-green-50 rounded-full flex items-center justify-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </motion.div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              You're officially on the list!
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
              Thank you for verifying your email. Your spot is secured, and we'll be in touch soon with your early access invite.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm max-w-md mx-auto text-left">
            <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">i</span>
              What happens next?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-semibold text-slate-500 text-sm">1</div>
                <div>
                  <h4 className="font-medium text-slate-900">We're finalizing the beta</h4>
                  <p className="text-sm text-slate-500 mt-1">Our team is putting the finishing touches on the platform.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-semibold text-slate-500 text-sm">2</div>
                <div>
                  <h4 className="font-medium text-slate-900">You'll get an invite</h4>
                  <p className="text-sm text-slate-500 mt-1">Watch your inbox for your exclusive login credentials.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} FluxPrice AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
          <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
