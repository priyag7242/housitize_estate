"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Residential = () => {
  const [activeTab, setActiveTab] = useState<
    | "sale"
    | "rent"
    | "most popular"
    | "by budget"
    | "by property type"
    | "by bhk"
    | "pg / co-living"
  >("sale");

  const activeCategory = (() => {
    switch (activeTab) {
      case "sale":
      case "rent":
        return "properties";
      case "most popular":
        return "mostPopularProperties";
      case "by budget":
        return "byBudgetProperties";
      case "by property type":
        return "byPropertyTypeProperties";
      case "by bhk":
        return "byBhkProperties";
      case "pg / co-living":
        return "pgColivingProperties";
      default:
        return "properties";
    }
  })();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const properties = [
    {
      title: "Shopping Mart",
      subtitle: "",
      image: "/assets/images/featured-listing1.jpg",
    },
    {
      title: "Business Center",
      subtitle: "",
      image: "/assets/images/featured-listing1.jpg",
    },
    {
      title: "Office",
      subtitle: "",
      image: "/assets/images/featured-listing1.jpg",
    },
    {
      title: "Shops and Retail",
      subtitle: "",
      image: "/assets/images/featured-listing1.jpg",
    },
    {
      title: "Multiplex",
      subtitle: "",
      image: "/assets/images/featured-listing1.jpg",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mostPopularProperties = [
    {
      title: "Office",
      subtitle: "",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Shopping Mart",
      subtitle: "",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Business Center",
      subtitle: "",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Shops and Retail",
      subtitle: "",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Multiplex",
      subtitle: "",
      image: "/assets/images/featured-listing5.jpg",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const byBudgetProperties = [
    {
      title: "Properties for Sale",
      subtitle: "Under $20,000",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Properties for Sale",
      subtitle: "Under $50,000",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Properties for Sale",
      subtitle: "Under $100, 000",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Properties for Sale",
      subtitle: "Under $1,000,000",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Properties for Sale",
      subtitle: "Under $10,000,000",
      image: "/assets/images/featured-listing5.jpg",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const byPropertyTypeProperties = [
    {
        title: "Duplex",
        subtitle: "Spacious living with two floors",
        image: "/assets/images/featured-listing5.jpg",
    },
    {
        title: "Penthouse",
        subtitle: "Luxurious top-floor apartment",
        image: "/assets/images/featured-listing5.jpg",
    },
    {
        title: "Villa",
        subtitle: "Exclusive standalone residence",
        image: "/assets/images/featured-listing5.jpg",
    },
    {
        title: "Apartment",
        subtitle: "Modern multi-family housing",
        image: "/assets/images/featured-listing5.jpg",
    },
    {
        title: "Luxury",
        subtitle: "High-end, premium properties",
        image: "/assets/images/featured-listing5.jpg",
    },
];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const byBhkProperties = [
    {
      title: "1 BHK Apartment",
      subtitle: "Perfect for singles or couples",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "2 BHK Apartment",
      subtitle: "Ideal for small families",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "3 BHK Apartment",
      subtitle: "Spacious living for larger families",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "4 BHK Apartment",
      subtitle: "Luxury living with ample space",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "5 BHK Apartment",
      subtitle: "Exclusive and expansive",
      image: "/assets/images/featured-listing5.jpg",
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pgColivingProperties = [
    {
      title: "Shared Apartment",
      subtitle: "Affordable shared spaces",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Co-living Space",
      subtitle: "Community living with amenities",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Student Housing",
      subtitle: "Convenient and budget-friendly",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "Hostel",
      subtitle: "Comfortable and secure",
      image: "/assets/images/featured-listing5.jpg",
    },
    {
      title: "PG for Men",
      subtitle: "Exclusive for male tenants",
      image: "/assets/images/featured-listing5.jpg",
    },
  ];

  return (
    <div className="w-full ">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-4">
          Residential Properties Available
        </h1>
        <div className="flex justify-center mb-6">
          <h3 className="max-w-3xl text-center sm:text-center">
            Looking to <strong>rent</strong>, <strong>lease</strong>,{" "}
            <strong>buy</strong>, or <strong>sell</strong> residential property?
            We have the perfect solution for you.
            <br />{" "}
            <a href="/contact" className="text-emerald-500 underline">
              Contact us
            </a>{" "}
            today to get started!
          </h3>
        </div>

        {/* Nav Buttons */}
        <div className="flex flex-col justify-center gap-4 mb-8">
          <div className="flex justify-center gap-3">
            <Button
              variant={activeTab === "sale" ? "default" : "outline"}
              onClick={() => setActiveTab("sale")}
              className="min-w-[100px] font-bold tracking-wider"
            >
              Sale
            </Button>
            <Button
              variant={activeTab === "rent" ? "default" : "outline"}
              onClick={() => setActiveTab("rent")}
              className="min-w-[100px] font-bold tracking-wider"
            >
              Rent
            </Button>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeTab === "most popular" ? "default" : "outline"}
              onClick={() => setActiveTab("most popular")}
              className="min-w-[100px] font-bold"
            >
              Most Popular
            </Button>
            <Button
              variant={activeTab === "by budget" ? "default" : "outline"}
              onClick={() => setActiveTab("by budget")}
              className="min-w-[100px] font-bold"
            >
              By Budget
            </Button>
            <Button
              variant={activeTab === "by property type" ? "default" : "outline"}
              onClick={() => setActiveTab("by property type")}
              className="min-w-[100px] font-bold"
            >
              By Property Type
            </Button>
            <Button
              variant={activeTab === "by bhk" ? "default" : "outline"}
              onClick={() => setActiveTab("by bhk")}
              className="min-w-[100px] font-bold"
            >
              By BHK
            </Button>
            <Button
              variant={activeTab === "pg / co-living" ? "default" : "outline"}
              onClick={() => setActiveTab("pg / co-living")}
              className="min-w-[100px] font-bold"
            >
              PG / Co-living
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {(eval(activeCategory) as typeof properties).map(
            (property, index) => (
              <div
                key={index}
                className="relative hover:cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">
                        {property.title}
                      </h3>
                      <p className="text-sm opacity-90">{property.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Residential;
