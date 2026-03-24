import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AudienceSection from "@/components/landing/AudienceSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AudienceSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SecuritySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactFormSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
