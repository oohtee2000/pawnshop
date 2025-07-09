'use client';

import ItemCard from './ItemCard';
import ItemList from './ItemList'; // 👈 Import list view

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

interface Filters {
  priceRange: [number, number];
  condition: string[];
  categories: string[];
  location: string;
  locationScope: 'all' | 'local' | 'shipping';
  sortBy: string;
}

type ItemGridProps = {
  filters: Filters;
  searchQuery: string;
  viewMode: "grid" | "list";
};

const mockItems: Item[] = [
 {
      id: 1,
      title: "iPhone 14 Pro Max - 256GB",
      price: 899,
      originalPrice: 1199,
      condition: "Excellent",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
      seller: "TechDeals NYC",
      rating: 4.8,
      verified: true,
      isPromoted: true
    },
    {
      id: 2,
      title: "MacBook Air M2 - 13 inch",
      price: 1099,
      originalPrice: 1399,
      condition: "Like New",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      seller: "Apple Store Certified",
      rating: 4.9,
      verified: true,
      isPromoted: false
    },
    {
      id: 3,
      title: "Sony PlayStation 5",
      price: 449,
      originalPrice: 499,
      condition: "Good",
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
      seller: "Gaming Central",
      rating: 4.7,
      verified: true,
      isPromoted: false
    },
    {
      id: 4,
      title: "iPad Pro 12.9-inch",
      price: 799,
      originalPrice: 1099,
      condition: "Excellent",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
      seller: "Tech Reseller Pro",
      rating: 4.6,
      verified: false,
      isPromoted: true
    },
    {
      id: 5,
      title: "Samsung Galaxy S23 Ultra",
      price: 749,
      originalPrice: 1199,
      condition: "Like New",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
      seller: "Mobile Masters",
      rating: 4.5,
      verified: true,
      isPromoted: false
    },
    {
      id: 6,
      title: "Apple Watch Series 8",
      price: 329,
      originalPrice: 429,
      condition: "Good",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
      seller: "Wearable Tech",
      rating: 4.4,
      verified: true,
      isPromoted: false
    },
    {
      id: 7,
      title: "Dell XPS 13 Laptop",
      price: 899,
      originalPrice: 1299,
      condition: "Excellent",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      seller: "Laptop Depot",
      rating: 4.7,
      verified: true,
      isPromoted: false
    },
    {
      id: 8,
      title: "Nintendo Switch OLED",
      price: 299,
      originalPrice: 349,
      condition: "Like New",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      seller: "Game Hub",
      rating: 4.8,
      verified: true,
      isPromoted: false
    }
];

const ItemGrid = ({ filters, searchQuery, viewMode }: ItemGridProps) => {
  const filteredItems = mockItems
    .filter((item) => item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1])
    .filter((item) => filters.condition.length === 0 || filters.condition.includes(item.condition))
    .filter((item) => !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  if (filteredItems.length === 0) {
    return <p className="text-gray-500 text-center">No items match your filters.</p>;
  }

  return viewMode === 'grid' ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  ) : (
    <ItemList items={filteredItems} />
  );
};

export default ItemGrid;
