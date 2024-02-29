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
    autoplaySpeed: 113000,
    dots: true,
    nextArrow: <div className="slick-arrow slick-next"><span className="material-icons">keyboard_arrow_right</span></div>,
    prevArrow: <div className="slick-arrow slick-prev"><span className="material-icons">keyboard_arrow_left</span></div>,
    responsive: [
      {
        breakpoint: 640, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full lg:w-2/3 mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Reviews</h2>

      <Slider {...settings} className="">
        {reviews.map((review) => (
          <div key={review.id} className="p-2">
            <Card className="mx-auto h-60 sm:h-40 flex flex-col relative border-t-2">
              <CardBody className="text-center flex-grow p-2">
                <Typography variant="body2" className="">
                  {review.text}
                </Typography>
              </CardBody>
              <CardFooter className="flex items-center justify-between">
                <RatingStars rating={review.rating} />
                <div className="flex items-center">
                  <FaRegUserCircle className="ml-2" />
                  <Typography variant="caption" className="ml-1">
                    {review.author}
                  </Typography>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselReviews;
