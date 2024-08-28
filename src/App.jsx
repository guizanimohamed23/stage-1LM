import React from "react";
import Acceuil from "./screens/Acceuil.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Acceuil />
      <Footer style={{ marginTop: "auto" }} />
    </div>
  );
}

export default App;
