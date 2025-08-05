import { Plane, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Hero */}
      <section className="py-20 bg-gradient-to-r from-aviation-navy to-aviation-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Moon Aviation
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in aviation excellence, providing comprehensive 
            consulting and operational services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Moon Aviation Services was founded with a vision to provide exceptional 
                aviation consulting and operational services. We work with clients, 
                providing services that are catered specifically to the client's needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Our expertise combines intuition, ingenuity, and cooperation to deliver 
                comprehensive aviation solutions. With our 24X7 Operations Control Center, 
                we ensure continuous support for all your aviation requirements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background border border-border rounded-lg">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="text-center p-6 bg-background border border-border rounded-lg">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-background border border-border rounded-lg">
                <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">200+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-background border border-border rounded-lg">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide exceptional aviation consulting and operational services 
                that ensure safety, efficiency, and compliance while exceeding our 
                clients' expectations through innovative solutions and dedicated support.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading aviation services provider in the region, recognized 
                for our expertise, reliability, and commitment to excellence in every 
                aspect of aviation operations and consulting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;