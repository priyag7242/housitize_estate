import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactPopup from "./ContactPopup";

const selfSustainableHomeItems = [
  {
    title: "Passive Home",
    image: "/assets/images/passive-home.webp",
    description: "Energy-efficient with airtight insulation",
  },
  {
    title: "Earthship Home",
    image: "/assets/images/earthship-home.webp",
    description: "Built from recycled, self-sustaining materials.",
  },
  {
    title: "Tiny Home (Off-Grid)",
    image: "/assets/images/tiny-home.webp",
    description: "Compact, solar-powered, and eco-friendly.",
  },
  {
    title: "Green Roof Home",
    image: "/assets/images/green-roof.webp",
    description: "Homes with vegetation-covered, insulating roofs.",
  },
  {
    title: "Off-Grid Cabin",
    image: "/assets/images/off-grid-cabin.webp",
    description: "Remote, renewable-powered, and independent.",
  },
];

const SelfSustainableHome = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const slider = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  return (
    <main className="min-h-screen w-full bg-white px-10 pb-28 pt-20 md:px-8 lg:px-16">
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />
      {/* Header Section */}
      <section className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-sm uppercase tracking-widest text-gray-500">
          Building a Greener, Smarter Future
        </h2>
        <h1 className="mb-12 text-xl sm:text-3xl font-thin uppercase tracking-wider text-gray-700 md:text-4xl lg:text-5xl">
          Self Sustainable Home
        </h1>
        <p className="mx-auto mb-16 max-w-4xl text-center text-gray-600 md:text-base">
          Whether you want to <span className="font-bold">rent</span>,{" "}
          <span className="font-bold">lease</span>,{" "}
          <span className="font-bold">buy</span>,{" "}
          <span className="font-bold">sell</span>, or{" "}
          <span className="font-bold">construct</span> a self-sustainable home,
          contact us today to start your journey towards eco-friendly living.
        </p>
      </section>

      {/* Image Cards Carousel Section */}
      <section className="mx-auto max-w-6xl">
        <Slider ref={slider} {...settings}>
          {selfSustainableHomeItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              className="group relative hover: cursor-pointer h-[300px] w-[300px] sm:h-[400px] overflow-hidden overflow-x-hidden px-2"
            >
              <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
                />
                {/* To give the black opacity */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute text-center">
                  <h3 className="text-2xl font-light uppercase tracking-wider text-white transition-transform duration-300 group-hover:-translate-y-5">
                    {item.title}
                  </h3>
                  <p className="text-base text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Bottom Buttons */}
      <section className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="px-6 py-2 text-sm md:text-base bg-gray-100 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 hover:-translate-x-1 transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="px-6 py-2 text-sm md:text-base bg-gray-100 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 hover:translate-x-1 transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* Bottom Ratings and Statistics */}
      <div className="w-full py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center justify-between">
              <span className="text-4xl lg:text-5xl font-light text-gray-600">
                22
              </span>
              <span className="mt-2 text-sm text-gray-500">
                years of existence
              </span>
            </div>
            <div className="flex flex-col items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-4xl lg:text-5xl font-light text-gray-600">
                  4.85
                </span>
                <span className="text-4xl lg:text-5xl font-light text-gray-600">
                  /5
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3 h-3 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-500">
                buyer satisfaction 2023-2024
              </span>
            </div>
            <div className="flex flex-col items-center justify-between">
              <span className="text-4xl lg:text-5xl font-light text-gray-600">
                100%
              </span>
              <span className="mt-2 text-sm text-gray-500">some demo text</span>
            </div>
            <div className="flex flex-col items-center justify-between">
              <span className="text-4xl lg:text-5xl font-light text-gray-600">
                190
              </span>
              <span className="mt-2 text-sm text-gray-500">properties</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SelfSustainableHome;
