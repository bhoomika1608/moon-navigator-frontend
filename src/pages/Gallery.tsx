import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "aircraft",
      title: "Commercial Aircraft Maintenance",
      image: "/placeholder.svg",
      description: "Professional maintenance services"
    },
    {
      id: 2,
      category: "operations",
      title: "Ground Operations",
      image: "/placeholder.svg", 
      description: "Efficient ground handling operations"
    },
    {
      id: 3,
      category: "training",
      title: "Pilot Training Programs",
      image: "/placeholder.svg",
      description: "Comprehensive pilot training"
    },
    {
      id: 4,
      category: "aircraft",
      title: "Aircraft Inspection",
      image: "/placeholder.svg",
      description: "Thorough safety inspections"
    },
    {
      id: 5,
      category: "operations",
      title: "Airport Services",
      image: "/placeholder.svg",
      description: "Complete airport operational support"
    },
    {
      id: 6,
      category: "training",
      title: "Safety Training",
      image: "/placeholder.svg",
      description: "Aviation safety training programs"
    }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "aircraft", label: "Aircraft" },
    { id: "operations", label: "Operations" },
    { id: "training", label: "Training" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Gallery Hero */}
      <section className="py-20 bg-gradient-to-r from-aviation-navy to-aviation-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our portfolio of aviation services and see our expertise in action.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-muted p-2 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-background border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;