"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Target,
  DollarSign,
} from "lucide-react";

export default function ShopperRecoveryDashboard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [recoveries, setRecoveries] = useState(0);

  useEffect(() => {
    const steps = [
      { delay: 500, step: 1 }, // Show detection
      { delay: 2000, step: 2 }, // Show customer data
      { delay: 3500, step: 3 }, // Show offer
      { delay: 5000, step: 4 }, // Show results
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setCurrentStep(step), delay);
    });

    // Animate recovery counter
    setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count += 400;
        setRecoveries(count);
        if (count >= 12480) {
          clearInterval(interval);
        }
      }, 50);
    }, 5200);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Step 1: Detection Alert */}
      <div
        className={`relative transition-all duration-500 mb-6 ${
          currentStep >= 1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-5 shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl"></div>
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full flex items-center justify-center shadow-lg border border-blue-500/30">
              <Bell className="w-6 h-6 text-blue-400 animate-pulse drop-shadow-sm" />
            </div>
            <div>
              <div className="font-semibold text-white text-lg">
                High-Value Customer Alert
              </div>
              <div className="text-sm text-gray-300">
                At-risk shopper detected - immediate action required
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Customer Profile */}
      <div
        className={`relative transition-all duration-500 mb-6 ${
          currentStep >= 2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 shadow-lg">
          <h3 className="font-semibold text-white mb-6 flex items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center shadow-md">
              <Target className="w-4 h-4 text-gray-300" />
            </div>
            Customer Profile
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-b from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 shadow-inner">
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-sm">
                $468
              </div>
              <div className="text-sm text-gray-400">Current Cart</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/20 shadow-inner">
              <div className="text-3xl font-bold text-blue-300 mb-2 drop-shadow-sm">
                $2,300
              </div>
              <div className="text-sm text-gray-400">Lifetime Value</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-orange-900/30 to-orange-800/20 rounded-lg border border-orange-500/20 shadow-inner">
              <div className="text-3xl font-bold text-orange-300 mb-2 drop-shadow-sm">
                86%
              </div>
              <div className="text-sm text-gray-400">Exit Risk</div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: AI Action */}
      <div
        className={`relative transition-all duration-500 mb-6 ${
          currentStep >= 3
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl"></div>
          <div className="relative flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/40 rounded-full flex items-center justify-center shadow-lg border border-blue-500/40">
              <CheckCircle className="w-6 h-6 text-blue-300 drop-shadow-sm" />
            </div>
            <div>
              <div className="font-semibold text-white text-lg">
                Smart Offer Applied
              </div>
              <div className="text-sm text-gray-300">
                AI automatically triggered personalized discount
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-5 border border-white/10 shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-white text-lg">
                8% off + Free Fast Shipping
              </span>
              <span className="text-xs bg-gradient-to-r from-blue-500/20 to-blue-600/30 text-blue-300 px-3 py-1.5 rounded-full border border-blue-500/30 shadow-sm">
                Margin Safe
              </span>
            </div>
            <div className="text-sm text-gray-400">
              Personalized based on: Cart value, LTV, exit intent, checkout
              delay
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Results */}
      <div
        className={`relative transition-all duration-500 ${
          currentStep >= 4
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl p-6 border border-gray-600/50 shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl"></div>
          <h3 className="relative font-semibold text-white mb-6 flex items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-blue-600/40 rounded-lg flex items-center justify-center shadow-md border border-blue-500/30">
              <DollarSign className="w-4 h-4 text-blue-300" />
            </div>
            Impact Today
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-b from-blue-900/20 to-blue-800/10 rounded-lg border border-blue-500/20 shadow-inner">
              <div className="text-3xl font-bold text-blue-300 mb-2 drop-shadow-sm">
                {recoveries.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Customers Recovered</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 shadow-inner">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-white drop-shadow-sm" />
                <div className="text-3xl font-bold text-white drop-shadow-sm">
                  -18%
                </div>
              </div>
              <div className="text-sm text-gray-400">Abandonment</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 shadow-inner">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-white drop-shadow-sm" />
                <div className="text-3xl font-bold text-white drop-shadow-sm">
                  +9%
                </div>
              </div>
              <div className="text-sm text-gray-400">Average Order</div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-3 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-600/30">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                currentStep >= step
                  ? "bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg shadow-blue-500/50"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
