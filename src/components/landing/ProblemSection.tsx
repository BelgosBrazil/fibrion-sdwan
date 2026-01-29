import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-6">
            Você está pagando caro demais por conectividade que poderia ser{" "}
            <span className="text-primary">40% mais barata</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A maioria das empresas que nos procuram está desperdiçando dinheiro com links dedicados obsoletos e infraestrutura de telecom superdimensionada. O mercado mudou, mas os contratos continuam os mesmos.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Com nossa solução de Wi-Fi Inteligente, você reduz drasticamente os custos de telecomunicações sem sacrificar a velocidade, estabilidade ou segurança que seu negócio exige.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso sistema utiliza tecnologia de ponta em roteamento inteligente, balanceamento de carga e otimização de banda, garantindo que cada centavo investido em conectividade renda o máximo de performance.
          </p>
        </div>

        {/* Solution Statement */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <Button variant="hero" size="lg" className="group">
              Quero parar de desperdiçar dinheiro em telecom
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
