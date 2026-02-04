import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFibrion from "@/assets/logo-fibrion.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-background/10">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoFibrion} alt="Fibrion" className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-background/70 hover:text-background transition-colors font-medium">
              Benefícios
            </a>
            <a href="#como-funciona" className="text-background/70 hover:text-background transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-background/70 hover:text-background transition-colors font-medium">
              Depoimentos
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="heroOutline" size="sm" className="border-background/30 text-background hover:bg-background/10">
              Portal do Cliente
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <a href="#form">Agendar Consultoria</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-background/10 bg-foreground animate-fade-in">
            <nav className="flex flex-col p-4 gap-4">
              <a 
                href="#beneficios" 
                className="text-background/70 hover:text-background transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#como-funciona" 
                className="text-background/70 hover:text-background transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a 
                href="#depoimentos" 
                className="text-background/70 hover:text-background transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-background/10">
                <Button variant="heroOutline" className="w-full border-background/30 text-background hover:bg-background/10">
                  Portal do Cliente
                </Button>
                <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <a href="#form">Agendar Consultoria</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
