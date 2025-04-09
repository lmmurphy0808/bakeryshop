import React from 'react';
import Navigation from '../components/Navigation';
import './css/Orders.css';

function Orders() {
  return (
    <main>
      <div className="main-header">
        <Navigation />
      </div>

      <div className="cart-container">
        <button id="viewCart" onClick={() => window.location.href='/Cart'}>Your Cart</button>
      </div>

      <div className="orders">
        <h1>Welcome to the ordering page! We offer two methods of ordering:</h1>
        <div className="order-methods">
          <div className="method">
            <li><a href="/Delivery">Delivery</a></li>
          </div>
          <div className="method">
            <li><a href="/Pickup">Pickup</a></li>
          </div>
        </div>

        <h2>Best Sellers:</h2>
        <div className="best-sellers">
          <div className="item">
            <img src="/images/cookiebatch.jpg" alt="Best Seller" />
            <p>The best-selling chocolate chip cookie recipe is beloved for its perfect balance of a crispy edge and a soft, chewy center...</p>
          </div>
          <div className="item">
            <img src="/images/cupcakebatch.jpg" alt="Best Seller" />
            <p>The best-selling cupcake recipe is a crowd-pleaser, known for its moist, fluffy texture and rich, flavorful taste...</p>
          </div>
          <div className="item">
            <img src="/images/barsbatch.jpg" alt="Best Seller" />
            <p>The best-selling cookie bar recipe is a favorite for its perfect combination of chewy, gooey texture and rich flavor...</p>
          </div>
        </div>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </main>
  );
}

export default Orders;