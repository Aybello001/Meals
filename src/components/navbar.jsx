import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUtensils, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { cart } = useCart();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`bg-white px-6 py-4 flex justify-between items-center fixed w-full z-10 transition-all duration-300 ${
        scrolled ? "shadow-lg py-3" : "shadow-md"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer">
          Niger<span className="text-gray-800">Meals</span>
        </h1>
      </Link>

      {/* Hamburger (Mobile) */}
      <button
        className="md:hidden text-2xl text-gray-700 hover:text-orange-600 transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Nav Items */}
      <ul
        className={`md:flex gap-2 font-medium absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-0 duration-300 shadow-md md:shadow-none transition-all z-50 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 md:opacity-100 md:visible md:translate-y-0"
        }`}
      >
        <li>
          <Link
            to="/"
            className={`flex items-center gap-2 px-6 py-3 md:px-4 md:py-2 md:rounded-lg transition-all ${
              isActive("/")
                ? "text-orange-600 bg-orange-50 md:bg-orange-100"
                : "hover:text-orange-600 hover:bg-gray-50"
            }`}
          >
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link
            to="/menu"
            className={`flex items-center gap-2 px-6 py-3 md:px-4 md:py-2 md:rounded-lg transition-all ${
              isActive("/menu")
                ? "text-orange-600 bg-orange-50 md:bg-orange-100"
                : "hover:text-orange-600 hover:bg-gray-50"
            }`}
          >
            <FaUtensils /> Menu
          </Link>
        </li>

        {/* CART with Badge */}
        <li className="relative">
          <Link
            to="/cart"
            className={`flex items-center gap-2 px-6 py-3 md:px-4 md:py-2 md:rounded-lg transition-all ${
              isActive("/cart")
                ? "text-orange-600 bg-orange-50 md:bg-orange-100"
                : "hover:text-orange-600 hover:bg-gray-50"
            }`}
          >
            <div className="relative">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="md:inline">Cart</span>
          </Link>
        </li>

        <li>
          <Link
            to="/profile"
            className={`flex items-center gap-2 px-6 py-3 md:px-4 md:py-2 md:rounded-lg transition-all ${
              isActive("/profile")
                ? "text-orange-600 bg-orange-50 md:bg-orange-100"
                : "hover:text-orange-600 hover:bg-gray-50"
            }`}
          >
            <FaUserAlt /> Profile
          </Link>
        </li>
      </ul>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-40"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}