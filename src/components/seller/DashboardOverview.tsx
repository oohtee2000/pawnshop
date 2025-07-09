import React from "react";
import { TrendingUp, Package, DollarSign, Eye, ShoppingCart } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    title: "Total Items",
    value: "24",
    change: "+3 this week",
    icon: Package,
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    title: "Active Listings",
    value: "18",
    change: "6 pending approval",
    icon: Eye,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    title: "Total Sales",
    value: "$2,450",
    change: "+$340 this month",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    title: "Conversion Rate",
    value: "12.5%",
    change: "+2.3% from last month",
    icon: TrendingUp,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  }
];

const recentItems = [
  {
    id: 1,
    name: "Vintage Rolex Watch",
    price: "$1,200",
    status: "Active",
    views: 45,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Diamond Necklace",
    price: "$800",
    status: "Pending",
    views: 23,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Gold Ring Set",
    price: "$450",
    status: "Active",
    views: 67,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop&crop=center"
  }
];

const DashboardOverview = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, John!</h2>
        <p className="opacity-90">You have 3 new inquiries and 2 items pending approval.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Recent Items</h3>
          <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {recentItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg transition-colors">
              <Image 
                src={item.image} 
                alt={item.name} 
                width={48} 
                height={48} 
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm font-semibold text-green-600">{item.price}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'Active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Eye className="w-4 h-4" />
                {item.views}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">Add New Item</h3>
          <p className="text-sm text-gray-500">List a new item for sale</p>
        </div>

        <div className="p-6 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">View Orders</h3>
          <p className="text-sm text-gray-500">Check your recent sales</p>
        </div>

        <div className="p-6 border rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-yellow-600" />
          </div>
          <h3 className="font-semibold mb-2">Analytics</h3>
          <p className="text-sm text-gray-500">View performance metrics</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
