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
import Nopage from './pages/Nopage';

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="TipsAndTricks" element={<TipsAndTricks />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Recipes" element={<Recipes />} />
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;