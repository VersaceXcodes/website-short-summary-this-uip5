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
    <header className="py-8 px-8 flex justify-center items-center bg-cognac text-ivory relative z-50 sticky top-0 shadow-md">
      {/* Small Logo - appears on scroll */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
        <img 
          src={logo} 
          alt="Cinebih Logo" 
          className="h-16 w-auto object-contain"
        />
      </div>
      
      <nav className="flex gap-12 font-display text-2xl tracking-wide uppercase">
        <Link to="/" className="hover:text-gold transition-colors">Home.</Link>
        <Link to="/about" className="hover:text-gold transition-colors">About.</Link>
        <Link to="/pricing" className="hover:text-gold transition-colors">Pricing.</Link>
        <Link to="/contact" className="hover:text-gold transition-colors">Contact Us.</Link>
      </nav>
    </header>
  );
};

export default Header;
