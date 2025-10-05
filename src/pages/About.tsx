import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Sustainable Sourcing",
      description: "We partner with certified suppliers to source responsibly harvested hardwoods and eco-friendly materials.",
    },
    {
      title: "Master Artisans",
      description: "Our craftspeople bring decades of expertise, ensuring each piece meets the highest standards of quality.",
    },
    {
      title: "Timeless Design",
      description: "We create furniture that transcends trends, designed to be cherished for generations.",
    },
    {
      title: "Built to Last",
      description: "Every joint, finish, and detail is executed with precision to ensure durability and longevity.",
    },
  ];

  const timeline = [
    { year: "2000", event: "Furniture was established in Bapuji Nagar, Bhubaneswar" },
    { year: "2010", event: "Expanded our showroom and product range to serve more customers" },
    { year: "2015", event: "Introduced modern furniture collections alongside traditional designs" },
    { year: "2020", event: "Enhanced our service with same-day delivery options" },
    { year: "2025", event: "Continuing to serve Bhubaneswar with quality furniture solutions" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Quality That Endures
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We've been dedicated to providing quality furniture that meets modern needs. Each piece is a testament to our commitment to quality, value, and contemporary design.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Furniture began with a simple belief: furniture should be built to last and provide value to our customers in Bhubaneswar and beyond.
                  </p>
                  <p>
                    Located in the heart of Bapuji Nagar, we have been serving the furniture needs of families and businesses with dedication and quality service.
                  </p>
                  <p>
                    Today, we continue to offer a wide range of furniture solutions, from traditional to modern designs, ensuring every customer finds pieces that fit their space and budget perfectly.
                  </p>
                </div>
              </div>

              <div className="relative animate-fade-in">
                <div className="aspect-[4/5] bg-gradient-to-br from-accent/20 to-secondary rounded-sm" />
                <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br from-primary/10 to-muted rounded-sm -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every decision we make, from sourcing materials to the final inspection of each piece.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-background rounded-sm p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-2xl font-serif font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-center animate-fade-in-up">
                Our Journey
              </h2>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="flex gap-8 items-start animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-serif font-semibold text-accent shrink-0 w-24">
                      {item.year}
                    </div>
                    <div className="pt-1">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Detail */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold">
                The Art of Making
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                At Furniture, we carefully select each piece to ensure it meets our quality standards. From sturdy construction to attractive finishes, every item is chosen with our customers' satisfaction in mind.
              </p>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                We believe that quality furniture should be accessible and affordable, providing comfort and style that enhances your home for years to come.
              </p>
              <div className="pt-6">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  <Link to="/services">
                    Explore Design Services
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
