import { Instagram, Youtube, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy text-ivory py-16 px-8 border-t-8 border-gold">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-display text-gold uppercase mb-2">Cinebih</h2>
          <p className="font-body opacity-80 max-w-md">
            Taking Your Business to the Next Level with powerful social media strategies.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
             {/* Social Icons - Placeholders */}
             <a href="#" className="p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Instagram size={24} />
             </a>
             <a href="#" className="p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <span className="font-bold text-xl leading-none">Tk</span> {/* TikTok icon fallback */}
             </a>
             <a href="#" className="p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Youtube size={24} />
             </a>
             <a href="#" className="p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Facebook size={24} />
             </a>
             <a href="#" className="p-3 bg-ivory text-burgundy rounded-full hover:bg-gold hover:text-forest transition-colors">
               <Linkedin size={24} />
             </a>
          </div>
          
          <a href="mailto:contact@cinebih.com" className="flex items-center gap-2 font-display text-xl hover:text-gold transition-colors">
            <Mail size={20} />
            contact@cinebih.com
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-ivory/20 text-center text-sm opacity-60">
        &copy; {new Date().getFullYear()} Cinebih. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
