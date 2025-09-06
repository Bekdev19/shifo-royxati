import { Button } from "@/components/ui/button";
import { Stethoscope, Heart, Shield } from "lucide-react";

interface HeroProps {
  onRegistrationClick: () => void;
}

const Hero = ({ onRegistrationClick }: HeroProps) => {
  return (
    <section className="relative bg-medical-gradient py-20 px-4 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-4">
            <Stethoscope className="h-12 w-12 text-white/90" />
            <Heart className="h-10 w-10 text-white/80" />
            <Shield className="h-11 w-11 text-white/85" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sog'liq - Eng Katta
          <br />
          <span className="text-primary-glow">Boylik</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Professional tibbiy xizmatlar bilan sog'ligingizni himoya qiling. 
          Tajribali shifokorlar va zamonaviy texnologiyalar yordamida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onRegistrationClick}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-medical"
          >
            Ro'yxatdan o'tish
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
          >
            Ko'proq ma'lumot
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">24/7</div>
            <div className="text-white/80">Tez yordam xizmati</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">15+</div>
            <div className="text-white/80">Tibbiy bo'limlar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">1000+</div>
            <div className="text-white/80">Mamnun bemorlar</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;