"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick-carousel.css";
// import "slick-carousel/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { type SlideData, type NavItem } from './types/slider'

const slides = [
  {
    id: 1,
    title: "India",
    subtitle: "TECHNOLOGY HUB",
    description:
      "Explore India's dynamic IT sector, software development excellence, and innovative tech startups across major metropolitan cities",
    image: "/assets/images/india.jpg",
  },
  {
    id: 2,
    title: "France",
    subtitle: "LUXURY & FASHION",
    description:
      "Discover France's renowned fashion industry, luxury brands, and sophisticated design heritage in the heart of Paris",
    image: "/assets/images/france.jpg",
  },
  {
    id: 3,
    title: "Italy",
    subtitle: "DESIGN & CULTURE",
    description:
      "Experience Italy's world-famous design industry, architectural excellence, and rich artistic heritage across historic cities",
    image: "/assets/images/italy.jpg",
  },
  {
    id: 4,
    title: "Spain",
    subtitle: "TOURISM & GASTRONOMY",
    description:
      "Discover Spain's vibrant tourism industry, world-renowned culinary arts, and rich cultural heritage across its diverse regions",
    image: "/assets/images/spain.jpg",
  },
  {
    id: 5,
    title: "Japan",
    subtitle: "INNOVATION & TRADITION",
    description:
      "Discover Japan's cutting-edge technology, robotics advancement, and unique blend of modern innovation with traditional values",
    image: "/assets/images/japan.jpg",
  },
];

const navItems = [
  { id: 1, label: "India" },
  { id: 2, label: "France" },
  { id: 3, label: "Italy" },
  { id: 4, label: "Spain" },
  { id: 5, label: "Japan" },
];

const DepartmentsShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <div>
        <div className="flex flex-col lg:flex-row md:gap-4 justify-between items-start lg:items-center mb-8">
          <h1 className="text-3xl sm:text-5xl uppercase text-slate-700 font-thin mb-4 md:mb-0">
            Our 5 Countries
          </h1>
          <nav className="flex flex-wrap  md:mr-8 border-b-2 border-[#dabdb5] font-thin ">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`text-sm sm:text-base tracking-widest px-2 md:px-8 hover:-translate-y-1 duration-300 transition-all ${
                  currentSlide === index
                    ? "text-gray-600 border-b-2 border-[#97746b]"
                    : "text-gray-500 hover:text-gray-400"
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
                  <div className="bg-[#B39B84] p-8 md:p-16 flex flex-col justify-center min-h-[300px] md:min-h-[530px]">
                    <div className="text-white space-y-6">
                      <p className="text-lg">
                        {String(slide.id).padStart(2, "0")} — 05
                      </p>
                      <h2 className="text-4xl md:text-6xl font-serif mb-4">
                        {slide.title}
                      </h2>
                      <p className="text-xl mb-4">{slide.subtitle}</p>
                      <p className="text-lg mb-8 max-w-md">
                        {slide.description}
                      </p>
                      <button className="border border-white text-white px-8 py-3 inline-flex items-center hover:bg-white hover:text-[#B39B84] transition-colors">
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

export default DepartmentsShowcase;
