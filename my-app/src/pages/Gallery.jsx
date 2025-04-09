import React from 'react';
import Navigation from '../components/Navigation';
import './css/Gallery.css';

function Gallery() {
  return (
    <main>
      <div className="main-header">
        <ul className="nav">
          <li><a href="/">The Baking Haven</a></li>
          <li><a href="/Recipes">Recipes</a></li>
          <li><a href="/TipsAndTricks">Tips and Tricks</a></li>
          <li><a href="/Orders">Orders</a></li>
          <li><a href="/About">About Me</a></li>
          <li><a href="/Gallery">Gallery</a></li>
          <li><a href="/Contact">Contact Me</a></li>
        </ul>
      </div>

      <div className="gallery">
        <h1>Cookie Recipes Gallery</h1>
        <div id="recipes" className="content-wrapper">
          {/* Cookie recipes will be dynamically inserted here in a future component */}
        </div>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </main>
  );
}

export default Gallery;
