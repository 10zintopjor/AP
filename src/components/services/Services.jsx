// Services.js
import React from 'react';
import { Typography, Button, Card, CardContent, Divider } from '@mui/material';
import styles from "./Services.module.css";

function Services() {
  // Sample service data (you can replace this with actual data)
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
    // Add more services as needed
  ];

  // Limit the number of services displayed initially
  const displayedServices = servicesData; // Change the number as needed

  return (
    <div className={styles.Services}>
      <Typography variant='h5'>Our Services</Typography>
      <Divider />

      <div className={styles.serviceContainer}>
        {displayedServices.map((service, index) => (
          <Card key={index} className={styles.serviceCard}>
            <CardContent>
              <Typography variant='h6'>{service.title}</Typography>
              <Typography>{service.description}</Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}

        <a href="/view-all" className={styles.viewAllLink}>
          <Typography variant='body2'>
            View All
          </Typography>
        </a>
      </div>
    </div>
  );
}

export default Services;
