"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DataItem {
  id: number;
  title: string;
  image: string;
}

interface Props {
  images: DataItem[];
}

const PropertyHeroCarousel = ({ images }: Props) => {
  const slider = useRef<Slider>(null);

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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider ref={slider} {...settings} className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={image.image}
              alt={image.title}
              fill
              className="w-full h-full object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/40" />
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
    </div>
  );
};

export default PropertyHeroCarousel;
