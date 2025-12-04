import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  TrendingUp,
  BarChart3,
  Settings,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50/50 py-24 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Feature 7 - Full Control & Guardrails */}
          <Card className="col-span-1 md:col-span-3 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Settings className="size-7 text-blue-600" strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Full Control & Guardrails
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Set your own pricing rules and limits. Leverage AI power without
                  ever risking your margins or brand reputation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 8 - Transparent Insights */}
          <Card className="col-span-1 md:col-span-3 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="size-7 text-indigo-600" strokeWidth={2} />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Transparent Insights
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  No black boxes. See the exact reasoning behind every price change
                  explained in plain, human-friendly language.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 4 - Seamless Shopify Integration */}
          <Card className="col-span-1 md:col-span-2 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <CardContent className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <ShoppingBag className="size-6 text-emerald-600" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Seamless Integration
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  One-click Shopify install. Works with any Online Store 2.0 theme —
                  no code, no slowdowns.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 5 - Learns from Your Sales */}
          <Card className="col-span-1 md:col-span-2 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <CardContent className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <TrendingUp className="size-6 text-purple-600" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Learns from Sales
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our AI continuously analyzes your past sales and demand patterns to improve
                  pricing accuracy automatically.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Feature 6 - Measure What Matters Most */}
          <Card className="col-span-1 md:col-span-2 group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
            <CardContent className="p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <BarChart3 className="size-6 text-amber-600" strokeWidth={2} />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Clear ROI Tracking
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Transparent dashboards reveal exactly how dynamic pricing
                  lifts revenue and protects profits.
                </p>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
