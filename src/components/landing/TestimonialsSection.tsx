import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Implementamos o Wi-Fi Inteligente da Fibrion em nossas 15 lojas e reduzimos a fatura de telecom em 38%. Mais impressionante que a economia foi a qualidade da conexão, que melhorou significativamente.",
      author: "Gerente de TI",
      company: "Rede de Varejo",
      rating: 5
    },
    {
      quote: "Tínhamos 8 links dedicados caros. Hoje temos 3 links otimizados com Wi-Fi Inteligente. A performance é melhor e gastamos 45% menos. Não entendo por que demoramos tanto para fazer essa mudança.",
      author: "Diretor de Operações",
      company: "Empresa Logística",
      rating: 5
    },
    {
      quote: "O ROI foi tão rápido que já estamos expandindo para outras filiais. Cada loja que implementamos economiza em média R$ 4.200 por mês. É matemática simples.",
      author: "CFO",
      company: "Grupo de Serviços",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-4">
            Clientes Fibrion economizaram{" "}
            <span className="text-primary">R$ 2.3 milhões em 2024</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui estão algumas histórias reais:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-muted rounded-2xl p-8 md:p-10 hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center shadow-glow">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cta-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Ver mais casos de sucesso
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
