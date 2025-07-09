"use client";

// import { useState } from "react";
import { MapPin, Star, DollarSign } from "lucide-react";

// Define a type for the filters
type Filters = {
  priceRange: [number, number];
  condition: string[];
  categories: string[];
  location: string;
  locationScope: "all" | "local" | "shipping";
  sortBy: string;
};

interface FilterSidebarProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FilterSidebar = ({ filters, setFilters }: FilterSidebarProps) => {
  const conditions = [
    { id: "new", label: "Like New", count: 234 },
    { id: "excellent", label: "Excellent", count: 567 },
    { id: "good", label: "Good", count: 432 },
    { id: "fair", label: "Fair", count: 123 },
  ];

  const categories = [
    { id: "smartphones", label: "Smartphones", count: 456 },
    { id: "laptops", label: "Laptops", count: 234 },
    { id: "tablets", label: "Tablets", count: 189 },
    { id: "gaming", label: "Gaming", count: 345 },
    { id: "audio", label: "Audio", count: 267 },
    { id: "cameras", label: "Cameras", count: 123 },
  ];

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="border rounded-md shadow-sm">
        <div className="px-4 py-3 border-b flex items-center text-lg font-semibold">
          <DollarSign className="w-5 h-5 text-green-600 mr-2" />
          Price Range
        </div>
        <div className="p-4 space-y-4">
          <input
            type="range"
            min={0}
            max={10000}
            step={50}
            value={filters.priceRange[0]}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [Number(e.target.value), filters.priceRange[1]],
              })
            }
            className="w-full"
          />
          <input
            type="range"
            min={0}
            max={10000}
            step={50}
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [filters.priceRange[0], Number(e.target.value)],
              })
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Condition */}
      <div className="border rounded-md shadow-sm">
        <div className="px-4 py-3 border-b flex items-center text-lg font-semibold">
          <Star className="w-5 h-5 text-yellow-600 mr-2" />
          Condition
        </div>
        <div className="p-4 space-y-3">
          {conditions.map((condition) => (
            <div key={condition.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={condition.id}
                checked={filters.condition.includes(condition.id)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFilters({
                    ...filters,
                    condition: checked
                      ? [...filters.condition, condition.id]
                      : filters.condition.filter((c) => c !== condition.id),
                  });
                }}
              />
              <label htmlFor={condition.id} className="cursor-pointer flex-1">
                {condition.label}
              </label>
              <span className="text-sm text-gray-500">({condition.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="border rounded-md shadow-sm">
        <div className="px-4 py-3 border-b text-lg font-semibold">Subcategories</div>
        <div className="p-4 space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={category.id}
                checked={filters.categories.includes(category.id)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setFilters({
                    ...filters,
                    categories: checked
                      ? [...filters.categories, category.id]
                      : filters.categories.filter((c) => c !== category.id),
                  });
                }}
              />
              <label htmlFor={category.id} className="cursor-pointer flex-1">
                {category.label}
              </label>
              <span className="text-sm text-gray-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="border rounded-md shadow-sm">
        <div className="px-4 py-3 border-b flex items-center text-lg font-semibold">
          <MapPin className="w-5 h-5 text-red-600 mr-2" />
          Location
        </div>
        <div className="p-4 space-y-3">
          <input
            type="text"
            placeholder="Enter city or zip code"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="space-y-2">
            {["all", "local", "shipping"].map((value) => (
              <div key={value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="locationScope"
                  id={value}
                  value={value}
                  checked={filters.locationScope === value}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      locationScope: e.target.value as Filters["locationScope"],
                    })
                  }
                />
                <label htmlFor={value} className="cursor-pointer capitalize">
                  {value === "all"
                    ? "All locations"
                    : value === "local"
                    ? "Within 25 miles"
                    : "Ships nationwide"}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() =>
          setFilters({
            priceRange: [0, 10000],
            condition: [],
            categories: [],
            location: "",
            locationScope: "all",
            sortBy: "newest",
          })
        }
        className="w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
