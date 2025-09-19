"use client";

import {
  TrendingDown,
  ShoppingCart,
  TrendingUp,
  Clock,
  Shield,
  Sparkles,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
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
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 via-transparent to-gray-50/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-6xl space-y-12 px-6 relative z-10">
        {/* Premium Header */}
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg">
            <AlertTriangle className="w-4 h-4" />
            The Hidden Cost of Pricing Mistakes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Shopify Sales Drop.
            <span className="block text-gray-900">Margins Shrink.</span>
            <span className="block text-gray-900">
              Pricing Mistakes Are Costing You.
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Price wars with competitors, abandoned carts, and missed profits
            during demand spikes— pricing mistakes cost Shopify stores more than
            they realize.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              The Problems Costing You Revenue
            </h3>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Problem 1: Price Wars */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-100 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <TrendingDown className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      Price Wars Erode Profits
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Competing on price without limits drains your margins and
                      leaves you stuck in endless frustration.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-xs font-medium">High Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 2: Cart Abandonment */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-100 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <ShoppingCart className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      High-Value Carts Go Unconverted
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      When high-value carts abandon, buying intent is gone.
                      Reacquiring them later costs 5× more.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-xs font-medium">
                        Critical Impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 3: Missed Demand */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-100 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      Demand Spikes, Profits Missed
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      When demand surges, fixed prices don't adapt—you sell out
                      fast but miss extra profit.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-xs font-medium">
                        Moderate Impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem 4: Manual Inefficiency */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-100 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
                      Manual Pricing Wastes Time
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Spreadsheets and feed syncs take hours each week—slowing
                      changes that should take minutes.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs font-medium">Time Impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              FluxPrice Solves These Problems
            </h3>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Solution 1: Full Control */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-50 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-white border border-blue-200 rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Full Control
                      </h3>
                      <p className="text-blue-700 font-medium text-sm">
                        AI-Powered, Human-Controlled
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Set pricing rules, floors, and ceilings. FluxPrice AI gives
                    you AI power without losing control over your pricing
                    strategy.
                  </p>
                  <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        100%
                      </div>
                      <div className="text-xs text-gray-600">Control</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        24/7
                      </div>
                      <div className="text-xs text-gray-600">Monitoring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">∞</div>
                      <div className="text-xs text-gray-600">Rules</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 2: Seamless Integration */}
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-50 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
              <div className="relative bg-white border border-blue-200 rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Seamless Integration
                      </h3>
                      <p className="text-blue-700 font-medium text-sm">
                        One-Click Setup
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Install in one click and start optimizing pricing
                    instantly—no setup headaches, just results that boost your
                    bottom line.
                  </p>
                  <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">
                        1-Click
                      </div>
                      <div className="text-xs text-gray-600">Install</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-600">Setup</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">∞</div>
                      <div className="text-xs text-gray-600">Compatible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gray-200/50 rounded-xl blur-lg" />
          <div className="relative text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Stop Losing Money to Pricing Mistakes
                </h3>
                <p className="text-gray-300 max-w-xl mx-auto leading-relaxed mb-6">
                  Join thousands of Shopify merchants who've eliminated pricing
                  problems and boosted their profits.
                </p>
                <Button
                  onClick={scrollToCTA}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Secure Early Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
