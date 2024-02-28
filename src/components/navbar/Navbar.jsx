import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../images/image-170x90.jpg';
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  const onToggleMenu = () => {
    setNavLinksVisible(!navLinksVisible);
  };

  const callUsButtonStyle = {
    background: '#e53e3e',
    color: 'white',
    fontSize: '1.3rem',
    padding: '10px 20px',
    borderRadius: '50px',
    transition: 'background 0.3s ease-in-out',
    cursor: 'pointer',
  };

  const mobileMenuStyle = {
    fontSize: '1.5rem',
    textAlign: 'left',
  };

  return (
    <div>
      {/* Top contact nav row with custom background color */}
    <div className="bg-blue-900 text-white flex flex-col items-center justify-center py-4 h-auto md:flex-row md:items-center">
      <div className='md:items-end'>
      <p className="whitespace-nowrap text-center">
       Contact us: (123) 456-7890 | example@email.com
      </p>
      </div>

    <div className="flex justify-evenly mt-4 md:mt-0 md:ml-20">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 md:mx-4">
        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 md:mx-4">
        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 md:mx-4">
        <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
      </a>
    </div>
  </div>


      {/* Main navigation bar */}
      <header className="bg-white z-50">
        <nav className="flex flex-row justify-between items-center md:flex-row w-[92%] mx-auto">
          {/* Logo */}
          <div className='flex items-start'>
            <img className="w-21 cursor-pointer" src={Logo} alt="Logo" />
          </div>

          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <ul className="flex items-center gap-[4vw] text-xl">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Serivces
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Reviews
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Contact Us 
                </a>
              </li>
              {/* ... (other navigation links) */}
            </ul>
          </div>

          {/* Call Us Button and Mobile Menu Icon */}
          <div className="flex items-center gap-6">
            <button
              style={callUsButtonStyle}
              className="hover:bg-[#cccfd5] text-white px-5 py-2 rounded-full"
            >
              Call Us
            </button>
            <AiOutlineMenu onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {navLinksVisible && (
        <div className="md:hidden bg-white mt-2">
          <ul className="flex flex-col items-start p-4 pl-8" style={mobileMenuStyle}>
          <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Serivces
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Reviews
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Contact Us 
                </a>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
