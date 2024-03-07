import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../images/Aria Plumbing-logos_white (1).png'
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  const onToggleMenu = () => {
    setNavLinksVisible(!navLinksVisible);
  };

  const callUsButtonStyle = {
    background: '#ce2029',
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
      {/* Main navigation bar */}
      <header className="bg-blue-900 text-white z-50">
        <nav className="flex flex-row justify-between items-center md:flex-row w-[92%] mx-auto">
          {/* Logo */}
          <div className='flex items-start m-2'>
          <img style={{ width: '10rem' }} className="cursor-pointer" src={Logo} alt="Logo" />
        </div>


          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <ul className="flex items-center gap-[4vw] text-2xl">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Services
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

          {/* Call Us Button and Social Media Icons */}
          <div className="flex items-center gap-6">
            <button
              style={callUsButtonStyle}
              className="text-white px-5 py-2 rounded-full"
            >
              Call Us
            </button>
            {/* Show social media icons only in desktop view */}
            <div className="hidden md:flex justify-evenly items-center md:items-end">
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

          {/* Mobile Menu Icon */}
          <AiOutlineMenu onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
        </nav>
        <div style={{
      height: '1px',
      backgroundColor: '#ccc', /* Adjust the color as needed */
      width: '100%',
    }}></div>


      </header>

      {/* Mobile Menu */}
      {navLinksVisible && (
        <div className="md:hidden bg-blue-900">
          <ul className="flex flex-col items-start p-4 pl-8" style={mobileMenuStyle}>
            {/* ... (other navigation links) */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
