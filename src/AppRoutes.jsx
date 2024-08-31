import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './screens/Acceuil'
import Actualité from './screens/Actualité';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/actualite" element={<Actualité />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;