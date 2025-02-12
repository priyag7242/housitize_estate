"use client";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactPopup from "./ContactPopup";
import { useState } from "react";

const carouselItems = [
  {
    image: "/assets/images/housekeeping.webp",
    title: "Housekeeping services",
    description:
      "Providing smart, energetic, efficient and courteous personnel trained to handle all tasks related to housekeeping services.",
  },
  {
    image: "/assets/images/sanitization.webp",
    title: "Sanitization services",
    description:
      "Through proven expertise, leading technology, and industry insights, we drive productivity, efficiency, and documented outcomes in sanitization services.",
  },
  {
    image: "/assets/images/pantry.webp",
    title: "Pantry services",
    description:
      "Providing centralized and standardized delivery across a dispersed facilities portfolio allows clients to focus on their core business with our pantry services.",
  },

  {
    image: "/assets/images/floor-carpet.webp",
    title: "Floor, carpet & upholstery solutions",
    description:
      "Expertise, technology, and insights driving productivity and efficiency in floor, carpet & upholstery solutions.",
  },
  {
    image: "/assets/images/pantry.webp",
    title: "Guest house management",
    description:
      "Providing smart, energetic, efficient and courteous personnel trained to handle all tasks related to guest house management.",
  },
];

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
    aria-label="Previous slide"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
    aria-label="Next slide"
  >
    <ChevronRight className="h-6 w-6" />
  </button>
);

const FacilityManagement = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-24 overflow-hidden">
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-6">
          <h2 className="text-xl font-medium">Solutions and Capabilities</h2>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-3xl">
              Comprehensive Facility Management Solutions
            </h1>
            <Button
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              variant="outline"
              className="self-start lg:self-center px-8 border-2 text-gray-800 border-gray-700 rounded-full py-5 text-lg"
            >
              LEARN MORE
            </Button>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            We bring technical expertise, thought leadership, and innovations
            that transform facilities management and help you achieve your
            goals.
          </p>
        </div>

        <div className="relative px-4">
          <Slider {...settings} className="mx-[-1rem]">
            {carouselItems.map((item, index) => (
              <div
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                key={index}
                className="px-4 min-h-[500px] hover:cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col min-h-[500px]">
                  <div className="relative h-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-serif">{item.title}</h3>
                    <p className="text-gray-600 flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FacilityManagement;
