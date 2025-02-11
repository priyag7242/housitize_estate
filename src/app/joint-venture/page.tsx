"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactPopup from "@/components/ContactPopup";
import { Button } from "@/components/ui/button";

const JointVenture = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <div>
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />
      {/* Hero */}
      <div className="relative w-full h-[80vh] flex items-center justify-center text-center text-white px-6">
        <Image
          width={500}
          height={500}
          src="/assets/images/joint-venture-hero.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black z-10 bg-opacity-70" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Partner & Profit Together
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Own land? Let’s build success together! Transform your property into
            residential or commercial ventures or unlock its value with
            large-scale plotting (10,000+ acres)
          </p>
          <button
            onClick={() => {
              setIsContactPopupOpen(true);
            }}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Talk to us
          </button>
        </div>
      </div>

      {/*Residential joint venture*/}
      <section className="min-h-[50vh] md:min-h-[80vh] flex justify-center items-center bg-[#f5f5f3] px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/courtyard.jpg"
                  alt="Elegant table setting with cutlery and herbs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-800">
                Residential Venture for Mutual Growth
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Turn your land into profitable <strong>residential</strong>{" "}
                projects! We build, sell, rent, or lease—you earn. Partner with
                us and unlock your land’s true potential!
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsContactPopupOpen(true);
                  }}
                  className="rounded-full px-8 py-6 text-base border-gray-400 bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Commercial joint venture*/}
      <section className="min-h-[50vh] md:min-h-[80vh] flex justify-center items-center bg-[#f5f5f3] px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-800">
                Build Commercial Success Together
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Turn your land into high-value <strong>commercial</strong>{" "}
                properties! From offices to retail hubs, we develop, lease, or
                sell—you earn, we grow together!
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsContactPopupOpen(true);
                  }}
                  className="rounded-full px-8 py-6 text-base border-gray-400 bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Contact us
                </Button>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/office.avif"
                  alt="Elegant table setting with cutlery and herbs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plotting */}
      <div className="relative min-h-[600px] flex items-center px-4 md:px-8 lg:px-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/joint-venture-banner.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-zinc-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
            {/* Rectangle Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] overflow-hidden rounded-full">
                <Image
                  src="/assets/images/plotting.jpg"
                  alt="Executive portrait"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"/>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white">
                Turn Your Land into Plots
              </h2>
              <div className="text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                Own 10,000+ acres? Maximize its value with strategic plotting
                and development. We transform vast land into profitable
                residential or commercial plots—let’s build wealth together!
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="bg-white rounded-full text-gray-700 hover:bg-gray-100 hover:text-gray-800 border-none font-medium px-6 py-4 md:px-8 md:py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointVenture;
