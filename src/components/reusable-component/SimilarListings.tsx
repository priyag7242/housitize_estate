"use client";

import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const SimilarListings = () => {
  const slider = useRef(null);

  const properties = [
    {
      id: "1",
      image: "/assets/images/similar-listing1.jpg",
      status: "NOW TAKING RESERVATIONS",
      address: "DLF Phase 1",
      city: "Gurgaon",
      state: "Haryana",
      zip: "122002",
      beds: 6,
      baths: 6.5,
      sqft: 9205,
    },
    {
      id: "2",
      image: "/assets/images/similar-listing2.jpg",
      status: "FOR SALE",
      address: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500033",
      beds: 6,
      baths: 6.5,
      sqft: 9205,
    },
    {
      id: "3",
      image: "/assets/images/similar-listing3.jpg",
      status: "POCKET LISTING",
      address: "Marine Drive",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400020",
      beds: 6,
      baths: 6.5,
      sqft: 9205,
    },
    {
      id: "4",
      image: "/assets/images/similar-listing4.jpg",
      status: "FOR SALE",
      address: "Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500033",
      beds: 6,
      baths: 6.5,
      sqft: 9205,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-12 text-center text-4xl tracking-[0.2em]">
        SIMILAR LISTINGS
      </h2>
      {/* Similar Listings Section */}
      <div className="relative">
        <Slider ref={slider} {...settings} className="mb-12">
          {properties.map((property) => (
            <div key={property.id} className="px-4">
              <div className="relative flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <div className="absolute right-4 top-4 z-10">
                    <span className="bg-[#3a6154] px-4 py-2 text-xs uppercase tracking-wider text-white">
                      {property.status}
                    </span>
                  </div>
                  <Image
                    src={property.image}
                    alt={property.address}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-2xl tracking-wider">
                    PRICE UPON REQUEST
                  </h3>
                  <p className="uppercase tracking-wider text-gray-600">
                    {property.address}, {property.city}, {property.state}{" "}
                    {property.zip}
                  </p>
                  {(property.beds || property.baths || property.sqft) && (
                    <p className="text-sm text-gray-500">
                      {property.beds && `${property.beds} BEDS`}
                      {property.baths && ` | ${property.baths} BATHS`}
                      {property.sqft &&
                        ` | ${property.sqft.toLocaleString()} SQ.FT.`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <Button
            variant="outline"
            className="rounded-none border-gray-200 px-8 text-sm tracking-wider"
          >
            VIEW ALL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimilarListings;
