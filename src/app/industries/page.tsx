"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ContactPopup from "@/components/ContactPopup";

const industrialCategory = [
  {
    name: "Red Zone",
    image: "/assets/images/industries3.jpg",
    zone: "red",
    desc: "Heavy-pollution industries & factories.",
  },
  {
    name: "Orange Zone",
    image: "/assets/images/industries3.jpg",
    zone: "orange",
    desc: "Medium-scale manufacturing & processing.",
  },
  {
    name: "Green Zone",
    image: "/assets/images/industries3.jpg",
    zone: "green",
    desc: "Low-pollution & eco-friendly industries.",
  },
  {
    name: "White Zone",
    image: "/assets/images/industries3.jpg",
    zone: "neutral",
    desc: "Non-polluting industries & services.",
  },
  {
    name: "Blue Zone",
    image: "/assets/images/industries3.jpg",
    zone: "blue",
    desc: "Ports, logistics & SEZ hubs.",
  },
  {
    name: "Yellow Zone",
    image: "/assets/images/industries3.jpg",
    zone: "yellow",
    desc: "Mixed-use commercial & industrial.",
  },
];
const Industries = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[600px] md:min-h-screen w-full">
        <ContactPopup
          isContactPopupOpen={isContactPopupOpen}
          setIsContactPopupOpen={setIsContactPopupOpen}
        />
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/industries-hero.webp"
            alt="Luxury home with pool"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/0" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-56">
          {/* Main Content */}
          <div className="max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8">
              Your One-Stop Destination for Industrial Real Estate &
              Construction
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed">
              Unlock the ideal industrial space for rent, purchase, or resell.
              Explore prime zones and construction-ready sites tailored for
              growth. The right foundation fuels success—find yours today!
            </p>

            <Button
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-none"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      {/* Rent */}
      <div className="relative w-full bg-gray-700 p-12 md:px-8 md:pt-36 md:pb-28">
        {/* Main container with border */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* White border frame */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[95%] md:w-[65%] h-[110%] border-2 border-white" />

          {/* Content container */}
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image section */}
            <div className="w-fit md:w-1/2 z-10">
              <Image
                width={600}
                height={100}
                src="/assets/images/industries2.jpg"
                alt="bg-image"
                className="w-full h-auto rounded-sm"
              />
            </div>

            {/* Text content section */}
            <div className="w-full md:w-1/2 text-white p-4 md:p-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-wider">
                Industrial Spaces for{" "}
                <span className="text-[#e2a22b] font-bold">Rent</span> – Scaled
                to Your Needs
              </h2>

              <p className="text-base md:text-lg italic mb-8 leading-relaxed">
                From 500 sq. ft. to 5 lakh sq. ft., find the perfect industrial
                space for your business. Prime locations ready-to-move
                options—start operating today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700 mb-6">
              <span className="text-[#e2a22b]">Buy</span> Industrial Land &
              Build Your Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for industrial land to buy? We offer prime locations for
              factories, warehouses, and manufacturing units. Invest in the
              perfect space for your growth!
            </p>
            <Button
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              variant="outline"
              className="rounded-full bg-[#e2a22b] text-white hover:bg-[#d2992e] hover:text-white text-base px-8"
            >
              Contact Us
            </Button>
          </div>

          {/* Image Collage */}
          <div className="relative grid grid-cols-6 gap-4 h-[600px]">
            {/* Large Left Image */}
            <div className="col-span-4 h-full relative">
              <Image
                src="/assets/images/industries6.webp"
                alt="Person working on laptop"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Column Images */}
            <div className="col-span-2 grid gap-4">
              <div className="relative h-[290px]">
                <Image
                  src="/assets/images/industries1.webp"
                  alt="People collaborating"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="relative h-[290px]">
                <Image
                  src="/assets/images/industries5.webp"
                  alt="Person using mobile device"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industial Category (zones) */}
      <div className="container mx-auto px-4 pt-32 pb-36">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industrial Zones Worldwide – Lease, Rent, Sell & purchase
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              From Red to White Zones, we connect you to prime industrial
              category globally for lease, rent, sell, and purchase.
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industrialCategory.map((category) => (
              <div
                key={category.name}
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="relative h-[90px] group hover:cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  width={300}
                  height={100}
                  src={category.image}
                  alt={`${category.name} category`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-${category.zone}-600/40 to-${category.zone}-600/80`}
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white flex flex-col text-xl font-semibold">
                    <span className="relative transition duration-300 translate-y-[30px] group-hover:translate-y-[-10px]">
                      {category.name}
                      {/* Bottom line appearing from left to right on bottom of any text  */}
                      <span className="absolute bottom-0 left-0 w-[10px] h-0.5 bg-white transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
                    </span>
                    <span className="text-sm opacity-0 group-hover:opacity-100 transition duration-300 transform -translate-x-full group-hover:translate-x-0">
                      {category.desc}
                    </span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries on Resell */}
      <div className="w-full bg-gray-700 pt-12 px-12 md:pt-32">
        <div className="max-w-5xl mx-auto bg-white px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-700">
              <strong>Resell</strong> Your Industry with Ease & Profit
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Looking to resell your industrial property? We connect you with
              the right buyers for a quick, profitable, and hassle-free sale.
              Get the best value for your asset—sell with confidence!
            </p>
          </div>
        </div>
      </div>

      {/* Constrution Industry  */}
      <div className="container mx-auto px-4 py-12 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4 text-gray-600 text-lg">
              <p className="text-lg sm:text-2xl text-start">
                We <strong>construct</strong> state-of-the-art industrial
                infrastructure tailored to your needs, powered by{" "}
                <strong>globally recognized engineers</strong>.
              </p>
              <p className="text-lg sm:text-2xl text-start">
                Whether it&apos;s manufacturing plants, warehouses, or custom
                industrial setups, we deliver excellence with precision and
                innovation.
              </p>

              <Button
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                variant="outline"
                className="rounded-full bg-[#e2a22b] text-white hover:bg-[#d2992e] hover:text-white text-base px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative h-[150px] sm:h-[250px] md:h-[310px] w-full md:w-[490px]">
              <Image
                width={800}
                height={200}
                src="/assets/images/industries-construction.webp"
                alt="Group of people exercising together"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
