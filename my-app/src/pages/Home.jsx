import React from 'react';
import Navigation from '../components/Navigation';
import './css/Home.css';
import axios from 'axios';

function Home() {
  return (
    <main>
      <div className="main-header">
        <Navigation />
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