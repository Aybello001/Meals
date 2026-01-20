import { useState } from "react";
import AdminSideBar from "../component/AdminSideBar";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Filter,
  Download,
  Upload,
  MoreVertical,
  X,
  Save,
  Image as ImageIcon,
} from "lucide-react";

export default function AdminMeals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const [meals, setMeals] = useState([
    {
      id: 1,
      name: "Jollof Rice",
      category: "Rice Dishes",
      price: 2500,
      stock: 45,
      status: "available",
      image: "/Meals/Images/food1.jpg",
      description: "Delicious Nigerian jollof rice with chicken",
    },
    {
      id: 2,
      name: "Fried Rice",
      category: "Rice Dishes",
      price: 3000,
      stock: 32,
      status: "available",
      image: "/Meals/Images/food2.jpg",
      description: "Tasty fried rice with vegetables and prawns",
    },
    {
      id: 3,
      name: "Pounded Yam",
      category: "Swallow",
      price: 3500,
      stock: 8,
      status: "low_stock",
      image: "/Meals/Images/food1.jpg",
      description: "Fresh pounded yam with egusi soup",
    },
    {
      id: 4,
      name: "Egusi Soup",
      category: "Soups",
      price: 2000,
      stock: 0,
      status: "out_of_stock",
      image: "/Meals/Images/food2.jpg",
      description: "Rich egusi soup with assorted meat",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  const categories = ["All", "Rice Dishes", "Swallow", "Soups", "Proteins", "Sides"];

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || meal.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddMeal = () => {
    const newMeal = {
      id: meals.length + 1,
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      status: Number(formData.stock) > 10 ? "available" : Number(formData.stock) > 0 ? "low_stock" : "out_of_stock",
    };
    setMeals([...meals, newMeal]);
    setShowAddModal(false);
    resetForm();
  };

  const handleEditMeal = () => {
    setMeals(meals.map((m) => (m.id === selectedMeal.id ? { ...selectedMeal, ...formData } : m)));
    setShowEditModal(false);
    resetForm();
  };

  const handleDeleteMeal = (id) => {
    setMeals(meals.filter((m) => m.id !== id));
    setShowDeleteConfirm(false);
  };

  const resetForm = () => {
    setFormData({ name: "", category: "", price: "", stock: "", description: "", image: "" });
    setSelectedMeal(null);
  };

  const openEditModal = (meal) => {
    setSelectedMeal(meal);
    setFormData({
      name: meal.name,
      category: meal.category,
      price: meal.price,
      stock: meal.stock,
      description: meal.description,
      image: meal.image,
    });
    setShowEditModal(true);
  };

  const getStatusBadge = (status) => {
    const badges = {
      available: "bg-green-100 text-green-700",
      low_stock: "bg-yellow-100 text-yellow-700",
      out_of_stock: "bg-red-100 text-red-700",
    };
    const labels = {
      available: "Available",
      low_stock: "Low Stock",
      out_of_stock: "Out of Stock",
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSideBar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Meals Management</h1>
          <p className="text-gray-600 text-sm sm:text-base">Manage your menu items and inventory</p>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search meals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Filters & Actions */}
            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase().replace(" ", "_")}>
                    {cat}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="hidden sm:flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 ${viewMode === "grid" ? "bg-orange-500 text-white" : "bg-white text-gray-700"}`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 ${viewMode === "list" ? "bg-orange-500 text-white" : "bg-white text-gray-700"}`}
                >
                  List
                </button>
              </div>

              {/* Add Meal Button */}
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                <Plus size={20} />
                <span className="hidden sm:inline">Add Meal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-sm mb-1">Total Meals</p>
            <p className="text-2xl font-bold text-gray-800">{meals.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-sm mb-1">Available</p>
            <p className="text-2xl font-bold text-green-600">
              {meals.filter((m) => m.status === "available").length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-sm mb-1">Low Stock</p>
            <p className="text-2xl font-bold text-yellow-600">
              {meals.filter((m) => m.status === "low_stock").length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-sm mb-1">Out of Stock</p>
            <p className="text-2xl font-bold text-red-600">
              {meals.filter((m) => m.status === "out_of_stock").length}
            </p>
          </div>
        </div>

        {/* Meals Grid/List */}
        {filteredMeals.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No meals found</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredMeals.map((meal) => (
              <div key={meal.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-2 right-2">{getStatusBadge(meal.status)}</div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{meal.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{meal.category}</p>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">{meal.description}</p>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-bold text-orange-600">₦{meal.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-600">Stock: {meal.stock}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(meal)}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedMeal(meal);
                        setShowDeleteConfirm(true);
                      }}
                      className="flex items-center justify-center bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-700">Meal</th>
                    <th className="text-left p-4 font-semibold text-gray-700 hidden sm:table-cell">Category</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Price</th>
                    <th className="text-left p-4 font-semibold text-gray-700 hidden md:table-cell">Stock</th>
                    <th className="text-left p-4 font-semibold text-gray-700 hidden lg:table-cell">Status</th>
                    <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMeals.map((meal) => (
                    <tr key={meal.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={meal.image} alt={meal.name} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <p className="font-semibold text-gray-800">{meal.name}</p>
                            <p className="text-sm text-gray-600 sm:hidden">{meal.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-700 hidden sm:table-cell">{meal.category}</td>
                      <td className="p-4 font-semibold text-orange-600">₦{meal.price.toLocaleString()}</td>
                      <td className="p-4 text-gray-700 hidden md:table-cell">{meal.stock}</td>
                      <td className="p-4 hidden lg:table-cell">{getStatusBadge(meal.status)}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openEditModal(meal)}
                            className="text-blue-600 hover:text-blue-700 p-2"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedMeal(meal);
                              setShowDeleteConfirm(true);
                            }}
                            className="text-red-600 hover:text-red-700 p-2"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add/Edit Modal */}
        {(showAddModal || showEditModal) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {showAddModal ? "Add New Meal" : "Edit Meal"}
                </h2>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setShowEditModal(false);
                    resetForm();
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Meal Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="e.g., Jollof Rice"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="">Select category</option>
                    {categories.slice(1).map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Price (₦)</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      placeholder="2500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Stock</label>
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      placeholder="50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="Describe the meal..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    placeholder="/Meals/Images/food1.jpg"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={showAddModal ? handleAddMeal : handleEditMeal}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <Save size={20} />
                    {showAddModal ? "Add Meal" : "Save Changes"}
                  </button>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setShowEditModal(false);
                      resetForm();
                    }}
                    className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Delete</h2>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete <strong>{selectedMeal?.name}</strong>? This action cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDeleteMeal(selectedMeal.id)}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}