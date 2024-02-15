import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Homeboard from "./components/homeboard/Homeboard";
import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.homecontainer}>
      <Navbar />
      <Homeboard />
      </div>
      <Services />
    </div>
  );
}

export default App;
