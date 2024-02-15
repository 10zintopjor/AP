// Homeboard.js
import React from 'react';
import styles from './Homeboard.module.css';

function Homeboard() {
  return (
    <div className={styles.box}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.heading}>Aria Plumbing in GTA</div>
          <div className={styles.description}>Your family Plumber</div>
          <div className={styles.buttons}>
            <a href="/" className={styles.button}>Get Quote</a>
            <a href="/" className={styles.button}>Call Us</a>
          </div>
        </div>
      </div>
      {/* Image is set as a background in CSS */}
    </div>
  );
}

export default Homeboard;
