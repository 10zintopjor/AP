import React, { useEffect } from 'react';

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
    { cite: 'https://www.tiktok.com/@ariaplumbing/video/7312799189577026822?is_copy_url=0&is_from_webapp=v1&lang=en', dataVideoId: '7312799189577026822' },
    { cite: 'https://www.tiktok.com/@example/video/7301855896534011141?is_copy_url=0&is_from_webapp=v1&lang=en', dataVideoId: '7301855896534011141' },
    { cite: 'https://www.tiktok.com/@anotheruser/video/7296700658239999237?is_copy_url=0&is_from_webapp=v1&lang=en', dataVideoId: '7296700658239999237' },
    { cite: 'https://www.tiktok.com/@yetanotheruser/video/7206852973035556101?is_copy_url=0&is_from_webapp=v1&lang=en', dataVideoId: '7206852973035556101' },
  ];

  return (
    <div className="text-center my-8">
      <h2 className="text-3xl font-semibold mb-4">Portfolio Highlight</h2>
      <div className="flex flex-wrap justify-center">
        {/* Map over the videos array and render TikTok videos */}
        {videos.map((video, index) => (
          <blockquote
          key={index}
          className="tiktok-embed m-4 w-full max-w-[320px] min-w-[10px] max-h-[400px] md:max-w-[320px] md:max-h-[555px]"
          cite={video.cite}
          data-video-id={video.dataVideoId}
          data-no-recommend
        >
            <section>
              {/* Additional content can be added here if needed */}
            </section>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default PortfolioHighlight;
