import React from 'react';
import plumbingIcon from '../../images/icons8-plumbing-50.png';
import emergencyIcon from '../../images/icons8-emergency-50.png';
import drainIcon from '../../images/icons8-pipe-50.png';
import sewerIcon from '../../images/icons8-manhole-cover-50.png';

const BoxComponent = () => {
  const servicesData = [
    {
      title: 'Plumbing Repairs',
      description: 'Professional plumbing repair services for your home or business. Our skilled plumbers can handle a wide range of plumbing issues with precision and expertise.',
      image: plumbingIcon,
    },
    {
      title: 'Drain Cleaning',
      description: 'Efficient drain cleaning services to keep your pipes clear. Our experienced team uses state-of-the-art equipment to remove blockages and improve the flow of water in your drains.',
      image: drainIcon,
    },
    {
      title: 'Sewer Line Inspection',
      description: 'Comprehensive sewer line inspection services to identify and address potential issues. Our advanced inspection techniques help ensure the health and functionality of your sewer system.',
      image: sewerIcon,
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency plumbing services for urgent situations. We understand that plumbing emergencies can happen at any time, and our team is ready to respond quickly to resolve the issue.',
      image: emergencyIcon,
    },
  ];

  return (
    <div className="BoxComponent mx-auto p-4 md:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {servicesData.map((service, index) => (
          <a key={index} href="/" className="box border p-4 text-center relative flex flex-col hover:bg-gray-100">
            <img className="mx-auto block mb-4" src={service.image} alt="/" />
            <div className="title font-bold text-lg mt-2 mb-2">{service.title}</div>
            <div className="description hidden sm:block flex-grow">{service.description}</div>
            {/* "Learn More" link placed at the bottom center */}
            <div className="learnmore mt-auto mb-2">
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
