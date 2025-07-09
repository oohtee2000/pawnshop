"use client";


import { Search, Filter, SortAsc, Grid, List } from "lucide-react";
import Link from "next/link";

interface CategoryHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  categoryName?: string;
  itemsCount?: number;
}


const CategoryHeader = ({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  categoryName = "Electronics",
  itemsCount = 2847,
}: CategoryHeaderProps) => {


  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li>
              <Link href="/categories" className="hover:text-blue-600 transition">Categories</Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li className="text-gray-900 font-medium">{categoryName}</li>
          </ol>
        </nav>

        {/* Title & View Mode */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
            <p className="text-gray-600 mt-1">Discover quality pre-owned electronics at great prices</p>
            <div className="mt-1 text-sm text-gray-500">
              {itemsCount.toLocaleString()} items found
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <button
              className={`px-3 py-2 transition focus:outline-none ${
                viewMode === "grid" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setViewMode("grid")}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              className={`px-3 py-2 transition focus:outline-none ${
                viewMode === "list" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setViewMode("list")}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${categoryName.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base transition"
            />
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition shadow-sm">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 transition shadow-sm">
              <SortAsc className="w-4 h-4" />
              <span>Sort by Price</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
