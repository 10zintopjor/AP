// Navbar.js
import React, { useState } from 'react';
import Logo from '../../images/Aria Plumbing-logos_white (1).png';
import DesktopNav from './Desktopnav';
import MobileNav from './Mobilenav';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
              md:hidden bg-customBlue fixed w-full top-0 overflow-y-auto bottom-0 mt-40 text-3xl
              duration-500 ${open ? "left-0" : "left-[-100%]"}
              flex flex-col items-center
            `}
          >
            <MobileNav />
            <div className='py-5'></div>
          </ul>
        </div>
      </nav>
      {/* White line under the entire navigation bar */}
      <div className="bg-white h-0.5 w-full"></div>
    </div>
  );
}

export default Navbar;
