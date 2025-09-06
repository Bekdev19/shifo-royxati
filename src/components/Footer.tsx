import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MedCare</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Sog'ligingiz bizning ustuvor vazifamiz. Professional tibbiy xizmatlar 
              va zamonaviy texnologiyalar bilan sizga xizmat ko'rsatishdan faxrlanamiz.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-glow" />
                <span className="text-white/90">+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-white/90">info@medcare.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-glow" />
                <span className="text-white/90">Toshkent, Amir Temur ko'chasi 108</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Xizmatlar</h3>
            <ul className="space-y-2 text-white/80">
              <li>Kardiologiya</li>
              <li>Nevrologiya</li>
              <li>Pediatriya</li>
              <li>Ginekologiya</li>
              <li>Ortopediya</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ish vaqti</h3>
            <ul className="space-y-2 text-white/80">
              <li>Dushanba - Juma: 8:00 - 20:00</li>
              <li>Shanba: 9:00 - 17:00</li>
              <li>Yakshanba: 9:00 - 15:00</li>
              <li className="text-primary-glow font-medium">Tez yordam: 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center text-white/70">
          <p>&copy; 2024 MedCare. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;