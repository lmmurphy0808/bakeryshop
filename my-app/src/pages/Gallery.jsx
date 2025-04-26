import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import AddDialog from '../components/add-dialog';
import "./css/Gallery.css";

const Gallery = () => {
  const [cookies, setCookies] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  //useEffect
  useEffect(() => {
    (async () => {
      const response = await axios.get(
         //"https://lmmurphy0808.github.io/json/gallery.json"
       "http://localhost:3002/api/cookies"
       //"https://bakery-backend-t744.onrender.com/api/cookies/"
      );
      setCookies(response.data);
    })();
  }, []);

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

        <div className="gallery">
        <div id ="home">
          <button id="add-cookie" onClick={openAddDialog}>
            +
          </button>

          {showAddDialog ? <AddDialog closeDialog={closeAddDialog}/> : ""}
          
          <h1>Cookie Recipes Gallery</h1>
          {cookies.map((cookie) => (
            <div key={cookie.id} className="cookie-card">
              <h2>{cookie.name}</h2>
              <p>Level: {cookie.level}</p>
              <p>Rating: {cookie.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  ); 
  
}

export default Gallery;