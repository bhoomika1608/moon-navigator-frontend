import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Plane className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Moon Aviation</h1>
              <p className="text-sm text-muted-foreground">ONE STOP AVIATION SERVICES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm text-muted-foreground">ops@moonaviationservices.com</p>
              <p className="text-sm font-semibold text-foreground">+91 9910393737</p>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link to="/home" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">ops@moonaviationservices.com</p>
                <p className="text-sm font-semibold text-foreground">+91 9910393737</p>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;