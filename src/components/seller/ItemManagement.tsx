"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Search,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal,
} from "lucide-react";

type Item = {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
  views: number;
  inquiries: number;
  dateAdded: string;
  image: string;
};

const initialItems: Item[] = [
  {
    id: 1,
    name: "Vintage Rolex Submariner",
    category: "Watches",
    price: 1200,
    status: "Active",
    views: 45,
    inquiries: 3,
    dateAdded: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Diamond Tennis Necklace",
    category: "Jewelry",
    price: 800,
    status: "Pending",
    views: 23,
    inquiries: 1,
    dateAdded: "2024-01-12",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150&h=150&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Gold Wedding Ring Set",
    category: "Jewelry",
    price: 450,
    status: "Active",
    views: 67,
    inquiries: 5,
    dateAdded: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=150&h=150&fit=crop&crop=center",
  },
];

const ItemManagement: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleEditSave = () => {
    if (!editingItem) return;
    setItems(prev =>
      prev.map(item => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      item.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "sold":
        return "bg-gray-200 text-gray-500";
      default:
        return "bg-gray-200 text-gray-500";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Items</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add New Item
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white shadow p-4 rounded space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-200 focus:outline-none"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="sold">Sold</option>
        </select>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow hover:shadow-lg overflow-hidden transition-shadow"
          >
            <div className="relative">
              <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                  style={{ objectFit: "cover" }}
              />

              <div className="absolute top-3 right-3">
                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold line-clamp-2">{item.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-sm text-gray-500">{item.category}</p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="text-lg font-bold text-green-600">
                  ${item.price}
                </span>
                <div className="flex gap-4 items-center">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {item.views}
                  </span>
                  <span>{item.inquiries} inquiries</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setEditingItem(item)}
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border rounded hover:bg-gray-100">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button
                  className="px-3 py-2 border rounded text-red-500 hover:bg-red-50"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="bg-white p-8 text-center rounded shadow">
          <p className="text-gray-500">No items found matching your criteria.</p>
        </div>
      )}

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
            <h3 className="text-xl font-semibold">Edit Item</h3>
            <input
              type="text"
              placeholder="Name"
              value={editingItem.name}
              onChange={(e) =>
                setEditingItem({ ...editingItem, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={editingItem.price}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  price: parseFloat(e.target.value),
                })
              }
              className="w-full px-3 py-2 border rounded"
            />
            <select
              value={editingItem.status}
              onChange={(e) =>
                setEditingItem({ ...editingItem, status: e.target.value })
              }
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Sold">Sold</option>
            </select>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setEditingItem(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemManagement;
