export default function StatsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Proven Results for Growing E-Commerce Brands
          </h2>
          <p>
            Fluxprice AI is more than just pricing automation —
            <span className="font-medium"> it's an AI-powered ecosystem</span>
            that tracks competitors, predicts demand, and boosts revenue in real
            time.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>
              From Shopify stores to scaling DTC brands, Fluxprice AI delivers
              measurable impact with automated AI pricing and actionable
              insights.
            </p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-6 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +30%
                </div>
                <p>Average Revenue Lift</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  +500
                </div>
                <p>Brands Optimized</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>
                “Fluxprice AI boosted our revenue by 12% in the first month
                without heavy discounting. It's like having a smart pricing team
                inside Shopify.”
              </p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium">Sarah Nguyen, Founder</cite>
                <img
                  className="h-5 w-fit dark:invert"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Shopify_logo_2018.svg"
                  alt="Shopify Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
