import "../styles/galleryplan.css";
import React from "react";

const Gallery = (cookies) => {
    //const imageSrc = 'https://lmmurphy0808.github.io/json/images/cookies/${cookies.main_image}';
    //const imageSrc = `http://localhost:3001/${cookies.main_image}`;
    //const imageSrc = 'http://localhost:3001/';
    const imageSrc = `https://bakery-backend-t744.onrender.com/${cookies.main_image}`;
    return (
        <div>
            <section className="Gallery">
                <section className="feature-image">
                    <img src={imageSrc} alt={cookiePlain.name} />
                </section>
                <section className="info">
                    <h2>{cookie.name}</h2>

                    <p>Level: {cookie.level}</p>
                    <p>Rating: {cookie.rating}</p>
                </section>
            </section>
        </div>
    )
};  

export default Gallery;
