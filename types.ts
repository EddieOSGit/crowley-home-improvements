
import React from 'react';

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  source: string;
}
