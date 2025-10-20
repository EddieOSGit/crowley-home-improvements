
import React from 'react';
import { PhoneIcon, MapPinIcon } from './icons/Icons';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10">
          Contact us today for a free, no-obligation estimate. We're ready to bring your home improvement vision to life.
        </p>
        
        <a 
          href="tel:406-601-0842" 
          className="bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full text-xl hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-2xl inline-flex items-center"
        >
          <div className="w-6 h-6 mr-3"><PhoneIcon /></div>
          Call (406) 601-0842
        </a>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-blue-50">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-3"><MapPinIcon /></div>
            <span>Billings, MT 59105</span>
          </div>
          <div className="flex items-center">
            <span>Serving Billings and surrounding communities</span>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89856.88478469396!2d-108.5990264694406!3d45.78018338902506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5348912759e35555%3A0x1921a28a3a0e6332!2sBillings%2C%20MT!5e0!3m2!1sen!2sus!4v1678886543210!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map for Crowley Home Improvements"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
