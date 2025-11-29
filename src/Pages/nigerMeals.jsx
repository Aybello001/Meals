import Navbar from "../components/navbar";
import Hero from "../components/hero";
import MealCard from "../components/MealCard";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import food1 from "/Images/food1.jpg";
import food2 from "/Images/food2.jpg";

export default function NigerMeals() {
  const Base = import.meta.env.VITE_BASE_URL;
  const meals = [
    { name: "Jollof Rice", price: 2500, img: food1 },
    { name: "Bonce", price: 3000, img: food2 },
    { name: "Jollof Rice", price: 2500, img: food1 },
    { name: "Bonce", price: 3000, img: food2 },
    { name: "Jollof Rice", price: 2500, img: food1 },
    { name: "Bonce", price: 3000, img: food2 },
  ];


  return (
    <>
      <Navbar />

      <Hero />

      <div className="container meals-grid">
        {meals.map((m, index) => (
          <MealCard key={index} src={m.img} meal={m} />
        ))}
      </div>
      
      <Footer/>
    </>
  );
}
