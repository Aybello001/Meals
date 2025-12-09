import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MealCard from "../components/MealCard";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTruck, FaUtensils, FaStar } from "react-icons/fa";

export default function NigerMeals() {
  const meals = [
    { id: 1, name: "Jollof Rice", price: 2500, img: "/Meals/Images/food1.jpg" },
    { id: 2, name: "Buns", price: 3000, img: "/Meals/Images/food2.jpg" },
    { id: 3, name: "Jollof Rice", price: 2500, img: "/Meals/Images/food1.jpg" },
    { id: 4, name: "Buns", price: 3000, img: "/Meals/Images/food2.jpg" },
    { id: 5, name: "Jollof Rice", price: 2500, img: "/Meals/Images/food1.jpg" },
    { id: 6, name: "Buns", price: 3000, img: "/Meals/Images/food2.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Taste Authentic Nigerian Meals
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
              Order your favorite dishes and get fast delivery straight to your doorstep
            </p>

            <Link to="/menu">
              <button className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl hover:scale-105">
                Order Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 md:h-20">
            <path
              fill="#f9fafb"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTruck className="text-orange-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600">Get your meals delivered hot and fresh within 30 minutes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="text-orange-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Authentic Taste</h3>
              <p className="text-gray-600">Prepared by expert chefs using traditional recipes</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-orange-600 text-2xl" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">Quality Assured</h3>
              <p className="text-gray-600">Fresh ingredients and hygienic preparation guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Meals
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of the most popular Nigerian dishes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map((meal) => (
              <MealCard key={meal.id} src={meal.img} meal={meal} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of satisfied customers enjoying authentic Nigerian meals
          </p>
          <Link to="/menu">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
              Browse Menu Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}