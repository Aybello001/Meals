import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import NigerMeals from "./pages/NigerMeals";
import Meal from "./pages/MealsPage"; // rename so it matches
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage"

export default function App() {
  return (
    <Routes>
      <Route index element={<NigerMeals />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/meal/:id" element={<Meal />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />}/>
    </Routes>
  );
}
