import { Instagram, Youtube, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-burgundy to-[#3d0f2e] text-ivory py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 relative overflow-hidden">
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(176, 141, 87, 1) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
          
          {/* Brand section */}
          <div className="text-center md:text-left space-y-3 max-w-md">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gold tracking-tight">Cinebih</h2>
            <p className="font-body text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
              Elevating brands through strategic content and data-driven social media excellence.
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-6">
            
            {/* Social icons */}
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#" className="w-11 h-11 bg-ivory/10 hover:bg-gold text-ivory rounded-xl flex items-center justify-center transition-premium btn-lift">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-ivory/10 hover:bg-gold text-ivory rounded-xl flex items-center justify-center transition-premium btn-lift font-bold text-sm">
                Tk
              </a>
              <a href="#" className="w-11 h-11 bg-ivory/10 hover:bg-gold text-ivory rounded-xl flex items-center justify-center transition-premium btn-lift">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-ivory/10 hover:bg-gold text-ivory rounded-xl flex items-center justify-center transition-premium btn-lift">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-ivory/10 hover:bg-gold text-ivory rounded-xl flex items-center justify-center transition-premium btn-lift">
                <Linkedin size={20} />
              </a>
            </div>
            
            {/* Email */}
            <a href="mailto:contact@cinebih.com" className="flex items-center gap-2 font-body text-sm sm:text-base hover:text-gold transition-colors group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              contact@cinebih.com
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-ivory/10 text-center">
          <p className="font-body text-xs sm:text-sm text-ivory/50 font-light">
            &copy; {new Date().getFullYear()} Cinebih. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
