import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-6 px-8 flex justify-between items-center bg-cognac text-ivory relative z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'shadow-lg py-4' : 'shadow-md'}`}>
      {/* Small Logo - appears on scroll - positioned on left */}
      <div className={`flex items-center transition-all duration-300 ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'}`}>
        <img 
          src={logo} 
          alt="Cinebih Logo" 
          className="h-12 w-auto object-contain"
        />
      </div>
      
      {/* Navigation - centered */}
      <nav className="flex-1 flex justify-center">
        <div className="flex gap-12 font-display text-xl tracking-wider uppercase">
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

      {/* Spacer to balance logo on the left */}
      <div className={`transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-12 w-12"></div>
      </div>
    </header>
  );
};

export default Header;
