"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Star } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        {/* Header */}
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Ready to Elevate Your Shopify Store's Profitability?
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business size and start optimizing
            your pricing with AI
          </p>
        </div>

        {/* Pricing Summary */}
        <div className="text-center space-y-4">
          <p className="text-xl font-medium">
            From $49/mo • 14-day free trial • Cancel anytime
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <Card className="relative">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center justify-between">
                <span className="text-2xl">Starter</span>
                <span className="text-3xl font-bold">
                  $49
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </span>
              </CardTitle>
              <p className="text-muted-foreground">
                Perfect for growing stores
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Up to 1,000 orders/month</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Competitor matching with guardrails</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>VIP discount rescue</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>14-day free trial</span>
                </li>
              </ul>
              <Button className="w-full" size="lg">
                Start Free Trial
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="relative border-2 border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-3 h-3" />
                Most Popular
              </div>
            </div>
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center justify-between">
                <span className="text-2xl">Pro</span>
                <span className="text-3xl font-bold">
                  $99
                  <span className="text-lg font-normal text-muted-foreground">
                    /mo
                  </span>
                </span>
              </CardTitle>
              <p className="text-muted-foreground">
                For established businesses
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Fair-use orders (unlimited)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Demand-based pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Price A/B tests</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>14-day free trial</span>
                </li>
              </ul>
              <Button className="w-full" size="lg">
                Start Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Details */}
        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="order-counting">
              <AccordionTrigger className="text-left">
                How are orders counted?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Orders counted = paid Shopify orders; excludes
                tests/cancellations. For Pro plan overage: $X per +1,000 orders
                (fair pricing based on usage).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fair-use">
              <AccordionTrigger className="text-left">
                What does "fair-use orders" mean?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Fair-use means reasonable usage based on typical e-commerce
                patterns. Most businesses will never hit limits, but we reserve
                the right to discuss pricing for extraordinarily high volume
                usage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="trial">
              <AccordionTrigger className="text-left">
                How does the free trial work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                14-day free trial with full access to all features. No credit
                card required. Cancel anytime during the trial with no charges.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
