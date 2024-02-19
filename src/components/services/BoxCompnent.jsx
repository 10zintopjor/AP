// BoxComponent.js
import React from 'react';
import plumbingIcon from '../../images/icons8-plumbing-50.png';
import emergencyIcon from '../../images/icons8-emergency-50.png';
import pipeIcon from '../../images/icons8-pipe-50.png';
import drainIcon from '../../images/icons8-manhole-cover-50.png';

const BoxComponent = () => {
  const servicesData = [
    {
      title: 'Plumbing Repairs',
      image: plumbingIcon,
    },
    {
      title: 'Pipe Installation',
      image: pipeIcon,
    },
    {
      title: 'Emergency Services',
      image: emergencyIcon,
    },
    {
      title: 'Drain Cleaning',
      image: drainIcon,
    },
    {
      title: 'Pipe Installation',
      image: pipeIcon,
    },
    {
      title: 'Emergency Services',
      image: emergencyIcon,
    },
    {
      title: 'Plumbing Repairs',
      image: plumbingIcon,
    },
    {
      title: 'Pipe Installation',
      image: pipeIcon,
    },
  ];

  return (
    <div className="BoxComponent mx-auto p-4 md:p-0" style={{ width: '80%' }}>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {servicesData.map((service, index) => (
          <div key={index} className="box border p-2 text-center relative">
            <img className="mx-auto block" src={service.image} alt="/" />
            <div className="title font-bold text-lg mt-2">{service.title}</div>
            {/* Removed description for mobile */}
            <div className="learnmore mt-2">
              <a href="/" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Display "View All" link at the bottom for mobile screens */}
      <div className="order-last sm:order-first mt-4 mb-4 mr-4 text-blue-500 hover:underline">
        <a href="/view-all">View All</a>
      </div>
    </div>
  );
};

export default BoxComponent;
