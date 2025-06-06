"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building, House, HousePlus, LandPlot, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactPopup from "@/components/ContactPopup";

const features = [
  {
    title: "PowerShade Solar Roof",
    image: "/assets/images/self-sustainable-home-second-div.jpg",
  },
  {
    title: "Structural Safety",
    image: "/assets/images/self-sustainable-home-second-div.jpg",
  },
  {
    title: "Smart Control",
    image: "/assets/images/self-sustainable-home-second-div.jpg",
  },
  {
    title: "Water Management",
    image: "/assets/images/self-sustainable-home-second-div.jpg",
  },
  {
    title: "Energy Storage",
    image: "/assets/images/self-sustainable-home-second-div.jpg",
  },
  {
    title: "Eco Materials",
    image: "/assets/images/self-sustainable-home-second-div.jpg",
  },
];

const SelfSustainableHome = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [hoverCategory, setHoverCategory] = useState<string | null>(null);

  //For 4th DIV
  const refRight = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refRight,
    offset: ["start end", "end start"],
  });
  const translateLeft = useTransform(scrollYProgress, [0, 0.6], ["40%", "0%"]);

  //For 5th DIV
  const refLeft = useRef(null);
  const { scrollYProgress: scrollProgressLeft } = useScroll({
    target: refLeft,
    offset: ["start end", "end start"],
  });
  const translateRight = useTransform(
    scrollProgressLeft,
    [0, 0.6],
    ["-40%", "0%"]
  );

  const displayHoverImage = (category: string | null) => {
    switch (category) {
      case "powershade solar roof":
        return {
          image: "/assets/images/home-hover.jpg",
          title: "PowerShade Solar Roof",
          desc: "An integrated solar roof that generates clean and renewable energy, reducing your reliance on the grid and lowering your energy bills. It is designed to seamlessly blend with the aesthetics of your home while providing maximum efficiency.",
        };
      case "structural safety":
        return {
          image: "/assets/images/land-hover.jpg",
          title: "Structural Safety",
          desc: "Ensuring the structural integrity and safety of your home with advanced engineering and high-quality materials. Our homes are built to withstand extreme weather conditions and provide a safe living environment for you and your family.",
        };
      case "smart control":
        return {
          image: "/assets/images/school-hover.jpg",
          title: "Smart Control",
          desc: "Advanced smart home controls for efficient energy management, allowing you to automate and monitor various home functions such as lighting, heating, and cooling. This system enhances convenience, comfort, and energy efficiency.",
        };
      case "water management":
        return {
          image: "/assets/images/beachfront-hover.jpg",
          title: "Water Management",
          desc: "Efficient water management systems for sustainable living, including rainwater harvesting, greywater recycling, and low-flow fixtures. These systems help conserve water, reduce waste, and ensure a reliable water supply for your home.",
        };
      case "energy storage":
        return {
          image: "/assets/images/land-hover.jpg",
          title: "Energy Storage",
          desc: "Reliable energy storage solutions for uninterrupted power supply, ensuring that you have access to electricity even during outages. Our energy storage systems are designed to store excess energy generated by your solar roof for later use.",
        };
      case "eco materials":
        return {
          image: "/assets/images/home-hover.jpg",
          title: "Eco Materials",
          desc: "Using eco-friendly materials for a sustainable home, including recycled steel, bamboo, reclaimed wood, and non-toxic finishes. These materials reduce environmental impact, improve indoor air quality, and contribute to a healthier living environment.",
        };
      default:
        return null;
    }
  };
  return (
    <div>
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />

      {/* Hero */}
      <div className="relative min-h-screen w-full">
        <Image
          src="/assets/images/self-sustainable-home-hero.jpg"
          alt="Self Sustainable Home Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

        {/* Content */}
        <div className="relative flex min-h-screen items-center sm:translate-y-40 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Redefining Sustainability
            </h1>
            <p className="mb-8 text-lg text-gray-200 sm:text-xl">
              Demigod builds Net-Zero homes that are energy-efficient,
              <br />
              self-sustaining, and affordable.
            </p>
            <button className="inline-block rounded-full bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-gray-100">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* 2nd div */}
      <div className="w-full px-4 ">
        <div className="relative h-[50vh] md:h-[70vh] w-full mt-32">
          <Image
            src="/assets/images/self-sustainable-home-second-div.jpg"
            alt="Net-Zero Home"
            fill
            className="object-cover rounded-t-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r w-full rounded-t-2xl from-black/40 to-transparent">
            <div className="container mx-auto px-4 w-full flex items-center justify-end translate-y-16">
              <div className="max-w-xl text-gray-700 space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Net-Zero Homes
                </h1>
                <p className="text-lg">
                  A sustainable lifestyle begins at home. BillionBricks&apos;
                  award-winning modern house designs come with an integrated
                  solar roof that generates clean and renewable energy to power
                  your home. Our safe and adaptable net-zero homes are quick to
                  assemble and are climate-resilient.
                </p>
              </div>
            </div>
          </div>

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
                  src={displayHoverImage(hoverCategory)?.image || ""}
                  alt={hoverCategory}
                  layout="fill"
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-r w-full rounded-t-2xl from-black/40 to-transparent">
                <div className="container mx-auto px-4 w-full flex items-center justify-end translate-y-16">
                  <div className="max-w-xl text-white space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold">
                      {displayHoverImage(hoverCategory)?.title}
                    </h1>
                    <p className="text-lg">
                      {displayHoverImage(hoverCategory)?.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Black Overlay */}
              {/* <div className="absolute inset-0 z-0 bg-black/40" /> */}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className=" mx-auto  mt-4 mb-20 pb-2">
          <div className="overflow-x-auto rounded-b-2xl">
            <div className="flex gap-4 min-w-max">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative w-[250px] h-[90px] sm:w-[330px] sm:h-[110px] group cursor-pointer hover:scale-105 transition duration-300"
                  onMouseEnter={() =>
                    setHoverCategory(feature.title.toLowerCase())
                  }
                  onMouseLeave={() => setHoverCategory(null)}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                      <span className="text-lg font-semibold">
                        {feature.title}
                      </span>
                      <div className="p-1 rounded-full bg-white hover:bg-white text-gray-700 transition-colors">
                        <Plus className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3rd div */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-medium text-center mb-12">
          Choose your new home
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Microhaus Card */}
          <div className="flex flex-col hover:-translate-y-3 transition duration-500 bg-white rounded-lg shadow-sm hover:shadow-md">
            <div className="relative h-48 sm:h-64">
              <Image
                src="/assets/images/self-sustainable-home-second-div.jpg"
                alt="Microhaus exterior"
                layout="fill"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                The Most Advanced Micro Home in The World
              </h3>
              <div className="flex items-center gap-2 text-emerald-700 mb-6 mt-6">
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  perfect for short-term rental projects
                </span>
              </div>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <p className="text-gray-800 font-bold">
                  Manufactured 120 ft² home
                </p>
                <p>100% furnished and equipped, ready-to-go</p>
                <p>Energy-Efficient Autonomous Smart House</p>
              </div>
              <button
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="mt-auto w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* mOne Card */}
          <div className="flex flex-col bg-white rounded-lg hover:-translate-y-3 transition duration-500 shadow-sm hover:shadow-md">
            <div className="relative h-48 sm:h-64">
              <Image
                src="/assets/images/self-sustainable-home-second-div.jpg"
                alt="mOne exterior"
                layout="fill"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Off-the-Grid Studio with Kitchen and Bathroom
              </h3>
              <div className="flex items-center gap-2 text-emerald-700 mb-6 mt-6">
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  can host 2-5 people
                </span>
              </div>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <p className="text-gray-800 font-bold">
                  Transportable manufactured 400 ft² home
                </p>
                <p>100% furnished and ready-to-go</p>
                <p>Portable and Transportable</p>
              </div>
              <button
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="mt-auto w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* mTwo Card */}
          <div className="flex flex-col bg-white rounded-lg hover:-translate-y-3 transition duration-500 shadow-sm hover:shadow-md">
            <div className="relative h-48 sm:h-64">
              <Image
                src="/assets/images/self-sustainable-home-second-div.jpg"
                alt="mTwo exterior"
                layout="fill"
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Two-Bedroom Vacation Home for Perfectionists
              </h3>
              <div className="flex items-center gap-2 text-emerald-700 mb-6 mt-6">
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  perfect single family home
                </span>
              </div>
              <div className="space-y-2 mb-6 text-sm text-gray-600">
                <p className="text-gray-800 font-bold">
                  Pre-fabricated modular 800 ft² home
                </p>
                <p>100% furnished and ready-to-go</p>
                <p>No foundation needed</p>
              </div>
              <button
                onClick={() => {
                  setIsContactPopupOpen(true);
                }}
                className="mt-auto w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4th div  */}
      <div
        ref={refRight}
        className="relative w-full overflow-hidden  min-h-[60vh] mb-4 md:min-h-[85vh]"
      >
        <div className="absolute inset-0 mx-4 ">
          <Image
            width={900}
            height={300}
            src="/assets/images/self-sustainable-home-full-width1.jpg"
            alt="background image"
            objectFit="cover"
            className="bg-center w-full h-full bg-no-repeat "
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l mx-4 from-black/80 to-transparent" />

        {/* Content with Scroll Animation */}
        <motion.div
          style={{ x: translateLeft }} // Apply animated movement
          className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-32"
        >
          <div className="max-w-[450px] ml-auto text-white space-y-4">
            <div className="space-y-2">
              <p className="text-lg md:text-2xl tracking-wider font-light">
                Unparalleled durability
              </p>
              <h1 className="text-4xl md:text-5xl tracking-wide lg:text-6xl font-light">
                Suitable for any climate
              </h1>
            </div>

            <div className="space-y-6 text-sm md:text-base lg:text-lg">
              <p>
                Hot and cold climate packages ensure our homes are the perfect
                fit for any remote desert, mountain, island, or coastal vacation
                retreat. Optional water tanks, solar energy battery storage, and
                autonomous waste disposal mean this unit can be truly off-grid
                anywhere.
              </p>

              <p>
                We can even helicopter airlift these units to remote areas. So,
                it is possible to live in any location you have ever dreamed of.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5th div  */}
      <div
        ref={refLeft}
        className="relative w-full min-h-[60vh] md:min-h-[85vh]"
      >
        <div className="absolute inset-0 mx-4">
          <Image
            width={900}
            height={300}
            src="/assets/images/self-sustainable-home-full-width2.jpg"
            alt="background image"
            objectFit="cover"
            className="bg-center w-full h-full bg-no-repeat"
          />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r mx-4 from-black/80 to-transparent" />
        <motion.div
          style={{ x: translateRight }}
          className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-20 md:pt-32"
        >
          <div className="max-w-[450px] mr-auto text-white space-y-4">
            <div className="space-y-2">
              <p className="text-lg md:text-2xl tracking-wider font-light">
                Unparalleled durability
              </p>
              <h1 className="text-4xl md:text-5xl tracking-wide lg:text-6xl font-light">
                Suitable for any climate
              </h1>
            </div>

            <div className="space-y-6 text-sm md:text-base lg:text-lg">
              <p>
                Hot and cold climate packages ensure our homes are the perfect
                fit for any remote desert, mountain, island, or coastal vacation
                retreat. Optional water tanks, solar energy battery storage, and
                autonomous waste disposal mean this unit can be truly off-grid
                anywhere.
              </p>

              <p>
                We can even helicopter airlift these units to remote areas. So,
                it is possible to live in any location you have ever dreamed of.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/*FAQ*/}
      <section className="w-full max-w-3xl mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Have More Question?</h2>
          <p className="text-muted-foreground">
            Find answers to common questions below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline text-lg">
              What is a self-sustainable home?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              A self-sustainable home is designed to operate independently from
              external utilities by generating its own energy, managing water
              usage, and utilizing eco-friendly materials.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline text-lg">
              How does the PowerShade Solar Roof work?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              The PowerShade Solar Roof integrates solar panels into the roof
              structure, converting sunlight into electricity to power your home
              and reduce reliance on the grid.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline text-lg">
              What are the benefits of smart control systems?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Smart control systems enhance energy efficiency by automating home
              functions such as lighting, heating, and cooling, and allow you to
              monitor and control your home remotely.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline text-lg">
              How is water managed in a self-sustainable home?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Water management systems in self-sustainable homes include
              rainwater harvesting, greywater recycling, and efficient plumbing
              fixtures to minimize water usage and waste.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline text-lg">
              What materials are used in eco-friendly homes?
            </AccordionTrigger>
            <AccordionContent className="text-base">
              Eco-friendly homes use sustainable materials such as recycled
              steel, bamboo, reclaimed wood, and non-toxic finishes to reduce
              environmental impact and improve indoor air quality.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* contact us button */}
      <div className="flex justify-center p-4">
        <button
          onClick={() => {
            setIsContactPopupOpen(true);
          }}
          className="px-4 py-2 bg-gray-600 rounded-full text-white hover:bg-gray-700 transition duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default SelfSustainableHome;
