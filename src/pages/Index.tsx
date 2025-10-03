import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import ShopByRoom from "@/components/ShopByRoom";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollections />
        <ShopByRoom />
        <BrandStory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
