import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Nguyen",
    role: "Founder, DTC Apparel Brand",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "FluxPrice helped us boost our revenue by 18% in the first month without relying on heavy discounts. The automated competitor tracking is a lifesaver.",
  },
  {
    name: "James Lee",
    role: "Owner, Home Goods Store",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "We used to spend hours adjusting prices manually. FluxPrice handles it instantly, and every price change comes with a clear explanation I can trust.",
  },
  {
    name: "Amelia Ross",
    role: "Founder, Beauty & Skincare Brand",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "The AI-driven insights on buyer intent and dynamic pricing have been incredible. FluxPrice feels like having a pricing analyst built right into Shopify.",
  },
  {
    name: "Daniel Carter",
    role: "Owner, Electronics E-commerce",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "FluxPrice automatically adjusted our prices to match competitors while protecting margins. We saw a 22% lift in profit within weeks.",
  },
  {
    name: "Maria Gomez",
    role: "Founder, Lifestyle & Home Brand",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote:
      "As a small team, we needed something hands-off. FluxPrice does all the heavy lifting so I can focus on marketing and growing my business.",
  },
  {
    name: "Robert Chan",
    role: "Owner, Outdoor Gear Store",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote:
      "FluxPrice is a game-changer. We no longer worry about underpricing during demand spikes. It’s like having an automated pricing manager 24/7.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-title text-3xl font-semibold">
              Loved by E‑Commerce Founders
            </h2>
            <p className="text-body mt-6">
              Hear how Shopify brand owners use FluxPrice to boost revenue, save
              time, and stay ahead of competitors with AI-driven pricing.
            </p>
          </div>
          <div className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="space-y-3 *:border-none *:shadow-none"
              >
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
