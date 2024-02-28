import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CarouselReviews = () => {
  // Your reviews data
  const reviews = [
    { id: 1, text: 'Jay was great. He did a good job diagnosing, explaining, and communicating what was needed to fix the issue. He was thorough. He also gave good tips on how to prevent the issue from reoccurring. Thanks!', author: 'Melissa Ann' },
    { id: 2, text: 'Very professional and fast. Also very friendly, answered all my questions. I am happy to recommend his services.', author: 'Babatunde Olumoto' },
    { id: 3, text: 'Honest, reliable, great to deal with, positive attitude. He came when he said he would and came promptly. My go-to plumber. A pleasure to work with!', author: 'Theresa Pegolo' },
    // Add more reviews as needed
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the interval in milliseconds (e.g., 5000ms = 5 seconds)
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Customer Reviews</h2>
      <Slider {...settings} className='shadow-inner'>
        {reviews.map((review) => (
          <div key={review.id} className="p-6 rounded-lg">
            <Card className="h-72 w-96 bg-blue-900 text-white shadow-lg flex flex-col items-center justify-center">
              <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                  {review.text}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="caption">
                  - {review.author}
                </Typography>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselReviews;
