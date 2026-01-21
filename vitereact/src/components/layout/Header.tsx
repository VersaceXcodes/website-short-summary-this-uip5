import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-8 px-8 flex justify-center items-center bg-cognac text-ivory relative z-50">
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
