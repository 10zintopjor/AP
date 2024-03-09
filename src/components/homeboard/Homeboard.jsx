import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RequestService from '../requestservice/RequestService';

const combinedPhrases = 'Your Family Plumber';

const TypewriterText = () => {
  const characters = combinedPhrases.split('');

  return (
    <div>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const Homeboard = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTypingComplete(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='grid gap-4 sm:grid-cols-2 bg-customBlue'>
      {/* Left side with contrasting text centered */}
      <div className='min-h-[330px] p-4 flex flex-col items-center justify-center sm:ml-12 pb-0 md:pb-2 m-10 text-white'>
        <AnimatePresence>
          {isTypingComplete && (
            <>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-5xl font-bold mb-2 text-center whitespace-pre-line'
              >
                <TypewriterText />
              </motion.h3>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className='text-lg text-center whitespace-pre-line'
              >
                Professional Plumbing & Drain Services
              </motion.h4>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                className='text-lg text-center whitespace-pre-line'
              >
                Commercial and Residential
              </motion.h4>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full m-7"
              >
                Book Your Appointment
              </motion.button>
            </>
          )}
        </AnimatePresence>
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
};

export default Homeboard;
