import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/official-hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moon Aviation Flight Support"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(224 76% 48% / 0.85), hsl(224 76% 35% / 0.75))"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Moon Aviation
            <br />
            Flight Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            One Stop Aviation Services
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            We are here to support you 24X7 OCC
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              className="bg-white text-aviation-blue hover:bg-white/90 text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => window.open('tel:+919910393737', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 9910393737
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-aviation-blue hover:bg-white/90 hover:text-aviation-blue text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => window.open('mailto:ops@moonaviationservices.com', '_self')}
            >
              <Mail className="w-5 h-5 mr-2" />
              ops@moonaviationservices.com
            </Button>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link to="/services">
              <Button 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-aviation-blue text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-xl pulse"
              >
                Our Services
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:scale-110 transition-transform duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;