import React from "react";
import Acceuil from "./screens/Acceuil.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/navbar.jsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Acceuil />
      </div>
      <Footer />
    </div>
  );
}

export default App;
