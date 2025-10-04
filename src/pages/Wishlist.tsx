import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <Heart className="h-16 w-16 text-accent mx-auto" />
            <h1 className="text-5xl md:text-6xl font-serif font-semibold">
              Your Wishlist
            </h1>
            <p className="text-xl text-muted-foreground">
              Save your favorite pieces and create collections you love.
            </p>
            <div className="pt-8">
              <p className="text-muted-foreground">
                Your wishlist is currently empty. Start exploring our collections to add items.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
