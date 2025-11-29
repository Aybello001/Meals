import Navbar from "../components/navbar";
import Hero from "../components/hero";
import MealCard from "../components/MealCard";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

export default function NigerMeals() {
  const meals = [
    { name: "Jollof Rice", price: 2500, img: "/Images/food1.jpg" },
    { name: "Bonce", price: 3000, img: "/Images/food2.jpg" },
    { name: "Jollof Rice", price: 2500, img: "/Images/food1.jpg" },
    { name: "Bonce", price: 3000, img: "/Images/food2.jpg" },
    { name: "Jollof Rice", price: 2500, img: "/Images/food1.jpg" },
    { name: "Bonce", price: 3000, img: "/Images/food2.jpg" },
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
