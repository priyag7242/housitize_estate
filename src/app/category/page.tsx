"use client";

import React, { FormEvent, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertyHeroCarousel from "@/components/reusable-component/PropertyHeroCarousel";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  Minus,
  Plus,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mountain,
  LandPlot,
  University,
  PocketIcon as Pool,
  Home,
  Palmtree,
  Castle,
} from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
// const images = [
//   {
//     id: 1,
//     title: "image1",
//     image: "/assets/images/school-property/property-carousel-img4.jpg",
//   },
//   {
//     id: 2,
//     title: "image2",
//     image: "/assets/images/school-property/property-carousel-img6.jpg",
//   },
//   {
//     id: 3,
//     title: "image3",
//     image: "/assets/images/school-property/property-carousel-img7.jpg",
//   },
//   {
//     id: 4,
//     title: "image4",
//     image: "/assets/images/school-property/property-carousel-img8.jpg",
//   },
// ];
const categories: Category[] = [
  { id: "house", label: "House", icon: Home },
  { id: "land", label: "Land", icon: LandPlot },
  { id: "school", label: "School", icon: University },
  { id: "beach", label: "Beachfront", icon: Palmtree },
  { id: "castles", label: "Castles", icon: Castle },
];

const properties = [
  {
    id: 1,
    images: ["/assets/images/category/similar-listing1.jpg"],
    location: "Udaipur",
    country: "India",
    description: "City views",
    price: 1500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 2,
    images: ["/assets/images/category/similar-listing2.jpg"],
    location: "Dhalewadi",
    country: "India",
    description: "77 kilometres away",
    price: 2000000,
    rating: 4.88,
    isFavourite: false,
  },
  {
    id: 3,
    images: ["/assets/images/category/similar-listing3.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 2500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 4,
    images: ["/assets/images/category/similar-listing4.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 3000000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 5,
    images: ["/assets/images/category/similar-listing5.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 3500000,
    rating: 4.95,
    isFavourite: false,
  },
  {
    id: 6,
    images: ["/assets/images/category/similar-listing6.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 4000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 7,
    images: ["/assets/images/category/similar-listing7.jpg"],
    location: "Pune",
    country: "India",
    description: "City views",
    price: 4500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 8,
    images: ["/assets/images/category/similar-listing8.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 5000000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 9,
    images: ["/assets/images/category/similar-listing9.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 5500000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 10,
    images: ["/assets/images/category/similar-listing10.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 6000000,
    rating: 4.95,
    isFavourite: false,
  },
  {
    id: 11,
    images: ["/assets/images/category/similar-listing11.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 7000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 12,
    images: ["/assets/images/category/similar-listing12.jpg"],
    location: "Pune",
    country: "India",
    description: "City views",
    price: 8000000,
    rating: 5.0,
    isFavourite: false,
  },
];

const Category = () => {
  const slider = useRef<Slider>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("house");
  const [propertyList, setPropertyList] = useState(properties);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    slider.current?.slickPrev();
  };

  const handleNext = () => {
    slider.current?.slickNext();
  };

  const toggleFavourite = (id: number) => {
    setPropertyList((prevProperties) =>
      prevProperties.map((property) =>
        property.id === id
          ? { ...property, isFavourite: !property.isFavourite }
          : property
      )
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <PropertyHeroCarousel images={images} />

      {/* Category top Carousel */}
      <div className="relative w-full h-screen overflow-hidden">
        <Slider ref={slider} {...settings} className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-screen">
              <Image
                src={image}
                alt={image}
                fill
                className="w-full h-full object-cover"
              />
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </Slider>
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white/30 text-white backdrop-blur-md rounded-full p-3 shadow-md z-10 hover:bg-white/50 transition hover:-translate-x-2 duration-300"
        >
          {/* Left arrow */}
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white/30 text-white backdrop-blur-md rounded-full p-3 shadow-md z-10 hover:bg-white/50 transition hover:translate-x-2 duration-300"
        >
          {/* Right arrow */}
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="absolute top-32 shadow-lg left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-10">
          <div className="flex items-center gap-2 p-2 bg-white rounded-full shadow-lg border border-gray-200">
            <div className="flex-1 px-3">
              <input
                type="text"
                placeholder="Search destinations"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full outline-none text-sm text-gray-600 placeholder-gray-400"
              />
            </div>
            <button className="w-10 h-10 flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 py-6 pt-24">
        {/* Category Bar */}
        <div className="sticky top-[96px] pt-4 z-10 bg-white flex items-center gap-8 overflow-x-auto pb-4 md:pb-6 no-scrollbar shadow-md">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center gap-2 min-w-[64px] transition-colors ${
                selectedCategory === category.id
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <category.icon className="w-6 h-6" />
              <span className="text-xs font-medium whitespace-nowrap">
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

        {/* Properties */}
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {propertyList.map((property) => (
            <div key={property.id} className="group relative">
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-200">
                <div className="relative h-full w-full">
                  {property.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${property.location} ${index + 1}`}
                      fill
                      className={`object-cover transition-all duration-300 ${
                        index === 0 ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
                    {property.images.map((_, index) => (
                      <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-white opacity-75"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                onClick={() => toggleFavourite(property.id)}
              >
                <Heart
                  className={`h-4 w-4 ${
                    property.isFavourite
                      ? "fill-red-500 text-red-500"
                      : "text-gray-500"
                  }`}
                />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <div className="mt-2 flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">
                    {property.location}, {property.country}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {property.description}
                  </p>
                  <p className="mt-1">
                    <span className="font-semibold">
                      {property.price.toLocaleString("en-IN")}
                    </span>{" "}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{property.rating}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
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
