import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CoreFeatures from "@/components/core-features";
import StatsSection from "@/components/stats-4";
import Features from "@/components/features-4";
import FeaturesSection8 from "@/components/features-8";
import TestimonialSection from "@/components/testimonials";
import LogoCloud from "@/components/logo-cloud";
import IntegrationsSection from "@/components/integrations-4";
import FAQsTwo from "@/components/faqs-2";
import PricingSection from "@/components/pricing-section";
import CTA from "@/components/call-to-action";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      {/* 1. Hero - Immediate hook */}
      <HeroSection />

      {/* 2. Social Proof (Logos for instant trust) */}
      <LogoCloud />

      {/* 3. Primary Features Overview */}
      {/* <FeaturesSection /> */}

      {/* 5. Stats for credibility */}
      <StatsSection />

      {/* 4. Core Features Deep Dive */}
      <CoreFeatures />

      {/* 6. Deep Feature Explanations */}
      {/* <Features /> */}
      <FeaturesSection8 />

      {/* 7. Integrations (platform compatibility) */}
      {/* <IntegrationsSection /> */}

      {/* 8. Testimonials (real-world trust) */}
      <TestimonialSection />

      {/* 9. FAQs to handle objections */}
      <FAQsTwo />

      {/* 10. Pricing to show value */}
      <PricingSection />

      {/* 11. Final CTA to convert */}
      <CTA />

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
