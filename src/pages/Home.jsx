import React, { useState } from 'react';
import Navbar from ".././components/navbar/Navbar";
import Services from ".././components/services/Services";
import Homeboard from ".././components/homeboard/Homeboard";
import Footer from ".././components/footer/Footer";
import CarouselReviews from ".././components/review/CarouselReviews";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExploreSolutions from ".././components/services/ExploreService";
import Chatbox from "../components/chatbot/Chatbox";
import { IoChatbubbleEllipses } from "react-icons/io5";

function Home() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <>
      <Navbar />
      <Homeboard />
      <Chatbox />
      <ExploreSolutions />
      <Services />
      <CarouselReviews />
      <Footer />
      
    </>
  );
}

export default Home;
