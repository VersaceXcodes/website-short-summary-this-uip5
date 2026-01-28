import { Instagram, Youtube, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy text-ivory py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 border-t-4 sm:border-t-8 border-gold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-display text-gold uppercase mb-2">Cinebih</h2>
          <p className="font-body text-sm sm:text-base opacity-80 max-w-md">
            Taking Your Business to the Next Level with powerful social media strategies.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4 sm:gap-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
             {/* Social Icons - Placeholders */}
             <a href="#" className="p-2.5 sm:p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Instagram size={20} className="sm:w-6 sm:h-6" />
             </a>
             <a href="#" className="p-2.5 sm:p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <span className="font-bold text-lg sm:text-xl leading-none">Tk</span> {/* TikTok icon fallback */}
             </a>
             <a href="#" className="p-2.5 sm:p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Youtube size={20} className="sm:w-6 sm:h-6" />
             </a>
             <a href="#" className="p-2.5 sm:p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Facebook size={20} className="sm:w-6 sm:h-6" />
             </a>
             <a href="#" className="p-2.5 sm:p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Linkedin size={20} className="sm:w-6 sm:h-6" />
             </a>
          </div>
          
          <a href="mailto:contact@cinebih.com" className="flex items-center gap-2 font-display text-lg sm:text-xl hover:text-gold transition-colors">
            <Mail size={18} className="sm:w-5 sm:h-5" />
            contact@cinebih.com
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-ivory/20 text-center text-xs sm:text-sm opacity-60">
        &copy; {new Date().getFullYear()} Cinebih. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
