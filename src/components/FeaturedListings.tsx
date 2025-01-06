import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedListings = () => {
  const featuredListings = {
    listing1: {
      image: "/assets/images/featured-listing1.jpg",
      price: 1000000,
      title: "Demotext",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 SQ.FT.",
    },
    listing2: {
      image: "/assets/images/featured-listing2.jpg",
      price: 1000000,
      title: "Demotext",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 SQ.FT.",
    },
    listing3: {
      image: "/assets/images/featured-listing3.jpg",
      price: 1000000,
      title: "Demotext",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 SQ.FT.",
    },
    listing4: {
      image: "/assets/images/featured-listing4.jpg",
      price: 1000000,
      title: "Demotext",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 SQ.FT.",
    },
    listing5: {
      image: "/assets/images/featured-listing5.jpg",
      price: 1000000,
      title: "Demotext",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 SQ.FT.",
    },
    listing6: {
      image: "/assets/images/featured-listing6.jpg",
      price: 1000000,
      title: "Demotext",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000 SQ.FT.",
    },
  }
  return (
    <section className="relative bg-graybackground  w-full  px-4  py-16 md:py-24">
      <div className="flex flex-col md:px-28 items-center md:items-start">
        <h2 className="text-center md:text-left text-sm uppercase  md:text-base tracking-widest text-gray-500 mb-8 md:mb-12">
          PRESENTING A COLLECTION OF demigod&apos;S FINEST HOMES
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <h1 className="text-2xl md:text-4xl uppercase  lg:text-5xl font-thin text-center md:text-left mb-8 md:mb-0 max-w-6xl">
            handpicked properties for you
          </h1>
          <a
            href="#listings"
            className="inline-flex  items-center justify-center px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-50 text-sm"
          >
            VIEW ALL
          </a>
        </div>
      </div>
      <Carousel className="w-full max-w-7xl mx-auto mt-12">
        <CarouselContent>
          {Object.values(featuredListings).map((listing, index) => (
            <CarouselItem key={index} className="md:basis-1/2 basis-full">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-[4/3] items-center justify-center p-6">
                    <Image
                      src={listing.image}
                      alt={listing.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                    <p className="text-lg md:text-2xl text-gray-600 pt-5">
                      ${listing.price.toLocaleString()}
                    </p>
                    <h3 className="text-xl md:text-4xl uppercase text-gray-700 mt-4">
                      {listing.title}
                    </h3>
                    <div className="flex uppercase gap-4 mt-2">
                      <span className="text-black font-bold text-lg">
                        {listing.bedrooms} beds
                      </span>
                      <span className="text-black font-bold text-lg">
                        {listing.bathrooms} baths
                      </span>
                      <span className="text-black font-bold text-lg">
                        {listing.area}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedListings;
