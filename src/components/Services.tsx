import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Brain, 
  Baby, 
  Users, 
  Bone, 
  Eye, 
  Smile,
  Stethoscope 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Kardiologiya",
      description: "Yurak va qon tomirlari kasalliklarini davolash",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Nevrologiya", 
      description: "Asab tizimi kasalliklarini tashxislash va davolash",
      color: "text-purple-500"
    },
    {
      icon: Baby,
      title: "Pediatriya",
      description: "Bolalar sog'ligini saqlash va davolash",
      color: "text-pink-500"
    },
    {
      icon: Users,
      title: "Ginekologiya",
      description: "Ayollar reproduktiv sog'ligi bo'yicha xizmatlar",
      color: "text-medical-success"
    },
    {
      icon: Bone,
      title: "Ortopediya",
      description: "Suyak va bo'g'imlar kasalliklarini davolash",
      color: "text-orange-500"
    },
    {
      icon: Eye,
      title: "Oftalmologiya",
      description: "Ko'z kasalliklarini tashxislash va davolash",
      color: "text-blue-500"
    },
    {
      icon: Smile,
      title: "Stomatologiya",
      description: "Tish va og'iz bo'shlig'i kasalliklarini davolash",
      color: "text-yellow-500"
    },
    {
      icon: Stethoscope,
      title: "Umumiy amaliyot",
      description: "Umumiy tibbiy ko'rik va maslahatlar",
      color: "text-medical-blue"
    }
  ];

  return (
    <section className="py-16 px-4 bg-medical-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Bizning Xizmatlar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional shifokorlar tomonidan ko'rsatiladigan keng ko'lamli tibbiy xizmatlar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;