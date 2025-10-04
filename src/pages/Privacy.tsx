import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Atelier Furniture ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">2. Information We Collect</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Register for an account</li>
                      <li>Make a purchase</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Request a quote or consultation</li>
                      <li>Contact customer service</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">This information may include:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Payment information</li>
                      <li>Design preferences and project details</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">When you visit our website, we automatically collect certain information about your device, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Referring URLs</li>
                      <li>Pages viewed and time spent on pages</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders and inquiries</li>
                    <li>Provide design services and consultations</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Prevent fraud and enhance security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">4. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">We do not sell your personal information. We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><span className="font-medium text-foreground">Service Providers:</span> Third-party companies that help us operate our business (payment processors, shipping companies, marketing platforms)</li>
                    <li><span className="font-medium text-foreground">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets</li>
                    <li><span className="font-medium text-foreground">Legal Requirements:</span> When required by law or to protect our rights</li>
                    <li><span className="font-medium text-foreground">With Your Consent:</span> When you explicitly agree to share your information</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">5. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">6. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">7. Your Rights and Choices</h2>
                  <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to certain processing of your information</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">To exercise these rights, please contact us at <span className="text-accent font-medium">privacy@atelier.com</span>.</p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">9. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-semibold text-accent">10. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div className="space-y-6 border-t border-border pt-8">
                  <h2 className="text-3xl font-serif font-semibold text-accent">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">If you have questions or concerns about this Privacy Policy, please contact us:</p>
                  <div className="space-y-3 ml-4">
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">Email:</span> privacy@atelier.com</p>
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">Phone:</span> 1-800-ATELIER</p>
                    <p className="text-muted-foreground"><span className="font-medium text-foreground">Mail:</span> Atelier Furniture, 425 Madison Avenue, Suite 200, New York, NY 10017</p>
                  </div>
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

export default Privacy;
