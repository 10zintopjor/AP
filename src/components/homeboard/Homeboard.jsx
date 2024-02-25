// Homeboard.js
import React from 'react';
import RequestService from '../requestservice/RequestService';
import logo from "../../images/plumbing_baclground.jpeg"

function Homeboard() {

  return (
    <div className='grid gap-4 sm:grid-cols-2 bg-gray-500'>
      <div className='min-h-[100px]'>
        <h3 className='text-red-500'>This is home board</h3>
      </div>
      <div className=' rounded-lg p-4 flex flex-col items-center justify-center'>
        {/* Decrease the width and center the form */}
        <div className='max-w-sm w-full'>
          <RequestService />
        </div>
      </div>
    </div>
  );
}

export default Homeboard;
