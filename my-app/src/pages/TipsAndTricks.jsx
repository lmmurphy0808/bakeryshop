import React from 'react';
import Navigation from '../components/Navigation';
import './css/TipsAndTricks.css';

function TipsAndTricks() {
  return (
    <main>
      <div className="main-header">
        <Navigation />
      </div>

      <div className="tips-and-tricks">
        <h1>Tips and Tricks in the Baking Industry</h1>

        <p>One of the most crucial techniques in baking is properly measuring ingredients. Accurate measurements ensure consistency and the desired texture in your baked goods, preventing issues like dry or overly dense results. Using the right tools, like a digital scale for dry ingredients and a liquid measuring cup for wet ingredients, is essential for precision in every recipe.</p>

        <p>Another key technique in baking is controlling oven temperature. Preheating the oven and using an oven thermometer can help you avoid under- or over-baking, which can drastically affect the quality of your treats. Baking at the correct temperature ensures that your dough or batter rises properly and develops the perfect texture.</p>

        <p>Lastly, the technique of resting dough or batter, especially in recipes like cookies or bread, should not be overlooked. Allowing dough to rest can improve flavor by giving the ingredients time to meld, and it helps with the overall texture by firming up the dough, making it easier to work with. This step is particularly beneficial for achieving the right chewiness or crispiness in your baked goods.</p>

        <div className="content-wrapper">
          <div className="left-content">
            <img src="/images/flour.jpg" alt="Measuring Flour" />
          </div>
          <div className="right-content">
            <h1>How to Properly Measure Flour</h1>
            <p>Properly measuring flour is a critical step in baking that can significantly impact the outcome of your recipe. Using too much flour can lead to dense, dry baked goods, while too little flour can result in a too-soft or undercooked texture. To measure flour accurately, it's best to spoon the flour into the measuring cup and then level it off with a flat edge, such as a knife. Avoid scooping the flour directly with the measuring cup, as this can pack the flour and lead to inaccuracies.</p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="left-content">
            <img src="/images/butter.jpg" alt="Butter" />
          </div>
          <div className="right-content">
            <h1>Use Unsalted Butter</h1>
            <p>Using a gourmet unsalted butter like Kerrygold in your baking ensures that you’re getting a high-quality product that adds a rich, natural flavor to your recipes. Unlike regular butter, Kerrygold is made from grass-fed cows, which results in a creamier texture and more intense buttery taste. The unsalted version gives you control over the seasoning, allowing you to adjust salt levels in your recipe as needed. This butter also enhances the final texture of your baked goods, giving them a richer, more indulgent mouthfeel.</p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="left-content">
            <img src="/images/ingredients.jpg" alt="Ingredients" />
          </div>
          <div className="right-content">
            <h1>Ensure Baking Ingredients are Fresh</h1>
            <p>The freshness of your baking ingredients is essential for achieving the best results in any recipe. Expired or stale baking powder, baking soda, or yeast can cause your baked goods to lack the proper rise, resulting in dense, heavy textures. Always check expiration dates on these ingredients and test baking powder or soda for potency by adding a bit of water to see if they bubble. Fresh, high-quality eggs are also important, as they contribute to the structure and moisture of your baked goods.</p>
          </div>
        </div>
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

export default TipsAndTricks;
