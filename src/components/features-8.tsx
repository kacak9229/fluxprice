import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Users,
  ShoppingBag,
  TrendingUp,
  BarChart3,
  Settings,
  MessageCircle,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            {/* Feature 4 - Seamless Shopify Integration */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border">
                  <ShoppingBag
                    className="m-auto size-12 text-primary"
                    strokeWidth={1}
                  />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition dark:text-white">
                    Seamless Shopify Integration
                  </h2>
                  <p className="text-foreground">
                    One-click install, works with any Online Store 2.0 theme —
                    no code, no slowdowns.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 - Learns from Your Sales */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
                  <TrendingUp
                    className="m-auto size-12 text-primary"
                    strokeWidth={1}
                  />
                </div>
                <div className="relative z-10 mt-14 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">
                    Learns from Your Sales
                  </h2>
                  <p className="text-foreground">
                    Our AI learns from past sales and demand patterns to improve
                    pricing automatically.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 - Measure What Matters Most */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border">
                  <BarChart3
                    className="m-auto size-12 text-primary"
                    strokeWidth={1}
                  />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition dark:text-white">
                    Measure What Matters Most
                  </h2>
                  <p className="text-foreground">
                    Transparent dashboards reveal exactly how dynamic pricing
                    lifts revenue and protects profits.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 7 - Full Control & Guardrails */}
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="mb-4">
                    <Settings className="size-8 text-primary" strokeWidth={1} />
                  </div>
                  <h2 className="text-lg font-medium transition dark:text-white">
                    Full Control & Guardrails
                  </h2>
                  <p className="text-foreground">
                    Set your own pricing rules and limits — AI power, without
                    risking your margins.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 8 - Transparent Insights */}
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="mb-4">
                    <MessageCircle
                      className="size-8 text-primary"
                      strokeWidth={1}
                    />
                  </div>
                  <h2 className="text-lg font-medium transition">
                    Transparent Insights
                  </h2>
                  <p className="text-foreground">
                    See the reasoning behind every price change — always in
                    human-friendly language.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
