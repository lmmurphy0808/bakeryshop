import React from 'react';
import './css/Delivery.css';

function Pickup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pickup order placed and added to cart!");
    window.location.href = "/cart";
  };

  return (
    <div>
      <div className="cart-container">
        <button id="viewCart" onClick={() => window.location.href = '/cart'}>
          Your Cart
        </button>
      </div>

      <div className="container">

        <h1>Pickup Order</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="item">Select Item:</label>
          <select id="item" name="item" required>
            <option value="cookie">Chocolate Chip Cookie</option>
            <option value="cupcake">Cupcake</option>
            <option value="cookie-bar">Cookie Bar</option>
          </select>

          <label htmlFor="time">Pickup Time:</label>
          <input type="time" id="time" name="time" required />

          <button type="submit">Place Order</button>
        </form>
        <button onClick={() => window.location.href = '/orders'}>Back to Orders</button>
      </div>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </div>
  );
}

export default Pickup;