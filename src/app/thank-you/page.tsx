"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const tracked = useRef(false);

  // When landing with ?token=..., fire track-open once so click-through counts as conversion
  useEffect(() => {
    if (!token || tracked.current) return;
    tracked.current = true;
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_APP_URL || "";
    const img = new Image();
    img.src = `${base}/api/track-open?token=${encodeURIComponent(token)}`;
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Navigation */}
      <header className="px-6 h-16 flex items-center justify-between border-b border-slate-100 bg-white/50 backdrop-blur-md fixed top-0 w-full z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-30 h-30 rounded-lg flex items-center justify-center overflow-hidden">
             <img src="/fluxprice2.png" alt="FluxPrice" className="w-full h-full object-contain" />
          </div>
          
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-6 pt-24 pb-12">
        <div className="max-w-2xl w-full text-center space-y-12">
          {/* Success Animation/Icon */}
          <div className="relative mx-auto w-24 h-24">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25"></div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
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

          {/* Next Steps Card */}
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button variant="outline" className="h-12 px-8 rounded-xl border-slate-200 hover:bg-slate-50 hover:text-slate-900">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
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
          <div className="animate-pulse text-slate-500">Loading...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

