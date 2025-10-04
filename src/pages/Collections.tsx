import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import armchair1 from "@/assets/product-armchair-1.jpg";
import armchair2 from "@/assets/product-armchair-2.jpg";
import diningImage from "@/assets/collection-dining.jpg";
import bedroomImage from "@/assets/collection-bedroom.jpg";

const products = [
  {
    id: 1,
    name: "Heritage Lounge Chair",
    category: "Seating",
    room: "Living",
    style: "Mid-Century",
    price: "From $2,850",
    image: armchair1,
  },
  {
    id: 2,
    name: "Oslo Armchair",
    category: "Seating",
    room: "Living",
    style: "Scandinavian",
    price: "From $2,450",
    image: armchair2,
  },
  {
    id: 3,
    name: "Walnut Dining Table",
    category: "Tables",
    room: "Dining",
    style: "Contemporary",
    price: "From $4,200",
    image: diningImage,
  },
  {
    id: 4,
    name: "Milan Platform Bed",
    category: "Beds",
    room: "Bedroom",
    style: "Modern",
    price: "From $3,800",
    image: bedroomImage,
  },
  {
    id: 5,
    name: "Artisan Coffee Table",
    category: "Tables",
    room: "Living",
    style: "Industrial",
    price: "From $1,650",
    image: armchair1,
  },
  {
    id: 6,
    name: "Velvet Dining Chair",
    category: "Seating",
    room: "Dining",
    style: "Contemporary",
    price: "From $890",
    image: armchair2,
  },
];

const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Initialize filters from URL parameters
  useEffect(() => {
    const roomParam = searchParams.get('room');
    const categoryParam = searchParams.get('category');
    const styleParam = searchParams.get('style');
    
    if (roomParam) {
      const capitalizedRoom = roomParam.charAt(0).toUpperCase() + roomParam.slice(1);
      if (rooms.includes(capitalizedRoom)) {
        setSelectedRoom(capitalizedRoom);
      }
    }
    if (categoryParam) {
      const capitalizedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      if (categories.includes(capitalizedCategory)) {
        setSelectedCategory(capitalizedCategory);
      }
    }
    if (styleParam) {
      const formattedStyle = styleParam.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('-');
      if (styles.includes(formattedStyle)) {
        setSelectedStyle(formattedStyle);
      }
    }
  }, []);

  const rooms = ["Living", "Dining", "Bedroom", "Office"];
  const categories = ["Seating", "Tables", "Beds", "Storage"];
  const styles = ["Mid-Century", "Scandinavian", "Contemporary", "Modern", "Industrial"];

  const filteredProducts = products.filter((product) => {
    if (selectedRoom && product.room !== selectedRoom) return false;
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedStyle && product.style !== selectedStyle) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedRoom(null);
    setSelectedCategory(null);
    setSelectedStyle(null);
  };

  const hasActiveFilters = selectedRoom || selectedCategory || selectedStyle;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-6">
                Our Collections
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover furniture that tells a story. Each piece is crafted with meticulous attention to detail and designed to become a cherished part of your home.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="section-padding">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Filters - Desktop */}
              <aside className="hidden lg:block w-64 shrink-0 animate-fade-in">
                <div className="sticky top-24 space-y-8">
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-4">Room</h3>
                    <div className="space-y-2">
                      {rooms.map((room) => (
                        <button
                          key={room}
                          onClick={() => setSelectedRoom(selectedRoom === room ? null : room)}
                          className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${
                            selectedRoom === room
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-4">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                          className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-4">Style</h3>
                    <div className="space-y-2">
                      {styles.map((style) => (
                        <button
                          key={style}
                          onClick={() => setSelectedStyle(selectedStyle === style ? null : style)}
                          className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${
                            selectedStyle === style
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <Button variant="outline" onClick={clearFilters} className="w-full">
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </aside>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <Badge variant="secondary" className="ml-2">
                      Active
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Mobile Filters Panel */}
              {showFilters && (
                <div className="lg:hidden fixed inset-0 z-50 bg-background p-6 overflow-y-auto animate-slide-in-right">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-serif font-semibold">Filters</h2>
                    <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-serif font-semibold mb-4">Room</h3>
                      <div className="space-y-2">
                        {rooms.map((room) => (
                          <button
                            key={room}
                            onClick={() => setSelectedRoom(selectedRoom === room ? null : room)}
                            className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${
                              selectedRoom === room
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {room}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif font-semibold mb-4">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                            className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${
                              selectedCategory === category
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif font-semibold mb-4">Style</h3>
                      <div className="space-y-2">
                        {styles.map((style) => (
                          <button
                            key={style}
                            onClick={() => setSelectedStyle(selectedStyle === style ? null : style)}
                            className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${
                              selectedStyle === style
                                ? "bg-accent text-accent-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {hasActiveFilters && (
                        <Button variant="outline" onClick={clearFilters} className="flex-1">
                          Clear All
                        </Button>
                      )}
                      <Button onClick={() => setShowFilters(false)} className="flex-1">
                        View {filteredProducts.length} Items
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              <div className="flex-1 animate-fade-in-up">
                <div className="mb-6 text-sm text-muted-foreground hidden lg:block">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="ml-2 text-accent hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group block animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="relative overflow-hidden rounded-sm mb-4 bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{product.category}</span>
                          <span>•</span>
                          <span>{product.style}</span>
                        </div>
                        <h3 className="text-xl font-serif font-semibold group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground">{product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
