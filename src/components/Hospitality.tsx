"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick-carousel.css";
// import "slick-carousel/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactPopup from "./ContactPopup";
// import { type SlideData, type NavItem } from './types/slider'

const slides = [
  {
    id: 1,
    title: "Hotel",
    subtitle: "Luxury Stay",
    description:
      "Experience world-class hospitality, premium amenities, and a comfortable stay designed for relaxation and convenience",
    image: "/assets/images/hotel.webp",
  },
  {
    id: 2,
    title: "Restaurant",
    subtitle: "Fine Dining",
    description:
      "Enjoy delicious cuisine, expertly crafted dishes, and a welcoming ambiance for a memorable dining experience",
    image: "/assets/images/restaurant.webp",
  },
  {
    id: 3,
    title: "Resort",
    subtitle: "Nature Retreat",
    description:
      "Discover a tranquil escape with luxurious accommodations, breathtaking views, and a variety of outdoor activities",
    image: "/assets/images/resort.webp",
  },
  {
    id: 4,
    title: "Hospital",
    subtitle: "Advanced Care",
    description:
      "Providing expert medical services, state-of-the-art facilities, and compassionate care for better health and well-being",
    image: "/assets/images/hospital.webp",
  },
  {
    id: 5,
    title: "Club House",
    subtitle: "Leisure Hub",
    description:
      "A vibrant space for social gatherings, recreation, and relaxation with top-notch facilities and entertainment options",
    image: "/assets/images/club-house.webp",
  },
];

const navItems = [
  { id: 1, label: "Hotel" },
  { id: 2, label: "Restaurant" },
  { id: 3, label: "Resort" },
  { id: 4, label: "Hospital" },
  { id: 5, label: "Club House" },
];

const Hospitality = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="w-full px-4 lg:px-24 py-12">
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />
      <div>
        <div className="flex flex-col lg:flex-row md:gap-4 justify-between items-start lg:items-center mb-8">
          <h1 className="text-3xl sm:text-5xl uppercase text-[#57353a] font-thin mb-4 md:mb-0">
            Hospitality
          </h1>
          <nav className="flex flex-wrap  md:mr-8 border-b-2 border-[#b29fa1de] font-thin ">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`text-sm sm:text-base tracking-widest px-2 md:px-8 hover:-translate-y-1 duration-300 transition-all ${
                  currentSlide === index
                    ? "text-gray-700 border-b-2 border-[#603D42]"
                    : "text-gray-600 hover:text-gray-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="outline-none">
                <div className="grid md:grid-cols-2 ">
                  <div className="relative h-[300px] md:h-[530px] bg-[#B39B84]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="bg-[#603D42] p-8 md:p-16 flex flex-col justify-center min-h-[300px] md:min-h-[530px]">
                    <div className="text-white space-y-6">
                      <p className="text-lg">
                        {String(slide.id).padStart(2, "0")} — 05
                      </p>
                      <h2 className="text-4xl md:text-6xl font-serif mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-xl italic uppercase mb-4">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg mb-8 max-w-md">
                        {slide.description}
                      </p>
                      <button
                        onClick={() => {
                          setIsContactPopupOpen(true);
                        }}
                        className="border border-white text-white px-8 py-3 inline-flex items-center hover:bg-white hover:text-[#B39B84] transition-colors"
                      >
                        LEARN MORE
                        <span className="ml-2">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="absolute bottom-8 right-8 flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 text-white hover:opacity-75 transition-opacity"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 text-white hover:opacity-75 transition-opacity"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitality;
