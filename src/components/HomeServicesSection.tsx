import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Plane, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import laguardiaImage from "@/assets/laguardia-airport.jpg";
import passengerPlane from "@/assets/passenger-plane.jpg";
import groundHandling from "@/assets/ground-handling.jpg";
import customsImmigration from "@/assets/customs-immigration.jpg";

const HomeServicesSection = () => {
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
    }
  ];

  return (
    <section id="services" className="py-20 bg-aviation-blue-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-aviation-navy mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise. Intuition. Ingenuity. Cooperative
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
            Essential aviation services that keep your operations running smoothly
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="grid lg:grid-cols-2 gap-6 items-center animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover-scale transition-all duration-300"
                />
              </div>
              <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                <Card className="border-none shadow-lg h-full hover-lift">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 hover-scale">
                        <div className="text-primary-foreground">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary/90 hover-scale transition-all duration-300">
                        Know More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 mr-4 hover-scale transition-all duration-300">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="text-lg px-8 hover-scale transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSection;