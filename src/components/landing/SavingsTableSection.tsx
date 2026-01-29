import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SavingsTableSection = () => {
  const savingsData = [
    {
      tipo: "Varejo (10 lojas)",
      custoAnterior: "R$ 8.500/mês",
      custoComWiFi: "R$ 5.100/mês",
      economiaMensal: "R$ 3.400",
      economiaAnual: "R$ 40.800"
    },
    {
      tipo: "Logística (5 pontos)",
      custoAnterior: "R$ 6.200/mês",
      custoComWiFi: "R$ 3.720/mês",
      economiaMensal: "R$ 2.480",
      economiaAnual: "R$ 29.760"
    },
    {
      tipo: "Serviços (20 filiais)",
      custoAnterior: "R$ 15.000/mês",
      custoComWiFi: "R$ 9.000/mês",
      economiaMensal: "R$ 6.000",
      economiaAnual: "R$ 72.000"
    },
    {
      tipo: "Manufatura (3 plantas)",
      custoAnterior: "R$ 12.000/mês",
      custoComWiFi: "R$ 7.200/mês",
      economiaMensal: "R$ 4.800",
      economiaAnual: "R$ 57.600"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-main px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-foreground mb-4">
            Quanto você pode economizar?{" "}
            <span className="text-primary">Números reais de clientes Fibrion</span>:
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-12">
          <div className="bg-muted rounded-2xl p-4 md:p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-foreground/10 hover:bg-transparent">
                  <TableHead className="font-bold text-foreground">Tipo de Empresa</TableHead>
                  <TableHead className="font-bold text-foreground">Custo Anterior</TableHead>
                  <TableHead className="font-bold text-foreground">Custo com Wi-Fi Inteligente</TableHead>
                  <TableHead className="font-bold text-foreground">Economia Mensal</TableHead>
                  <TableHead className="font-bold text-foreground">Economia Anual</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {savingsData.map((row, index) => (
                  <TableRow key={index} className="border-b border-foreground/5">
                    <TableCell className="font-semibold text-foreground">{row.tipo}</TableCell>
                    <TableCell className="text-muted-foreground">{row.custoAnterior}</TableCell>
                    <TableCell className="text-primary font-semibold">{row.custoComWiFi}</TableCell>
                    <TableCell className="text-green-600 dark:text-green-400 font-semibold">{row.economiaMensal}</TableCell>
                    <TableCell className="text-green-600 dark:text-green-400 font-semibold">{row.economiaAnual}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Quero uma simulação personalizada
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SavingsTableSection;
