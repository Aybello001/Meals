import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";
import { FaSearch, FaShoppingCart, FaCheck } from "react-icons/fa";

export default function Menu() {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [addedItems, setAddedItems] = useState(new Set());
  const navigate = useNavigate();

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const mapped = data.meals.map((meal) => ({
            id: meal.idMeal,
            name: meal.strMeal,
            img: meal.strMealThumb,
            price: (Math.random() * 2000 + 1500).toFixed(0),
            desc: meal.strInstructions.slice(0, 100),
          }));
          setFoods(mapped);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAddToCart = (food) => {
    addToCart(food);
    setAddedItems((prev) => new Set(prev).add(food.id));
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(food.id);
        return newSet;
      });
    }, 2000);
  };

  if (loading) return <Loader />;

  const filteredFoods = foods.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Search Bar Section */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for your favorite meals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg border-2 border-transparent focus:border-orange-500 focus:outline-none transition-all"
            />
          </div>

          {/* Results Count */}
          <p className="text-gray-600 text-sm mt-6 text-center">
            Showing {filteredFoods.length} {filteredFoods.length === 1 ? 'meal' : 'meals'}
          </p>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredFoods.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No meals found matching "{search}"</p>
            <p className="text-gray-400 mt-2">Try searching for something else</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map((food) => {
              const isAdded = addedItems.has(food.id);
              
              return (
                <div
                  key={food.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={food.img}
                      alt={food.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                      {food.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {food.desc}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">
                        ₦{Number(food.price).toLocaleString()}
                      </span>

                      <button
                        onClick={() => handleAddToCart(food)}
                        className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium transform ${
                          isAdded 
                            ? 'bg-green-500 scale-110' 
                            : 'bg-orange-500 hover:bg-orange-600 hover:scale-105'
                        } text-white`}
                      >
                        {isAdded ? (
                          <>
                            <FaCheck size={16} className="animate-bounce" />
                            Added!
                          </>
                        ) : (
                          <>
                            <FaShoppingCart size={16} />
                            Add
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}