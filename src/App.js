import { Navbar } from './Navbar';
import { Footer } from './Footer'; 
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Legals from './pages/Legals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/pages/home" element={<Home/>}></Route>
          <Route path="/pages/services" element={<Services/>}></Route>
          <Route path="/pages/realisations" element={<Realisations/>}></Route>
          <Route path="/pages/contact" element={<Contact/>}></Route>
          <Route path="/pages/legals" element={<Legals/>}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App;
