import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 backdrop-blur mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
                <span className="text-xl font-bold text-primary-foreground">FV</span>
              </div>
              <span className="text-lg font-bold text-foreground">Flowra Valves</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A trusted name in high-quality fittings and valves for industrial, commercial, and engineering applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Product Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Ball Valves</li>
              <li>Needle Valves</li>
              <li>Check Valves</li>
              <li>Manifold Valves</li>
              <li>Pipe Fittings</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">flowravalves@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+91 9372300603</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Contact: Arif Shaikh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Flowra Valves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
