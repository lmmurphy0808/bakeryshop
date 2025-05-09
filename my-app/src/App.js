import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import TipsAndTricks from './pages/TipsAndTricks';
import Orders from './pages/Orders';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact'; 
import About from './pages/About';
import Delivery from './pages/Delivery';
import Pickup from './pages/Pickup';
import Nopage from './pages/Nopage';

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="TipsAndTricks" element={<TipsAndTricks />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Recipes" element={<Recipes />} />
        <Route path="Delivery" element={<Delivery />} />
        <Route path="Pickup" element={<Pickup />} />
        <Route path="*" element={<Nopage/>} />
      </Routes>
    </Router>
  );
};

export default App;