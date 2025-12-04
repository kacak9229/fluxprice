"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal, ArrowRight } from "lucide-react";
import WaitlistModal from "./waitlist-modal";

export default function CallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <span className="block text-blue-600">Join the Waitlist.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Lock in early access and stay ahead of every price move with
            AI-powered pricing intelligence.
          </p>

          {/* Trigger Button */}
          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="h-14 px-8 text-lg bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

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

        <WaitlistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
