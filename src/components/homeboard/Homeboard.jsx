import React, { useState, useEffect, useRef } from 'react';
import RequestService from '../requestservice/RequestService';
import logo from '../../images/plumbing_baclground.jpeg';

function Homeboard() {
  const [textOpacity, setTextOpacity] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const increaseOpacity = setInterval(() => {
      if (textOpacity < 1) {
        setTextOpacity((prevOpacity) => prevOpacity + 0.1); // Adjust for desired speed
      } else {
        clearInterval(increaseOpacity);
      }
    }, 50); // Adjust for desired delay between opacity changes

    return () => clearInterval(increaseOpacity);
  }, []);

  return (
    <div className='grid gap-4 sm:grid-cols-2 bg-gray-100 mt-2'>
      {/* Left side with contrasting text centered */}
      <div className='min-h-[100px] p-4 flex flex-col items-center justify-center sm:ml-12 pb-0 md:pb-2 m-10'>
        <h3 ref={textRef} className='text-4xl font-bold mb-2 text-center' style={{ opacity: textOpacity }}>
          Your Family Plumber
        </h3>
        <p ref={textRef} className='text-lg text-center ' style={{ opacity: textOpacity }}>
          Professional Plumbing & Drain Services
        </p>
        <p className='text-lg text-center'>
          Commercial and Residential
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full m-7"
        >
          Book Your Appointment
        </button>
      </div>

      {/* Right side with the form (hidden on desktop) */}
      <div className='hidden sm:block rounded-lg p-4 pt-0 sm:pt-2'>
        {/* Decrease the width, center the form, and adjust left margin */}
        <div className='max-w-sm w-full mx-auto sm:ml-15 '>
          <RequestService />
        </div>
      </div>
    </div>
  );
}

export default Homeboard;
