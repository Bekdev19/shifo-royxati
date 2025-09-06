import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingProps {
  onRegistrationClick: () => void;
}

const Pricing = ({ onRegistrationClick }: PricingProps) => {
  const plans = [
    {
      name: "Asosiy",
      price: "50,000",
      period: "so'm",
      description: "Oddiy tibbiy ko'rik uchun",
      features: [
        "Umumiy shifokor ko'rigi",
        "Asosiy tahlillar",
        "Dori-darmonlar bo'yicha maslahat",
        "Telefon orqali maslahat"
      ],
      popular: false
    },
    {
      name: "Standart", 
      price: "120,000",
      period: "so'm",
      description: "To'liq tibbiy xizmatlar",
      features: [
        "Barcha asosiy xizmatlar",
        "Mutaxassis shifokorlar ko'rigi",
        "Kengaytirilgan tahlillar",
        "UZI tekshiruvi",
        "24/7 qo'llab-quvvatlash",
        "Takroriy ko'riklar"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "250,000", 
      period: "so'm",
      description: "VIP davolash dasturi",
      features: [
        "Barcha standart xizmatlar",
        "VIP palatalar",
        "Shaxsiy shifokor",
        "Tez laboratoriya natijalari",
        "Uyga tashrif xizmati",
        "Yillik sog'liq dasturi",
        "Xalqaro konsultatsiyalar"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Narxlar va Paketlar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sizning ehtiyojlaringizga mos keladigan eng yaxshi tibbiy xizmatlar paketini tanlang
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-medical transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-soft scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-medical-gradient text-white px-4 py-2 rounded-full text-sm font-medium">
                    Eng mashhur
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-semibold text-primary mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-medical-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={onRegistrationClick}
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-medical-gradient hover:opacity-90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  Ro'yxatdan o'tish
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;