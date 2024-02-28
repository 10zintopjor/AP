import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Homeboard from "./components/homeboard/Homeboard";
import Footer from "./components/footer/Footer";
import TikTokEmbed from "./components/portfolio/PortfolioHighlight";
import CarouselReviews from "./components/review/CarouselReviews";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
  return (
    <div >
      <Navbar />
      <Homeboard />
      <Services />
      <TikTokEmbed />
      <CarouselReviews />
      <Footer />
    </div>
  );
}

export default App;
