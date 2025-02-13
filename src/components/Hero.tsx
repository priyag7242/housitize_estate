"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
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
    video: "/assets/hero-vid4.mp4",
  },
];

const Hero = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const router = useRouter();
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);
  const slider = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroVideosSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: unknown, newIndex: React.SetStateAction<number>) =>
      setCurrentSlide(newIndex),
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

  useEffect(() => {
    const updateView = () => {
      setIsMobileOrTablet(window.innerWidth < 1260);
    };

    updateView();
    window.addEventListener("resize", updateView);

    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  const displayHoverImage = (category: string | null) => {
    switch (category) {
      case "self-sustainable home":
        return "/assets/images/home-hover.jpg";
      case "construction":
        return "/assets/images/land-hover.jpg";
      case "interior":
        return "/assets/images/school-hover.jpg";
      case "hospitality":
        return "/assets/images/beachfront-hover.jpg";
      default:
        return null;
    }
  };

  const bottomNavSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed: 3000,
    pauseonhover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 560, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Larger Mobile view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const heroItems = [
    { num: "01", text: "Self-Sustainable Home" },
    { num: "02", text: "Construction" },
    { num: "03", text: "Interior" },
    { num: "04", text: "Hospitality" },
  ];

  // Function to handle navigation with a dynamic parameter
  const handleBottomNavClick = (category: string) => {
    const formattedCategory = category.replace(/\s+/g, "-");
    router.push(`/${formattedCategory}`);
  };

  return (
    <div className="w-full">
      <div className="relative h-screen w-full">
        {/* Hero videos */}
        <Slider
          ref={slider}
          {...heroVideosSettings}
          className="absolute inset-0 z-0"
        >
          {HeroVideos.map((heroVideo, index) => (
            <div key={index} className="relative w-full h-screen">
              <video
                src={heroVideo.video}
                autoPlay
                muted
                loop
                className="w-full h-full absolute inset-0 object-cover"
              />
              {/* To give the black opacity */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </Slider>

        {/*Image on hover*/}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              hoverCategory ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image */}
            {hoverCategory && (
              <Image
                src={displayHoverImage(hoverCategory)!}
                alt={hoverCategory}
                layout="fill"
                className="w-full h-full object-cover"
              />
            )}
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

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
          <div className="absolute bottom-8 z-20 w-full overflow-hidden">
            {isMobileOrTablet ? (
              <Slider {...bottomNavSettings}>
                {heroItems.map((item) => (
                  <div
                    key={item.text}
                    className="group relative  pb-10 py-10 flex flex-col items-center gap-3 text-white hover:text-gray-300 transition-colors"
                    style={{ fontFamily: "Avenir, sans-serif" }}
                    onMouseEnter={() =>
                      setHoverCategory(item.text.toLowerCase())
                    }
                    onMouseLeave={() => setHoverCategory(null)}
                  >
                    <div className="flex divide-x-2 items-center justify-center gap-3 group-hover:translate-y-[-30px] transition-transform duration-300">
                      <span className="text-sm opacity-75">{item.num}</span>
                      <span className="text-2xl px-4 uppercase tracking-wider">
                        {item.text}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handleBottomNavClick(item.text.toLowerCase())
                      }
                      className="view-button hover:bg-white border-2 hover:text-black border-white w-28 opacity-100  px-4 py-2 transition-opacity duration-300 text-xs mt-8"
                    >
                      VIEW
                    </button>
                  </div>
                ))}
              </Slider>
            ) : (
              <div className="flex flex-row items-center justify-center gap-8 md:gap-16">
                {heroItems.map((item) => (
                  <div
                    key={item.text}
                    className="group relative pb-10 py-10 flex flex-col items-center gap-3 text-white hover:text-gray-300 transition-colors"
                    style={{ fontFamily: "Avenir, sans-serif" }}
                    onMouseEnter={() =>
                      setHoverCategory(item.text.toLowerCase())
                    }
                    onMouseLeave={() => setHoverCategory(null)}
                  >
                    <div className="flex divide-x-2 items-center gap-3 group-hover:translate-y-[-30px] transition-transform duration-300">
                      <span className="text-sm opacity-75">{item.num}</span>
                      <span className="text-2xl px-4 uppercase tracking-wider">
                        {item.text}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        handleBottomNavClick(item.text.toLowerCase())
                      }
                      className="view-button hover:bg-white border-2 hover:text-black border-white w-28 opacity-0 group-hover:opacity-100 px-4 py-2 transition-opacity duration-300 text-xs mt-2"
                    >
                      VIEW
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom-Right Navigation */}
        <div className="absolute bottom-8 right-24 z-20 flex items-center bg-white/40 rounded-lg px-1 py-1 shadow-lg">
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
