
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Crowley Home Improvements</h3>
        <p className="mb-4">Billings, MT 59105</p>
        <a href="tel:406-601-0842" className="text-xl text-yellow-500 hover:text-yellow-400 font-bold transition-colors">
          (406) 601-0842
        </a>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-500">
            &copy; {currentYear} Crowley Home Improvements. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
