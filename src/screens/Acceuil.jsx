import NewsCarousel from "../Components/Acceuil/NewsCarousel";
import Cards from "../Components/Acceuil/Card";
import Figures from "../Components/Acceuil/Figures";
import AboutUs from "../Components/Acceuil/AboutUs";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";

function Acceuil() {
  return (
    <div>
      <Navbar />
      <NewsCarousel />
      <Cards />
      <AboutUs />
      <Figures />
      <Footer />
    </div>
  );
}

export default Acceuil;
