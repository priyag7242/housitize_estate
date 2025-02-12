"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ContactPopup from "@/components/ContactPopup";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/assets/images/joint-venture-hero1.jpg",
  "/assets/images/joint-venture-hero2.jpg",
  "/assets/images/joint-venture-hero3.jpg",
];

const JointVenture = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />

      {/* Hero (Image changing) */}
      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Hero image ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="p-6 md:p-12 lg:p-16 flex flex-col items-center max-w-3xl z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white mb-4">
            Partner & Profit Together
          </h1>
          <p className="text-lg md:text-xl text-white text-center mb-6">
            Own land? Let’s build success together! Transform your property into
            residential or commercial ventures or unlock its value with
            large-scale plotting (10,000+ acres)
          </p>
          <Button
            onClick={() => {
              setIsContactPopupOpen(true);
            }}
            className="bg-gray-800 hover:bg-gray-900 text-white"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Services */}
      <section className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-12 md:mb-16">
          Our Services
        </h1>

        <div className="space-y-8 md:space-y-12">
          {/* Buy Service */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-gray-200 pt-8">
            <div className="md:col-span-2">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-gray-700">
                1. Buy
              </span>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-2xl font-serif text-gray-800">
                Find Your Ideal Property
              </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
              <p className="text-gray-600  leading-relaxed">
                We specialize in helping you find the perfect property that
                meets your needs and preferences. Whether you&apos;re looking
                for a cozy apartment, a family home, or an investment property,
                we&apos;ll guide you through the process step by step.
              </p>
            </div>
          </div>

          {/* Sell Service */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-gray-200 pt-8">
            <div className="md:col-span-2">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-gray-700">
                2. Sell
              </span>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-2xl font-serif text-gray-800">
                Maximize Your Property Value
              </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
              <p className="text-gray-600 leading-relaxed">
                Selling your property can be a stressful process. Let us handle
                the details and negotiations to ensure you get the best price
                for your property. Our expertise in the market will help you
                achieve your selling goals with ease.
              </p>
            </div>
          </div>

          {/* Rent Service */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-gray-200 pt-8">
            <div className="md:col-span-2">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-gray-700">
                3. Rent
              </span>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-2xl font-serif text-gray-800">
                Find Your Perfect Rental
              </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
              <p className="text-gray-600 leading-relaxed">
                Looking for a rental property? We have a wide range of rental
                listings to choose from. Whether you need a short-term lease or
                a long-term rental, we&apos;ll help you find the right place to
                call home.
              </p>
            </div>
          </div>

          {/* Invest Service */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-gray-200 pt-8">
            <div className="md:col-span-2">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-gray-700">
                3. Invest
              </span>
            </div>
            <div className="md:col-span-3">
              <h2 className="text-xl md:text-2xl font-serif text-gray-800">
                Grow Your Real Estate Portfolio
              </h2>
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-6">
              <p className="text-gray-600 leading-relaxed">
                Investing in real estate can be a lucrative opportunity. We
                provide expert advice on real estate investments, helping you
                identify profitable opportunities and build a successful real
                estate portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential */}
      <div className="container mx-auto px-4 pb-12 pt-32">
        <h1 className="text-3xl max-w-3xl md:text-4xl lg:text-5xl text-left font-bold text-gray-700 mb-4">
          Residential Partnership for Mutual Growth
        </h1>
        <p className="text-lg md:text-xl max-w-4xl text-gray-700 text-left mb-12">
          Turn your land into profitable <strong>residential</strong> projects!
          We build, sell, rent, or lease—you earn. Partner with us and unlock
          your land’s true potential!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Tall Image */}
          <div
            onClick={() => {
              setIsContactPopupOpen(true);
            }}
            className="relative overflow-hidden rounded-lg group hover:cursor-pointer"
          >
            <Image
              src="/assets/images/joint-venture-high-rise.jpg"
              alt="AFEELA 1 Car"
              width={800}
              height={1200}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 p-6 flex items-center justify-between w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  High-rise
                </h3>
                <div className="rounded-full p-2 border border-white/30 backdrop-blur-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-4">
            {/* Top Two Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* farm house Card */}
              <div
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="relative overflow-hidden rounded-lg group hover:cursor-pointer"
              >
                <Image
                  src="/assets/images/joint-venture-farmhouse.avif"
                  alt="How to order"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4 lg:p-6 flex items-center justify-between w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                      Farm House
                    </h3>
                    <div className="rounded-full p-1.5 lg:p-2 border border-white/30 backdrop-blur-sm">
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plotting Card */}
              <div
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="relative  overflow-hidden rounded-lg group hover:cursor-pointer"
              >
                <Image
                  src="/assets/images/joint-venture-plotting.avif"
                  alt="Vehicle Support"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4 lg:p-6 flex items-center justify-between w-full">
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                      Plotting
                    </h3>
                    <div className="rounded-full p-1.5 lg:p-2 border border-white/30 backdrop-blur-sm">
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Wide Image */}
            <div
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              className="relative overflow-hidden rounded-lg group hover:cursor-pointer"
            >
              <Image
                src="/assets/images/joint-venture-villas.jpg"
                alt="Events"
                width={800}
                height={450}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6 flex items-center justify-between w-full">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Villas
                  </h3>
                  <div className="rounded-full p-2 border border-white/30 backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Residential joint venture*/}
      {/* <section className="min-h-[50vh] md:min-h-[80vh] flex justify-center items-center bg-[#f5f5f3] px-4 py-16 md:py-24">
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
      </section> */}

      {/* Commercial */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/joint-venture-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white mb-4">
            Build Commercial Success Together
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
            Turn your land into high-value <strong>commercial</strong>{" "}
            properties! From offices to retail hubs, we develop, lease, or
            sell—you earn, we grow together!
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* High-rise */}
            <div
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              className="group relative hover:cursor-pointer overflow-hidden rounded-sm bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-6 hover:scale-105 transition duration-300"
            >
              <div className="h-[300px]">
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/joint-venture-high-rise-commercial.jpg"
                  alt="Modern office space"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* overlay  */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="relative h-full">
                  <div className="flex h-full flex-col justify-end">
                    <h2 className="mb-2 text-2xl font-semibold text-white">
                      High-rise
                    </h2>
                    <p className="text-2xl flex justify-center font-light text-white sm:text-xl">
                      Discover unparalleled business opportunities with
                      high-rise commercial joint venture.
                      <div className="rounded-full w-fit h-fit bg-white p-2 transition-transform group-hover:translate-x-1 duration-300">
                        <ArrowRight className="h-6 w-6 text-black" />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Park */}
            <div
              onClick={() => {
                setIsContactPopupOpen(true);
              }}
              className="group relative overflow-hidden hover:cursor-pointer rounded-sm bg-white/90 p-6 hover:scale-105 transition duration-300"
            >
              <div className="h-[300px]">
                <Image
                  width={200}
                  height={200}
                  src="/assets/images/joint-venture-commercial-park.avif"
                  alt="Modern office space"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* overlay  */}
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative h-full">
                  <div className="flex h-full flex-col justify-end">
                    <h2 className="mb-2 text-2xl font-semibold text-white">
                      Commercial Park
                    </h2>
                    <p className="text-2xl flex justify-center font-light text-white sm:text-xl">
                      Explore lucrative opportunities with our commercial park
                      joint ventures.
                      <div className="rounded-full w-fit h-fit bg-white p-2 transition-transform group-hover:translate-x-1 duration-300">
                        <ArrowRight className="h-6 w-6 text-black" />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Commercial joint venture*/}
      {/* <section className="min-h-[50vh] md:min-h-[80vh] flex justify-center items-center bg-[#f5f5f3] px-4 py-16 md:py-24">
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
      </section> */}

      {/* Plotting */}
      <div className="relative min-h-[600px] flex items-center px-4 md:px-8 lg:px-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/plotting.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 z-10 max-w-4xl mx-auto w-full px-4 md:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
            {/* Rectangle Image */}
            {/* <div className="flex justify-center md:justify-start">
              <div className="relative w-full h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] overflow-hidden rounded-full">
                <Image
                  src="/assets/images/plotting.jpg"
                  alt="Executive portrait"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div> */}

            {/* Content Section */}
            <div className="text-left md:text-left space-y-6">
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
