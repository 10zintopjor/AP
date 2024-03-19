import React, { useState } from 'react';
import { IoChatbubbleEllipses, IoClose } from 'react-icons/io5';

function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const closeChatbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <div className={`fixed bottom-20 right-10 z-50 cursor-pointer`} onClick={toggleChatbox}>
          <IoChatbubbleEllipses className='text-5xl text-black' />
        </div>
      )}
      {isOpen && (
        <div className={`fixed bottom-10 right-10 z-40 bg-gray-100 p-2 rounded-lg border-2 border-gray-400 w-80`}>
          <div className={`bg-white shadow-lg rounded-lg h-auto`}>
            {/* Header Div */}
            <div className='border-b-2 px-2 py-2 flex justify-between items-center'>
              <div className='inline-flex items-center'>
                <img src="" alt="logo" className='w-8'/>
                <span className='ml-8'>
                  Header
                </span>
              </div>
              <div className='cursor-pointer' onClick={closeChatbox}>
                <IoClose className='text-xl text-black' />
              </div>
            </div>
            {/* Body Div */}
            <div className='flex flex-col space-y-4 py-2 h-80'>
              {/* Chatbot Text */}
              <div className='flex flex-col items-start'>
                <span className='bg-blue-500 px-4 py-2 rounded-xl'>
                  Hey, how can I help you?
                </span>
              </div>
              {/* Chatbot user Text */}
              <div className='flex flex-col items-end'>
                <span className='bg-green-500 px-4 py-2 rounded-xl'>
                  I want coffee.
                </span>
              </div>
            </div>
            {/* Footer Div */}
            <div className='border-t-2 flex items-center py-2 px-1 mb-1'>
              <input type="text" placeholder='Type here...' className='flex-1 rounded-lg px-2 py-1 border-2 w-auto mr'/>
              <button type="submit" className='relative right-2 px-4 py-2 border rounded border-gray-600'>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbox;
