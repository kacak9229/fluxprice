"use client";

import { useState, useEffect } from "react";
import {
  Bell,
  CheckCircle,
  TrendingUp,
  Target,
  ArrowRight,
  User,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ShopperRecoveryDashboard() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-2xl max-w-[400px] lg:max-w-[500px] mx-auto font-sans relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-50 -mr-32 -mt-32"></div>

      {/* Header Status */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Target className="w-4 h-4 lg:w-5 lg:h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-[15px] lg:text-sm font-bold text-gray-900">Shopper Recovery</h3>
            <p className="text-[13px] lg:text-[10px] text-gray-500">Real-time Detection</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[13px] lg:text-[10px] font-bold text-green-700">ACTIVE</span>
        </div>
      </div>

      {/* Animated Content Area */}
      <div className="relative h-[280px]">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-100/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-4 relative z-10">
                  <Bell className="w-8 h-8 lg:w-9 lg:h-9 text-red-500 animate-bounce" />
                </div>
                <h4 className="text-xl lg:text-lg font-bold text-gray-900 mb-2 relative z-10">
                  High Exit Risk Detected!
                </h4>
                <p className="text-lg lg:text-sm text-gray-600 relative z-10">
                  High-value shopper showing signs of abandonment.
                </p>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg lg:text-sm font-bold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5 lg:w-4 lg:h-4 text-blue-600" />
                    Shopper Profile
                  </h4>
                  <span className="text-[13px] lg:text-[10px] font-bold bg-white px-2 py-1 rounded text-blue-600 border border-blue-100">VIP</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="text-[15px] lg:text-xs text-gray-500">Cart Value</span>
                    <span className="text-xl lg:text-lg font-bold text-gray-900">$468.00</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="text-[15px] lg:text-xs text-gray-500">Lifetime Value</span>
                    <span className="text-xl lg:text-lg font-bold text-blue-600">$2,300</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-between items-center shadow-sm">
                    <span className="text-[15px] lg:text-xs text-gray-500">Exit Probability</span>
                    <div className="flex items-center gap-1 text-red-500 font-bold">
                      <TrendingUp className="w-4 h-4 lg:w-3 lg:h-3" />
                      86%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mx-auto mb-4 rotate-3">
                  <Zap className="w-7 h-7 lg:w-8 lg:h-8 text-purple-600" fill="currentColor" />
                </div>
                <h4 className="text-xl lg:text-lg font-bold text-gray-900 mb-2">
                  Generating Offer...
                </h4>
                <div className="space-y-2 text-left bg-white p-4 rounded-xl shadow-sm border border-purple-50">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-purple-500 rounded-full"
                    />
                  </div>
                  <p className="text-[15px] lg:text-xs text-gray-500 text-center mt-2">
                    Calculating optimal discount based on LTV & margin...
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-sm font-bold text-gray-900">Offer Deployed</h4>
                    <p className="text-[13px] lg:text-[10px] text-emerald-700">Sent via Popup</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm mb-3">
                  <p className="text-3xl lg:text-2xl font-black text-gray-900 mb-1">10% OFF</p>
                  <p className="text-[15px] lg:text-xs text-gray-500">+ Free Priority Shipping</p>
                </div>

                <div className="flex items-center justify-between text-[15px] lg:text-xs">
                  <span className="text-gray-500">Margin Impact</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    Safe <CheckCircle className="w-4 h-4 lg:w-3 lg:h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2, 3].map((step) => (
          <motion.div
            key={step}
            className={`h-1.5 rounded-full ${
              step === currentStep ? "bg-indigo-600 w-6" : "bg-gray-200 w-1.5"
            }`}
            layout
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
