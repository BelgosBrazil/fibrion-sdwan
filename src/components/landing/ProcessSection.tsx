import { Button } from "@/components/ui/button";
import { Search, Rocket, TrendingUp, DollarSign, ArrowRight, CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Diagnóstico de Uso Real",
      description: "Analisamos seu consumo de banda atual e identificamos desperdícios e ineficiências ocultas."
    },
    {
      number: "2",
      icon: Rocket,
      title: "Substituição Estratégica",
      description: "Implementamos Wi-Fi Inteligente com redundância automática, eliminando links caros e desnecessários."
    },
    {
      number: "3",
      icon: TrendingUp,
      title: "Otimização Contínua",
      description: "Nossa IA monitora o uso em tempo real e rebalanceia a rede para máxima eficiência e economia."
    },
    {
      number: "4",
      icon: DollarSign,
      title: "Redução Comprovada",
      description: "Você vê a redução de custos já no primeiro mês, com economia acumulada que cresce ao longo do tempo."
    }
  ];

  const results = [
    "Menos 40% na sua fatura de telecom",
    "Mesma qualidade",
    "Mais lucro"
  ];

  return (
    <section id="como-funciona" className="section-padding bg-muted">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-4">
            Como o Wi-Fi Inteligente da Fibrion reduz seus custos em{" "}
            <span className="text-primary">4 etapas</span>:
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-background rounded-2xl p-6 hover-lift group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="icon-container mb-4">
                <step.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* Results Box */}
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Resultado:
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="text-lg font-semibold text-primary-foreground">{result}</span>
              </div>
            ))}
          </div>
          <Button variant="heroOutline" size="lg" className="group border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Quero ver a simulação de economia
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
