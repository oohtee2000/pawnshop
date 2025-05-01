import React from 'react';
import Button from "@/components/ui/Button";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";

interface ItemProps {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  imageColor: string;
}

const featuredItems: ItemProps[] = [
  {
    id: 1,
    name: "Vintage Gold Watch",
    category: "Jewelry",
    price: 299.99,
    originalPrice: 249.99,
    imageColor: "bg-amber-100"
  },
  {
    id: 2,
    name: "Antique Silver Necklace",
    category: "Jewelry",
    price: 189.99,
    originalPrice: 149.99,
    imageColor: "bg-gray-100"
  },
  {
    id: 3,
    name: "Rare Vinyl Record",
    category: "Collectibles",
    price: 129.99,
    originalPrice: 89.99,
    imageColor: "bg-blue-100"
  },
  {
    id: 4,
    name: "Vintage Camera",
    category: "Electronics",
    price: 349.99,
    originalPrice: 289.99,
    imageColor: "bg-gray-200"
  }
];

const ItemCard = ({ item }: { item: ItemProps }) => {
  const profit = item.price - item.originalPrice;
  const profitPercentage = ((profit / item.originalPrice) * 100).toFixed(1);

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-xl bg-white border border-gray-100 rounded-xl">
      <div className={`aspect-square ${item.imageColor} flex items-center justify-center`}>
        <div className="text-5xl text-gray-400 opacity-50 font-semibold">{item.name.charAt(0)}</div>
      </div>
      <CardContent className="p-5">
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">{item.category}</p>
        <h3 className="font-semibold text-lg text-gray-900 mt-1">{item.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-gray-800">${item.price.toFixed(2)}</span>
          <div className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
            +${profit.toFixed(2)} ({profitPercentage}%)
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
      <Button className="text-emerald-600 hover:text-emerald-700 font-medium">
  View All Items
</Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedItems = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-10">
          <div>
            <h2 className="text-3xl font-bold text-blue-900">Featured Items</h2>
            <p className="text-gray-600 mt-2">
              Discover unique treasures from our trusted sellers
            </p>
          </div>
          <Button className="text-emerald-600 hover:text-emerald-700 font-medium">
  View All Items
</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
