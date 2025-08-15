import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-scale">
            <img 
              src="/lovable-uploads/ac3854ab-6de7-4932-a764-1031cefb37b2.png" 
              alt="Moon Aviation Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 hover:rotate-12"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Moon Aviation</h1>
              <p className="text-sm text-muted-foreground">ONE STOP AVIATION SERVICES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-foreground hover:text-primary transition-all duration-300 story-link">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-all duration-300 story-link">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-all duration-300 story-link">
              Services
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-all duration-300 story-link">
              Gallery
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-300 story-link">
              Contact
            </Link>
          </nav>

          {/* Contact Info & Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm text-muted-foreground">ops@moonaviationservices.com</p>
              <p className="text-sm font-semibold text-foreground">+91 9910393737</p>
            </div>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="transition-all duration-300 hover:scale-110"
              onClick={toggleTheme}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden transition-all duration-300 hover:scale-110"
              onClick={toggleMenu}
            >
              <div className="transition-transform duration-300">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border animate-slide-in-up">
            <div className="flex flex-col space-y-3">
              <Link to="/home" className="text-foreground hover:text-primary transition-all duration-300 py-2 hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-all duration-300 py-2 hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-all duration-300 py-2 hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-primary transition-all duration-300 py-2 hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-all duration-300 py-2 hover:translate-x-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 border-t border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
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