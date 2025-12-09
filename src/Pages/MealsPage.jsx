import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/mealpage.css";
import Loader from "../components/Loader";

function MealPage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeal(data.meals[0]);
        }
        setLoading(false); 

      })
      .catch((err) => {
        console.error(err);
        setLoading(false);

      });
  }, [id]);

  if (loading) return <Loader />; 
  

  if (!meal) return <p>Meal not found</p>;

  return (
    <>
      <Navbar />

      <div className="meal-container">
        <img src={meal.strMealThumb} className="meal-img" />

        <div className="meal-info">
          <h2>{meal.strMeal}</h2>

          <p className="price">
            ₦{(Math.random() * 2000 + 2000).toFixed(0)}
          </p>
          

          <button className="order-btn">Add to Cart</button>

          <p className="desc"><h3>Instructions</h3>{meal.strInstructions}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MealPage;
