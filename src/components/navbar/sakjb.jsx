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
    padding: '15px 30px',
    borderRadius: '50px',
    transition: 'background 0.3s ease-in-out',
  };

  const contentStyle = {
    marginTop: navLinksVisible ? '20px' : '0',
    transition: 'margin-top 0.3s ease-in-out',
  };

  const mobileMenuStyle = {
    fontSize: '1.5rem',
    textAlign: 'right',
  };

  return (
    <div>
      <header className="bg-white z-50">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img className="w-21 cursor-pointer" src={Logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-6">
            <button
              style={callUsButtonStyle}
              className="hover:bg-[#87acec] text-white px-5 py-2 rounded-full"
            >
              Call Us
            </button>
            <AiOutlineMenu onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
          </div>
        </nav>
      </header>
      {/* Display mobile menu items */}
      {navLinksVisible && (
        <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[40vh] left-0 top-full md:w-auto w-full flex items-center px-10 transition-all ease-in-out z-50`} style={contentStyle}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8" style={mobileMenuStyle}>
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



