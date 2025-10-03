import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="py-24 px-4 lg:px-8 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold">
              Craftsmanship That Endures
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                For over three decades, Atelier has been dedicated to creating furniture that transcends fleeting trends. Each piece in our collection is a testament to our commitment to exceptional craftsmanship and timeless design.
              </p>
              <p>
                We work with master artisans who bring decades of expertise to every detail—from the selection of sustainable hardwoods to the precision of hand-applied finishes. Our furniture is built to become cherished heirlooms, pieces that tell stories across generations.
              </p>
            </div>
            <div className="pt-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group"
              >
                <Link to="/about">
                  Discover Our Story
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted rounded-sm flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <div className="text-6xl md:text-7xl font-serif font-semibold text-accent">
                  30+
                </div>
                <div className="text-xl font-medium text-foreground">
                  Years of Excellence
                </div>
                <div className="text-muted-foreground">
                  Crafting furniture that endures
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
