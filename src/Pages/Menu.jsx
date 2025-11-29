import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/menu.css";
import Loader from "../components/Loader";


function Menu() {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const mapped = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            img: meal.strMealThumb,
            price: (Math.random() * 2000 + 1500).toFixed(0), // random price
            desc: meal.strInstructions.slice(0, 100), // short description
          }));
          setFoods(mapped);
        }
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false); 
      
    });
}, []);
  if (loading) return <Loader />;

  return (
    <div className="menu-page">
      <Navbar />

      <h2 className="menu-title"></h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      <div className="menu-grid">
        {foods
        .filter((food) =>
          food.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((food) => (
          <div className="menu-card" key={food.id}>
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>₦{food.price}</p>

            <button
              className="view-btn"
              onClick={() => navigate(`/meal/${food.id}`)}
            >
              View
            </button>
          </div>
      ))}

      </div>

      <Footer />
    </div>
  );
}

export default Menu;
