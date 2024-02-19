// Footer.js
import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTiktok,faInstagram} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
         <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <p className={styles.copy}>© 2024 Your Website Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
