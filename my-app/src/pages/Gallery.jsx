import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import './css/Gallery.css';

const Gallery = () => {
  const [ cookies, setCookies ] = useState([]);

  //useEffect
  useEffect(() => {
    (async () => {
      const response = await axios.get(
         //"https://lmmurphy0808.github.io/json/gallery.json"
       "http://localhost:3001/api/cookies"
       //"https://bakery-backend-t744.onrender.com/api/cookies/"
      );
      setCookies(response.data);
    })();
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