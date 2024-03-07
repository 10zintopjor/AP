import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Homeboard from "./components/homeboard/Homeboard";
import Footer from "./components/footer/Footer";
import CarouselReviews from "./components/review/CarouselReviews";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExploreSolutions from "./components/services/ExploreService";


function App() {
  return (
    <div >
      <Navbar />
      <Homeboard />
      <ExploreSolutions />
      <Services />
      <CarouselReviews />
      <Footer />
    </div>
  );
}

export default App;
