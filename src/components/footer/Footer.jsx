// Footer.js
import React from 'react';
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from './Map';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-5 text-center mt-20">
      <div className="flex flex-wrap justify-around items-start mb-50 flex-row">
      <div className="mx-2 mb-4 w-full md:w-1/3 sm:h-100 lg:w-1/4">
          <h4 className="text-2xl font-semibold mb-6">Reach Us</h4>
          <div className="p-4 bg-black rounded-lg">
            <h2 className='text-2xl font-bold mb-2'> Aria Plumbing</h2>
            <div className="border-b-2 border-white w-22 mx-auto mb-2"></div>
            <h4 className="text-lg font-semibold mb-2">Your Family Plumber</h4>
            <p className="text-sm mb-2">Professional Plumbing & Drain Services</p>
            <p className="text-xs">Commercial & Residential</p>
            <p className="text-xs mt-4">* TAPS • FAUCETS • SINKS • TOILETS • PIPE REPLACEMENT</p>
            <p className="text-xs">* PLUGGED DRAINS • BACKED UP SEWERS • HOT WATER</p>
            <p className="text-xs">* WATER PROOFING • SUM PUMP • BACKFLOW PREVENTER</p>
            <p className="text-sm mt-2"><a href="https://www.ariaplumbing.ca" target="_blank" rel="noopener noreferrer">www.ariaplumbing.ca</a></p>
          </div>
        </div>
        <div className="mx-2 mb-4 w-full md:w-1/3 lg:w-1/4">
          <h4 className="text-2xl font-semibold mb-2 mt-2">Follow Us</h4>
          <div className="flex justify-evenly m-10 mb-5">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="mx-2 mb-4 w-full md:w-1/3 lg:w-1/4">
          <h4 className="text-2xl font-semibold mb-2 text-center">Visit Us</h4>
          {/* Adjust the width for smaller screens using responsive classes */}
          <div className="flex justify-center m-10">
            <Map />
          </div>
        </div>
      </div>
      <p className="text-sm">© 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
