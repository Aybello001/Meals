import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import MealPage from "./Pages/MealsPage";
import NigerMeals from "./Pages/nigerMeals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<NigerMeals />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/meal/:id" element={<MealPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
