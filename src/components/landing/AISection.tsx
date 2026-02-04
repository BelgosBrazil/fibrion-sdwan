import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Network, ShieldCheck } from "lucide-react";

const AISection = () => {
  const features = [
    {
      icon: Brain,
      title: "Inteligência em Tempo Real",
      description: "Algoritmos de machine learning analisam milhões de dados de conexão para otimizar sua rede automaticamente."
    },
    {
      icon: Network,
      title: "Balanceamento Automático",
      description: "Distribui o tráfego entre múltiplas conexões, garantindo máxima velocidade e mínima latência."
    },
    {
      icon: ShieldCheck,
      title: "Falha Zero",
      description: "Se uma conexão cai, a rede redireciona o tráfego automaticamente. Seus clientes nem percebem."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-6">
            Deixe a IA da Fibrion otimizar sua rede enquanto você dorme.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-muted rounded-2xl p-8 hover-lift group text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Nosso sistema de Wi-Fi Inteligente não é apenas mais barato. É mais inteligente. Enquanto você cuida do seu negócio, a IA da Fibrion cuida da sua rede.
          </p>
          <Button asChild variant="hero" size="lg" className="group">
            <a href="#form">
              Ativar otimização inteligente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
