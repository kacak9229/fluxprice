export default function StatsSection() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              FluxPrice in numbers
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Helping Shopify brands maximize revenue with AI-driven dynamic
              pricing, competitor insights, and explainable price changes.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4">
            <div>
              <div className="text-foreground text-4xl font-bold">$200k+</div>
              <p className="text-muted-foreground">Revenue Generated</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">43%</div>
              <p className="text-muted-foreground">Avg. Margin Lift</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">1,200+</div>
              <p className="text-muted-foreground">Price Changes Automated</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">300+</div>
              <p className="text-muted-foreground">Brands Using FluxPrice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
