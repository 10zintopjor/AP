import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../images/image-170x90.jpg';

const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  const onToggleMenu = () => {
    setNavLinksVisible(!navLinksVisible);
  };

  const callUsButtonStyle = {
    background: '#161c5a',
    color: 'white',
    fontSize: '1.3rem',
    padding: '10px 20px',
    borderRadius: '50px',
    transition: 'background 0.3s ease-in-out', // Added hover transition
    cursor: 'pointer', // Added cursor pointer
  };

  const mobileMenuStyle = {
    fontSize: '1.5rem',
    textAlign: 'left',
  };

  return (
    <div>
      <header className="bg-white z-50">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img className="w-21 cursor-pointer" src={Logo} alt="Logo" />
          </div>

          <div className="hidden md:flex space-x-4">
            <ul className="flex items-center gap-[4vw] text-xl">
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
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

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
      {/* Display mobile menu items */}
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
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
