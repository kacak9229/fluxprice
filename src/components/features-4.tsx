import {
  Zap,
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            AI-Powered Pricing to Maximize Your Store's Revenue
          </h2>
          <p className="text-muted-foreground">
            Fluxprice AI goes beyond simple discounts — it uses real-time AI to
            optimize pricing, track competitors, and increase revenue
            automatically.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Boost Revenue</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Merchants using Fluxprice AI see an **average 30% lift in
              revenue** without aggressive discounting.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Real-Time Automation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              AI adjusts your prices dynamically based on demand, buyer intent,
              and competitor data.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />
              <h3 className="text-sm font-medium">Competitor Tracking</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Fluxprice AI automatically monitors competitors so you can stay
              ahead without lifting a finger.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />
              <h3 className="text-sm font-medium">Transparent Insights</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Every price change comes with clear, human-readable reasoning so
              you stay in control.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />
              <h3 className="text-sm font-medium">Full Control</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Set pricing rules, floors, and ceilings. Fluxprice AI gives you AI
              power without losing control.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">
                Seamless Shopify Integration
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Install in one click and start optimizing pricing instantly—no
              setup headaches, just results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
