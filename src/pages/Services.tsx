import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Services Hero */}
      <section className="py-20 bg-gradient-to-r from-aviation-navy to-aviation-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive aviation solutions designed to meet your operational needs 
            with the highest standards of safety and efficiency.
          </p>
        </div>
      </section>

      <ServicesSection />
    </div>
  );
};

export default Services;