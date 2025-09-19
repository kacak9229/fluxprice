"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

export default function CompetitorDashboard() {
  const [priceMatchCoverage, setPriceMatchCoverage] = useState(0);
  const [marginGuardrail, setMarginGuardrail] = useState(0);
  const [autoAdjust, setAutoAdjust] = useState(false);
  const [priceDropDetected, setPriceDropDetected] = useState(false);

  // Animate counters on mount
  useEffect(() => {
    const timer1 = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count += 2;
        setPriceMatchCoverage(count);
        if (count >= 92) {
          clearInterval(interval);
        }
      }, 20);
    }, 500);

    const timer2 = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setMarginGuardrail(count);
        if (count >= 15) {
          clearInterval(interval);
        }
      }, 50);
    }, 800);

    const timer3 = setTimeout(() => {
      setAutoAdjust(true);
    }, 1200);

    const timer4 = setTimeout(() => {
      setPriceDropDetected(true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg">
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Price Match Coverage */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {priceMatchCoverage}%
            </div>
            <div className="text-sm font-medium text-gray-600">
              Price Match Coverage
            </div>
          </div>
        </div>

        {/* Margin Guardrail */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                Margin Guardrail
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {marginGuardrail}%
              </div>
            </div>
            <div className="text-2xl">▲</div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Auto-adjust
              </span>
              <div
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  autoAdjust ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    autoAdjust ? "translate-x-6" : "translate-x-1"
                  }`}
                />
                {autoAdjust && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                    ON
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-green-600" />
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Competitor Price Feed */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Competitor Price Feed
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">Competitor A</span>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-700">Competitor B</span>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-700">Competitor C</span>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-sm transform rotate-180"></div>
            </div>
          </div>
        </div>

        {/* Price Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Price Drop Alert */}
          {priceDropDetected && (
            <div className="absolute top-4 left-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              Price drop detected
            </div>
          )}

          {/* Chart Area */}
          <div className="mt-8 h-24 relative">
            {/* Price Line */}
            <svg className="w-full h-full" viewBox="0 0 300 100">
              <defs>
                <linearGradient
                  id="priceGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Price line */}
              <path
                d="M 0 60 Q 50 50 100 45 T 200 40 Q 250 35 300 30"
                stroke="#3B82F6"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
              />

              {/* Fill area */}
              <path
                d="M 0 60 Q 50 50 100 45 T 200 40 Q 250 35 300 30 L 300 100 L 0 100 Z"
                fill="url(#priceGradient)"
              />

              {/* Data point */}
              <circle
                cx="250"
                cy="35"
                r="4"
                fill="#3B82F6"
                className="animate-bounce"
              />
            </svg>

            {/* Dotted competitor line */}
            <svg className="w-full h-full absolute top-0" viewBox="0 0 300 100">
              <path
                d="M 0 70 Q 75 65 150 60 T 300 55"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>

          {/* Guardrail Enforced Badge */}
          <div className="mt-4 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-3">
            <div className="text-center text-sm font-medium text-teal-800">
              Guardrail enforced
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
