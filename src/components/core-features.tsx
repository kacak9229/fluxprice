"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Target } from "lucide-react";
import CompetitorDashboard from "./competitor-dashboard";
import ShopperRecoveryDashboard from "./shopper-recovery-dashboard";

// Animated Demand Pricing Component
function DemandPricingAnimation() {
  const [isHighDemand, setIsHighDemand] = useState(true);
  const [percentage, setPercentage] = useState(12);
  const [barWidth, setBarWidth] = useState(75);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      if (isHighDemand) {
        // Transition to low demand
        setIsHighDemand(false);
        animateValues(12, -8, 75, 30);
      } else {
        // Transition to high demand
        setIsHighDemand(true);
        animateValues(-8, 12, 30, 75);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHighDemand]);

  const animateValues = (
    startPerc: number,
    endPerc: number,
    startWidth: number,
    endWidth: number
  ) => {
    const duration = 1300; // 1.3 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Cubic bezier easing (0.4, 0, 0.2, 1)
      const easeProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPerc = startPerc + (endPerc - startPerc) * easeProgress;
      const currentWidth = startWidth + (endWidth - startWidth) * easeProgress;

      setPercentage(Math.round(currentPerc));
      setBarWidth(currentWidth);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 text-center border border-gray-200">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            {isHighDemand ? "High Demand Period" : "Low Demand Period"}
          </span>
          <span
            className={`font-bold transition-all duration-300 ${
              isHighDemand ? "text-blue-600" : "text-gray-700"
            }`}
            style={{
              filter: isAnimating
                ? isHighDemand
                  ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))"
                  : "drop-shadow(0 0 8px rgba(249, 115, 22, 0.3))"
                : "none",
              transition: "filter 0.3s ease-in-out",
            }}
          >
            {percentage > 0 ? "+" : ""}
            {percentage}% Price
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1300 ease-in-out ${
              isHighDemand
                ? "bg-gradient-to-r from-gray-400 to-blue-500"
                : "bg-gradient-to-r from-gray-400 to-orange-500"
            }`}
            style={{
              width: `${barWidth}%`,
              filter: isAnimating
                ? isHighDemand
                  ? "drop-shadow(0 0 6px rgba(59, 130, 246, 0.2))"
                  : "drop-shadow(0 0 6px rgba(249, 115, 22, 0.2))"
                : "none",
              transition: "filter 0.3s ease-in-out",
            }}
          />
        </div>
        <div className="text-xs text-gray-500">Margins Protected</div>
      </div>
    </div>
  );
}

export default function CoreFeatures() {
  const scrollToCTA = () => {
    const pricingElement = document.getElementById("pricing");
    if (pricingElement) {
      pricingElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        {/* <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Three Ways Fluxprice AI
            <span className="block text-blue-600">Transforms Your Revenue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop leaving money on the table. Our AI doesn't just change
            prices—it intelligently optimizes every aspect of your pricing
            strategy to maximize profits while protecting your margins.
          </p>
        </div> */}

        {/* Feature 1: Competitor Price Matching */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Match competitor prices without sacrificing profits
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our AI monitors competitors and adjusts prices
                automatically—while keeping your margins safe.
              </p>
            </div>
            <div className="lg:order-2">
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
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl blur-3xl"></div>
                <div className="relative">
                  <ShopperRecoveryDashboard />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Stop losing high-value shoppers, convert them with targeted
                pricing
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Spot at-risk, high-value shoppers in real time—and deliver
                margin-safe, targeted discounts before they leave.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3: Dynamic Demand Pricing */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Charge more when demand is high, sell more when it's low
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Profit-safe dynamic pricing adapts to real-time demand helping you earn more when demand spikes and keep sales flowing when demand slows.
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
            </div>
            <div className="lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Demand-Based Price Adjustments
                    </h4>
                  </div>
                  <DemandPricingAnimation />
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
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
