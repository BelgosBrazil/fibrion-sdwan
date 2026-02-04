import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, Zap, Shield, BarChart3, DollarSign, Lock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Redução de até 40%",
      description: "em custos de telecomunicações sem perder performance"
    },
    {
      icon: Zap,
      title: "Implementação rápida",
      description: "em até 15 dias, com mínima interrupção operacional"
    },
    {
      icon: Shield,
      title: "Redundância automática",
      description: "garante que sua rede nunca caia, mesmo com falhas"
    },
    {
      icon: BarChart3,
      title: "Monitoramento 24/7",
      description: "com alertas proativos e suporte técnico especializado"
    },
    {
      icon: DollarSign,
      title: "Escalabilidade",
      description: "cresce com seu negócio sem custos exponenciais"
    },
    {
      icon: Lock,
      title: "ROI comprovado",
      description: "retorno do investimento em menos de 6 meses"
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-4">
            Por que empresas estão migrando para o{" "}
            <span className="text-primary">Wi-Fi Inteligente da Fibrion</span>:
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 hover-lift group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Security Note */}
        <div className="bg-background rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lock className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">
              Segurança de nível enterprise
            </h3>
          </div>
          <p className="text-muted-foreground">
            com criptografia e firewalls inteligentes
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="hero" size="lg" className="group">
            <a href="#form">
              Fale com um especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
