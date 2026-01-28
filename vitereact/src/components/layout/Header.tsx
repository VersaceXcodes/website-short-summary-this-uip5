import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileNav, setExpandedMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setExpandedMobileNav(false);
  };

  return (
    <header className={`py-4 md:py-6 px-4 md:px-8 flex justify-between items-center bg-cognac text-ivory relative z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      {/* Small Logo - appears on scroll - positioned on left */}
      <div className={`flex items-center transition-all duration-300 ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none md:pointer-events-auto'}`}>
        <img 
          src={logo} 
          alt="Cinebih Logo" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      
      {/* Mobile Navigation - show 2 items + button */}
      <nav className="flex lg:hidden flex-1 justify-center items-center gap-3 sm:gap-4">
        <Link to="/" className="font-display text-sm sm:text-base uppercase tracking-wider text-ivory hover:text-gold transition-colors">
          Home
        </Link>
        <Link to="/about" className="font-display text-sm sm:text-base uppercase tracking-wider text-ivory hover:text-gold transition-colors">
          About
        </Link>
        <button
          onClick={() => setExpandedMobileNav(!expandedMobileNav)}
          className="text-gold p-1.5 hover:bg-gold/10 rounded transition-colors"
          aria-label="More pages"
        >
          {expandedMobileNav ? <X size={20} /> : <Plus size={20} />}
        </button>
      </nav>

      {/* Desktop Navigation - centered */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <div className="flex gap-8 xl:gap-12 font-display text-lg xl:text-xl tracking-wider uppercase">
          <Link to="/" className="hover:text-gold transition-all duration-200 hover:scale-105 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-gold transition-all duration-200 hover:scale-105 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/pricing" className="hover:text-gold transition-all duration-200 hover:scale-105 relative group">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="hover:text-gold transition-all duration-200 hover:scale-105 relative group">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>

      {/* Book Now button - hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex items-center">
        <a 
          href="https://calendly.com/cinebih/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-rust hover:bg-gold text-ivory px-4 xl:px-6 py-2 rounded transition-all duration-200 hover:scale-105 font-display text-base xl:text-lg tracking-wider uppercase shadow-md hover:shadow-lg"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Expanded Menu - Dropdown for Pricing and Contact */}
      {expandedMobileNav && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-forest/95 backdrop-blur-sm shadow-lg z-40 animate-fadeIn">
          <nav className="flex flex-col p-4 gap-2">
            <Link 
              to="/pricing" 
              onClick={handleLinkClick}
              className="font-display text-base sm:text-lg uppercase tracking-wider text-ivory hover:text-gold transition-colors py-3 px-4 border-b border-gold/20"
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              onClick={handleLinkClick}
              className="font-display text-base sm:text-lg uppercase tracking-wider text-ivory hover:text-gold transition-colors py-3 px-4 border-b border-gold/20"
            >
              Contact Us
            </Link>
            <a 
              href="https://calendly.com/cinebih/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="bg-rust hover:bg-gold text-ivory px-4 py-3 rounded transition-all duration-200 font-display text-base sm:text-lg tracking-wider uppercase shadow-lg text-center mt-2"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
