import React from 'react';
import plumbingIcon from '../../images/icons8-plumbing-50.png';
import emergencyIcon from '../../images/icons8-emergency-50.png';
import pipeIcon from '../../images/icons8-pipe-50.png';
import drainIcon from '../../images/icons8-manhole-cover-50.png';

const BoxComponent = () => {
  const servicesData = [
    {
      title: 'Plumbing Repairs',
      description: 'Professional plumbing repair services for your home or business.',
      image: plumbingIcon,
    },
    {
      title: 'Pipe Installation',
      description: 'Expert pipe installation services to meet your plumbing needs.',
      image: pipeIcon,
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency plumbing services for urgent situations.',
      image: emergencyIcon,
    },
    {
      title: 'Drain Cleaning',
      description: 'Efficient drain cleaning services to keep your pipes clear.',
      image: drainIcon,
    },
    {
      title: 'Pipe Installation',
      description: 'Expert pipe installation services to meet your plumbing needs.',
      image: pipeIcon,
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency plumbing services for urgent situations.',
      image: emergencyIcon,
    },
    {
      title: 'Plumbing Repairs',
      description: 'Professional plumbing repair services for your home or business.',
      image: plumbingIcon,
    },
    {
      title: 'Pipe Installation',
      description: 'Expert pipe installation services to meet your plumbing needs.',
      image: pipeIcon,
    },
  ];

  return (
    <div className="BoxComponent mx-auto p-4 md:p-0" style={{ width: '80%' }}>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {servicesData.map((service, index) => (
          <a key={index} href="/" className="box border p-4 text-center relative block hover:bg-gray-100">
            <img className="mx-auto block mb-4" src={service.image} alt="/" />
            <div className="title font-bold text-lg mt-2 mb-2">{service.title}</div>
            <div className="description hidden sm:block">{service.description}</div>
            <div className="learnmore mt-2 hidden sm:block">
              <a href="/" className="text-blue-500 hover:underline">
                Learn More
              </a>
            </div>
          </a>
        ))}
      </div>

      {/* Display "View All" link at the bottom for mobile screens */}
      <div className="order-last sm:order-first mt-4 mb-4 mr-8 text-blue-500 hover:underline">
        <a href="/view-all">View All Services</a>
      </div>
    </div>
  );
};

export default BoxComponent;
