import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-forest-green/95 backdrop-blur-sm shadow-md py-3' : 'bg-forest-green py-4'} text-ivory px-4 md:px-8`}>
      <div className="flex justify-between items-center relative">
        {/* Mobile Menu Button - Left */}
        <div className="md:hidden flex-1 flex justify-start">
             <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-ivory hover:text-antique-gold hover:bg-transparent"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
             >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
             </Button>
        </div>

        {/* Desktop Links - Left */}
        <div className="hidden md:flex-1 md:flex justify-start">
           <Link to="/" className="text-xl font-smut hover:text-antique-gold transition-colors">Home</Link>
        </div>
        
        {/* Logo - Center */}
        <div className={`flex-1 flex justify-center transition-opacity duration-300 ${scrolled || isMenuOpen ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
            <Link to="/">
                <img src={logo} alt="CINEBIH" className="h-10 md:h-12 w-auto" />
            </Link>
        </div>

        {/* Desktop Links - Right */}
        <div className="hidden md:flex-1 md:flex justify-end gap-6 text-xl font-smut">
          <Link to="/about" className="hover:text-antique-gold transition-colors">About</Link>
          <Link to="/pricing" className="hover:text-antique-gold transition-colors">Pricing</Link>
          <Link to="/contact" className="hover:text-antique-gold transition-colors">Contact Us</Link>
        </div>

        {/* Mobile Placeholder - Right (to balance the flex) */}
        <div className="md:hidden flex-1"></div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`absolute top-full left-0 w-full bg-forest-green border-t border-ivory/10 shadow-xl transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center py-8 space-y-6 font-smut text-2xl">
            <Link to="/" className="hover:text-antique-gold transition-colors">Home</Link>
            <Link to="/about" className="hover:text-antique-gold transition-colors">About</Link>
            <Link to="/pricing" className="hover:text-antique-gold transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-antique-gold transition-colors">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
