import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Quality Home Improvements in Billings, MT
        </h1>
        <p className="text-lg md:text-2xl mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Your trusted local partner for painting, drywall, flooring, and more.
        </p>
        <a 
          href="tel:406-601-0842" 
          className="bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-2xl inline-block"
        >
          Call for a FREE Estimate
        </a>
      </div>
    </section>
  );
};

export default Hero;