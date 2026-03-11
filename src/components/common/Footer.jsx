import React from 'react';
import Logo from './Logo'; // Adjust the import path as needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8 text-white">
      <div className="w-full mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 mb-10 justify-between">
          
          {/* Section 1: Brand Identity */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-2">
              <Logo /> 
              
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              PetVerse connects local pet owners and buyers for adoption and pet care products.
            </p>
          </div>

          {/* Section 2: Quick Navigation */}
          <div className="flex-1">
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">
              Useful Links
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="/" className="hover:text-orange-400 transition-colors w-fit">Home</a>
              <a href="/contact" className="hover:text-orange-400 transition-colors w-fit">Contact</a>
              <a href="/terms" className="hover:text-orange-400 transition-colors w-fit">Terms & Conditions</a>
            </nav>
          </div>

          

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-300">
            &copy; {currentYear} PetVerse Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-300">
            <a href="/privacy" className="hover:underline hover:text-white">Privacy Policy</a>
            <a href="/cookies" className="hover:underline hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;