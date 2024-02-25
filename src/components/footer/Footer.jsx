// Footer.js
import React from 'react';
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from './Map';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-5 text-center">
      <div className="flex flex-wrap justify-around items-start mb-5 flex-row">
        <div className="mx-2 mb-4 w-full md:w-1/3 lg:w-1/4">
          <h4 className="text-lg font-semibold mb-2">Why Us</h4>
          <ul className="list-none p-0 m-10">
            <li>Reason 1</li>
            <li>Reason 2</li>
            <li>Reason 3</li>
          </ul>
        </div>
        <div className="mx-2 mb-4 w-full md:w-1/3 lg:w-1/4">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-evenly m-10">
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
          <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
          {/* Adjust the width for smaller screens using responsive classes */}
          <div className="w-full sm:w-1/2 md:w-full lg:w-full">
            <Map />
          </div>
        </div>
      </div>
      <p className="text-sm">© 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
