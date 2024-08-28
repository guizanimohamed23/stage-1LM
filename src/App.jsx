import React from "react";
import Acceuil from "./Components/Pages/Acceuil.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Acceuil />
      <Footer />
    </div>
  );
}

export default App;
