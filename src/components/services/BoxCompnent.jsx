import React from 'react';
import plumbingIcon from '../../images/icons8-plumbing-50.png';
import emergencyIcon from '../../images/icons8-emergency-50.png';
import drainIcon from '../../images/icons8-pipe-50.png';
import sewerIcon from '../../images/icons8-manhole-cover-50.png';

const BoxComponent = () => {
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const servicesData = [
    {
      title: 'Plumbing Repairs',
      description: 'Professional plumbing repair services for your home or business.',
      image: plumbingIcon,
    },
    {
      title: 'Drain Cleaning',
      description: 'Efficient drain cleaning services to keep your pipes clear.',
      image: drainIcon,
    },
    {
      title: 'Sewer Line Inspection',
      description: 'Comprehensive sewer line inspection services to identify and address potential issues.',
      image: sewerIcon,
    },
    {
      title: 'Emergency Services',
      description: '24/7 emergency plumbing services for urgent situations.',
      image: emergencyIcon,
    },
  ];

  return (
    <div className="BoxComponent mx-auto p-6 md:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {servicesData.map((service, index) => (
          <a key={index} href="/" className="box border p-6 text-center relative flex flex-col hover:bg-gray-100">
            <img className="mx-auto block mb-4 w-16 h-16" src={service.image} alt="/" />
            <div className="title font-bold text-2xl mt-4 mb-4">{service.title}</div>
            {/* Show truncated description on both mobile and desktop */}
            <div className="description flex-grow text-sm md:text-base line-clamp-3 text-gray-500">{truncateDescription(service.description, 100)}</div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default BoxComponent;
