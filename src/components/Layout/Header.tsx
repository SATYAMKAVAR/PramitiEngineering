import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Link to="/">
          <img src="/Logo.jpg" alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex-1 flex justify-end items-center space-x-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors ${
                  location.pathname === item.path
                    ? "text-primary font-medium"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* <Button variant="default" asChild className="hidden md:inline-flex">
            <Link to="/contact">Get Started</Link>
          </Button> */}
          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b shadow-sm">
          <nav className="flex flex-col items-center px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors w-full text-center py-2 px-2 ${
                  location.pathname === item.path
                    ? "text-primary font-medium"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <Button variant="default" asChild className="w-full mt-2">
    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
      Get Started
    </Link>
  </Button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
