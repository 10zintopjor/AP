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
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <AiFillStar key={index} size={20} className="text-yellow-500" />
  ));

  return <div className="flex">{stars}</div>;
};

const CarouselReviews = () => {
  // Your reviews data
  const reviews = [
    { id: 1, text: 'Jay was great. He did a good job diagnosing, explaining, and communicating what was needed to fix the issue. He was thorough. He also gave good tips on how to prevent the issue from reoccurring. Thanks!', author: 'Melissa Ann', rating: 5 },
    { id: 2, text: 'Very professional and fast. Also very friendly, answered all my questions. I am happy to recommend his services.', author: 'Babatunde Olumoto', rating: 4 },
    { id: 3, text: 'Honest, reliable, great to deal with, positive attitude. He came when he said he would and came promptly. My go-to plumber. A pleasure to work with!', author: 'Theresa Pegolo', rating: 5 },
    // Add more reviews as needed
  ];

  // Carousel settings
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the speed as needed
    dots: true,
    nextArrow: <div className="slick-arrow slick-next"><span className="material-icons">keyboard_arrow_right</span></div>,
    prevArrow: <div className="slick-arrow slick-prev"><span className="material-icons">keyboard_arrow_left</span></div>,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-2/3 mx-auto">
      <h2 className="text-5xl font-semibold mb-8 text-center">Reviews</h2>

      <Slider {...settings} className="">
        {reviews.map((review) => (
          <div key={review.id} className="p-2">
            <Card className="mx-auto h-48 flex flex-col border border-gray-300 rounded-lg overflow-hidden">
              <CardBody className="flex-grow p-4 flex items-center justify-center">
                <Typography variant="body2" className="text-gray-700 text-center">
                  {review.text}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between bg-gray-100 p-4">
                <div className="flex items-center">
                  <FaRegUserCircle className="text-blue-500" />
                  <Typography variant="caption" className="ml-2 text-gray-600">
                    {review.author}
                  </Typography>
                </div>
                <RatingStars rating={review.rating} />
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselReviews;
