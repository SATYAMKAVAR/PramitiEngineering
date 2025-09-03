import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            {/* <Logo className="h-10 w-auto [&>*]:brightness-0 [&>*]:invert" /> */}
                      <img src="/Logo_Black.png" alt="Logo" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Engineering innovative solutions for tomorrow's challenges.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Technology Consulting</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">System Integration</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Custom Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Email: pramititechz@gmail.com</p>
              <p>Phone: +91 79846 40722</p>
              <p>Address: Pramiti Technology, Opp. Kamdhenu Fun Resort, Morbi Bypass Highway, Sanala Road, Morbi - 363641</p>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Pramiti Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;