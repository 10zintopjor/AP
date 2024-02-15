// BoxComponent.js
import React from 'react';
import styles from "./BoxComponent.module.css"

const BoxComponent = () => {
    const servicesData = [
        {
          title: 'Plumbing Repairs',
          description: 'Our experienced plumbers provide efficient and reliable plumbing repair services for your home or business.',
        },
        {
          title: 'Pipe Installation',
          description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
        },
        {
            title: 'Pipe Installation',
            description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
          },
          {
            title: 'Pipe Installation',
            description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
          },
          {
            title: 'Pipe Installation',
            description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
          },
          {
            title: 'Pipe Installation',
            description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
          },
          {
            title: 'Pipe Installation',
            description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
          },
          {
            title: 'Pipe Installation',
            description: 'Need new pipes installed? Our skilled team ensures proper and durable pipe installations for various applications.',
          },
        // Add more services as needed
      ];
  return (
    <div className={styles.BoxComponent}>
    <div className={styles.grid}>
        {servicesData.map((service,index) => (
            <div className={styles.box} key={index}>
                <div className={styles.title}>
                    {service.title}
                </div>
                <div className={styles.description}>
                    {service.description}
                </div>
                <div className={styles.learnmore}>
                <a href="/">learn More</a>
                </div>
            </div>

        ))}
        
    </div>
    <a href="/view-all" className={styles.viewAllLink}>
            View All
        </a>
    </div>
    
  );
};

export default BoxComponent;
