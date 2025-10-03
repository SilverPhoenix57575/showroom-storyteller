import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Navigation as NavigationIcon } from "lucide-react";

const showrooms = [
  {
    city: "New York",
    address: "425 Madison Avenue, Suite 200",
    zipcode: "New York, NY 10017",
    phone: "(212) 555-0123",
    email: "newyork@atelier.com",
    hours: {
      weekday: "Monday - Friday: 10am - 7pm",
      weekend: "Saturday - Sunday: 11am - 6pm",
    },
    mapLink: "https://maps.google.com",
  },
  {
    city: "Los Angeles",
    address: "8687 Melrose Avenue",
    zipcode: "West Hollywood, CA 90069",
    phone: "(310) 555-0145",
    email: "losangeles@atelier.com",
    hours: {
      weekday: "Monday - Friday: 10am - 7pm",
      weekend: "Saturday - Sunday: 11am - 6pm",
    },
    mapLink: "https://maps.google.com",
  },
  {
    city: "Chicago",
    address: "900 North Michigan Avenue",
    zipcode: "Chicago, IL 60611",
    phone: "(312) 555-0198",
    email: "chicago@atelier.com",
    hours: {
      weekday: "Monday - Friday: 10am - 7pm",
      weekend: "Saturday - Sunday: 11am - 6pm",
    },
    mapLink: "https://maps.google.com",
  },
  {
    city: "San Francisco",
    address: "135 Utah Street",
    zipcode: "San Francisco, CA 94103",
    phone: "(415) 555-0167",
    email: "sanfrancisco@atelier.com",
    hours: {
      weekday: "Monday - Friday: 10am - 7pm",
      weekend: "Saturday - Sunday: 11am - 6pm",
    },
    mapLink: "https://maps.google.com",
  },
  {
    city: "Miami",
    address: "140 NE 39th Street, Suite 210",
    zipcode: "Miami, FL 33137",
    phone: "(305) 555-0189",
    email: "miami@atelier.com",
    hours: {
      weekday: "Monday - Friday: 10am - 7pm",
      weekend: "Saturday - Sunday: 11am - 6pm",
    },
    mapLink: "https://maps.google.com",
  },
  {
    city: "Boston",
    address: "75 Arlington Street",
    zipcode: "Boston, MA 02116",
    phone: "(617) 555-0134",
    email: "boston@atelier.com",
    hours: {
      weekday: "Monday - Friday: 10am - 7pm",
      weekend: "Saturday - Sunday: 11am - 6pm",
    },
    mapLink: "https://maps.google.com",
  },
];

const Showrooms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Visit Our Showrooms
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Experience our collections in person. Each showroom is thoughtfully designed to inspire and help you envision how our furniture can transform your space.
              </p>
            </div>
          </div>
        </section>

        {/* Showrooms Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {showrooms.map((showroom, index) => (
                <div
                  key={showroom.city}
                  className="border border-border rounded-sm p-8 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-3xl font-serif font-semibold mb-6 text-accent">
                    {showroom.city}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p>{showroom.address}</p>
                        <p className="text-muted-foreground">{showroom.zipcode}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                      <a
                        href={`tel:${showroom.phone}`}
                        className="text-sm hover:text-accent transition-colors"
                      >
                        {showroom.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                      <a
                        href={`mailto:${showroom.email}`}
                        className="text-sm hover:text-accent transition-colors"
                      >
                        {showroom.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p>{showroom.hours.weekday}</p>
                        <p>{showroom.hours.weekend}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group"
                  >
                    <a
                      href={showroom.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NavigationIcon className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                  Plan Your Visit
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our showrooms are designed to be immersive experiences where you can see, touch, and truly appreciate the quality of our furniture. Here's what to expect during your visit.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Expert Guidance",
                    description: "Our knowledgeable staff are passionate about design and are here to answer questions, provide recommendations, and help you find pieces that fit your space perfectly.",
                  },
                  {
                    title: "Full Collections",
                    description: "Every showroom features our complete range of collections, beautifully styled in room vignettes to help you visualize how pieces work together.",
                  },
                  {
                    title: "Custom Consultations",
                    description: "Book an appointment with our design team for personalized consultations, material selection, and custom ordering assistance.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl font-serif font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 animate-fade-in-up">
                <p className="text-muted-foreground mb-6">
                  Walk-ins are always welcome, but we recommend scheduling an appointment to ensure dedicated time with our design consultants.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:showrooms@atelier.com">
                    Schedule an Appointment
                  </a>
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

export default Showrooms;
