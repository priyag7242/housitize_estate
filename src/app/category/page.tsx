"use client";

import React, { FormEvent, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyHeroCarousel from "@/components/reusable-component/PropertyHeroCarousel";
import { X, Minus, Plus, SlidersHorizontal } from "lucide-react";
import { Building, House, LandPlot, HousePlus } from "lucide-react";

import { useSearchParams } from "next/navigation";

// Map icon names (as strings) to actual React components
const iconMap = {
  Building,
  House,
  LandPlot,
  HousePlus,
};
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategoryProperties from "@/components/CategoryProperties";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchParams = useSearchParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = searchParams.get("data");

    if (data) {
      try {
        const parsedData = JSON.parse(data);
        const mappedData = parsedData.map((category) => ({
          ...category,
          icon: iconMap[category.icon] || null,
        }));
        setCategories(mappedData);
        setSelectedCategory(parsedData[0].id);
      } catch (error) {
        console.error("Invalid JSON data:", error);
      }
    }
  }, [searchParams]);

  const images = [
    "/assets/images/school-property/property-carousel-img4.jpg",
    "/assets/images/property-carousel2new.jpg",
    "/assets/images/property-carousel3new.jpg",
    "/assets/images/property-carousel4.jpg",
  ];

  const [filterData, setFilterData] = useState({
    location: "",
    priceRange: [500000, 10000000] as [number, number],
    bedrooms: 2,
    area: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Filter data:", filterData);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-white">
      <PropertyHeroCarousel images={images} />

      <div className="container mx-auto max-w-[1400px] px-4 py-6 pt-24">
        {/* Category Bar */}
        <div className="sticky top-0 pt-4 z-10 bg-white flex items-center gap-8 overflow-x-auto pb-4 md:pb-6 no-scrollbar shadow-md">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center gap-2 min-w-[64px] transition-colors ${
                selectedCategory === category.id
                  ? "text-gray-700 border-b-2 border-gray-700"
                  : "text-gray-600 hover:text-gray-600"
              }`}
            >
              <category.icon
                className={`w-6 h-6 text-gray-700 ${
                  selectedCategory === category.id
                    ? "text-gray-700"
                    : "text-gray-600"
                }`}
              />
              <span className="text-sm font-medium whitespace-nowrap">
                {category.label}
              </span>
            </button>
          ))}

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-gray-600 shadow-sm border-2 border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>

        {/* Category Properties */}
        <CategoryProperties selectedCategory={selectedCategory} />
      </div>

      {/* Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white w-full rounded-xl  max-w-lg overflow-hidden relative max-h-[90vh] flex flex-col">
            <div className="sticky top-0 bg-white p-6 border-b z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Filter Options</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-6 overflow-y-auto flex-1 space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={filterData.location}
                  onChange={(e) =>
                    setFilterData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  placeholder="Enter location"
                />
              </div>

              <div className="space-y-2">
                <Label>Price Range</Label>

                {/*safe*/}
                <div className="relative h-1.5 mt-[88px]">
                  <div className="absolute inset-0 bg-gray-200 rounded-full" />
                  <div
                    className="absolute h-full bg-rose-500 rounded-full"
                    style={{
                      left: `${
                        ((filterData.priceRange[0] - 500000) /
                          (10000000 - 500000)) *
                        100
                      }%`,
                      right: `${
                        100 -
                        ((filterData.priceRange[1] - 500000) /
                          (10000000 - 500000)) *
                          100
                      }%`,
                    }}
                  />

                  <input
                    type="range"
                    min={500000}
                    max={10000000}
                    value={filterData.priceRange[0]}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue <= filterData.priceRange[1]) {
                        setFilterData((prev) => ({
                          ...prev,
                          priceRange: [newValue, prev.priceRange[1]],
                        }));
                      }
                    }}
                    className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-rose-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-rose-500 [&::-moz-range-thumb]:cursor-pointer"
                  />
                  <input
                    type="range"
                    min={500000}
                    max={10000000}
                    value={filterData.priceRange[1]}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue >= filterData.priceRange[0]) {
                        setFilterData((prev) => ({
                          ...prev,
                          priceRange: [prev.priceRange[0], newValue],
                        }));
                      }
                    }}
                    className="absolute w-full h-1.5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-rose-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-rose-500 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>

                {/*showing price*/}
                <div className="flex justify-between">
                  <div className="rounded-full border px-4 py-2 text-sm">
                    ₹{filterData.priceRange[0].toLocaleString("en-IN")}
                  </div>
                  <div className="rounded-full border px-4 py-2 text-sm">
                    ₹{filterData.priceRange[1].toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Bedrooms</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10"
                    onClick={() =>
                      setFilterData((prev) => ({
                        ...prev,
                        bedrooms: Math.max(0, prev.bedrooms - 1),
                      }))
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium min-w-[48px] text-center">
                    {filterData.bedrooms}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10"
                    onClick={() =>
                      setFilterData((prev) => ({
                        ...prev,
                        bedrooms: prev.bedrooms + 1,
                      }))
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area (sq ft)</Label>
                <Input
                  id="area"
                  type="number"
                  value={filterData.area}
                  onChange={(e) =>
                    setFilterData((prev) => ({ ...prev, area: e.target.value }))
                  }
                  placeholder="Enter area in sq ft"
                />
              </div>
            </form>
            <div className="sticky bottom-0 bg-white border-t p-4 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  setFilterData({
                    location: "",
                    priceRange: [500000, 10000000],
                    bedrooms: 2,
                    area: "",
                  });
                }}
                className="text-gray-600 border w-[100px] h-[40px] rounded border-black hover:text-white hover: bg-white hover:bg-black transition-colors"
              >
                Reset
              </button>
              <Button onClick={handleSubmit} className="px-6 tracking-widest">
                Apply Filter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
