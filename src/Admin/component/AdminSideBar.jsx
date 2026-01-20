import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  UtensilsCrossed,
  Users,
  TrendingUp,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Package,
  Tag,
  MessageSquare,
  FileText,
} from "lucide-react";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: ShoppingCart, label: "Orders", path: "/admin/orders", badge: 12 },
    { icon: UtensilsCrossed, label: "Meals", path: "/admin/meals" },
    { icon: Package, label: "Inventory", path: "/admin/inventory" },
    { icon: Users, label: "Customers", path: "/admin/customers" },
    { icon: Tag, label: "Promotions", path: "/admin/promotions" },
    { icon: TrendingUp, label: "Analytics", path: "/admin/analytics" },
    { icon: MessageSquare, label: "Reviews", path: "/admin/reviews", badge: 5 },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
    { icon: Bell, label: "Notifications", path: "/admin/notifications", badge: 3 },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-70"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-100% bg-gray-900 text-white w-64 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <UtensilsCrossed className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Niger<span className="text-orange-500">Meals</span>
              </h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </Link>
        </div>

        {/* Admin Profile */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="flex-1">
              <p className="font-semibold">Admin User</p>
              <p className="text-xs text-gray-400">admin@nigermeals.com</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      active
                        ? "bg-orange-500 text-white shadow-lg"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white rounded-lg transition-all duration-200">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 text-center border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © 2025 NigerMeals Admin
          </p>
          <p className="text-xs text-gray-600 mt-1">v1.0.0</p>
        </div>
      </aside>
    </>
  );
}