"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Target } from "lucide-react";
import CompetitorDashboard from "./competitor-dashboard";
import ShopperRecoveryDashboard from "./shopper-recovery-dashboard";

export default function CoreFeatures() {
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
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Three Ways Fluxprice AI
            <span className="block text-blue-600">Transforms Your Revenue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop leaving money on the table. Our AI doesn't just change
            prices—it intelligently optimizes every aspect of your pricing
            strategy to maximize profits while protecting your margins.
          </p>
        </div>

        {/* Feature 1: Competitor Price Matching */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                  <Shield className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Smart Protection
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Match competitor prices without sacrificing profit
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our AI monitors competitors 24/7 and adjusts your prices
                automatically—while keeping your margins safe with intelligent
                guardrails. Get 92% price match coverage with 15% margin
                protection guaranteed.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">
                    Real-time competitor monitoring
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">
                    Automatic price adjustments
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">
                    Margin guardrails enforced
                  </span>
                </div>
              </div>
              <Button
                size="lg"
                className="group bg-gray-900 hover:bg-gray-800 text-white"
                onClick={scrollToCTA}
              >
                Secure Early Access
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl blur-3xl"></div>
                <div className="relative">
                  <CompetitorDashboard />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: High-Value Shopper Recovery */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl blur-3xl"></div>
                <div className="relative">
                  <ShopperRecoveryDashboard />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                  <Target className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Smart Recovery
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Stop losing high-value shoppers, convert them with targeted
                pricing
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Identify at-risk, high-LTV customers in real-time and deliver
                margin-safe, targeted discounts before they leave. Recover
                12,480 customers daily while reducing abandonment by 18% and
                increasing AOV by 9%.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">12,480</div>
                  <div className="text-sm text-gray-600">Daily Recoveries</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">-18%</div>
                  <div className="text-sm text-gray-600">Abandonment</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">+9%</div>
                  <div className="text-sm text-gray-600">AOV Increase</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">86%</div>
                  <div className="text-sm text-gray-600">Churn Risk</div>
                </div>
              </div>
              <Button
                size="lg"
                className="group bg-gray-900 hover:bg-gray-800 text-white"
                onClick={scrollToCTA}
              >
                Secure Early Access
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Feature 3: Dynamic Demand Pricing */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                  <TrendingUp className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Dynamic Intelligence
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Charge more when demand is high, sell more when it's low
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our AI analyzes inventory levels, traffic surges, seasonality,
                and sell-through rates to optimize pricing in real-time.
                Increase revenue by 10% and sell-through by 14% with 128
                intelligent price changes.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">+10%</div>
                  <div className="text-xs text-gray-600">Revenue</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-xl font-bold text-gray-900">+14%</div>
                  <div className="text-xs text-gray-600">Sell-through</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-xl font-bold text-gray-900">128</div>
                  <div className="text-xs text-gray-600">Price Changes</div>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Inventory level monitoring</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Traffic surge detection</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Seasonal demand patterns</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Real-time sell-through analysis</span>
                </div>
              </div>
              <Button
                size="lg"
                className="group bg-gray-900 hover:bg-gray-800 text-white"
                onClick={scrollToCTA}
              >
                Secure Early Access
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Demand-Based Pricing Dashboard
                    </h4>
                    <p className="text-sm text-gray-600">
                      Real-time optimization in action
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center border border-gray-200">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          High Demand Period
                        </span>
                        <span className="text-blue-600 font-bold">
                          +12% Price
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-gray-400 to-blue-500 w-3/4 rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Low Demand Period
                        </span>
                        <span className="text-gray-700 font-bold">
                          -8% Price
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Margin Safe • Auto-Adjust ON
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Ready to Transform Your Pricing Strategy?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Shopify stores already using Fluxprice AI to
            maximize revenue while protecting margins. See results in your first
            week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 bg-gray-900 hover:bg-gray-800 text-white"
              onClick={scrollToCTA}
            >
              Secure Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
