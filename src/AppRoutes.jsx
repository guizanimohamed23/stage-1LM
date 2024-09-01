import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./screens/Acceuil";
import Actualité from "./screens/Actualité";
import Information from "./screens/Information";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/actualite" element={<Actualité />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
