import { Link } from "react-router-dom";

const rooms = [
  { name: "Living Room", href: "/collections?room=living" },
  { name: "Dining Room", href: "/collections?room=dining" },
  { name: "Bedroom", href: "/collections?room=bedroom" },
  { name: "Home Office", href: "/collections?room=office" },
  { name: "Outdoor", href: "/collections?room=outdoor" },
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
              className="group relative aspect-square rounded-sm overflow-hidden bg-card hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)] transition-all duration-400 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted group-hover:from-accent/20 group-hover:to-accent/5 transition-all duration-400" />
              <div className="relative h-full flex items-center justify-center p-6">
                <span className="text-center text-base md:text-lg font-medium group-hover:text-accent transition-colors duration-200">
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
