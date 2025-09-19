"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";
import EmailConfirmationModal from "./email-confirmation-modal";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  return (
    <section
      id="cta"
      className="py-24 md:py-40 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Beat the Market.
            <span className="block text-blue-600">Secure Early Access.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Lock in early access and stay ahead of every price move with
            AI-powered pricing intelligence.
          </p>

          {/* Email Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email") as string;
              if (email) {
                setSubmittedEmail(email);
                setIsModalOpen(true);
              }
            }}
            className="mx-auto max-w-lg mb-8"
          >
            <div className="bg-white relative flex items-center rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
              <div className="flex-1 relative">
                <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full h-16 pl-16 pr-4 bg-transparent text-lg placeholder:text-gray-400 focus:outline-none"
                  type="email"
                  required
                />
              </div>
              <div className="pr-3">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="hidden sm:block">Secure Early Access</span>
                  <span className="sm:hidden">Get Access</span>
                  <SendHorizonal className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <EmailConfirmationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          email={submittedEmail}
        />
      </div>
    </section>
  );
}
