import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Download, Share2, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import productImage1 from "@/assets/product-armchair-1.jpg";
import productImage2 from "@/assets/product-armchair-2.jpg";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFabric, setSelectedFabric] = useState("emerald");
  const { toast } = useToast();

  const images = [productImage1, productImage2];

  const fabrics = [
    { id: "emerald", name: "Emerald Velvet", color: "hsl(155 45% 35%)" },
    { id: "navy", name: "Navy Velvet", color: "hsl(220 50% 30%)" },
    { id: "charcoal", name: "Charcoal Linen", color: "hsl(220 15% 25%)" },
    { id: "beige", name: "Natural Linen", color: "hsl(35 25% 75%)" },
  ];

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: "You can view your saved items in your wishlist.",
    });
  };

  const handleRequestQuote = () => {
    toast({
      title: "Quote Request Sent",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container px-4 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/collections" className="hover:text-accent transition-colors">Collections</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Mercer Armchair</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-sm overflow-hidden bg-muted">
              <img
                src={images[selectedImage]}
                alt="Mercer Armchair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-accent"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Mercer Armchair view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
                Mercer Armchair
              </h1>
              <p className="text-lg text-muted-foreground">
                Mid-Century Collection
              </p>
            </div>

            {/* Product Story */}
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80">
                The Mercer Armchair embodies the perfect union of mid-century elegance and contemporary comfort. Hand-crafted with a solid walnut frame and upholstered in luxurious velvet, each piece showcases our commitment to timeless design and superior craftsmanship.
              </p>
            </div>

            {/* Customization */}
            <div className="space-y-4">
              <Label className="text-base font-medium">Select Fabric</Label>
              <div className="grid grid-cols-4 gap-3">
                {fabrics.map((fabric) => (
                  <button
                    key={fabric.id}
                    onClick={() => setSelectedFabric(fabric.id)}
                    className={`group relative aspect-square rounded-sm border-2 transition-all ${
                      selectedFabric === fabric.id
                        ? "border-accent shadow-md"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div
                      className="w-full h-full rounded-sm"
                      style={{ backgroundColor: fabric.color }}
                    />
                    <span className="absolute inset-x-0 bottom-0 text-xs text-center bg-background/95 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {fabric.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4 pt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full">
                    Request a Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">Request a Quote</DialogTitle>
                    <DialogDescription>
                      Fill out the form below and our team will contact you within 24 hours.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleRequestQuote(); }}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" rows={4} />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="w-full"
                asChild
              >
                <Link to="/showrooms">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find in a Showroom
                </Link>
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-1"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="flex-1">
                  <Download className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="flex-1">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product Information Tabs */}
            <Tabs defaultValue="details" className="pt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="designer">Designer</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 pt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Width</span>
                    <span className="font-medium">32 inches</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Depth</span>
                    <span className="font-medium">34 inches</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Height</span>
                    <span className="font-medium">30 inches</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Seat Height</span>
                    <span className="font-medium">18 inches</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-medium">45 lbs</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="materials" className="space-y-4 pt-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-foreground/80">
                    <strong>Frame:</strong> Solid American walnut, sustainably sourced from managed forests. Hand-finished with natural oils to enhance the wood's inherent beauty.
                  </p>
                  <p className="text-foreground/80">
                    <strong>Upholstery:</strong> Premium grade velvet or Belgian linen, chosen for durability and luxurious hand feel. Each fabric is rigorously tested for colorfastness and wear resistance.
                  </p>
                  <p className="text-foreground/80">
                    <strong>Care:</strong> Dust regularly with a soft, dry cloth. Professional cleaning recommended annually. Avoid direct sunlight to preserve fabric color.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="designer" className="space-y-4 pt-4">
                <div className="prose prose-sm max-w-none">
                  <p className="text-foreground/80 italic">
                    "The Mercer Armchair was born from a desire to create a piece that feels both sculptural and inviting. Its gentle curves and thoughtful proportions make it equally at home in a modern loft or a traditional study."
                  </p>
                  <p className="text-foreground/80 font-medium">
                    — Sarah Chen, Lead Designer
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
