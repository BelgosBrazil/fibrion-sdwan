import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="final-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#final-grid)" />
        </svg>
      </div>

      <div className="container-main relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <h2 className="text-heading md:text-display text-primary-foreground mb-6">
            Chega de pagar caro por conectividade que não entrega.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Com o Wi-Fi Inteligente da Fibrion, você tem uma infraestrutura de telecomunicações que reduz custos drasticamente, sem sacrificar qualidade ou confiabilidade.
          </p>

          {/* Highlight Text */}
          <p className="text-lg text-primary-foreground/90 mb-10 font-medium">
            Seu mercado é competitivo demais para você estar desperdiçando dinheiro em telecom.{" "}
            <span className="text-accent">Nós transformamos esse custo em vantagem competitiva.</span>
          </p>

          {/* Final CTA Box */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/20">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Pronto para economizar até 40% em telecom?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Fale com um especialista Fibrion. Faremos uma análise gratuita da sua infraestrutura atual e mostraremos exatamente quanto você pode economizar.
            </p>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Em poucos dias, podemos transformar sua fatura de telecom em uma máquina de economia e eficiência.
            </p>
            <Button variant="hero" size="xl" className="group animate-pulse-glow">
              Agende sua análise gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
