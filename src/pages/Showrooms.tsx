import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail, Navigation as NavigationIcon } from "lucide-react";

const showrooms = [
  {
    city: "Bhubaneswar",
    address: "Plot No-97, 7th St, Bapuji Nagar",
    zipcode: "Bhubaneswar, Odisha 751009",
    phone: "094382 24472",
    email: "info@pankajfurniture.com",
    hours: {
      weekday: "Monday - Friday: 9am - 9pm",
      weekend: "Saturday - Sunday: 9am - 9pm",
    },
    mapLink: "https://maps.google.com/maps?q=Pankaj+Furniture+Bapuji+Nagar+Bhubaneswar",
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
                Visit Our Showroom
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Experience our furniture collections in person. Our showroom in Bapuji Nagar is designed to help you find the perfect pieces for your home.
              </p>
            </div>
          </div>
        </section>

        {/* Showroom Location */}
        <section className="section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
              {/* Map */}
              <div className="animate-fade-in-up">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1969394!2d85.82451!3d20.29611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909093d8b8b8b%3A0x1234567890abcdef!2sPlot%20No-97%2C%207th%20St%2C%20Bapuji%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751009!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&markers=color:red%7Clabel:P%7C20.29611,85.82451"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pankaj Furniture Location"
                  />
                </div>
              </div>

              {/* Showroom Details */}
              <div className="animate-fade-in-up">
                {showrooms.map((showroom, index) => (
                  <div key={showroom.city}>
                    <h3 className="text-4xl font-serif font-semibold mb-8 text-accent">
                      {showroom.city} Showroom
                    </h3>

                    <div className="space-y-6 mb-8">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Address</h4>
                          <p className="text-muted-foreground">{showroom.address}</p>
                          <p className="text-muted-foreground">{showroom.zipcode}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Phone</h4>
                          <a
                            href={`tel:${showroom.phone}`}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {showroom.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <a
                            href={`mailto:${showroom.email}`}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {showroom.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Hours</h4>
                          <div className="text-muted-foreground">
                            <p>{showroom.hours.weekday}</p>
                            <p>{showroom.hours.weekend}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button
                        asChild
                        size="lg"
                        className="w-full"
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
                      
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Service Options</h5>
                        <p className="text-sm text-muted-foreground">Same-day delivery available • Free consultation • Custom orders welcome</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  <Link to="/services#consultation">
                    Schedule an Appointment
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

export default Showrooms;
