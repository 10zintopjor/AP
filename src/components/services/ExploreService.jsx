import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { GrUserWorker } from 'react-icons/gr';
import { BiSolidBadgeDollar } from 'react-icons/bi';

const ExploreSolutions = () => {
  const solutionsData = [
    {
      title: '24/7 Availability',
      icon: <BiPhoneCall size={60} />,
      text: 'Our services are available 24 hours a day, 7 days a week to ensure we are there for you whenever you need us.',
    },
    {
      title: 'Experienced Team',
      icon: <GrUserWorker size={60} />,
      text: 'Our team of highly skilled and experienced plumbers is dedicated to providing quality service and expertise.',
    },
    {
      title: 'Fair Price',
      icon: <BiSolidBadgeDollar size={60} />,
      text: 'We believe in transparent pricing and fair rates. Our goal is to provide affordable plumbing solutions without compromising quality.',
    },
  ];

  return (
    <div className="text-center w-full lg:w-4/5 mx-auto mt-10">
      <h2 className="text-5xl font-semibold mb-8">Explore Services and Solutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutionsData.map((solution, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md flex items-center">
            <div className="mr-4">{solution.icon}</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-2">{solution.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSolutions;
