import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Profissional de negócios" 
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container-main relative z-10 px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-display md:text-display-lg text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Reduzimos seus custos de Telecom em até{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-primary">
              40%
            </span>
            . Sem perder qualidade.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Implementamos uma solução de Wi-Fi inteligente que substitui links dedicados caros, mantendo a mesma performance e confiabilidade que sua empresa precisa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#form">
                Descubra quanto você pode economizar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
