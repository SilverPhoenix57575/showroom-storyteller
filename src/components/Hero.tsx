import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-living-room.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious modern living room with sophisticated furniture"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-end pb-20 px-4 lg:px-8">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-foreground text-balance">
            Timeless Design, Modern Living
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl text-balance">
            Discover our curated collection of sophisticated furniture, crafted with uncompromising quality and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium"
            >
              <Link to="/collections">
                Explore Collections
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary border-2 border-primary-foreground font-medium transition-all"
            >
              <Link to="/showrooms">
                Visit Our Showroom
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
