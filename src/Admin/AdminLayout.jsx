import React from 'react';
import AdminSideBar from './component/AdminSideBar';
import StatCard from './component/statCard';
import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-8 lg:ml-0">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Revenue"
            value="₦1,250,000"
            icon={DollarSign}
            color="green"
            trend="up"
            trendValue="+12.5%"
          />

          <StatCard 
            title="Total Orders"
            value="348"
            icon={ShoppingCart}
            color="orange"
            trend="up"
            trendValue="+8.2%"
          />

          <StatCard 
            title="Active Users"
            value="1,429"
            icon={Users}
            color="blue"
            trend="up"
            trendValue="+15.3%"
          />

          <StatCard 
            title="Growth Rate"
            value="23.5%"
            icon={TrendingUp}
            color="purple"
            trend="up"
            trendValue="+4.1%"
          />z
        </div>

        {/* Additional Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b">
                <div>
                  <p className="font-semibold text-gray-800">Order #1234</p>
                  <p className="text-sm text-gray-600">John Doe - 2 items</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <div>
                  <p className="font-semibold text-gray-800">Order #1235</p>
                  <p className="text-sm text-gray-600">Jane Smith - 3 items</p>
                </div>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Pending
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <p className="font-semibold text-gray-800">Order #1236</p>
                  <p className="text-sm text-gray-600">Mike Johnson - 1 item</p>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Processing
                </span>
              </div>
            </div>
          </div>

          {/* Top Meals */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Top Selling Meals</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Jollof Rice</p>
                  <p className="text-sm text-gray-600">234 orders</p>
                </div>
                <span className="text-orange-600 font-bold">₦2,500</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Fried Rice</p>
                  <p className="text-sm text-gray-600">189 orders</p>
                </div>
                <span className="text-orange-600 font-bold">₦3,000</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Pounded Yam</p>
                  <p className="text-sm text-gray-600">156 orders</p>
                </div>
                <span className="text-orange-600 font-bold">₦3,500</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}