import { Shield, Clock, Headphones, Globe, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import laguardiaAirport from "@/assets/laguardia-airport.jpg";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Uncompromising commitment to safety standards and regulations in all our operations."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock operations center to support your flights anytime, anywhere."
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Experienced aviation professionals providing personalized assistance and guidance."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide coverage with local expertise in over 50 countries."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning services recognized by leading aviation organizations globally."
    },
    {
      icon: Users,
      title: "Trusted Partner",
      description: "Preferred service provider for major airlines and private aviation operators."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose 
              <span className="text-aviation-blue"> Moon Aviation?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              With over 15 years of experience in aviation services, we've built a reputation 
              for excellence, reliability, and innovation in flight support operations.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-aviation-blue/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-aviation-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={laguardiaAirport}
                alt="LaGuardia Airport Operations"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aviation-blue/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aviation-blue/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-aviation-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-aviation-blue">ISO Certified</div>
                  <div className="text-sm text-muted-foreground">Quality Management System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;