import React from 'react';
import BoxComponent from './BoxCompnent';

function Services() {
  return (
    <div className="text-center w-full lg:w-4/5 mx-auto m-10">
      <h2 className="text-5xl font-semibold mb-4">Our Services</h2>
      
      <p className="text-base md:text-base text-gray-500 p-4 lg:w-1/2 lg:mx-auto">
        Explore our wide range of professional services designed to meet your plumbing needs. We offer expert solutions for both commercial and residential properties.
      </p>

      <BoxComponent />

      {/* Description for mobile */}
      
    </div>
  );
}

export default Services;
