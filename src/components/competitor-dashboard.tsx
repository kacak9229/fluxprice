"use client";

import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, BarChart3, ChevronDown } from "lucide-react";

export default function CompetitorDashboard() {
  const [marginGuardrail, setMarginGuardrail] = useState(0);
  const [selectedMargin, setSelectedMargin] = useState(15);
  const [autoAdjust, setAutoAdjust] = useState(false);
  const [priceDropDetected, setPriceDropDetected] = useState(false);
  const [animatedText, setAnimatedText] = useState("Competitor prices dropped");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const marginOptions = [5, 10, 15, 20, 25, 30];

  // Animate counters on mount
  useEffect(() => {
    const timer2 = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setMarginGuardrail(count);
        if (count >= selectedMargin) {
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
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [selectedMargin]);

  // Animated text alternation
  useEffect(() => {
    if (priceDropDetected) {
      const interval = setInterval(() => {
        setAnimatedText((prev) =>
          prev === "Competitor prices dropped"
            ? "Matching prices"
            : "Competitor prices dropped"
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [priceDropDetected]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-lg">
      {/* Top Row - 2 cards side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
        {/* Competitor Price Feed */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Competitor Price Feed
          </h3>
          <div className="space-y-3 mb-4">
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

          {/* Separator line */}
          <div className="border-t border-gray-200 pt-3">
            <div className="text-sm text-gray-600 font-medium">
              127 updates (24h)
            </div>
          </div>
        </div>

        {/* Minimum Margin */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold text-gray-900">
              Minimum Margin
            </div>
            <div
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoAdjust ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              {autoAdjust && (
                <span className="absolute left-1 text-xs font-medium text-white z-10">
                  ON
                </span>
              )}
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoAdjust ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl font-bold text-gray-900">
                  {marginGuardrail}%
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {marginOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedMargin(option);
                        setMarginGuardrail(option);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {option}%
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-green-600" />
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Price Drop Detected (2x1) */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 relative overflow-hidden">
        {/* Animated Text */}
        <div className="text-center mb-6">
          <div className="text-xl sm:text-2xl font-bold text-gray-900 transition-opacity duration-500">
            {animatedText}
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-24 relative">
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

        {/* Profit Protected Badge */}
        <div className="mt-4 flex justify-center">
          <div
            className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-3"
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <div className="text-center text-sm font-medium text-teal-800">
              Profit Protected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
