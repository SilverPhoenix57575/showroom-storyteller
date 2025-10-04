import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Briefcase } from "lucide-react";

const Trade = () => {
  const benefits = [
    "Exclusive trade pricing on all collections",
    "Dedicated account manager",
    "Priority access to new releases",
    "Custom ordering and modifications",
    "Extended payment terms",
    "White-glove delivery service",
    "Professional design support",
    "Sample program access",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <Briefcase className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Trade Program
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Join our exclusive trade program designed for interior designers, architects, and design professionals.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-16 animate-fade-in-up">
                <h2 className="text-4xl font-serif font-semibold mb-6 text-center">
                  Program Benefits
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-12">
                  We partner with design professionals to bring exceptional furniture to their clients.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/20 rounded-sm p-12 text-center space-y-6 animate-fade-in-up">
                <h3 className="text-3xl font-serif font-semibold">
                  Ready to Join?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Apply for our trade program today. We'll review your application and get back to you within 2-3 business days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Apply Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="mailto:trade@atelier.com">
                      Email Trade Team
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-16 space-y-8 animate-fade-in-up">
                <h3 className="text-3xl font-serif font-semibold text-center">
                  Eligibility Requirements
                </h3>
                <div className="prose prose-lg max-w-none">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>Active business license or professional credentials</li>
                    <li>Resale certificate or tax ID number</li>
                    <li>Professional website or portfolio</li>
                    <li>Minimum of 2 years industry experience</li>
                    <li>Business references upon request</li>
                  </ul>
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

export default Trade;
