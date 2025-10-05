import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-4xl font-serif font-semibold">Pankaj Furniture</h3>
            <p className="text-muted-foreground">
              Quality furniture for modern living. Serving Bhubaneswar with trusted service.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Collections</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/collections?room=living" className="text-muted-foreground hover:text-accent transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/collections?room=dining" className="text-muted-foreground hover:text-accent transition-colors">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link to="/collections?room=bedroom" className="text-muted-foreground hover:text-accent transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/collections?room=office" className="text-muted-foreground hover:text-accent transition-colors">
                  Home Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Design Services
                </Link>
              </li>
              <li>
                <Link to="/showrooms" className="text-muted-foreground hover:text-accent transition-colors">
                  Showrooms
                </Link>
              </li>
              <li>
                <Link to="/trade" className="text-muted-foreground hover:text-accent transition-colors">
                  Trade Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-muted-foreground hover:text-accent transition-colors">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pankaj Furniture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
