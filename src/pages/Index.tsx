import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ProcessSection from "@/components/landing/ProcessSection";
import SavingsTableSection from "@/components/landing/SavingsTableSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AISection from "@/components/landing/AISection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProcessSection />
        <SavingsTableSection />
        <BenefitsSection />
        <AISection />
        <TestimonialsSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
