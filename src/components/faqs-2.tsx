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
      question: "What is FluxPrice?",
      answer:
        "FluxPrice is an AI-powered platform that automates price monitoring, competitor tracking, and market analytics to help businesses optimize their pricing strategies in real time.",
    },
    {
      id: "item-2",
      question: "Who is FluxPrice for?",
      answer:
        "FluxPrice is designed for e-commerce brands, SaaS companies, and marketplaces that want to stay competitive, track market trends, and maximize revenue with dynamic pricing insights.",
    },
    {
      id: "item-3",
      question: "How does FluxPrice track competitor prices?",
      answer:
        "Our platform uses AI-driven web crawlers and APIs to monitor competitor prices across multiple channels. We provide real-time updates and automated alerts when changes occur.",
    },
    {
      id: "item-4",
      question: "Do I need coding skills to use FluxPrice?",
      answer:
        "Not at all. FluxPrice offers an intuitive dashboard that requires no coding knowledge. For advanced users, we also provide API access for custom integrations.",
    },
    {
      id: "item-5",
      question: "What integrations does FluxPrice support?",
      answer:
        "FluxPrice integrates seamlessly with platforms like Shopify, WooCommerce, BigCommerce, and various ERP/CRM systems. Custom API integrations are also available.",
    },
    {
      id: "item-6",
      question: "How often are prices updated?",
      answer:
        "Prices are updated in near real-time, with customizable refresh intervals depending on your plan. Enterprise users can request higher-frequency tracking.",
    },
    {
      id: "item-7",
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize security. FluxPrice uses encrypted connections (SSL/TLS) and complies with GDPR and industry best practices to protect your business data.",
    },
    {
      id: "item-8",
      question: "What pricing plans are available?",
      answer:
        "FluxPrice offers flexible plans based on your needs—from startups to enterprise-scale businesses. Visit our pricing page to see the full breakdown.",
    },
    {
      id: "item-9",
      question: "Can I try FluxPrice for free?",
      answer:
        "Yes, we offer a 14-day free trial with full access to core features. No credit card required to get started.",
    },
    {
      id: "item-10",
      question: "How do I get support?",
      answer:
        "You can reach our support team via live chat, email, or our help center. Enterprise customers also get a dedicated account manager and priority support.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
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
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
