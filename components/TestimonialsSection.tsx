
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "The attention to detail on our drywall and paint job was incredible. Our walls have never looked better. Highly professional and courteous from start to finish.",
    author: "John D.",
    source: "Billings, MT Resident"
  },
  {
    quote: "We hired them for a new fence and some handyman work. The quality of the work is top-notch. They were reliable, on time, and cleaned up everything. 5-star service for sure!",
    author: "Mary S.",
    source: "Yahoo Local Review"
  },
  {
    quote: "Our new flooring completely transformed our living room. The installation was quick and flawless. We couldn't be happier with the result and the excellent communication.",
    author: "David & Sarah P.",
    source: "Laurel, MT Homeowners"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex text-yellow-500">
    {[...Array(rating)].map((_, i) => (
      <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
    <StarRating rating={5} />
    <p className="text-gray-600 italic my-4 flex-grow">"{testimonial.quote}"</p>
    <div>
      <p className="font-bold text-gray-800">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.source}</p>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We're proud of our 5-star reputation, built on quality work and happy customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
