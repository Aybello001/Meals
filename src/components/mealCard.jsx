import "../styles/meals.css";
import React from "react";

export default function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <img src={meal.img} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p className="meal-price">₦{(Math.random() * 5000 + 1000).toFixed(0)}</p>
      <button>View Details</button>
    </div>
  );
}

