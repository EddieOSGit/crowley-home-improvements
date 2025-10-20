import React from 'react';
import { SparklesIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon } from './icons/Icons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop" 
              alt="Team of contractors reviewing building plans" 
              className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Local, Trusted, and Committed to Quality</h2>
            <p className="text-lg text-gray-600 mb-8">
              Crowley Home Improvements is proud to be a local Billings business dedicated to serving our community. We believe that a successful project is built on a foundation of clear communication, meticulous attention to detail, and a commitment to delivering work that stands the test of time.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 w-8 h-8 mr-4"><CheckBadgeIcon/></div>
                <div>
                  <h3 className="text-xl font-semibold">Quality Workmanship</h3>
                  <p className="text-gray-600">We take pride in our craft, using quality materials and proven techniques to ensure a beautiful, long-lasting result.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 w-8 h-8 mr-4"><SparklesIcon/></div>
                <div>
                  <h3 className="text-xl font-semibold">Attention to Detail</h3>
                  <p className="text-gray-600">From the initial prep work to the final cleanup, we focus on the small things that make a big difference.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 text-blue-600 w-8 h-8 mr-4"><ChatBubbleLeftRightIcon/></div>
                <div>
                  <h3 className="text-xl font-semibold">Clear Communication</h3>
                  <p className="text-gray-600">We keep you informed throughout the process, ensuring your vision is brought to life exactly as you imagined.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;