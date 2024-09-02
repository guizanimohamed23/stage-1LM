import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./screens/Acceuil";
import Actualite from "./screens/Actualite";
import Information from "./screens/Information";
import NotreMission from "./screens/NotreMission";
import Publication from "./screens/Publication";
import LaPresse from "./screens/LaPresse";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="mission" element={<NotreMission />} />
        <Route path="information" element={<Information />} />
        <Route path="publication" element={<Publication />} />
        <Route path="actualite"   element={<Actualite />} />
        <Route path="presse" element={<LaPresse />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
