// Services.js
import React from 'react';
import styles from "./Services.module.css";
import BoxComponent from './BoxCompnent';

function Services() {

  return (
    <div className={styles.Services}>
      <h2>Our Services</h2>
      <br />
      <BoxComponent />
        
    </div>
  );
}

export default Services;
