// Navbar.js (Main Navbar Component)
import React, { useState } from 'react';
import Logo from '../../images/Aria Plumbing-logos_white (1).png';
import DesktopNav from './Desktopnav';
import MobileNav from './Mobilenav';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-customBlue text-white'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
          <img src={Logo} alt="logo" className='md:cursor-pointer h-20' />
          <div className='text-3xl md:hidden flex items-center' onClick={() => setOpen(!open)} >
            {open ? <MdClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-16 text-xl'>
          
          <DesktopNav />
        </ul>
        <div className='md:block hidden'>
        <button className="bg-red-700 text-white  px-6 py-2 rounded-full">
          Get Started
        </button>
        </div>
        {/* Mobile Menu*/}
        <ul
          className={`
            md:hidden bg-customBlue fixed w-full top-0 overflow-y-auto bottom-0 mt-40 text-3xl
            duration-500 ${open ? "left-0" : "left-[-100%]"}
            flex flex-col items-center  // Add these classes
          `}
        >
          
          <MobileNav />
          <div className='py-5'>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
