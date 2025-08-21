import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";

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
                    Fluxprice AI automatically adjusts prices based on **demand,
                    competition, and buyer intent** — all in real time.
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
                    Monitor competitor pricing effortlessly. Fluxprice AI tracks
                    and reacts to changes instantly, so you always stay ahead.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">
                    Clear, Actionable Insights
                  </h2>
                  <p className="text-foreground">
                    Get **easy-to-understand explanations** for every price
                    change — no black boxes, just full transparency.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition">
                    Seamless Shopify Integration
                  </h2>
                  <p className="text-foreground">
                    One-click install. Fluxprice AI works natively with Shopify
                    — no messy setup or code required.
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
