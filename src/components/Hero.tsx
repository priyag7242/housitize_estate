import React, { useRef, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HeroVideos = [
  {
    name: "video1",
    video: "/assets/hero.mp4",
  },
  {
    name: "video2",
    video: "/assets/hero-vid3.mp4",
  },
  {
    name: "video3",
    video: "/assets/hero-dog.mp4",
  },
  {
    name: "video4",
    video: "/assets/hero-vid5.mp4",
  },
];

const Hero = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
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

  return (
    <div className="object-cover w-full">
      <div className="relative h-screen w-full">
        {/* Hero Images */}
        <Slider ref={slider} {...settings} className="absolute inset-0 z-0">
          {HeroVideos.map((heroVideo, index) => (
            <div key={index} className="relative w-full h-screen">
              <video
                src={heroVideo.video}
                autoPlay
                muted
                loop
                className="w-full h-full min-w-full min-h-full absolute top-0 left-0 object-cover"
              />
              {/* To give the black opacity */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </Slider>

        {/* Hero Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-16 translate-y-16">
            <h5
              className="mb-8 max-w-3xl text-lg md:text-xl text-white tracking-wide"
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              DISCOVER THE FUTURE OF REAL ESTATE
            </h5>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wider"
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              FINEST REAL ESTATE
            </h1>
          </div>

          {/* Bottom Navigation */}
          <div className="flex flex-row translate-y-40 items-center justify-center gap-8 md:gap-16">
            {[
              { num: "01", text: "HOUSE" },
              { num: "02", text: "LAND" },
              { num: "03", text: "SCHOOLS" },
              { num: "04", text: "DEMOTEXT" },
              { num: "05", text: "AGAINTEXT" },
            ].map((item) => (
              <div
                key={item.text}
                className="group relative pb-10 py-10 flex flex-col items-center gap-3 text-white hover:text-gray-300 transition-colors"
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                <div className="flex divide-x-2 items-center gap-3 group-hover:translate-y-[-30px] transition-transform duration-300">
                  <span className="text-sm opacity-75">{item.num}</span>
                  <span className="text-2xl px-4 tracking-wider">
                    {item.text}
                  </span>
                </div>
                <button className="view-button hover:bg-white border-2 hover:text-black border-white w-28 opacity-0 group-hover:opacity-100 px-4 py-2 transition-opacity duration-300 text-xs mt-2">
                  VIEW
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom-Right Navigation */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 bg-white/80 rounded-lg p-2 shadow-lg">
          {/* Left Arrow */}
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="p-2 text-gray-900 hover:text-gray-900 hover:-translate-x-1 transition-all duration-300 ease-in-out"
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

          {/* Counter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-500">—</span>
            <span className="text-sm font-bold text-gray-600">
              0{HeroVideos.length}
            </span>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => slider?.current?.slickNext()}
            className="p-2 text-gray-900 hover:text-gray-900 hover:translate-x-1 transition-all duration-300 ease-in-out "
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
