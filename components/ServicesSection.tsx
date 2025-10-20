
import React from 'react';
import type { Service } from '../types';
import { PaintBrushIcon, WrenchScrewdriverIcon, HomeModernIcon, SparklesIcon, Bars3BottomLeftIcon, ShieldCheckIcon } from './icons/Icons';

const services: Service[] = [
  {
    icon: <PaintBrushIcon />,
    title: 'Painting Services',
    description: 'Professional interior and exterior painting that transforms your space with clean lines and lasting finishes.'
  },
  {
    icon: <HomeModernIcon />,
    title: 'Drywall & Finishing',
    description: 'Expert drywall installation, repair, and texturing for flawless walls and ceilings ready for paint.'
  },
  {
    icon: <SparklesIcon />,
    title: 'Flooring Installation',
    description: 'Upgrade your home with beautiful and durable flooring, including laminate, vinyl, and tile installation.'
  },
  {
    icon: <WrenchScrewdriverIcon />,
    title: 'Handyman Services',
    description: 'Reliable and skilled help for all your small projects, repairs, and home maintenance tasks.'
  },
  {
    icon: <Bars3BottomLeftIcon />,
    title: 'Fences & Gates',
    description: 'Custom fence and gate solutions to enhance your property’s privacy, security, and curb appeal.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'General Contracting',
    description: 'Comprehensive project management for your home renovations, ensuring quality from start to finish.'
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="text-blue-600 mb-4 w-16 h-16">{service.icon}</div>
    <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">From minor repairs to major renovations, we provide high-quality craftsmanship for every part of your home.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
