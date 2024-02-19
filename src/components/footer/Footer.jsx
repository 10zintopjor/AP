// Footer.js
import React from 'react';
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-5 text-center">
      <div className="flex justify-center mb-5">
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
      <p className="text-sm">© 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
