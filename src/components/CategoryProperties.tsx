import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const houseProperties = [
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
const landProperties = [
  {
    id: 1,
    images: ["/assets/images/category/similar-listing6.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 4000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 2,
    images: ["/assets/images/category/similar-listing7.jpg"],
    location: "Pune",
    country: "India",
    description: "City views",
    price: 4500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 3,
    images: ["/assets/images/category/similar-listing8.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 5000000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 4,
    images: ["/assets/images/category/similar-listing9.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 5500000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 5,
    images: ["/assets/images/category/similar-listing10.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 6000000,
    rating: 4.95,
    isFavourite: false,
  },
  {
    id: 6,
    images: ["/assets/images/category/similar-listing1.jpg"],
    location: "Udaipur",
    country: "India",
    description: "City views",
    price: 1500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 7,
    images: ["/assets/images/category/similar-listing2.jpg"],
    location: "Dhalewadi",
    country: "India",
    description: "77 kilometres away",
    price: 2000000,
    rating: 4.88,
    isFavourite: false,
  },
  {
    id: 8,
    images: ["/assets/images/category/similar-listing3.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 2500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 9,
    images: ["/assets/images/category/similar-listing4.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 3000000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 10,
    images: ["/assets/images/category/similar-listing5.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 3500000,
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
const schoolProperties = [
  {
    id: 1,
    images: ["/assets/images/category/similar-listing3.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 2500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 2,
    images: ["/assets/images/category/similar-listing4.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 3000000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 3,
    images: ["/assets/images/category/similar-listing6.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 4000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 4,
    images: ["/assets/images/category/similar-listing7.jpg"],
    location: "Pune",
    country: "India",
    description: "City views",
    price: 4500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 5,
    images: ["/assets/images/category/similar-listing8.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 5000000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 6,
    images: ["/assets/images/category/similar-listing5.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 3500000,
    rating: 4.95,
    isFavourite: false,
  },

  {
    id: 7,
    images: ["/assets/images/category/similar-listing11.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 7000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 8,
    images: ["/assets/images/category/similar-listing9.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 5500000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 9,
    images: ["/assets/images/category/similar-listing10.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 6000000,
    rating: 4.95,
    isFavourite: false,
  },
  {
    id: 10,
    images: ["/assets/images/category/similar-listing1.jpg"],
    location: "Udaipur",
    country: "India",
    description: "City views",
    price: 1500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 11,
    images: ["/assets/images/category/similar-listing2.jpg"],
    location: "Dhalewadi",
    country: "India",
    description: "77 kilometres away",
    price: 2000000,
    rating: 4.88,
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
const beachfront = [
  {
    id: 1,
    images: ["/assets/images/category/similar-listing8.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 5000000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 2,
    images: ["/assets/images/category/similar-listing9.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 5500000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 3,
    images: ["/assets/images/category/similar-listing10.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 6000000,
    rating: 4.95,
    isFavourite: false,
  },
  {
    id: 4,
    images: ["/assets/images/category/similar-listing11.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 7000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 5,
    images: ["/assets/images/category/similar-listing1.jpg"],
    location: "Udaipur",
    country: "India",
    description: "City views",
    price: 1500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 6,
    images: ["/assets/images/category/similar-listing2.jpg"],
    location: "Dhalewadi",
    country: "India",
    description: "77 kilometres away",
    price: 2000000,
    rating: 4.88,
    isFavourite: false,
  },
  {
    id: 7,
    images: ["/assets/images/category/similar-listing3.jpg"],
    location: "Pimplad Nasik",
    country: "India",
    description: "Lake and garden views",
    price: 2500000,
    rating: 5.0,
    isFavourite: false,
  },
  {
    id: 8,
    images: ["/assets/images/category/similar-listing4.jpg"],
    location: "Mahagaon",
    country: "India",
    description: "Mountain and valley views",
    price: 3000000,
    rating: 4.89,
    isFavourite: false,
  },
  {
    id: 9,
    images: ["/assets/images/category/similar-listing5.jpg"],
    location: "Jaipur",
    country: "India",
    description: "Palace views",
    price: 3500000,
    rating: 4.95,
    isFavourite: false,
  },
  {
    id: 10,
    images: ["/assets/images/category/similar-listing6.jpg"],
    location: "Kolhapur",
    country: "India",
    description: "City views",
    price: 4000000,
    rating: 4.9,
    isFavourite: false,
  },
  {
    id: 11,
    images: ["/assets/images/category/similar-listing7.jpg"],
    location: "Pune",
    country: "India",
    description: "City views",
    price: 4500000,
    rating: 5.0,
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


const CategoryProperties = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const [propertyList, setPropertyList] = useState(houseProperties);

  useEffect(() => {
    switch (selectedCategory) {
      case "highrise":
        setPropertyList(houseProperties);
        break;
      case "farmhouse":
        setPropertyList(landProperties);
        break;
      case "plotting":
        setPropertyList(schoolProperties);
        break;
      case "villas":
        setPropertyList(beachfront);
        break;
      default:
        setPropertyList([]);
        break;
    }
  }, [selectedCategory]);

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
              <h3 className="font-semibold text-gray-800">
                {property.location}, {property.country}
              </h3>
              <p className="text-sm text-gray-700">{property.description}</p>
              <p className="mt-1">
                <span className="font-semibold text-gray-600">
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
  );
};

export default CategoryProperties;
