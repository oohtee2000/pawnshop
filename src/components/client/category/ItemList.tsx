'use client';

import React from 'react';
import Image from 'next/image';

interface Item {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  condition: string;
  location: string;
  image: string;
  seller: string;
  rating: number;
  verified: boolean;
  isPromoted: boolean;
}

type ItemListProps = {
  items: Item[];
};

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const discountPercentage = Math.round(
          ((item.originalPrice - item.price) / item.originalPrice) * 100
        );

        return (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row border rounded-lg shadow-sm p-4 hover:shadow-md transition bg-white"
          >
            <div className="relative w-full sm:w-40 h-40 sm:h-auto">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              {item.isPromoted && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded">
                  ⚡ Featured
                </div>
              )}
            </div>

            <div className="sm:ml-4 mt-4 sm:mt-0 flex-1 space-y-2">
              <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                {item.title}
              </h2>

              <div className="flex flex-wrap items-center space-x-2 text-sm">
                <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                <span className="line-through text-gray-500">${item.originalPrice}</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">
                  -{discountPercentage}%
                </span>
              </div>

              <div
                className={`inline-block px-2 py-1 text-xs rounded border ${
                  item.condition === 'Like New'
                    ? 'bg-green-50 text-green-700 border-green-300'
                    : item.condition === 'Excellent'
                    ? 'bg-blue-50 text-blue-700 border-blue-300'
                    : item.condition === 'Good'
                    ? 'bg-yellow-50 text-yellow-700 border-yellow-300'
                    : 'bg-orange-50 text-orange-700 border-orange-300'
                }`}
              >
                {item.condition}
              </div>

              <div className="text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <span>📍</span>
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium">{item.seller}</span>
                    {item.verified && <span className="text-blue-600">✔️</span>}
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-xs">{item.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  View Details
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
                  Contact
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
