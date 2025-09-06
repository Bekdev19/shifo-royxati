import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface HeaderProps {
  onRegistrationClick: () => void;
}

const Header = ({ onRegistrationClick }: HeaderProps) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-medical-gradient rounded-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">MedCare</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Xizmatlar
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Narxlar
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Aloqa
          </a>
        </nav>
        
        <Button 
          onClick={onRegistrationClick}
          className="bg-medical-gradient hover:opacity-90"
        >
          Ro'yxatdan o'tish
        </Button>
      </div>
    </header>
  );
};

export default Header;