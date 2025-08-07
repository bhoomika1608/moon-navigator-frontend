import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import aircraftEngineImage from "@/assets/aircraft-engine-hero.jpg";

const AboutSection = () => {
  const highlights = [
    "15+ Years of Aviation Excellence",
    "24/7 Operations Control Center",
    "Global Network Coverage",
    "ISO Certified Quality Management",
    "Expert Aviation Professionals"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About 
                <span className="text-aviation-blue"> Moon Aviation</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Moon Aviation Flight Support is your trusted partner for comprehensive aviation services. 
                We specialize in providing one-stop aviation solutions that ensure seamless flight operations 
                across the globe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Projects can be challenging; we are here to lighten the load off your shoulders. 
                We are honest and positive professionals whose first priority is always the interests 
                of our clients. Our experienced team provides exceptional consulting and operational 
                services that are catered specifically to each client's needs.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-aviation-blue flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden border-none shadow-2xl">
              <CardContent className="p-0">
                <img
                  src={aircraftEngineImage}
                  alt="Aircraft Engine - Moon Aviation Excellence"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aviation-navy/60 to-transparent" />
                
                {/* Floating Contact Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="bg-white/95 backdrop-blur-sm border-none">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-aviation-navy mb-2">24/7 Operations Support</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Our dedicated OCC is always ready to assist
                      </p>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-aviation-blue">+91 9910393737</p>
                        <p className="text-sm text-muted-foreground">ops@moonaviationservices.com</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;