import React, { useState, useEffect } from "react";
import NewsCarousel from "../Components/Acceuil/NewsCarousel";
import Cards from "../Components/Acceuil/Card";
import Figures from "../Components/Acceuil/Figures";
import AboutUs from "../Components/Acceuil/AboutUs";
import Footer from "../Components/Footer";
import Navbar from "../Components/navbar";
import Fade from "@mui/material/Fade";

function Acceuil() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div>
      <Navbar />

      <Fade in={fadeIn} timeout={1000}>
        <div>
          <NewsCarousel />
        </div>
      </Fade>

      <Fade in={fadeIn} timeout={1500}>
        <div>
          <Cards />
        </div>
      </Fade>

      <Fade in={fadeIn} timeout={2000}>
        <div>
          <AboutUs />
        </div>
      </Fade>

      <Fade in={fadeIn} timeout={2500}>
        <div>
          <Figures />
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Acceuil;
