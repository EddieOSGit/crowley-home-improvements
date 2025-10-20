
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800 hover:text-blue-700 transition-colors">
          Crowley Home Improvements
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-600 hover:text-blue-700 font-medium transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:406-601-0842" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
            (406) 601-0842
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-blue-600">
                {link.label}
              </a>
            ))}
             <a href="tel:406-601-0842" className="mt-4 w-full text-center bg-blue-600 text-white font-bold py-3 px-5 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
              Call (406) 601-0842
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
