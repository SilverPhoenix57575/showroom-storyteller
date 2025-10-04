import { Link } from "react-router-dom";
import heroLivingRoom from "@/assets/hero-living-room.jpg";
import collectionDining from "@/assets/collection-dining.jpg";
import collectionBedroom from "@/assets/collection-bedroom.jpg";
import collectionOffice from "@/assets/collection-office.jpg";

const rooms = [
  { name: "Living Room", href: "/collections?room=living", image: heroLivingRoom },
  { name: "Dining Room", href: "/collections?room=dining", image: collectionDining },
  { name: "Bedroom", href: "/collections?room=bedroom", image: collectionBedroom },
  { name: "Home Office", href: "/collections?room=office", image: collectionOffice },
  { name: "Outdoor", href: "/collections?room=outdoor", image: collectionOffice },
];

const ShopByRoom = () => {
  return (
    <section className="py-24 px-4 lg:px-8 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
            Shop by Room
          </h2>
          <p className="text-lg text-muted-foreground">
            Find the perfect pieces for every space in your home.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {rooms.map((room, index) => (
            <Link
              key={room.name}
              to={room.href}
              className="group relative aspect-square rounded-lg overflow-hidden bg-card shadow-md hover:shadow-xl transition-all duration-400 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img 
                src={room.image} 
                alt={room.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-400" />
              <div className="relative h-full flex items-center justify-center p-6">
                <span className="text-center text-lg md:text-xl font-medium text-white group-hover:text-white transition-colors duration-200">
                  {room.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByRoom;
