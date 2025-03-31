import { Link } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
  return (
    <div className="main-header">
      <div className="navbar">
        <Link to="/">The Baking Haven</Link>
      </div>
      <ul className="nav">
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/tipsandtricks">Tips and Tricks</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
