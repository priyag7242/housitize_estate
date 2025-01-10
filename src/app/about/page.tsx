import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-[50vh] sm:h-[85vh] ">
        {/* Image container */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/about-team.jpg"
            alt="Modern office interior with team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Text content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 md:mb-6">
            Meet
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wider">
            THE DEMIGOD TEAM
          </h1>
        </div>
      </div>

      {/* Second div */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Text Content */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-gray-700 md:text-4xl uppercase lg:text-5xl tracking-widest mb-8 font-extralight leading-tight">
            ₹50 Crore+ RECORD-BREAKING SALES
            <br />
            IN Pune and Mumbai
          </h2>
          <p className="text-gray-600 font-extralight tracking-widest text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            With over ₹50 Crore in record-breaking sales in Pune and Mumbai,
            DEMIGOD Real Estate&apos;s expertise and dedication are unmatched.
            Their portfolio of luxury homes, estates, and properties is truly
            exceptional and sets a new standard in the real estate market.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-4 sm:mx-20 gap-4 md:gap-8">
          <div className="relative w-full h-[400px]">
            <Image
              src="/assets/images/best-property1.jpg"
              alt="Luxury interior with chandeliers"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[400px]">
            <Image
              src="/assets/images/best-property2.jpg"
              alt="Outdoor space with blooming trees"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <Separator className="my-6 " />

      {/* Recent Sales */}
      <div className="mx-auto px-4 md:px-24 py-8">
        <h2 className="uppercase text-4xl flex justify-center font-thin tracking-widest text-gray-700">
          Recent Sales
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          {/* Left Image */}
          <div className="relative w-full md:w-1/2 group">
            <div className="relative w-full h-[300px] md:h-[517px]">
              <Image
                src="/assets/images/recent-sales1.jpg"
                alt="Recent sale 1"
                fill
                className="object-cover transition-transform"
              />

              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
                <p className="text-white text-3xl md:text-4xl font-light mb-2">
                  200000
                </p>
                <p className="text-white text-lg md:text-xl">
                  Valley Luxary, Pune
                </p>

                <div className="flex gap-4 text-white opacity-0 transform translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>4 Beds</span>
                  <span>{(2300).toLocaleString()} Sq. Ft.</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Images */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {/* Top Image */}
            <div className="relative w-full h-[300px] md:h-[250px] group">
              <Image
                src="/assets/images/recent-sales2.jpg"
                alt="Recent sale 2"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
                <p className="text-white text-3xl md:text-4xl font-light mb-2">
                  150000
                </p>
                <p className="text-white text-lg md:text-xl">
                  Urban Oasis, Mumbai
                </p>
                <div className="flex gap-4 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>3 Beds</span>
                  <span>{(1800).toLocaleString()} Sq. Ft.</span>
                </div>
              </div>
            </div>
            {/* Bottom Image */}
            <div className="relative w-full h-[300px] md:h-[250px] group">
              <Image
                src="/assets/images/recent-sales3.jpg"
                alt="Recent sale 3"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
                <p className="text-white text-3xl md:text-4xl font-light mb-2">
                  180000
                </p>
                <p className="text-white text-lg md:text-xl">
                  Coastal Retreat, Goa
                </p>
                <div className="flex gap-4 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>5 Beds</span>
                  <span>{(2500).toLocaleString()} Sq. Ft.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-6 sm:my-10">
          <Button
            variant="outline"
            className="mt-6 px-8 py-6 text-sm uppercase border-2 border-gray-600 tracking-widest hover:bg-gray-700 hover:text-white transform rounded-full transition-colors duration-300"
          >
            VIEW ALL PROPERTIES
          </Button>
        </div>
      </div>

      {/* Demigod banner */}
      <div className="relative min-h-[300px] w-full">
        <Image
          src="/assets/images/demigod-banner.jpg"
          alt="Modern office interior with team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl uppercase lg:text-5xl font-mono tracking-wider text-white">
              Demigod Real Estate
            </h1>
            {/* right side content */}
            <div className="md:ml-8 ">
              {/* Description */}
              <p className="text-white text-base mb-4 md:text-lg tracking-widest font-mono leading-relaxed max-w-3xl">
                Our goal is to offer an unparalleled level of service to our
                highly respected clients. We guarantee that our expertise,
                professionalism and dedication will guide you toward meeting
                your unique real estate needs.
              </p>

              {/* Button */}
              <button className="inline-block border-2 border-white text-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
