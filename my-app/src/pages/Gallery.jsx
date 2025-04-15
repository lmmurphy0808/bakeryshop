import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import './css/Gallery.css';

function Gallery() {
  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cookies');
        setCookies(response.data);
      } catch (error) {
        console.error('Error fetching cookie data:', error);
      }
    };

    fetchCookies();
  }, []);

  return (
    <main>
      <div className="main-header">
        <Navigation />
      </div>

      <div className="gallery">
        <h1>Cookie Recipes Gallery</h1>
        {cookies.map((cookie) => (
          <div key={cookie.id} className="cookie-card">
            <h2>{cookie.name}</h2>
            <p>Level: {cookie.level}</p>
            <p>Rating: {cookie.rating}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;
