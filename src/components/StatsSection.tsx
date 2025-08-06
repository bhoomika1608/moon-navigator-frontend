import { Users, Clock, Globe, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "Airlines and private operators worldwide"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Operations Center",
      description: "Round-the-clock support and assistance"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Global network coverage"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Proven expertise in aviation services"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-aviation-blue to-aviation-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Aviation Professionals Worldwide
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to excellence has made us a preferred partner in the aviation industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;