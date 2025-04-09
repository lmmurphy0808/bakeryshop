import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track if the nav is open

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the nav state
  };

  return (
    <nav className="navigation">
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <ul className={`nav ${isNavOpen ? 'open' : ''}`}>
        <li><Link to="/">The Baking Haven</Link></li>
        <li><Link to="/Recipes">Recipes</Link></li>
        <li><Link to="/TipsAndTricks">Tips and Tricks</Link></li>
        <li><Link to="/Orders">Orders</Link></li>
        <li><Link to="/About">About Me</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/Contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
