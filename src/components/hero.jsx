
import "../styles/hero.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <h2>Taste Authentic Nigerian Meals</h2>
      <p>Order your favorite dishes and get fast delivery.</p>

      <Link to="/menu">
        <button className="hero-btn">
          Order Now <FaArrowRight />
        </button>
      </Link>
    </div>
  );
}
