import React from 'react';
import Navigation from '../components/Navigation';
import './css/Recipes.css';

function Recipes() {
  return (
    <main>
      <div className="main-header">
        <Navigation />
      </div>

      <div className="recipe-content">
        <div className="recipe-header">
          <div className="left-content-recipe">
            <img src="/images/cookie4.jpg" alt="Image Placeholder" />
          </div>
          <div className="right-content-recipe">
            <h1>Single Serve Brown Butter Chocolate Chip Cookie</h1>
            <p>Prep Time: 30 min Cook Time: 12 min Total Time: 42 min</p>
            <p>Yield: 1 cookie</p>
            <p>Try this simple classic chocolate chip cookie recipe for one!</p>
            <button id="jump">Jump to Recipe!</button>
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="right-content-second">
          <h2>What are single serve cookies?</h2>
          <p>A single serve cookie is a cookie designed to be baked individually...</p>
        </div>
        <div className="left-content-second">
          <img src="/images/horizontal1.jpg" alt="Cookies Image" />
        </div>
        <div className="right-content-second">
          <h2>Why exactly is this the best chocolate chip cookie recipe to exist?</h2>
          <p>This is the best chocolate chip cookie recipe because it combines the perfect balance...</p>
        </div>
        <div className="left-content-second">
          <img src="/images/horizontal2.webp" alt="Cookies Image 1" />
        </div>
      </div>

      <div className="recipe-info">
        <div className="recipe-info-header">
          <img src="/images/cookie3.jpg" alt="Recipe Image" />
          <h1>Single Serve Brown Butter Chocolate Chip Cookie</h1>
        </div>
        <h2>Ingredients:</h2>
        <ul>
          <li>2 tablespoons unsalted butter, softened</li>
          <li>2 tablespoons brown sugar, packed</li>
          <li>1 tablespoon granulated sugar</li>
          <li>1/4 teaspoon vanilla extract</li>
          <li>1 egg yolk</li>
          <li>1/4 cup all-purpose flour</li>
          <li>Pinch of baking soda (about 1/8 teaspoon)</li>
          <li>Pinch of salt</li>
          <li>1/4 cup chocolate chips</li>
        </ul>

        <h2>Instructions:</h2>
        <ol>
          <li>Preheat your oven to 350°F (175°C).</li>
          <li>Cream together the softened butter, brown sugar, and granulated sugar until smooth.</li>
          <li>Stir in the egg yolk and vanilla extract until well combined.</li>
          <li>Add the flour, baking soda, and salt, then fold in the chocolate chips.</li>
          <li>Scoop dough into 2 portions on a parchment-lined baking sheet.</li>
          <li>Bake for 8-10 minutes until edges are golden.</li>
          <li>Let the cookies cool completely before enjoying!</li>
        </ol>
      </div>

      <div className="recommendations">
        <h2>You might also like...</h2>
        <div className="recommendations-container">
          <div className="recommendation-item">
            <img src="/images/cookiebatch.jpg" alt="Cookies" />
            <p>Cookies</p>
            <a href="#">Read Now</a>
          </div>
          <div className="recommendation-item">
            <img src="/images/cupcakebatch.jpg" alt="Cupcakes & Muffins" />
            <p>Cupcakes & Muffins</p>
            <a href="#">Read Now</a>
          </div>
          <div className="recommendation-item">
            <img src="/images/barsbatch.jpg" alt="Bars" />
            <p>Bars</p>
            <a href="#">Read Now</a>
          </div>
        </div>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </main>
  );
}

export default Recipes;
