import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowLeft, FaTruck } from "react-icons/fa";
import Navbar from "../components/navbar";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const [removingItem, setRemovingItem] = useState(null);

  // Get quantity for item
  const getQuantity = (itemId) => quantities[itemId] || 1;

  // Update quantity
  const updateQuantity = (itemId, change) => {
    setQuantities((prev) => {
      const currentQty = prev[itemId] || 1;
      const newQty = Math.max(1, Math.min(99, currentQty + change));
      return { ...prev, [itemId]: newQty };
    });
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const qty = getQuantity(item.id);
    return sum + Number(item.price) * qty;
  }, 0);

  const itemCount = cart.reduce((sum, item) => sum + getQuantity(item.id), 0);
  const delivery = subtotal > 0 ? 1200 : 0;
  const total = subtotal + delivery;

  // Handle remove with animation
  const handleRemove = (itemId) => {
    setRemovingItem(itemId);
    setTimeout(() => {
      removeFromCart(itemId);
      setRemovingItem(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
                <FaShoppingBag className="text-orange-500" />
                Your Cart
              </h1>
              {cart.length > 0 && (
                <p className="text-gray-600 mt-2">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
                </p>
              )}
            </div>
            
            <Link to="/menu">
              <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors">
                <FaArrowLeft />
                Continue Shopping
              </button>
            </Link>
          </div>

          {cart.length === 0 ? (
            /* Empty Cart State */
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <FaShoppingBag className="text-gray-400 text-5xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any meals yet</p>
              <Link to="/menu">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors font-semibold">
                  Browse Menu
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => {
                  const qty = getQuantity(item.id);
                  const isRemoving = removingItem === item.id;
                  
                  return (
                    <div
                      key={item.id}
                      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                        isRemoving ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                      }`}
                    >
                      <div className="flex gap-4 p-4">
                        {/* Image */}
                        <div className="relative">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-28 h-28 rounded-lg object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">
                                {item.name}
                              </h3>
                              <p className="text-orange-500 font-bold text-xl">
                                ₦{Number(item.price).toLocaleString()}
                              </p>
                            </div>

                            {/* Remove button */}
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors"
                              title="Remove item"
                            >
                              <FaTrash size={16} />
                            </button>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="bg-white p-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                                disabled={qty <= 1}
                              >
                                <FaMinus size={12} />
                              </button>

                              <span className="font-bold text-lg min-w-[1rem] mx-[-0.5rem] text-center">
                                {qty}
                              </span>

                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="bg-white p-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                                disabled={qty >= 99}
                              >
                                <FaPlus size={12} />
                              </button>
                            </div>

                            {/* Item Total */}
                            <div className="text-right flex-1">
                              <p className="text-sm text-gray-500">Item Total</p>
                              <p className="font-bold text-lg text-gray-800">
                                ₦{(Number(item.price) * qty).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary - Sticky */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal ({itemCount} items)</span>
                      <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                      <span className="flex items-center gap-2">
                        <FaTruck className="text-orange-500" />
                        Delivery Fee
                      </span>
                      <span className="font-semibold">₦{delivery.toLocaleString()}</span>
                    </div>

                    {delivery > 0 && (
                      <p className="text-xs text-gray-500 bg-orange-50 p-2 rounded">
                        Free delivery on orders above ₦10,000
                      </p>
                    )}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-800">Total</span>
                      <span className="text-2xl font-bold text-orange-600">
                        ₦{total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl">
                    Proceed to Checkout
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}