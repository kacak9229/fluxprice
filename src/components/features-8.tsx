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
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">
            {/* Feature 1 */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center">
                  <span className="mx-auto block w-fit text-5xl font-semibold">
                    30%
                  </span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold">
                  AI-Powered Revenue Boost
                </h2>
                <p className="mt-2 text-center text-muted-foreground">
                  Stores using Fluxprice AI see an average **30% increase in
                  revenue** with automated, intelligent pricing.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border">
                  <Shield
                    className="m-auto size-12 text-primary"
                    strokeWidth={1}
                  />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition dark:text-white">
                    Smart Price Automation
                  </h2>
                  <p className="text-foreground">
                    Our AI instantly adjusts prices based on demand,
                    competition, and buyer intent — all in real time.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="pt-6 lg:px-6">
                  <Users
                    className="m-auto size-12 text-primary"
                    strokeWidth={1}
                  />
                </div>
                <div className="relative z-10 mt-14 space-y-2 text-center">
                  <h2 className="text-lg font-medium transition">
                    Competitor Tracking
                  </h2>
                  <p className="text-foreground">
                    Track competitor pricing instantly and react automatically
                    to stay ahead.
                  </p>
                </div>
              </CardContent>
            </Card>

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
