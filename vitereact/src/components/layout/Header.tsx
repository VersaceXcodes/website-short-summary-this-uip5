import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { X, Plus } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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
    setExpandedMobileNav(false);
  };

  return (
    <header className={`py-5 md:py-6 px-6 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center gradient-luxury text-ivory relative z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'shadow-luxury backdrop-blur-md bg-opacity-95' : ''}`}>
      
      {/* Subtle bottom border */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {/* Small Logo - appears on scroll - positioned on left */}
      <div className={`flex items-center transition-all duration-500 ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none md:pointer-events-auto'}`}>
        <img 
          src={logo} 
          alt="Cinebih Logo" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      
      {/* Mobile Navigation - show HOME, ABOUT, BOOK NOW + button for more */}
      <nav className="flex lg:hidden flex-1 justify-center items-center gap-3 sm:gap-4">
        <Link to="/" className="font-body font-medium text-sm uppercase tracking-wide text-ivory hover:text-gold transition-colors">
          Home
        </Link>
        <Link to="/about" className="font-body font-medium text-sm uppercase tracking-wide text-ivory hover:text-gold transition-colors">
          About
        </Link>
        <a 
          href="https://calendly.com/cinebih/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-rust hover:bg-rust/80 text-ivory px-4 py-2 rounded-lg transition-premium font-body font-medium text-sm tracking-wide btn-lift"
        >
          Book Now
        </a>
        <button
          onClick={() => setExpandedMobileNav(!expandedMobileNav)}
          className="text-gold p-2 hover:bg-gold/10 rounded-lg transition-colors"
          aria-label="More pages"
        >
          {expandedMobileNav ? <X size={20} /> : <Plus size={20} />}
        </button>
      </nav>

      {/* Desktop Navigation - centered */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <div className="flex gap-10 xl:gap-12 font-body font-medium text-base tracking-wide">
          <Link to="/" className="hover:text-gold transition-premium relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-gold transition-premium relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/pricing" className="hover:text-gold transition-premium relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="hover:text-gold transition-premium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>

      {/* Book Now button - hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex items-center">
        <a 
          href="https://calendly.com/cinebih/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-rust hover:bg-rust/80 text-ivory px-6 xl:px-8 py-3 rounded-xl transition-premium btn-lift font-body font-medium text-base tracking-wide shadow-luxury"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Expanded Menu - Dropdown for Pricing and Contact */}
      {expandedMobileNav && (
        <div className="lg:hidden absolute top-full left-0 right-0 elevated-card-dark backdrop-blur-md shadow-luxury z-40 animate-fadeIn border-t border-gold/10">
          <nav className="flex flex-col p-6 gap-2">
            <Link 
              to="/pricing" 
              onClick={handleLinkClick}
              className="font-body font-medium text-base tracking-wide text-ivory hover:text-gold transition-colors py-3 px-4 rounded-lg hover:bg-gold/5"
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              onClick={handleLinkClick}
              className="font-body font-medium text-base tracking-wide text-ivory hover:text-gold transition-colors py-3 px-4 rounded-lg hover:bg-gold/5"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
