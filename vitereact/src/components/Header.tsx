import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className="fixed top-0 w-full z-50 bg-forest-green text-ivory py-4 px-8 flex justify-between items-center transition-all duration-300">
      <div className="flex-1 flex justify-start">
         <Link to="/" className="text-xl font-smut hover:text-antique-gold transition-colors">Home</Link>
      </div>
      
      <div className={`flex-1 flex justify-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          <img src={logo} alt="CINEBIH" className="h-12 w-auto" />
      </div>

      <div className="flex-1 flex justify-end gap-6 text-xl font-smut">
        <Link to="/about" className="hover:text-antique-gold transition-colors">About</Link>
        <Link to="/pricing" className="hover:text-antique-gold transition-colors">Pricing</Link>
        <Link to="/contact" className="hover:text-antique-gold transition-colors">Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;
