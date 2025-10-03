import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import diningImage from "@/assets/collection-dining.jpg";
import bedroomImage from "@/assets/collection-bedroom.jpg";
import officeImage from "@/assets/collection-office.jpg";

const collections = [
  {
    title: "Dining",
    description: "Elegant tables and seating for memorable gatherings",
    image: diningImage,
    href: "/collections?room=dining",
  },
  {
    title: "Bedroom",
    description: "Serene sanctuaries designed for rest and rejuvenation",
    image: bedroomImage,
    href: "/collections?room=bedroom",
  },
  {
    title: "Office",
    description: "Thoughtfully crafted spaces for focus and creativity",
    image: officeImage,
    href: "/collections?room=office",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-24 px-4 lg:px-8 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground">
            Each piece is thoughtfully selected to bring timeless elegance to your home.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={collection.href}
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-sm mb-4">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-semibold flex items-center group-hover:text-accent transition-colors duration-200">
                  {collection.title}
                  <ArrowRight className="ml-2 h-5 w-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                </h3>
                <p className="text-muted-foreground">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
