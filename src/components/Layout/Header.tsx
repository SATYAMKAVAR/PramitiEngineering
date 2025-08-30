import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-foreground hover:text-primary transition-colors ${
                location.pathname === item.path ? "text-primary font-medium" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button variant="default" asChild className="hidden md:inline-flex">
          <Link to="/contact">Get Started</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;