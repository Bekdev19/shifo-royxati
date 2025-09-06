import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  const handleRegistrationClose = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onRegistrationClick={handleRegistrationClick} />
      <Hero onRegistrationClick={handleRegistrationClick} />
      <div id="services">
        <Services />
      </div>
      <div id="pricing">
        <Pricing onRegistrationClick={handleRegistrationClick} />
      </div>
      <div id="contact">
        <Footer />
      </div>
      <RegistrationModal 
        isOpen={isRegistrationOpen} 
        onClose={handleRegistrationClose} 
      />
    </div>
  );
};

export default Index;
