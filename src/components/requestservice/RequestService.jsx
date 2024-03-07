import React from 'react';

function RequestService() {
  return (
    <div className="m-4 mx-px flex flex-col bg-gray-300 rounded-lg p-6 shadow-sm">
      <h2 className="ai-story-maker-dream-form text-black font-bold text-3xl mb-4">Request a Service</h2>

      <div className="mt-4">
        <input
          placeholder="Name"
          className="w-full bg-white rounded-md border-gray-300 text-black px-4 py-2"
          type="text"
        />
      </div>
      <div className="mt-4">
        <input
          placeholder="Phone Number"
          className="w-full bg-white rounded-md border-gray-300 text-black px-4 py-2"
          type="text"
        />
      </div>

      <div className="mt-4">
        <textarea
          placeholder="Your address"
          className="w-full bg-white rounded-md border-gray-300 text-black px-4 py-2"
          style={{ height: '80px' , resize: 'none'}} // Set a fixed height
          id="address"
        ></textarea>
      </div>


      <div className="mt-4">
        <textarea
          placeholder="Job Description"
          className="w-full bg-white rounded-md border-gray-300 text-black px-4 py-2"
          style={{ height: '100px', resize: 'none' }} // Set a fixed height
          id="description"
        ></textarea>
      </div>

     

      <div className="mt-4 flex justify-end">
        <button
          className="bg-red-600 text-white rounded-md px-6 py-2 hover:bg-gray-200 hover:text-gray-900"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RequestService;
