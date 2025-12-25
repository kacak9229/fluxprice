"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, TrendingDown, ShieldCheck, Activity } from "lucide-react";

export default function DemandPricingDashboard() {
  const [priceAdjustment, setPriceAdjustment] = useState(0);
  const [isHighDemand, setIsHighDemand] = useState(false);

  useEffect(() => {
    // Cycle between low and high demand
    const cycle = async () => {
      // Transition to Low Demand
      setIsHighDemand(false);
      setPriceAdjustment(-8);
      await new Promise((r) => setTimeout(r, 4000));

      // Transition to High Demand
      setIsHighDemand(true);
      setPriceAdjustment(8);
      await new Promise((r) => setTimeout(r, 4000));

      cycle();
    };

    cycle();
  }, []);

  // Generate dots for the background animation
  const dots = Array.from({ length: 30 }).map((_, i) => i);

  // Scale: 4% width per 1% adjustment. Max adjustment 8% -> 32% width (balanced).
  const widthPercentage = Math.abs(priceAdjustment) * 4;
  
  const barLeft = isHighDemand ? "50%" : `${50 - widthPercentage}%`;

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-2xl max-w-[400px] lg:max-w-[500px] mx-auto font-sans relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 group">
      {/* Background Effect - Dots covering High Demand */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {isHighDemand && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {dots.map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
                  initial={{
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                    scale: 0,
                  }}
                  animate={{
                    y: [null, Math.random() * -50],
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
              {/* Radial Gradient Pulse */}
              <motion.div
                className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Header Status */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div
            className={`p-2 rounded-lg transition-colors duration-500 ${
              isHighDemand ? "bg-blue-100" : "bg-orange-100"
            }`}
          >
            <Activity
              className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors duration-500 ${
                isHighDemand ? "text-blue-600" : "text-orange-600"
              }`}
            />
          </motion.div>
          <div>
            <h3 className="text-[15px] lg:text-sm font-bold text-gray-900">Demand Tracker</h3>
            <p className="text-[13px] lg:text-[10px] text-gray-500">Real-time Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[13px] lg:text-[10px] font-bold text-green-700">LIVE</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8 relative z-10">
        {/* Dynamic Status Text */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[15px] lg:text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Current Demand
            </span>
            <motion.div
              key={isHighDemand ? "high" : "low"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-xl lg:text-lg font-bold flex items-center gap-2 ${
                isHighDemand ? "text-blue-600" : "text-orange-600"
              }`}
            >
              {isHighDemand ? (
                <>
                  <TrendingUp className="w-6 h-6 lg:w-5 lg:h-5" /> High Demand
                </>
              ) : (
                <>
                  <TrendingDown className="w-6 h-6 lg:w-5 lg:h-5" /> Low Demand
                </>
              )}
            </motion.div>
          </div>

          <div className="text-right space-y-1">
            <span className="text-[15px] lg:text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Auto-Adjust
            </span>
            <motion.div
              className="text-3xl lg:text-2xl font-black text-gray-900"
              animate={{
                color: isHighDemand ? "#2563eb" : "#ea580c",
              }}
            >
              {priceAdjustment > 0 ? "+" : ""}
              {priceAdjustment}%
            </motion.div>
          </div>
        </div>

        {/* Animated Bar */}
        <div className="relative h-14 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden flex items-center px-1 shadow-inner">
          {/* Grid Lines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 49%, #cbd5e1 50%, transparent 51%)",
              backgroundSize: "100% 100%",
            }}
          ></div>

          {/* Sliding Bar Container */}
          <div className="relative w-full h-10 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 z-10"></div>

            {/* Animated Fill */}
            <motion.div
              className="absolute top-0 bottom-0 h-full z-0"
              initial={{ left: "50%", width: "0%" }}
              animate={{
                left: barLeft,
                width: `${widthPercentage}%`,
                backgroundColor: isHighDemand ? "#3b82f6" : "#f97316",
              }}
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
            </motion.div>
          </div>

          {/* Labels */}
          <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none z-20">
            <span className="text-[13px] lg:text-[10px] font-bold text-gray-600">
              LOW DEMAND
            </span>
            <span className="text-[13px] lg:text-[10px] font-bold text-gray-600">
              HIGH DEMAND
            </span>
          </div>
        </div>

        {/* Margin Protection Badge */}
        <motion.div
          className="flex items-center justify-center gap-2 text-[15px] lg:text-xs font-medium text-emerald-700 bg-emerald-50/80 backdrop-blur-sm py-3 rounded-xl border border-emerald-100/50 shadow-sm"
          initial={{ opacity: 0.8, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        >
          <div className="bg-white p-1 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-emerald-600" />
          </div>
          <span>Margins Automatically Protected</span>
        </motion.div>
      </div>
    </div>
  );
}
