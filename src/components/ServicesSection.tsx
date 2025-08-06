import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Plane, Users, FileText, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import laguardiaImage from "@/assets/laguardia-airport.jpg";
import passengerPlane from "@/assets/passenger-plane.jpg";
import groundHandling from "@/assets/ground-handling.jpg";
import customsImmigration from "@/assets/customs-immigration.jpg";
import airCharter from "@/assets/air-charter.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "PERMITS & AIRPORT SLOTS",
      description: "Arranging over flight and landing permits is the first step in your journey.",
      image: laguardiaImage
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "COMPREHENSIVE GROUND HANDLING SERVICES",
      description: "Our 24X7 active OCC is active to support your flight operations needs",
      image: passengerPlane
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "GROUND HANDLING & SUPERVISION OF PASSENGER, TECHNICAL HALT AND CARGO FLIGHTS",
      description: "All services related to all variety of passenger and cargo flights are provided. With full ground support and GSE (Ground Services Equipment)",
      image: groundHandling
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "CUSTOMS & IMMIGRATION ASSISTANCE",
      description: "Our team well versed with local laws and ready to assist and support.",
      image: customsImmigration
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AIR CHARTER SERVICES /MEDICAL EVACUATION /HELICOPTER",
      description: "All kinds arrangements are done on prior requests. We have an acquaintance of many successful charter operators.",
      image: airCharter
    }
  ];

  return (
    <section id="services" className="py-20 bg-aviation-blue-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aviation-navy mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise. Intuition. Ingenuity. Cooperative
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            The company works with clients, providing exceptional consulting and operational services 
            that are catered specifically to the client's needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                <Card className="border-none shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <div className="text-primary-foreground">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary/90">
                        Know More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Contact Us for More Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;