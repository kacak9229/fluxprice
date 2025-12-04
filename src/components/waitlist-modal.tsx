"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Mail,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  planPrice?: string;
}

export default function WaitlistModal({
  isOpen,
  onClose,
  planName = "Early Access",
  planPrice,
}: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [acceptNewsletter, setAcceptNewsletter] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <CheckCircle className="w-8 h-8 text-green-600" strokeWidth={3} />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 bg-green-400 rounded-full opacity-20"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">
                You're on the list! 🚀
              </h3>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-600 mb-1">
                  We've sent a confirmation link to:
                </p>
                <p className="text-base font-semibold text-gray-900">{email}</p>
                <p className="text-xs text-blue-600 mt-2 font-medium animate-pulse">
                  Please check your inbox to secure your spot
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 rounded-lg font-medium"
            >
              Done
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[440px] bg-white border-0 shadow-2xl p-0 gap-0 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 px-6 py-6 border-b border-slate-100 text-center">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide mb-3">
            <Sparkles className="w-3 h-3" />
            Limited Spots
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-sm text-gray-500 mt-1.5">
            {planName !== "Early Access" ? (
              <>
                Securing <span className="font-medium text-gray-900">{planName}</span> ({planPrice})
              </>
            ) : (
              "Get early access & secure your discount"
            )}
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-11 pl-10 pr-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400 text-gray-900"
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Compact Benefits */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>40% Early Bird Discount</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Priority Onboarding</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                <span>Margin Protection</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-50 p-2 rounded border border-gray-100">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>VIP Support</span>
              </div>
            </div>

            {/* Simple Newsletter Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group p-1">
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="checkbox"
                  checked={acceptNewsletter}
                  onChange={(e) => setAcceptNewsletter(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
              </div>
              <span className="text-xs text-gray-500 leading-tight group-hover:text-gray-700 transition-colors">
                Send me weekly tips on growing my Shopify store revenue (Unsubscribe anytime)
              </span>
            </label>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 rounded-lg shadow-md shadow-blue-600/20 transition-all active:scale-[0.98]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2 text-sm">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Securing Spot...
                </span>
              ) : (
                <span className="flex items-center gap-2 text-sm">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-center gap-6 text-[10px] font-medium text-gray-400 uppercase tracking-wide">
          <span>No Credit Card</span>
          <span>•</span>
          <span>Cancel Anytime</span>
          <span>•</span>
          <span>Secure</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
