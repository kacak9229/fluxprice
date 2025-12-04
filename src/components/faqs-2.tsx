"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsTwo() {
  const faqItems = [
    {
      id: "item-1",
      question: "Will this hurt my margins?",
      answer:
        "No. You set a Minimum Margin (e.g., 15%) plus optional minimum/maximum bounds per SKU/collection, and the system will never publish a price below your minimum margin. It also honors exclusions (new arrivals, clearance) and prevents discounts below your minimum margin.",
    },
    {
      id: "item-2",
      question: "How do personalized discounts not destroy margin?",
      answer:
        "Discounts are margin-aware: they trigger only for at-risk, high-value shoppers (signals like cart idle, exit intent, checkout delay) and always respect your minimum margin and per-SKU maximum discount limits.",
    },
    {
      id: "item-3",
      question: "Do I stay in control?",
      answer:
        "Yes. You control everything:\n• Auto-apply per SKU/collection, or require manual approval.\n• Set minimum/maximum prices, schedule changes, and exclude certain brands/collections.\n• Preview price changes before publishing them.\n• One-click rollback for any change.",
    },
    {
      id: "item-4",
      question: "How does it decide prices, and how fast does it react?",
      answer:
        'Pricing evaluates competitor prices, demand signals (traffic, add-to-cart, checkout hesitation, and more), inventory, and seasonality. Updates run automatically and can be throttled (from minutes to hourly). Activity metrics (e.g., "127 competitor price updates in the last hour") show freshness.',
    },
    {
      id: "item-5",
      question: "What results should I expect, and how do you prove it?",
      answer:
        "We've seen revenue increase up to 30% for our customers, but results vary by catalog and competition. Measure revenue lift, conversion rate, and order margin over a 2–4 week A/B test or geo/audience split, and review median/percentile outcomes.",
    },
    {
      id: "item-6",
      question: "Is my data secure?",
      answer:
        "Yes. FluxPrice runs inside Shopify's trusted ecosystem, with full encryption and safeguards to protect your store, your data, and your customers.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base whitespace-pre-line">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p> */}
        </div>
      </div>
    </section>
  );
}
