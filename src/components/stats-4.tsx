export default function StatsSection() {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Growth for Shopify Stores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            FluxPrice showed measurable revenue lift in the first 30 days —
            <span className="font-semibold text-foreground">
              {" "}
              achieved without heavy discounting and without sacrificing
              margins.
            </span>
          </p>
        </div>

        {/* Stats and Testimonial Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Section */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
                  <p className="text-lg font-medium text-muted-foreground">
                    Up to
                  </p>{" "}
                  30%
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Revenue Lift
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Average increase in first 30 days
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  75+
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Shopify Stores
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Successfully optimized
                </p>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-muted">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  92%
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Price Match Coverage
                </p>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  15%
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Margin Protection
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-muted/20">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "FluxPrice grew our revenue by 25% in the first month, and kept
                our margins intact. The AI is incredibly smart about when to
                adjust prices."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  JL
                </div>
                <div>
                  <cite className="block font-semibold text-foreground not-italic">
                    James Lee
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    Founder, Shopify DTC Brand
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-muted/20">
                <img
                  className="h-6 opacity-60"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png"
                  alt="Shopify Logo"
                  height="24"
                  width="auto"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
