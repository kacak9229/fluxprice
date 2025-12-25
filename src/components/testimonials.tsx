"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  result: string;
  timeframe: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "Meridian Goods",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "The pricing intelligence has been transformative. We're making data-driven decisions instead of guessing, and our margins reflect that confidence.",
    rating: 5,
    result: "18% revenue increase within 3 months",
    timeframe: "First quarter",
  },
  {
    name: "Marcus Thompson",
    role: "Head of E-commerce",
    company: "Artisan & Co",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "What impressed me most was how quickly we could implement sophisticated pricing strategies. The learning curve was minimal, the impact immediate.",
    rating: 5,
    result: "12% revenue increase within 6 weeks",
    timeframe: "First quarter",
  },
  {
    name: "Elena Rodriguez",
    role: "Co-founder",
    company: "Luxe Beauty",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "The market insights help us understand not just what to price, but when to adjust. It's like having a seasoned analyst on the team.",
    rating: 5,
    result: "24% revenue increase within 3 months",
    timeframe: "First quarter",
  },
  {
    name: "David Park",
    role: "Operations Director",
    company: "TechForward",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    quote:
      "In our competitive space, pricing precision matters. This platform gives us the confidence to compete strategically rather than reactively.",
    rating: 5,
    result: "22% revenue increase within 2 months",
    timeframe: "First quarter",
  },
  {
    name: "Isabella Martinez",
    role: "Founder",
    company: "Casa Modern",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote:
      "As a smaller operation, we needed enterprise-level pricing intelligence without the complexity. This delivers exactly that balance.",
    rating: 5,
    result: "14% revenue increase within 4 months",
    timeframe: "First quarter",
  },
  {
    name: "James Wilson",
    role: "CEO",
    company: "Alpine Gear",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    quote:
      "The seasonal pricing optimization has been remarkable. We're capturing demand peaks more effectively while maintaining healthy margins year-round.",
    rating: 5,
    result: "28% revenue increase within 4 months",
    timeframe: "First quarter",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
          }`}
        />
      ))}
    </div>
  );
};

const scrollToCTA = () => {
  const pricingElement = document.getElementById("pricing");
  if (pricingElement) {
    pricingElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function WallOfLoveSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Determine cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const TestimonialCard = ({
    name,
    role,
    company,
    quote,
    image,
    rating,
    result,
    timeframe,
  }: Testimonial) => (
    <Card className="group relative overflow-hidden border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/20 bg-white/70 backdrop-blur-sm dark:bg-slate-900/70 dark:border-slate-800/60 dark:hover:border-slate-700/80 dark:hover:shadow-slate-900/20 h-full">
      <CardContent className="p-8 flex flex-col h-full">
        {/* Quote */}
        <blockquote className="mb-8 flex-grow">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-light">
            "{quote}"
          </p>
        </blockquote>

        {/* Result */}
        <div className="mb-6 p-4 rounded-lg bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                {result}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {timeframe}
              </p>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 ring-1 ring-slate-200 dark:ring-slate-700">
              <AvatarImage
                alt={name}
                src={image}
                loading="lazy"
                width="120"
                height="120"
              />
              <AvatarFallback className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 font-medium">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-slate-100">
                {name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-500">
                {company}
              </p>
            </div>
          </div>
          <StarRating rating={rating} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="reviews" className="relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950" />

      <div className="relative py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Trusted by{" "}
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Forward-Thinking
              </span>{" "}
              Brands
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              See how e-commerce leaders use intelligent pricing to drive
              sustainable growth
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 hidden md:flex"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 hidden md:flex"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsPerView + 2)}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)`,
                    }}
                  >
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-slate-700 dark:bg-slate-300"
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom section */}
          {/* <div className="text-center mt-20 pt-12 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center justify-center gap-12 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="font-light">Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <StarRating rating={5} />
                <span className="ml-2 font-light">4.9 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="font-light">SOC 2 Type II certified</span>
              </div>
            </div>
          </div> */}

          {/* CTA Section */}
        </div>
      </div>
    </section>
  );
}
