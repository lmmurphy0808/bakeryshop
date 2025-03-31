import React, { useEffect } from 'react';
import '../css/Delivery.css';

function Cart() {
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const list = document.getElementById('cart-items');
    if (list) {
      list.innerHTML = '';
      cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item}`;
        list.appendChild(li);
      });
    }
  }, []);

  const clearCart = () => {
    localStorage.removeItem('cart');
    const list = document.getElementById('cart-items');
    if (list) {
      list.innerHTML = '';
    }
    alert('Cart cleared!');
  };

  return (
    <div>
      <div className="main-header">
        <div className="navbar"><li><a href="/">The Baking Haven</a></li></div>
        <ul className="nav">
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/tipsandtricks">Tips and Tricks</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/aboutme">About Me</a></li>
          <li><a href="/contact-me">Contact Me</a></li>
        </ul>
      </div>

      <main>
        <div className="cart-content">
          <h1>Your Cart</h1>
          <div className="cart-items-container">
            <ul id="cart-items"></ul>
          </div>

          <div className="cart-buttons">
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={() => window.location.href = '/orders'}>Back to Orders</button>
          </div>
        </div>
      </main>

      <footer>
        <p>The Baking Haven</p>
      </footer>
    </div>
  );
}

export default Cart;
