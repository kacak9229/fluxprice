import { ArrowRight } from "lucide-react";

export default function ContentSection() {
  return (
    <section>
      <div className="py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="@container mx-auto max-w-2xl">
            <div>
              <h2 className="text-foreground text-4xl font-semibold">
                Optimize Your Prices with AI Assistance
              </h2>
              <p className="text-muted-foreground mb-12 mt-4 text-xl">
                FluxPrice uses AI-driven insights to help Shopify brands
                automate pricing, track competitors, and boost margins—all with
                explainable decisions.
              </p>
            </div>

            <div className="@sm:grid-cols-2 @2xl:grid-cols-3 my-12 grid gap-6">
              <div className="space-y-2">
                <span className="mb-4 block text-3xl">📊</span>
                <h3 className="text-xl font-medium">Dynamic Pricing</h3>
                <p className="text-muted-foreground">
                  Automatically adjust prices based on competitors, demand, and
                  intent signals to maximize revenue.
                </p>
              </div>
              <div className="space-y-2">
                <span className="mb-4 block text-3xl">🔍</span>
                <h3 className="text-xl font-medium">Competitor Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor competitor stores in real-time and see which price
                  moves influence your market.
                </p>
              </div>
              <div className="space-y-2">
                <span className="mb-4 block text-3xl">🤖</span>
                <h3 className="text-xl font-medium">Explainable AI</h3>
                <p className="text-muted-foreground">
                  Every price change includes clear reasoning so you stay in
                  control while automating decisions.
                </p>
              </div>
            </div>

            <div className="border-t">
              <ul role="list" className="text-muted-foreground mt-8 space-y-2">
                {[
                  { value: "$200k+", label: "Revenue Generated" },
                  { value: "43%", label: "Avg. Margin Lift" },
                  { value: "1,200+", label: "Price Changes Automated" },
                  { value: "300+", label: "Brands Using FluxPrice" },
                ].map((stat, index) => (
                  <li key={index} className="-ml-0.5 flex items-center gap-1.5">
                    <ArrowRight className="size-4 opacity-50" />
                    <span className="text-foreground font-medium">
                      {stat.value}
                    </span>{" "}
                    {stat.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
