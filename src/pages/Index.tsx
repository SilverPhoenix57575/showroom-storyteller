import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ShopByRoom from "@/components/ShopByRoom";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import armchair1 from "@/assets/product-armchair-1.jpg";
import armchair2 from "@/assets/product-armchair-2.jpg";
import diningImage from "@/assets/collection-dining.jpg";
import bedroomImage from "@/assets/collection-bedroom.jpg";
import officeImage from "@/assets/collection-office.jpg";
import heroLivingRoom from "@/assets/hero-living-room.jpg";
import wardrobeImage from "@/assets/Wardrobe.jpg";
import barStoolImage from "@/assets/Bar Stool.jpg";
import consoleTableImage from "@/assets/Console table.jpg";

const topProducts = [
  { id: 1, name: "Sofa Set", price: "₹45,000", image: armchair1 },
  { id: 2, name: "Dining Table", price: "₹25,000", image: diningImage },
  { id: 3, name: "Wardrobe", price: "₹35,000", image: wardrobeImage },
  { id: 4, name: "Bar Stool", price: "₹8,000", image: barStoolImage },
  { id: 5, name: "Console Table", price: "₹15,000", image: consoleTableImage },
  { id: 6, name: "Office Chair", price: "₹12,000", image: officeImage },
  { id: 7, name: "Bed Set", price: "₹40,000", image: bedroomImage },
  { id: 8, name: "Armchair", price: "₹18,000", image: armchair2 },
  { id: 9, name: "Coffee Table", price: "₹10,000", image: heroLivingRoom },
  { id: 10, name: "Study Desk", price: "₹20,000", image: officeImage },
];

const TopProducts = () => {
  const itemsPerView = 4;
  const startIndex = Math.floor((topProducts.length - itemsPerView) / 2);
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const maxIndex = Math.max(0, topProducts.length - itemsPerView);

  const next = () => setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  const prev = () => setCurrentIndex(Math.max(currentIndex - 1, 0));

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Top Selling Products</h2>
          <p className="text-lg text-muted-foreground">Our customers' favorite furniture pieces</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {topProducts.map((product) => (
                <div key={product.id} className="w-1/4 flex-shrink-0 px-3">
                  <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-secondary/30 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-accent font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            size="icon"
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground shadow-lg z-10 hover:bg-primary/90 disabled:opacity-50"
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            size="icon"
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground shadow-lg z-10 hover:bg-primary/90 disabled:opacity-50"
            onClick={next}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ShopByRoom />
        <TopProducts />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
