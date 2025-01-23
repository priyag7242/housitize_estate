"use client";
import { useState } from "react";
import Image from "next/image"
import { Home, Users, Key, MapPin,  Building2, Building, BuildingIcon as Building4, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const steps = [
  {
    icon: Home,
    title: "Find Real Estate",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    icon: Users,
    title: "Meet Relator",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    icon: Key,
    title: "Take The Keys",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
];

const categories = [
    {
      icon: Home,
      title: "Town House",
      properties: 2,
    },
    {
      icon: Building2,
      title: "Modern Villa",
      properties: 10,
    },
    {
      icon: Building,
      title: "Apartment",
      properties: 3,
    },
    {
      icon: Building4,
      title: "Office",
      properties: 3,
    },
    {
      icon: Home,
      title: "Single Family",
      properties: 5,
    },
    {
      icon: Store,
      title: "Shop House",
      properties: 2,
    },
  ]

  const properties = [
    {
      id: 1,
      title: "Skyper Pool Apartment",
      address: "1020 Bloomingdale Ave",
      image: "/assets/images/featured-listing1.jpg",
      status: "FOR SALE",
      beds: 4,
      baths: 2,
      sqft: 450,
      price: 280000,
    },
    {
      id: 2,
      title: "North Dillard Street",
      address: "4330 Bell Shoals Rd",
      image: "/assets/images/featured-listing2.jpg",
      status: "FOR RENT",
      beds: 4,
      baths: 2,
      sqft: 400,
      price: 250,
    },
    {
      id: 3,
      title: "Eaton Garth Penthouse",
      address: "7722 18th Ave, Brooklyn",
      image: "/assets/images/featured-listing3.jpg",
      status: "FOR SALE",
      featured: true,
      beds: 4,
      baths: 2,
      sqft: 450,
      price: 180000,
    },
  ]

const House = () => {
  const [listingType, setListingType] = useState<"sale" | "rent">("sale");

  const stepsSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      {/* HERO */}
      <div className="relative min-h-[85vh] flex items-center justify-start w-full overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-[#323024] to-black z-0" />

        {/* Right side image */}
        <div
          className="absolute right-0 top-0 lg:mt-28 h-full w-full lg:w-[45%]"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_IMAGE_URL ||
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-hero.jpg-d3n3H2UgdvwAeqq8fIh4U2wPXmZEOh.jpeg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 lg:bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full lg:ml-24 ml-8 mt-10 sm:mt-0 w-full max-w-3xl lg:max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="lg:w-[55%]">
            {/* Header Text */}
            <div className="space-y-4">
              <p className="text-xs font-medium text-gray-200 tracking-wider border border-white w-fit px-3 rounded-sm py-1">
                LET US GUIDE YOUR HOME
              </p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Find Your <span className="text-amber-400">Dream</span> Home.
              </h1>
              <p className="text-sm text-gray-300 sm:text-base">
                From as low as $10 per day with limited time offer discounts
              </p>
            </div>

            {/* Sale/Rent Toggle */}
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => setListingType("sale")}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors sm:text-base
                ${
                  listingType === "sale"
                    ? "border-amber-400 text-white"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                Sale
              </button>
              <button
                onClick={() => setListingType("rent")}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors sm:text-base
                ${
                  listingType === "rent"
                    ? "border-amber-400 text-white"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Search Section */}
          <div className="mt-8">
            <div className="flex flex-col gap-4 bg-white py-3 px-6 shadow-lg sm:flex-row sm:items-center">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter Keyword"
                  className="h-12 border-0 text-base shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="w-full sm:w-28">
                <Select>
                  <SelectTrigger className="h-12 border-0 text-base shadow-none focus:ring-0">
                    <SelectValue placeholder="All Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="h-10 rounded-none border-gray-200"
                >
                  Filter
                </Button>
                <Button className="h-10 bg-amber-400 px-8 rounded-none text-base font-semibold text-black/80 hover:bg-amber-500">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Second Div*/}
      <section className="py-16 flex justify-center md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It works? Find a perfect home
            </h2>
            <p className="mb-16 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100">
                  <step.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Steps*/}
      <section className="py-16 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Featured Categories</h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet</p>
          </div>
          <Link href="/categories" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
            View All Categories
            <span className="ml-1">→</span>
          </Link>
        </div>

        <div className="relative px-4">
          <Slider {...stepsSettings} className="featured-categories-slider -mx-4">
            {categories.map((category, index) => (
              <div key={index} className="px-4">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="mb-4 rounded-full bg-gray-100 p-3">
                      <category.icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600">{category.properties} Properties</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>

    {/*Our best deals*/}
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">Discover Our Best Deals</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet</p>
        </div>
        <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors">
          View All Properties
          <span className="inline-block">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image    
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-[240px] object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold text-white bg-emerald-700 rounded-full">
                  {property.status}
                </span>
                {property.featured && (
                  <span className="px-3 py-1 text-xs font-semibold text-gray-900 bg-amber-400 rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{property.address}</span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="flex gap-4 text-gray-600">
                  <div className="flex items-center">
                    <span className="font-semibold">{property.beds}</span>
                    <span className="ml-1">bed</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">{property.baths}</span>
                    <span className="ml-1">bath</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold">{property.sqft}</span>
                    <span className="ml-1">sqft</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-gray-900">
                    ${property.status === "FOR RENT" ? `${property.price}/mo` : property.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default House;
