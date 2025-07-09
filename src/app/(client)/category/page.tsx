'use client';

import Footer from "@/components/index/Footer";
import CategoryHeader from "@/components/client/category/CategoryHeader";
import FilterSidebar from "@/components/client/category/FilterSidebar";
import ItemGrid from "@/components/client/category/ItemGrid";

import { useState } from "react";


// Define filters type
type Filters = {
  priceRange: [number, number];
  condition: string[];
  categories: string[];
  location: string;
  locationScope: "all" | "local" | "shipping";
  sortBy: string;
};

export default function CategoryPage() {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 10000],
    condition: [],
    categories: [],
    location: "",
    locationScope: "all",
    sortBy: "newest",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
        categoryName="Electronics"
        itemsCount={2847}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>

          <section className="lg:col-span-3">
            <ItemGrid
              filters={filters}
              searchQuery={searchQuery}
              viewMode={viewMode} 
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
