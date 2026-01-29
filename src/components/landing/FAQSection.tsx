import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para implementar?",
      answer: "A implementação leva em média 15 dias, dependendo do tamanho da sua infraestrutura. Trabalhamos para minimizar interrupções no seu negócio."
    },
    {
      question: "A qualidade da conexão vai diminuir?",
      answer: "Não. Na verdade, a maioria dos clientes relata melhoria na qualidade da conexão após implementar o Wi-Fi Inteligente. Você economiza sem perder performance."
    },
    {
      question: "E se a conexão cair?",
      answer: "Nosso sistema tem redundância automática. Se uma conexão falha, o tráfego é redireccionado automaticamente para outras conexões. Sua rede continua funcionando."
    },
    {
      question: "Preciso trocar meu equipamento?",
      answer: "Nem sempre. Avaliamos sua infraestrutura atual e recomendamos upgrades apenas quando necessário. Muitas vezes, otimizamos o que você já tem."
    },
    {
      question: "Qual é o ROI?",
      answer: "A maioria dos clientes vê retorno do investimento em menos de 6 meses. Alguns em apenas 3 meses, dependendo da infraestrutura anterior."
    },
    {
      question: "Vocês oferecem suporte 24/7?",
      answer: "Sim. Nosso time de especialistas está disponível 24 horas por dia, 7 dias por semana para garantir que sua rede funcione perfeitamente."
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-4">
            FAQ - <span className="text-primary">Perguntas Frequentes</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
