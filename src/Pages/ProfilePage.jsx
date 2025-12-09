import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, 
  FaTimes, FaHistory, FaHeart, FaCog, FaSignOutAlt, FaCamera,
  FaShoppingBag, FaCreditCard, FaBell
} from "react-icons/fa";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Yusuf Bello",
    email: "konji4242@gmail.com",
    phone: "+234 905 365 0756",
    address: "Nasarawa State University Keffi",
    avatar: null
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setEditedProfile(profile);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const orderHistory = [
    { id: "ORD-001", date: "Dec 8, 2025", items: 3, total: 7500, status: "Delivered" },
    { id: "ORD-002", date: "Dec 5, 2025", items: 2, total: 5500, status: "Delivered" },
    { id: "ORD-003", date: "Dec 1, 2025", items: 4, total: 9200, status: "Cancelled" },
  ];

  const favorites = [
    { id: 1, name: "Jollof Rice", price: 2500, img: "/Meals/Images/food1.jpg" },
    { id: 2, name: "Buns", price: 3000, img: "/Meals/Images/food2.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 mb-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-orange-600 text-5xl font-bold shadow-lg">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    profile.name.charAt(0)
                  )}
                </div>
                <button className="absolute bottom-0 right-0 bg-orange-600 hover:bg-orange-700 p-3 rounded-full shadow-lg transition-colors">
                  <FaCamera />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                <p className="text-white/90 mb-4">{profile.email}</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Member since Dec 2024</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">15 Orders</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button 
                  onClick={handleEdit}
                  className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md mb-8 overflow-hidden">
            <div className="flex border-b overflow-x-auto">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === "profile" 
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <FaUser /> Profile
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === "orders" 
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <FaHistory /> Order History
              </button>
              <button
                onClick={() => setActiveTab("favorites")}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === "favorites" 
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <FaHeart /> Favorites
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors ${
                  activeTab === "settings" 
                    ? "text-orange-600 border-b-2 border-orange-600 bg-orange-50" 
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                <FaCog /> Settings
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-md p-6">
            
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Delivery Address</label>
                      <textarea
                        value={editedProfile.address}
                        onChange={(e) => setEditedProfile({...editedProfile, address: e.target.value})}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      >
                        <FaSave /> Save Changes
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                      >
                        <FaTimes /> Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaUser className="text-orange-500 text-xl" />
                      <div>
                        <p className="text-gray-600 text-sm">Full Name</p>
                        <p className="font-semibold text-gray-800">{profile.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaEnvelope className="text-orange-500 text-xl" />
                      <div>
                        <p className="text-gray-600 text-sm">Email Address</p>
                        <p className="font-semibold text-gray-800">{profile.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaPhone className="text-orange-500 text-xl" />
                      <div>
                        <p className="text-gray-600 text-sm">Phone Number</p>
                        <p className="font-semibold text-gray-800">{profile.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <FaMapMarkerAlt className="text-orange-500 text-xl" />
                      <div>
                        <p className="text-gray-600 text-sm">Delivery Address</p>
                        <p className="font-semibold text-gray-800">{profile.address}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
                
                {orderHistory.length === 0 ? (
                  <div className="text-center py-12">
                    <FaShoppingBag className="text-gray-300 text-6xl mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No orders yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-bold text-lg text-gray-800">{order.id}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                order.status === "Delivered" 
                                  ? "bg-green-100 text-green-700"
                                  : order.status === "Cancelled"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">{order.date} • {order.items} items</p>
                          </div>
                          
                          <div className="text-left sm:text-right">
                            <p className="text-2xl font-bold text-orange-600">₦{order.total.toLocaleString()}</p>
                            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium mt-1">
                              View Details →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === "favorites" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Favorite Meals</h2>
                
                {favorites.length === 0 ? (
                  <div className="text-center py-12">
                    <FaHeart className="text-gray-300 text-6xl mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No favorites yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((meal) => (
                      <div key={meal.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                        <img src={meal.img} alt={meal.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="font-bold text-lg mb-2">{meal.name}</h3>
                          <p className="text-orange-600 font-bold text-xl mb-3">₦{meal.price.toLocaleString()}</p>
                          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                            Order Again
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <FaBell className="text-orange-500 text-xl" />
                      <div>
                        <p className="font-semibold text-gray-800">Notifications</p>
                        <p className="text-sm text-gray-600">Manage your notification preferences</p>
                      </div>
                    </div>
                    <button className="text-orange-500 font-semibold">Configure</button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <FaCreditCard className="text-orange-500 text-xl" />
                      <div>
                        <p className="font-semibold text-gray-800">Payment Methods</p>
                        <p className="text-sm text-gray-600">Add or remove payment methods</p>
                      </div>
                    </div>
                    <button className="text-orange-500 font-semibold">Manage</button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <FaMapMarkerAlt className="text-orange-500 text-xl" />
                      <div>
                        <p className="font-semibold text-gray-800">Saved Addresses</p>
                        <p className="text-sm text-gray-600">Manage your delivery addresses</p>
                      </div>
                    </div>
                    <button className="text-orange-500 font-semibold">Edit</button>
                  </div>

                  <div className="border-t pt-6 mt-6">
                    <button className="flex items-center gap-3 text-red-600 hover:text-red-700 font-semibold transition-colors">
                      <FaSignOutAlt /> Log Out
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}