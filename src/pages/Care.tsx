import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Care = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6">
                Care Instructions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Proper care ensures your Atelier furniture remains beautiful for generations.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="wood" className="animate-fade-in-up">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="wood">Wood</TabsTrigger>
                  <TabsTrigger value="upholstery">Upholstery</TabsTrigger>
                  <TabsTrigger value="leather">Leather</TabsTrigger>
                  <TabsTrigger value="metal">Metal</TabsTrigger>
                </TabsList>

                <TabsContent value="wood" className="space-y-6 pt-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-serif font-semibold">Wood Furniture Care</h3>
                    
                    <h4 className="text-xl font-semibold mt-6">Daily Care</h4>
                    <ul>
                      <li>Dust regularly with a soft, dry cloth</li>
                      <li>Wipe spills immediately with a slightly damp cloth</li>
                      <li>Use coasters and placemats to protect surfaces</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Deep Cleaning</h4>
                    <ul>
                      <li>Clean with a mild soap solution and soft cloth</li>
                      <li>Dry immediately with a clean cloth</li>
                      <li>Apply furniture polish or wax every 6-12 months</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Protection</h4>
                    <ul>
                      <li>Avoid direct sunlight to prevent fading</li>
                      <li>Maintain consistent humidity (40-60%)</li>
                      <li>Keep away from heat sources</li>
                      <li>Rotate items periodically for even aging</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="upholstery" className="space-y-6 pt-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-serif font-semibold">Upholstery Care</h3>
                    
                    <h4 className="text-xl font-semibold mt-6">Regular Maintenance</h4>
                    <ul>
                      <li>Vacuum weekly using upholstery attachment</li>
                      <li>Rotate cushions regularly for even wear</li>
                      <li>Fluff and plump cushions daily</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Stain Removal</h4>
                    <ul>
                      <li>Blot spills immediately—never rub</li>
                      <li>Use fabric-specific cleaning solutions</li>
                      <li>Test cleaners on hidden areas first</li>
                      <li>For stubborn stains, consult a professional</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Professional Care</h4>
                    <ul>
                      <li>Professional cleaning recommended annually</li>
                      <li>Check cleaning codes on your furniture</li>
                      <li>Keep away from direct sunlight</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="leather" className="space-y-6 pt-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-serif font-semibold">Leather Care</h3>
                    
                    <h4 className="text-xl font-semibold mt-6">Daily Care</h4>
                    <ul>
                      <li>Wipe with a soft, dry cloth</li>
                      <li>Clean spills immediately with damp cloth</li>
                      <li>Avoid harsh chemicals and solvents</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Conditioning</h4>
                    <ul>
                      <li>Apply leather conditioner every 6-12 months</li>
                      <li>Use products specifically for furniture leather</li>
                      <li>Test on inconspicuous area first</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Protection</h4>
                    <ul>
                      <li>Keep away from direct heat and sunlight</li>
                      <li>Maintain room humidity at 40-60%</li>
                      <li>Allow leather to breathe—avoid plastic covers</li>
                      <li>Natural patina development is normal and desirable</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="metal" className="space-y-6 pt-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-serif font-semibold">Metal & Hardware Care</h3>
                    
                    <h4 className="text-xl font-semibold mt-6">Cleaning</h4>
                    <ul>
                      <li>Wipe with soft, damp cloth</li>
                      <li>Dry immediately to prevent water spots</li>
                      <li>Use mild soap for stubborn dirt</li>
                      <li>Avoid abrasive cleaners and steel wool</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Polishing</h4>
                    <ul>
                      <li>Use appropriate metal polish for finish type</li>
                      <li>Brass and copper develop natural patina over time</li>
                      <li>Chrome and stainless steel: use specialized cleaners</li>
                    </ul>

                    <h4 className="text-xl font-semibold mt-6">Protection</h4>
                    <ul>
                      <li>Keep dry to prevent rust and corrosion</li>
                      <li>Apply protective wax to unfinished metals</li>
                      <li>Tighten hardware periodically</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-16 bg-secondary/20 rounded-sm p-8 animate-fade-in-up">
                <h3 className="text-2xl font-serif font-semibold mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-6">
                  Our care specialists are available to answer questions about maintaining your specific pieces. Contact us for personalized advice.
                </p>
                <a
                  href="mailto:care@atelier.com"
                  className="text-accent hover:underline font-medium"
                >
                  care@atelier.com
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

export default Care;
