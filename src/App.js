import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Homeboard from "./components/homeboard/Homeboard";
import Footer from "./components/footer/Footer";
import TikTokEmbed from "./components/portfolio/PortfolioHighlight";


function App() {
  return (
    <div >
      <Navbar />
      <Homeboard />
      <Services />
      <TikTokEmbed />
      <Footer />
    </div>
  );
}

export default App;
