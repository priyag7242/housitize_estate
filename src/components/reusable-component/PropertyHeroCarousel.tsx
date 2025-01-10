"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DataItem {
  images: string[];
}

const PropertyHeroCarousel = ({ images }: DataItem) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageIndex = (index: number) => (currentIndex + index) % 4;

  return (
    <div
      className="relative w-full h-[90vh] pt-28 px-8 pb-8 bg-gray-500"
      style={{
        backgroundImage: `url(${images[getImageIndex(0)]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black shade on the background image */}
      <div className="absolute inset-0 h-full bg-black/50 pointer-events-none" />

      <div className="relative w-full h-full flex flex-col md:flex-row gap-4">
        {/* Left half */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden shadow-lg">
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              isAnimating ? "scale-105" : "scale-100"
            }`}
          >
            <Image
              src={images[getImageIndex(0)]}
              alt={`Main Image ${getImageIndex(0) + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right half */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-4">
          {[1, 2, 3].map((offset) => (
            <div
              key={offset}
              className="w-full h-1/3 relative overflow-hidden shadow-lg"
            >
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isAnimating
                    ? offset === 1
                      ? "-translate-x-full scale-150 opacity-0"
                      : offset === 3
                      ? "translate-y-full opacity-0"
                      : "-translate-y-full"
                    : "translate-x-0 translate-y-0 scale-100 opacity-100"
                }`}
              >
                <Image
                  src={images[getImageIndex(offset)]}
                  alt={`Thumbnail Image ${getImageIndex(offset) + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyHeroCarousel;
