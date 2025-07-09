'use client';

import React from 'react';
import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  Bike,
  Car,
} from 'lucide-react';

const Categories = () => {
  const categories = [
    { icon: Smartphone, name: 'Electronics', count: 1234, color: 'text-blue-600' },
    { icon: Laptop, name: 'Computers', count: 856, color: 'text-purple-600' },
    { icon: Watch, name: 'Watches', count: 432, color: 'text-green-600' },
    { icon: Camera, name: 'Cameras', count: 298, color: 'text-red-600' },
    { icon: Headphones, name: 'Audio', count: 567, color: 'text-yellow-600' },
    { icon: Gamepad2, name: 'Gaming', count: 723, color: 'text-indigo-600' },
    { icon: Bike, name: 'Sports', count: 445, color: 'text-orange-600' },
    { icon: Car, name: 'Automotive', count: 189, color: 'text-pink-600' },
  ];

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
        <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map(({ icon: Icon, name, count, color }, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <div className={`${color} p-3 rounded-full bg-gray-50 group-hover:scale-110 transition-transform`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
              <p className="text-xs text-gray-500">{count.toLocaleString()} items</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
