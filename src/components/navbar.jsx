import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUtensils, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "../styles/navbar.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1 className="logo">NigerMeals</h1>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><FaHome /> Home</li>
        
        <Link to="/menu">
        <li><FaUtensils /> Menu</li>
        </Link>
        <li><FaShoppingCart /> Cart</li>
        <li><FaUserAlt /> Profile</li>
      </ul>
    </nav>
  );
}
