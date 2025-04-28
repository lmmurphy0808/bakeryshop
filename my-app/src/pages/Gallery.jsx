import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import AddDialog from '../components/add-dialog';
import CookiePlan from '../components/CookiePlan'; // Import the CookiePlan component
import "./css/Gallery.css";

const Gallery = () => {
  const [cookies, setCookies] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  // Fetch cookies from API
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        //"http://localhost:3002/api/cookies" 
        "https://bakery-backend-t744.onrender.com/api/cookies/"
      );
      setCookies(response.data);
      
    })();
  }, []);

  const addCookiePlan = (cookie) => {
    setCookies((cookies) => [...cookies, cookie]);
  }

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <main>
      <div className="main-header">
        <Navigation />
      </div>

      <div id="home">
        <button id="add-cookie" onClick={openAddDialog}>+</button>

        {showAddDialog ? <AddDialog closeDialog={closeAddDialog} addCookiePlan={addCookiePlan} /> : ""}
        <h1>Cookie Recipes Gallery</h1>
        {cookies.map((cookie) => (
          <div className="cookie-card">
          <CookiePlan
            key={cookie.name}
            name={cookie.name}
            level={cookie.level}
            rating={cookie.rating}
            main_image={cookie.main_image}
          />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
