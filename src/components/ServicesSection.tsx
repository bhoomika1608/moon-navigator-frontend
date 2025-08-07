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
      description: "Comprehensive overflight and landing permits arranged globally with our expert regulatory knowledge and 24/7 operations support.",
      image: laguardiaImage
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "FLIGHT PLANNING & OPERATIONS",
      description: "Expert flight planning services with weather analysis, route optimization, and NOTAMs to ensure safe and efficient operations.",
      image: passengerPlane
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "GROUND HANDLING SERVICES",
      description: "Complete ground handling for passenger, cargo, and technical halt flights with full GSE support and supervision.",
      image: groundHandling
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "CUSTOMS & IMMIGRATION",
      description: "Professional assistance with customs clearance, immigration procedures, and documentation compliance.",
      image: customsImmigration
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "CHARTER & MEDICAL EVACUATION",
      description: "Air charter services, medical evacuations, and helicopter arrangements through our network of certified operators.",
      image: airCharter
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "FUEL SERVICES",
      description: "Competitive jet fuel pricing and arrangements at airports worldwide with quality assurance and cost optimization.",
      image: laguardiaImage
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CATERING SERVICES", 
      description: "Premium in-flight catering services ranging from light refreshments to gourmet dining experiences.",
      image: passengerPlane
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "CREW SERVICES",
      description: "Crew transportation, accommodation, and rest facilities arranged to meet regulatory requirements.",
      image: groundHandling
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "SLOT COORDINATION",
      description: "Airport slot coordination and management to ensure optimal scheduling and operational efficiency.",
      image: customsImmigration
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "WEATHER SERVICES",
      description: "Real-time weather updates, forecasting, and meteorological briefings for safe flight operations.",
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