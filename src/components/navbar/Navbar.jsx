import React, { useState, useEffect } from 'react';
import Logo from '../../images/Aria Plumbing-logos_white (1).png';
import DesktopNav from './Desktopnav';
import MobileNav from './Mobilenav';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Disable scrolling and interactions with the background page
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling and interactions with the background page
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div>
      {/* Navigation bar */}
      <nav className='bg-customBlue text-white'>
        {/* Container for the navigation bar content */}
        <div className='flex flex-row items-center font-medium justify-around relative flex-grow '> {/* Updated flex properties */}
          {/* Logo and toggle icon for mobile */}
          <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
            <img src={Logo} alt="logo" className='md:cursor-pointer h-20' />
            <div className='text-3xl md:hidden flex items-center' onClick={() => setOpen(!open)} >
              {open ? <MdClose /> : <AiOutlineMenu />}
            </div>
          </div>
          {/* Desktop Navigation */}
          <ul className='md:flex hidden items-center gap-16 text-xl'>
            <DesktopNav />
          </ul>
          {/* Get Started button */}
          <div className='md:block hidden'>
            <button className="bg-red-700 text-white px-8 py-3 rounded-full text-xl"> {/* Updated padding and font size */}
              Get Quote
            </button>
          </div>
          {/* Mobile Menu*/}
          <ul
            className={`
              md:hidden bg-customBlue fixed inset-0 overflow-y-auto text-3xl
              duration-500 ${open ? "left-0" : "left-full"}
              flex flex-col items-center z-50 // Add z-50 to ensure the mobile menu is above the overlay
            `}
          >
            <MobileNav />
            <div className='py-5'></div>
            {/* Close button */}
            <div className='absolute top-5 right-5'>
              <MdClose className='text-white text-3xl' onClick={() => setOpen(false)} />
            </div>
          </ul>
          {/* Overlay to prevent interaction with the background page */}
          {open && <div className="bg-black opacity-50 fixed inset-0 z-40"></div>}
        </div>
      </nav>
      {/* White line under the entire navigation bar */}
      <div className="bg-white h-0.5 w-full"></div>
    </div>
  );
}

export default Navbar;
