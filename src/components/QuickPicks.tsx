"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Props = {};

const QuickPicks = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true, // Important: center the slide
    centerPadding: "120px", // How much of the next slide peeks in px
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768, // On mobile
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const quickPicksData = [
    {
      id: 1,
      title: "Guru Ji Home Luxurious",
      location: "Dwarka Mor, South West Delhi",
      price: "₹40.0 L - 70.0 L",
      type: "3 BHK Builder Floor",
      profileImg: "/assets/images/thor.jpg",
      mainImg: "/assets/images/featured-listing1.jpg",
    },
    {
      id: 2,
      title: "Royal Enclave Residency",
      location: "Saket, New Delhi",
      price: "₹90.0 L - 1.5 Cr",
      type: "4 BHK Villas",
      profileImg: "/assets/images/thor.jpg",
      mainImg: "/assets/images/property-carousel2new.jpg",
    },
    {
      id: 3,
      title: "Sunshine Apartments",
      location: "Noida Sector 62",
      price: "₹60.0 L - 85.0 L",
      type: "2/3 BHK Flats",
      profileImg: "/assets/images/thor.jpg",
      mainImg: "/assets/images/featured-listing1.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto md:px-0 px-3 md:py-16 py-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
        Housing Top Picks
      </h2>
      <p className="text-lg text-slate-600 mt-1">
        Your satisfaction is our priority with unmatched service offerings
      </p>

      <div className="mt-6">
        <Slider {...settings}>
          {quickPicksData.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg p-4 space-y-4 md:space-y-0 md:space-x-6">
                {/* Left Section */}
                <div className="flex flex-col justify-between max-w-xs py-5">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.profileImg}
                      alt="Profile"
                      width={52}
                      height={42}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.title.split(" ")[0]} Homes
                      </h2>
                      <a href="#" className="text-sm text-blue-600 underline">
                        View Projects
                      </a>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.location}</p>
                    <p className="mt-2 text-lg font-semibold text-purple-700">
                      {item.price}
                    </p>
                    <p className="text-sm text-gray-600">{item.type}</p>
                  </div>

                  {/* Contact Button */}
                  <div className="mt-4">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition">
                      Contact
                    </button>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 rounded-2xl overflow-hidden">
                  <Image
                    src={item.mainImg}
                    alt="Property"
                    width={750}
                    height={400}
                    className="rounded-2xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default QuickPicks;
