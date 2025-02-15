"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  LineChart,
  GitCompare,
  Compass,
  Award,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import ContactPopup from "@/components/ContactPopup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const heroImages = [
  "/assets/images/joint-venture-hero1.jpg",
  "/assets/images/joint-venture-hero2.jpg",
  "/assets/images/joint-venture-hero3.jpg",
];

const benefits = [
  {
    title: "Personalized Service",
    icon: Users,
  },
  {
    title: "Market Expertise",
    icon: LineChart,
  },
  {
    title: "Negotiation Skills",
    icon: GitCompare,
  },
  {
    title: "Personalized Service",
    icon: Users,
  },
  {
    title: "Professional Guidance",
    icon: Compass,
  },
  {
    title: "Client Satisfaction",
    icon: Award,
  },
  {
    title: "Innovative Solutions",
    icon: Lightbulb,
  },
  {
    title: "Professional Guidance",
    icon: Compass,
  },
];

const images = [
  "/assets/images/earth-shelter.webp",
  "/assets/images/beachfront-hover.jpg",
  "/assets/images/farm-house.jpg",
];

const services = [
  {
    id: 1,
    title: "Buy",
    subtitle: "Find Your Ideal Property",
    description:
      "We specialize in helping you find the perfect property that meets your needs and preferences. Whether you're looking for a cozy apartment, a family home, or an investment property, we'll guide you through the process step by step.",
  },
  {
    id: 2,
    title: "Sell",
    subtitle: "Maximize Your Property Value",
    description:
      "Selling your property can be a stressful process. Let us handle the details and negotiations to ensure you get the best price for your property. Our expertise in the market will help you achieve your selling goals with ease.",
  },
  {
    id: 3,
    title: "Rent",
    subtitle: "Find Your Perfect Rental",
    description:
      "Looking for a rental property? We have a wide range of rental listings to choose from. Whether you need a short-term lease or a long-term rental, we'll help you find the right place to call home.",
  },
  {
    id: 4,
    title: "Invest",
    subtitle: "Grow Your Real Estate Portfolio",
    description:
      "Investing in real estate can be a lucrative opportunity. We provide expert advice on real estate investments, helping you identify profitable opportunities and build a successful real estate portfolio.",
  },
];

const categories = [
  { id: "highrise", label: "Highrise", icon: "Building" },
  { id: "farmhouse", label: "Farm House", icon: "House" },
  { id: "plotting", label: "Plot", icon: "LandPlot" },
  { id: "villas", label: "Villas", icon: "HousePlus" },
];

const JointVenture = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  //FOR IMAGE ZOOM OUT
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.8], [1.6, 1]);

  //Hero Image changing
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
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
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
          <Link
            href={{
              pathname: "/category",
              query: { data: JSON.stringify(categories) },
            }}
          >
            <div className="relative overflow-hidden h-full rounded-lg group hover:cursor-pointer">
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
          </Link>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-4">
            {/* Top Two Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* farm house Card */}
              <Link
                href={{
                  pathname: "/category",
                  query: { data: JSON.stringify(categories) },
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
              </Link>

              {/* Plotting Card */}
              <Link
                href={{
                  pathname: "/category",
                  query: { data: JSON.stringify(categories) },
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
              </Link>
            </div>

            {/* Bottom Wide Image */}
            <Link
              href={{
                pathname: "/category",
                query: { data: JSON.stringify(categories) },
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
            </Link>
          </div>
        </div>
      </div>

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

      {/* Key benefits */}
      <section className="py-16 px-4 bg-[#B2BFC2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center text-gray-800">
            Key Benefits
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 w-44 h-32 sm:w-56 sm:h-48 rounded-sm flex flex-col items-center border-none text-center bg-[#C7D3D7] hover:scale-110  hover:shadow-lg transition duration-300"
              >
                <div className="w-16 h-16 mb-2 p-1 sm:p-3 rounded-md bg-[#cfd9dc] flex items-center justify-center">
                  <benefit.icon
                    className="w-8 h-8 text-gray-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-sm sm:text-xl font-serif mb-2 text-gray-800">
                  {benefit.title.split(" ")[0]} <br />{" "}
                  {benefit.title.split(" ")[1]}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Some div */}
      <section
        ref={sectionRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#2B4570] font-light mb-8 sm:mb-12">
          Managing residential and commercial properties
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:px-12 gap-4 mb-36 sm:gap-6 lg:gap-12">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-[300px] sm:h-[500px] hover:scale-105 transition duration-300 overflow-hidden rounded-lg ${
                index === 1 ? "translate-y-12" : ""
              }`}
            >
              <motion.div style={{ scale }} className="w-full h-full">
                <Image
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

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

// Separate component for each service item with scroll animation
interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}
function ServiceItem({ service }: { service: Service }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // Animate when it enters viewport
  });

  // Shared animations for fade-in and move-up effect
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-t border-gray-200 pt-8"
    >
      {/* Subtitle (ID + Title) */}
      <motion.div style={{ opacity, y: translateY }} className="md:col-span-2">
        <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-gray-700">
          {service.id}. {service.title}
        </span>
      </motion.div>

      {/* Title */}
      <motion.div
        style={{ opacity, y: translateY }}
        transition={{ delay: 0.1 }}
        className="md:col-span-3"
      >
        <h2 className="text-xl md:text-2xl font-serif text-gray-800">
          {service.subtitle}
        </h2>
      </motion.div>

      <div className="md:col-span-1"></div>

      {/* Description */}
      <motion.div
        style={{ opacity, y: translateY }}
        transition={{ delay: 0.2 }} // Slight delay for staggered effect
        className="md:col-span-5"
      >
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </motion.div>
    </div>
  );
}
