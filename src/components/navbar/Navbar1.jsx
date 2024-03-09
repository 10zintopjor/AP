// src/components/Navbar.js
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaTimes, FaAngleDown } from 'react-icons/fa';
import Logo from '../../images/Aria Plumbing-logos_white (1).png';
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setNavLinksVisible(!navLinksVisible);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setNavLinksVisible(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
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
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1a365d',
    color: 'white',
    padding: '2rem',
    zIndex: 1000,
    transform: `translateX(${navLinksVisible ? 0 : '100%'})`,
    transition: 'transform 0.5s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'auto', // Allow vertical scrolling
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    fontSize: '2rem',
    cursor: 'pointer',
    marginBottom: '2rem',
  };

  const subMenuStyle = {
    textAlign: 'center',
  };

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  const navItems = [
    { label: 'Home', link: '#' },
    {
      label: 'Services',
      subItems: [
        { label: 'Service 1', link: '#' },
        { label: 'Service 2', link: '#' },
        { label: 'Service 3', link: '#' },
      ],
    },
    { label: 'Reviews', link: '#' },
    { label: 'Contact Us', link: '#' },
  ];

  return (
    <div>
      <header className="bg-customBlue text-white z-50">
        <nav className="flex flex-row justify-between items-center md:flex-row w-[92%] mx-auto">
          <div className='flex items-start m-2'>
            <img style={{ width: '10rem' }} className="cursor-pointer" src={Logo} alt="Logo" />
          </div>

          <div className="hidden md:flex space-x-4">
          <ul className="flex items-center gap-[4vw] text-2xl">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(index)}
                >
                  <a
                    className={`hover:text-gray-500 cursor-pointer flex items-center ${
                      activeDropdown === index && 'relative'
                    }`}
                    href={item.link}
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <FaAngleDown
                        style={{
                          marginLeft: '3px',
                          fontSize: '1rem', // Adjust the size as needed
                          verticalAlign: 'middle',
                        }}
                      />
                    )}
                  </a>
                  {item.subItems && activeDropdown === index && (
                    <ul
                      className="mt-2 space-y-2 bg-white border rounded-md shadow-lg absolute"
                      style={subMenuStyle}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a className="block px-4 py-2 text-sm text-gray-700" href={subItem.link}>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              style={callUsButtonStyle}
              className="text-white px-5 py-2 rounded-full"
            >
              Call Us
            </button>
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

          <AiOutlineMenu onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
        </nav>
        <div style={{ height: '1px', backgroundColor: '#ccc', width: '100%' }}></div>
      </header>

      <div style={mobileMenuStyle}>
        <div className="flex justify-end">
          <FaTimes onClick={closeMenu} style={closeButtonStyle} className="text-xl cursor-pointer" />
        </div>
        <ul className="flex flex-col items-center mt-20 w-100%">
          {navItems.map((item, index) => (
            <li key={index} className="mb-6">
              {item.subItems ? (
                <div className="relative group" style={subMenuStyle}>
                  <a
                    className="font-bold text-3xl cursor-pointer flex items-center"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.label}</span>
                    <FaAngleDown
                      style={{
                        marginLeft: '3px',
                        fontSize: '1rem', // Adjust the size as needed
                        verticalAlign: 'middle',
                      }}
                    />
                  </a>
                  {item.subItems && activeDropdown === index && (
                    <motion.ul
                      className="mt-2 space-y-2"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a className="text-white text-xl" href={subItem.link}>
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ) : (
                <a
                  className="hover:text-gray-500 font-bold text-3xl"
                  href={item.link}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
