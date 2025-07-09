'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ItemCardProps {
  item: {
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
  };
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountPercentage = Math.round(
    ((item.originalPrice - item.price) / item.originalPrice) * 100
  );

  return (
    <div className="relative group overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {item.isPromoted && (
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded">
            ⚡ Featured
          </span>
        </div>
      )}

      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`p-2 rounded-full transition-colors backdrop-blur-sm ${
            isWishlisted
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-600'
          }`}
        >
          <svg
            className={`w-4 h-4 ${isWishlisted ? 'fill-current' : 'stroke-current'}`}
            fill={isWishlisted ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
                     6 3.5 4 6 4c1.54 0 3.04.99 3.57 2.36h.87C14.96 
                     4.99 16.46 4 18 4c2.5 0 4 2 4 4.5 0 3.78-3.4 
                     6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">${item.price}</span>
              <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
              <span className="px-1 py-0.5 text-xs bg-green-100 text-green-700 rounded">
                -{discountPercentage}%
              </span>
            </div>
          </div>

          <div className="text-xs inline-block px-2 py-1 rounded border bg-opacity-10
            ${
              item.condition === 'Like New'
                ? 'bg-green-50 text-green-700 border-green-300'
                : item.condition === 'Excellent'
                ? 'bg-blue-50 text-blue-700 border-blue-300'
                : item.condition === 'Good'
                ? 'bg-yellow-50 text-yellow-700 border-yellow-300'
                : 'bg-orange-50 text-orange-700 border-orange-300'
            }
          ">
            {item.condition}
          </div>
        </div>

        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <span className="text-gray-500">📍</span>
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
          <button className="flex-1 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded">
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
