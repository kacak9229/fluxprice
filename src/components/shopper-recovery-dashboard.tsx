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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-lg">
      {/* Step 1: Detection Alert */}
      <div
        className={`relative transition-all duration-500 mb-6 ${
          currentStep >= 1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-5 shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl"></div>
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg border border-blue-300">
              <Bell className="w-6 h-6 text-blue-600 animate-pulse drop-shadow-sm" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">
                High-Value Shopper About to Leave
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
        <div className="bg-white backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
          <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-md border border-gray-300">
              <Target className="w-4 h-4 text-gray-600" />
            </div>
            Shopper Profile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2 drop-shadow-sm">
                $468
              </div>
              <div className="text-sm text-gray-600">Current Cart</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-700 mb-2 drop-shadow-sm">
                $2,300
              </div>
              <div className="text-sm text-gray-600">Lifetime Value</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-orange-100 rounded-lg border border-orange-200 shadow-sm">
              <div className="text-3xl font-bold text-orange-700 mb-2 drop-shadow-sm">
                86%
              </div>
              <div className="text-sm text-gray-600">Exit Risk</div>
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
        <div className="bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl"></div>
          <div className="relative flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg border border-blue-300">
              <CheckCircle className="w-6 h-6 text-blue-600 drop-shadow-sm" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-lg">
                Personalized Discount Auto-applied
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-50 to-gray-100 backdrop-blur-sm rounded-lg p-5 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-gray-900 text-lg">
                8% off + Free Fast Shipping
              </span>
              <span className="text-xs bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-800 px-3 py-1.5 rounded-full border border-teal-200 shadow-sm">
                Margins Protected
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Discount based on: Cart value, LTV, exit intent, checkout delay
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
      ></div>

      {/* Premium Progress Indicator */}
    </div>
  );
}
