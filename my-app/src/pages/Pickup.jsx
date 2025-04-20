import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Navigation from '../components/Navigation';
import './css/Pickup.css';

function Pickup() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding to cart
    alert("Pickup order placed!");
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

          <label htmlFor="pickup-time">Pickup Time:</label>
          <input type="time" id="pickup-time" name="pickup-time" required />

          <button type="submit">Place Order</button>
        </form>
        <button onClick={() => navigate('/Orders')}>Back to Orders</button> {/* Use navigate for navigation */}
      </div>
    </div>
  );
}

export default Pickup;