import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Ordering & Delivery",
      questions: [
        {
          q: "How long does delivery take?",
          a: "Most items ship within 4-6 weeks. Custom orders may take 8-12 weeks. We'll provide a specific timeline when you place your order.",
        },
        {
          q: "Do you offer white-glove delivery?",
          a: "Yes, all furniture includes white-glove delivery service. Our team will deliver, unpack, assemble, and place your furniture exactly where you want it.",
        },
        {
          q: "Can I track my order?",
          a: "Absolutely. You'll receive tracking information via email once your order ships. You can also contact our customer service team for updates.",
        },
        {
          q: "What if my item arrives damaged?",
          a: "We inspect all items before shipping, but if damage occurs in transit, please contact us within 48 hours. We'll arrange for repair or replacement at no cost to you.",
        },
      ],
    },
    {
      category: "Customization",
      questions: [
        {
          q: "Can I customize fabric and finishes?",
          a: "Yes! Most pieces can be customized with your choice of fabrics, leathers, and wood finishes. Visit a showroom or contact our design team to explore options.",
        },
        {
          q: "Do you offer custom sizing?",
          a: "We offer custom sizing on select pieces. Contact our design services team to discuss your specific requirements and receive a quote.",
        },
        {
          q: "How do I request fabric samples?",
          a: "You can request up to 5 fabric samples free of charge through our website or by contacting customer service. Samples typically arrive within 5-7 business days.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "Why don't you list prices online?",
          a: "Our furniture is highly customizable, and pricing varies based on fabric, finish, and size selections. Request a quote to receive accurate pricing for your specific configuration.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, wire transfers, and checks. Trade accounts may qualify for extended payment terms.",
        },
        {
          q: "Do you offer financing?",
          a: "Yes, we partner with several financing providers to offer flexible payment plans. Contact us to learn more about available options.",
        },
      ],
    },
    {
      category: "Returns & Warranty",
      questions: [
        {
          q: "What is your return policy?",
          a: "Standard items may be returned within 30 days of delivery for a full refund, minus shipping costs. Custom orders are final sale. Items must be in original condition.",
        },
        {
          q: "What does your warranty cover?",
          a: "All furniture includes a 5-year warranty covering manufacturing defects and structural issues. Normal wear and tear is not covered. See full warranty details in your order documentation.",
        },
        {
          q: "How do I file a warranty claim?",
          a: "Contact our customer service team with photos and a description of the issue. We'll review your claim and arrange for repair or replacement if covered under warranty.",
        },
      ],
    },
    {
      category: "Showrooms & Design Services",
      questions: [
        {
          q: "Do I need an appointment to visit a showroom?",
          a: "Walk-ins are welcome, but we recommend scheduling an appointment to ensure dedicated time with our design consultants.",
        },
        {
          q: "Is there a fee for design services?",
          a: "Initial consultations are complimentary. Full design services start at $1,500 per room, which is credited toward your furniture purchase.",
        },
        {
          q: "Can designers visit my home?",
          a: "Yes, in-home consultations are available in select markets. Contact your local showroom to inquire about availability and fees.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Find answers to common questions about our furniture, ordering process, and services.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((category, index) => (
                <div
                  key={category.category}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h2 className="text-3xl font-serif font-semibold mb-6">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${index}-${faqIndex}`}
                        className="border border-border rounded-sm px-6"
                      >
                        <AccordionTrigger className="text-left hover:text-accent">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}

              <div className="mt-16 bg-secondary/20 rounded-sm p-8 text-center animate-fade-in-up">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our customer service team is here to help. Reach out and we'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:hello@atelier.com"
                  className="text-accent hover:underline font-medium text-lg"
                >
                  hello@atelier.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
