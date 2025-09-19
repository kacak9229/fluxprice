"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export default function PricingSection() {
  const scrollToCTA = () => {
    const ctaElement = document.getElementById("cta");
    if (ctaElement) {
      ctaElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Ready to Elevate Your Shopify Store’s Profitability?
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
                  <div className="text-4xl font-semibold text-gray-900">
                    $49
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
                onClick={scrollToCTA}
              >
                Secure Early Access
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
                  <div className="text-4xl font-semibold text-gray-900">
                    $99
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
                onClick={scrollToCTA}
              >
                Secure Early Access
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-medium text-gray-900 mb-8">
            Trusted by growing merchants
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-1">30%</div>
              <div className="text-gray-600 text-sm">Average revenue boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-1">5K+</div>
              <div className="text-gray-600 text-sm">Active stores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">Always working</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-1">
                99.9%
              </div>
              <div className="text-gray-600 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
            Frequently asked questions
          </h3>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                How does the free trial work?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Start with a 14-day free trial. No credit card required. Cancel
                anytime during the trial period with no charges.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                Can I change plans later?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately with prorated billing.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                What happens if I exceed my order limit?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                For Core plan users, we'll notify you before you reach your
                limit. You can upgrade to Pro for unlimited orders or pay a
                small overage fee.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
