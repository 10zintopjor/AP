import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PortfolioHighlight = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Array of video details
  const videos = [
    {
      cite: 'https://www.tiktok.com/@ariaplumbing/video/7312799189577026822?is_copy_url=0&is_from_webapp=v1&lang=en',
      dataVideoId: '7312799189577026822',
    },
    {
      cite: 'https://www.tiktok.com/@example/video/7301855896534011141?is_copy_url=0&is_from_webapp=v1&lang=en',
      dataVideoId: '7301855896534011141',
    },
    {
      cite: 'https://www.tiktok.com/@anotheruser/video/7296700658239999237?is_copy_url=0&is_from_webapp=v1&lang=en',
      dataVideoId: '7296700658239999237',
    },
    {
      cite: 'https://www.tiktok.com/@yetanotheruser/video/7206852973035556101?is_copy_url=0&is_from_webapp=v1&lang=en',
      dataVideoId: '7206852973035556101',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const customContainerStyle = {
    padding: '0 20px', // Adjust the left and right padding as needed
  };

  return (
    <div className="text-center my-8 w-full lg:w-4/5 mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Portfolio Highlights</h2>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        customStyle={customContainerStyle} // Custom inline style
      >
        {/* Map over the videos array and render TikTok videos */}
        {videos.map((video, index) => (
          <blockquote
            key={index}
            className="tiktok-embed m-4 w-full max-w-[320px] min-w-[10px] max-h-[550px] md:max-w-[320px] md:max-h-[555px]"
            cite={video.cite}
            data-video-id={video.dataVideoId}
            data-no-recommend
          >
            <section>{/* Additional content can be added here if needed */}</section>
          </blockquote>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioHighlight;
