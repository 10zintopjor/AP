// Homeboard.js
import React from 'react';
import RequestService from '../requestservice/RequestService';
import logo from "../../images/plumbing_baclground.jpeg"

function Homeboard() {
  const backgroundImageUrl = "../../images/plumbing_baclground.jpeg";

  return (
    <div className='grid m-4 gap-4 sm:grid-cols-2'>
      <div className='min-h-[100px]' >
      <h3 className='text-red-500'> Rhis is home board</h3>
      </div>
      <div className='min-h-[100px] rounded-lg p-4 flex flex-col'>
        <RequestService />
      </div>
    </div>
  );
}

export default Homeboard;
