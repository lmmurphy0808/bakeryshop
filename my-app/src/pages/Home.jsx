import React from 'react';
import './css/Home.css';

function Home() {
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

      <div className="main-content">
        <div className="column left-column">
          <div className="left-content">
            <h1>Single Serve Brown Butter Chocolate Chip Cookie</h1>
          </div>
          <div className="right-content">
            <img src="/images/singleservess.jpg" alt="Image Placeholder" />
          </div>
        </div>

        <div className="column right-column">
          <div className="top-section">
            <img src="/images/cookie1.jpg" alt="Image 1" />
            <div className="text-container">
              <h2>Best Chocolate Chip Cookies</h2>
              <li><a href="#">View Recipe</a></li>
            </div>
          </div>
          <div className="middle-section">
            <img src="/images/cookie2.jpg" alt="Image 2" />
            <div className="text-container">
              <h2>Gluten Free Chocolate Chip Cookies</h2>
              <li><a href="#">View Recipe</a></li>
            </div>
          </div>
          <div className="bottom-section">
            <img src="/images/cookie3.jpg" alt="Image 3" />
            <div className="text-container">
              <h2>No Chill Chocolate Chip Cookies</h2>
              <li><a href="#">View Recipe</a></li>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </main>
  );
}

export default Home;