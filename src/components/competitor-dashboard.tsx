"use client";

import { useState, useEffect, useRef } from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CompetitorDashboard() {
  const [marginGuardrail, setMarginGuardrail] = useState(0);
  const [selectedMargin, setSelectedMargin] = useState(10);
  const [autoAdjust, setAutoAdjust] = useState(false);
  const [priceDropDetected, setPriceDropDetected] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [graphData, setGraphData] = useState({ competitorY: 40, yourPriceY: 50 });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const marginOptions = [5, 10, 15, 20, 25, 30];

  // Close dropdown on click outside or scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]);

  // Main Animation Loop
  useEffect(() => {
    // 1. Initial State
    const sequence = async () => {
      // Reset
      setMarginGuardrail(0);
      setAutoAdjust(false);
      setPriceDropDetected(false);
      setGraphData({ competitorY: 40, yourPriceY: 50 }); // Initial prices

      // Step 1: Count up margin
      await new Promise((r) => setTimeout(r, 500));
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setMarginGuardrail(count);
        if (count >= selectedMargin) {
          clearInterval(interval);
        }
      }, 40);
      await new Promise((r) => setTimeout(r, 1000));

      // Step 2: Enable Auto Adjust
      setAutoAdjust(true);
      await new Promise((r) => setTimeout(r, 1000));

      // Step 3: Competitor Price Drops (Graph Animation)
      setPriceDropDetected(true);
      setGraphData((prev) => ({ ...prev, competitorY: 80 })); // Drop competitor price
      await new Promise((r) => setTimeout(r, 800));

      // Step 4: Your Price Adjusts (but protected)
      setGraphData((prev) => ({ ...prev, yourPriceY: 70 })); // Adjust your price
      
      // Loop after delay
      setTimeout(() => sequence(), 6000);
    };

    sequence();
  }, [selectedMargin]);

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-2xl max-w-[400px] mx-auto font-sans transform hover:scale-[1.02] transition-transform duration-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Zap className="w-4 h-4 text-blue-600" fill="currentColor" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">Smart Repricer</h3>
            <p className="text-[10px] text-gray-500">Active Monitoring</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-green-700">LIVE</span>
        </div>
      </div>

      {/* Top Row - Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Minimum Margin Card */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 relative group hover:border-blue-200 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              Min Margin
            </span>
            <motion.div
              className={`w-8 h-4 rounded-full p-0.5 flex items-center transition-colors duration-300 ${
                autoAdjust ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <motion.div
                layout
                className="w-3 h-3 bg-white rounded-full shadow-sm"
                animate={{ x: autoAdjust ? 16 : 0 }}
              />
            </motion.div>
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-2xl font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors"
            >
              {marginGuardrail}%
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-20 overflow-hidden min-w-[120px]"
                >
                  {marginOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedMargin(option);
                        setMarginGuardrail(option);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm font-medium hover:bg-blue-50 transition-colors ${
                        selectedMargin === option ? "text-blue-600 bg-blue-50" : "text-gray-600"
                      }`}
                    >
                      {option}%
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Competitor Card */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 group hover:border-red-200 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
              Competitor
            </span>
            <TrendingDown className={`w-3.5 h-3.5 text-red-500 transition-opacity duration-300 ${priceDropDetected ? 'opacity-100' : 'opacity-0'}`} />
          </div>
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            -$12
          </div>
          <div className="text-[10px] text-red-500 font-medium mt-1 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-red-500"></span>
            Price Drop
          </div>
        </div>
      </div>

      {/* Dynamic Graph Area */}
      <div className="relative h-40 bg-gradient-to-b from-blue-50/50 to-white rounded-2xl border border-blue-100 overflow-hidden p-4 flex items-end justify-center">
        {/* Grid lines */}
        <div className="absolute inset-0 w-full h-full opacity-30" 
             style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Animated Price Lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible">
          {/* Competitor Line (Red/Gray) */}
          <motion.path
            d={`M0,${graphData.competitorY} Q150,${graphData.competitorY} 400,${graphData.competitorY}`}
            fill="none"
            stroke={priceDropDetected ? "#ef4444" : "#94a3b8"}
            strokeWidth="2"
            strokeDasharray="4 4"
            animate={{ d: `M0,${graphData.competitorY} Q150,${graphData.competitorY - 5} 400,${graphData.competitorY}` }}
            transition={{ type: "spring", stiffness: 50 }}
          />
          
          {/* Your Price Line (Blue) - Reacting but protected */}
          <motion.path
            d={`M0,${graphData.yourPriceY} Q150,${graphData.yourPriceY} 400,${graphData.yourPriceY}`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            animate={{ d: `M0,${graphData.yourPriceY} Q150,${graphData.yourPriceY} 400,${graphData.yourPriceY}` }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          />
          
          {/* Area under your price */}
          <motion.path
            d={`M0,${graphData.yourPriceY} Q150,${graphData.yourPriceY} 400,${graphData.yourPriceY} V200 H0 Z`}
            fill="url(#blueGradient)"
            className="opacity-50"
            animate={{ d: `M0,${graphData.yourPriceY} Q150,${graphData.yourPriceY} 400,${graphData.yourPriceY} V200 H0 Z` }}
            transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
          />
          
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Status Badge */}
        <AnimatePresence>
          {autoAdjust && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute bottom-4 bg-white/90 backdrop-blur-sm border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg flex items-center gap-1.5 z-10"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Margin Protected
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
