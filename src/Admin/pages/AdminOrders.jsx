import { useState } from "react";
import AdminSideBar from "../component/AdminSideBar";
import {
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  Truck,
  ChevronDown,
  ChevronUp,
  Calendar,
  MoreVertical,
  X,
  User,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function AdminOrders() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: "ORD-1234",
      customer: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+234 905 365 0756",
        address: "123 Lagos Street, Victoria Island, Lagos",
      },
      items: [
        { name: "Jollof Rice", quantity: 2, price: 2500 },
        { name: "Fried Rice", quantity: 1, price: 3000 },
      ],
      subtotal: 8000,
      delivery: 1200,
      total: 9200,
      status: "completed",
      date: "2025-01-20",
      time: "10:30 AM",
      paymentMethod: "Card",
    },
    {
      id: "ORD-1235",
      customer: {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+234 806 123 4567",
        address: "45 Abuja Road, Garki, FCT",
      },
      items: [
        { name: "Pounded Yam", quantity: 1, price: 3500 },
        { name: "Egusi Soup", quantity: 1, price: 2000 },
        { name: "Chicken", quantity: 2, price: 1500 },
      ],
      subtotal: 8500,
      delivery: 1200,
      total: 9700,
      status: "pending",
      date: "2025-01-20",
      time: "11:15 AM",
      paymentMethod: "Cash",
    },
    {
      id: "ORD-1236",
      customer: {
        name: "Mike Johnson",
        email: "mike@example.com",
        phone: "+234 703 456 7890",
        address: "78 Port Harcourt Street, GRA, Rivers",
      },
      items: [
        { name: "Jollof Rice", quantity: 3, price: 2500 },
      ],
      subtotal: 7500,
      delivery: 1200,
      total: 8700,
      status: "processing",
      date: "2025-01-20",
      time: "09:45 AM",
      paymentMethod: "Card",
    },
    {
      id: "ORD-1237",
      customer: {
        name: "Sarah Williams",
        email: "sarah@example.com",
        phone: "+234 809 876 5432",
        address: "12 Kano Close, Sabon Gari, Kano",
      },
      items: [
        { name: "Fried Rice", quantity: 2, price: 3000 },
        { name: "Chicken", quantity: 2, price: 1500 },
      ],
      subtotal: 9000,
      delivery: 1200,
      total: 10200,
      status: "delivered",
      date: "2025-01-19",
      time: "03:20 PM",
      paymentMethod: "Transfer",
    },
    {
      id: "ORD-1238",
      customer: {
        name: "David Brown",
        email: "david@example.com",
        phone: "+234 805 234 5678",
        address: "90 Enugu Road, Independence Layout, Enugu",
      },
      items: [
        { name: "Pepper Soup", quantity: 1, price: 2500 },
      ],
      subtotal: 2500,
      delivery: 1200,
      total: 3700,
      status: "cancelled",
      date: "2025-01-19",
      time: "01:10 PM",
      paymentMethod: "Card",
    },
  ]);

  const statusConfig = {
    all: { label: "All Orders", color: "gray" },
    pending: { label: "Pending", color: "yellow", icon: Clock },
    processing: { label: "Processing", color: "blue", icon: Package },
    delivered: { label: "Delivered", color: "green", icon: Truck },
    completed: { label: "Completed", color: "green", icon: CheckCircle },
    cancelled: { label: "Cancelled", color: "red", icon: XCircle },
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesDate =
      dateFilter === "all" ||
      (dateFilter === "today" && order.date === "2025-01-20") ||
      (dateFilter === "yesterday" && order.date === "2025-01-19");
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusBadge = (status) => {
    const config = statusConfig[status];
    const Icon = config.icon;
    const colors = {
      yellow: "bg-yellow-100 text-yellow-700",
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      red: "bg-red-100 text-red-700",
    };
    return (
      <span className={`${colors[config.color]} px-2 sm:px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit`}>
        {Icon && <Icon size={12} />}
        <span className="capitalize">{config.label}</span>
      </span>
    );
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)));
  };

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    completed: orders.filter((o) => o.status === "completed" || o.status === "delivered").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSideBar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 overflow-x-hidden">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Orders Management</h1>
          <p className="text-gray-600 text-sm sm:text-base">Track and manage all customer orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">Total Orders</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">Pending</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">Processing</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{stats.processing}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">Completed</p>
            <p className="text-xl sm:text-2xl font-bold text-green-600">{stats.completed}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-gray-600 text-xs sm:text-sm mb-1">Cancelled</p>
            <p className="text-xl sm:text-2xl font-bold text-red-600">{stats.cancelled}</p>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by order ID or customer name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="delivered">Delivered</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 text-sm"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
              </select>

              <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold">
                <Download size={18} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Orders Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Order ID</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Customer</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Items</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Total</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Status</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-800">{order.id}</td>
                    <td className="p-4">
                      <p className="font-semibold text-gray-800">{order.customer.name}</p>
                      <p className="text-sm text-gray-600">{order.customer.email}</p>
                    </td>
                    <td className="p-4 text-gray-700">{order.items.length} items</td>
                    <td className="p-4 font-semibold text-orange-600">₦{order.total.toLocaleString()}</td>
                    <td className="p-4">{getStatusBadge(order.status)}</td>
                    <td className="p-4 text-gray-700">
                      <p>{order.date}</p>
                      <p className="text-sm text-gray-600">{order.time}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => viewOrderDetails(order)}
                          className="text-blue-600 hover:text-blue-700 p-2"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        {order.status === "pending" && (
                          <button
                            onClick={() => updateOrderStatus(order.id, "processing")}
                            className="text-green-600 hover:text-green-700 p-2"
                            title="Mark as Processing"
                          >
                            <CheckCircle size={18} />
                          </button>
                        )}
                        {order.status === "processing" && (
                          <button
                            onClick={() => updateOrderStatus(order.id, "delivered")}
                            className="text-green-600 hover:text-green-700 p-2"
                            title="Mark as Delivered"
                          >
                            <Truck size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Cards - Mobile/Tablet */}
        <div className="lg:hidden space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.customer.name}</p>
                  </div>
                  {getStatusBadge(order.status)}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600">Items</p>
                    <p className="font-semibold text-gray-800">{order.items.length}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total</p>
                    <p className="font-semibold text-orange-600">₦{order.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date</p>
                    <p className="font-semibold text-gray-800">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Time</p>
                    <p className="font-semibold text-gray-800">{order.time}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => viewOrderDetails(order)}
                    className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  {order.status === "pending" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "processing")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <CheckCircle size={16} />
                    </button>
                  )}
                  {order.status === "processing" && (
                    <button
                      onClick={() => updateOrderStatus(order.id, "delivered")}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Truck size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Package className="mx-auto text-gray-300 mb-4" size={64} />
            <p className="text-gray-500 text-lg">No orders found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
          </div>
        )}

        {/* Order Details Modal */}
        {showDetailsModal && selectedOrder && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 sm:p-6 flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Order Details</h2>
                <button onClick={() => setShowDetailsModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>

              <div className="p-4 sm:p-6 space-y-6">
                {/* Order Info */}
                <div>
                  <h3 className="font-bold text-lg mb-3">Order Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order ID:</span>
                      <span className="font-semibold">{selectedOrder.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">{selectedOrder.date} {selectedOrder.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment:</span>
                      <span className="font-semibold">{selectedOrder.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status:</span>
                      {getStatusBadge(selectedOrder.status)}
                    </div>
                  </div>
                </div>

                {/* Customer Info */}
                <div>
                  <h3 className="font-bold text-lg mb-3">Customer Details</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <User className="text-orange-500" size={20} />
                      <span className="font-semibold">{selectedOrder.customer.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-orange-500" size={20} />
                      <span className="text-sm">{selectedOrder.customer.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-orange-500" size={20} />
                      <span className="text-sm">{selectedOrder.customer.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-orange-500 flex-shrink-0" size={20} />
                      <span className="text-sm">{selectedOrder.customer.address}</span>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="font-bold text-lg mb-3">Order Items</h3>
                  <div className="border rounded-lg overflow-hidden">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between p-4 border-b last:border-0">
                        <div>
                          <p className="font-semibold text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-orange-600">₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <h3 className="font-bold text-lg mb-3">Order Summary</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold">₦{selectedOrder.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee:</span>
                      <span className="font-semibold">₦{selectedOrder.delivery.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-bold text-lg">Total:</span>
                      <span className="font-bold text-xl text-orange-600">₦{selectedOrder.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {selectedOrder.status === "pending" && (
                    <button
                      onClick={() => {
                        updateOrderStatus(selectedOrder.id, "processing");
                        setShowDetailsModal(false);
                      }}
                      className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                    >
                      Mark as Processing
                    </button>
                  )}
                  {selectedOrder.status === "processing" && (
                    <button
                      onClick={() => {
                        updateOrderStatus(selectedOrder.id, "delivered");
                        setShowDetailsModal(false);
                      }}
                      className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                    >
                      Mark as Delivered
                    </button>
                  )}
                  <button
                    onClick={() => setShowDetailsModal(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}