import React from 'react';
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-antique-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-antique-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-antique-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-antique-gold transition-colors" aria-label="Twitter">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-antique-gold transition-colors" aria-label="YouTube">
              <Youtube className="w-8 h-8" />
            </a>
          </div>

          {/* Contact Email */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@cinebih.com" className="text-xl hover:text-antique-gold transition-colors font-smut">
                contact@cinebih.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm opacity-80 mt-8 font-smut-full">
            &copy; {new Date().getFullYear()} Cinebih. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
