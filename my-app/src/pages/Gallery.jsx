import React from 'react';
import './css/Gallery.css';

function Gallery() {
  return (
    <main>
      <div className="main-header">
        <ul className="nav">
            <li><a href="/">The Baking Haven</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/tipsandtricks">Tips and Tricks</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact Me</a></li>
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
