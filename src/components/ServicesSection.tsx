import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Plane, MapPin, Clock, Shield } from "lucide-react";
import laguardiaImage from "@/assets/laguardia-airport.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "PERMITS & AIRPORT SLOTS",
      description: "Comprehensive permit processing and airport slot coordination for seamless flight operations.",
      features: ["Landing Permits", "Overflight Permits", "Slot Coordination", "Diplomatic Clearances"]
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "FLIGHT OPERATIONS",
      description: "Complete flight operations support with our experienced team available around the clock.",
      features: ["Flight Planning", "Weather Briefing", "NOTAM Services", "Route Planning"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 SUPPORT",
      description: "Round-the-clock operational control center to support your aviation needs anytime.",
      features: ["Emergency Support", "Real-time Updates", "Flight Monitoring", "Crisis Management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "COMPLIANCE & SAFETY",
      description: "Ensuring all regulatory compliance and safety standards for international aviation.",
      features: ["Regulatory Compliance", "Safety Management", "Documentation", "Quality Assurance"]
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

        {/* Featured Service with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src={laguardiaImage}
              alt="PERMITS & AIRPORT SLOTS - LaGuardia Airport"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">PERMITS & AIRPORT SLOTS</CardTitle>
                    <CardDescription className="text-lg">Complete permit and slot management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Our experienced team handles all aspects of permit processing and airport slot coordination, 
                  ensuring your flights operate smoothly and efficiently across all destinations.
                </p>
                <Button className="bg-primary hover:bg-primary-hover">
                  Know More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;