import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navigation from '../components/Navigation';
import './css/Delivery.css';

function Delivery() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding to cart
    alert("Order placed and added to cart!");
    navigate("/Cart"); // Navigate to the Cart page
  };

  return (
    <div>
      <div className="cart-container">
        <button id="viewCart" onClick={() => navigate('/Cart')}>
          Your Cart
        </button>
      </div>

      <div className="container">
        <h1>Delivery Order</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="item">Select Item:</label>
          <select id="item" name="item" required>
            <option value="cookie">Chocolate Chip Cookie</option>
            <option value="cupcake">Cupcake</option>
            <option value="cookie-bar">Cookie Bar</option>
          </select>

          <label htmlFor="address">Delivery Address:</label>
          <textarea id="address" name="address" rows="4" required></textarea>

          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" name="phone" required />

          <button type="submit">Place Order</button>
        </form>
        <button onClick={() => navigate('/Orders')}>Back to Orders</button> {/* Use navigate for navigation */}
      </div>
    </div>
  );
}

export default Delivery;
