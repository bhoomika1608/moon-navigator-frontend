import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Contact Hero */}
      <section className="py-20 bg-gradient-to-r from-aviation-navy to-aviation-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get in touch with our aviation experts to discuss your requirements 
            and discover how we can support your operations.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;