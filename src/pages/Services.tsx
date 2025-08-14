import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-r from-aviation-navy to-aviation-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Comprehensive aviation solutions designed to meet your operational needs 
            with the highest standards of safety and efficiency.
          </p>
        </div>
      </section>

      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;