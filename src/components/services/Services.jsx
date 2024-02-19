import React from 'react';
import BoxComponent from './BoxCompnent';

function Services() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-800">Our Services</h2>
      <hr className="my-4 border-t-2 border-blue-500" />
      <BoxComponent />
    </div>
  );
}

export default Services;
