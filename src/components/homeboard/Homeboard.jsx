// Homeboard.js
import React from 'react';
import RequestService from '../requestservice/RequestService';
import logo from "../../images/plumbing_baclground.jpeg";

function Homeboard() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 bg-blue-900'>
      {/* Left side with contrasting text centered */}
      <div className='min-h-[100px] p-4 flex flex-col items-center justify-center sm:ml-12 pb-0 md:pb-2 m-10 text-white'>
        <h3 className='text-5xl font-bold mb-2 text-center'>
          Your Family Plumber
        </h3>
        <p className='text-lg text-center sm:mb-4'>
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
