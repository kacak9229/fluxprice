"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import WaitlistModal from "./waitlist-modal";

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const handleJoinWaitlist = (planName: string, planPrice: string) => {
    setSelectedPlan({ name: planName, price: planPrice });
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🎉 Early Bird Discount - Limited Time
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Ready to Elevate Your Shopify Store's Profitability?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, then pay as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-gray-600">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          {/* Core Plan */}
          <Card className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-8 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Core</h3>
                  <p className="text-gray-600">Up to 1,000 orders/month</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <div className="text-4xl font-semibold text-gray-900">
                      $49
                    </div>
                    <div className="text-2xl text-gray-400 line-through">
                      $59
                    </div>
                  </div>
                  <div className="text-gray-600">/month</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Competitor price matching
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">VIP discount rescue</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Email support</span>
                </div>
              </div>
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg"
                onClick={() => handleJoinWaitlist("Core", "$49/month")}
              >
                Join the Waitlist
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="w-3 h-3" />
                Most Popular
              </div>
            </div>
            <CardHeader className="p-8 pb-6 pt-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Pro</h3>
                  <p className="text-gray-600">Unlimited orders</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <div className="text-4xl font-semibold text-gray-900">
                      $99
                    </div>
                    <div className="text-2xl text-gray-400 line-through">
                      $109
                    </div>
                  </div>
                  <div className="text-gray-600">/month</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Core</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Demand-based pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Price A/B testing</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Priority support</span>
                </div>
              </div>
              <Button
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg"
                onClick={() => handleJoinWaitlist("Pro", "$99/month")}
              >
                Join the Waitlist
              </Button>
            </CardContent>
          </Card>
        </div>

        <WaitlistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          planName={selectedPlan?.name}
          planPrice={selectedPlan?.price}
        />

        {/* Social Proof */}
     

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
