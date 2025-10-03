import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import nfpLogo from "@/assets/nfp-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Policies", href: "#policies" },
    { name: "News & Media", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  const getInvolved = [
    { name: "Volunteer", href: "#volunteer" },
    { name: "Donate", href: "#donate" },
    { name: "Become a Member", href: "#member" },
    { name: "Attend Events", href: "#events" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={nfpLogo} 
                alt="National Federation Party Logo" 
                className="h-12 w-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-lg">NFP</h3>
                <p className="text-sm text-primary-foreground/80">Since 1960</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Uniting Fiji for a brighter future. Fighting for equality, justice, and prosperity for all.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold text-base mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {getInvolved.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>NFP Headquarters, Suva, Fiji</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+679 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@nfpfiji.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 National Federation Party. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Transparency Report</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
