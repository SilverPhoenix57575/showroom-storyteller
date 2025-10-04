import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Palette, Home, Ruler, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DesignServices = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDetails: "",
  });

  const services = [
    {
      icon: Home,
      title: "Full Room Design",
      description: "Complete design service for any room in your home. We'll help you select furniture, create layouts, and bring your vision to life.",
      pricing: "Starting at $1,500 per room",
    },
    {
      icon: Palette,
      title: "Color & Material Consultation",
      description: "Expert guidance on fabric selections, wood finishes, and color palettes to ensure perfect harmony in your space.",
      pricing: "Starting at $500",
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimize your space with professional floor plans and furniture arrangements tailored to your lifestyle.",
      pricing: "Starting at $800",
    },
    {
      icon: Package,
      title: "Custom Furniture Design",
      description: "Work with our team to create bespoke pieces that perfectly fit your space and style requirements.",
      pricing: "Quote-based",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Received",
      description: "We'll contact you within 24 hours to schedule your complimentary consultation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      projectDetails: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Design Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Transform your space with expert guidance from our in-house design team. We'll help you create a home that reflects your unique style and enhances your daily life.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="border border-border rounded-xl p-8 hover:border-accent transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-2xl font-serif font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {service.pricing}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-center animate-fade-in-up">
                Our Process
              </h2>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Initial Consultation",
                    description: "We begin with a complimentary 60-minute consultation to understand your vision, lifestyle, and budget. We'll discuss your space, style preferences, and any specific challenges you're facing.",
                  },
                  {
                    step: "02",
                    title: "Concept Development",
                    description: "Our designers create a tailored concept with mood boards, floor plans, and curated furniture selections from our collections. You'll receive professional 3D renderings to visualize the final result.",
                  },
                  {
                    step: "03",
                    title: "Refinement & Approval",
                    description: "We work closely with you to refine the design, adjusting colors, layouts, and selections until everything feels perfect. Once approved, we provide a detailed specification document.",
                  },
                  {
                    step: "04",
                    title: "Implementation",
                    description: "We coordinate delivery and installation of all furniture and accessories. Our white-glove service ensures everything is placed exactly as designed, so you can simply enjoy your new space.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="flex gap-8 items-start animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-5xl font-serif font-semibold text-accent shrink-0 w-24">
                      {item.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-serif font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation" className="section-padding">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                  Book a Free Consultation
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ready to transform your space? Fill out the form below and we'll be in touch within 24 hours to schedule your complimentary consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Select
                      required
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-room">Full Room Design</SelectItem>
                        <SelectItem value="consultation">Color & Material Consultation</SelectItem>
                        <SelectItem value="planning">Space Planning</SelectItem>
                        <SelectItem value="custom">Custom Furniture Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Tell us about your project, space, style preferences, and any specific challenges..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DesignServices;
