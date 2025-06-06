"use client";

import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  FileText,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import * as Slider from "@radix-ui/react-slider";
import ContactPopup from "@/components/ContactPopup";

const Residential = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [budgetValue, setBudgetValue] = useState([0, 100]);

  const [activeTab, setActiveTab] = useState("Buy");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMiniDropdownOpen, setIsMiniDropdownOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isBedroomOpen, setIsBedroomOpen] = useState(false);
  const [isConstructionStatusOpen, setIsConstructionStatusOpen] =
    useState(false);

  const propertyTypes = [
    "Villas",
    "Duplex",
    "Penthouse",
    "Luxury",
    "PG/C0-Living",
    "Mansion",
    "Dormitory",
    "Apartments",
    "Township",
    "High Rise Apartment",
    "Other",
  ];

  const communityItems = [
    {
      title: "Township",
      image: "/assets/images/township.webp",
      icon: <Building2 className="w-8 h-8 text-white" />,
    },
    {
      title: "Courtyard",
      image: "/assets/images/courtyard.webp",
      icon: <Home className="w-8 h-8 text-white" />,
    },
    {
      title: "Dormitory",
      image: "/assets/images/dormitory.webp",
      icon: <FileText className="w-8 h-8 text-white" />,
    },
    {
      title: "Tower-house",
      image: "/assets/images/tower-house.webp",
      icon: <ChevronUp className="w-8 h-8 text-white" />,
    },
  ];

  const sustainableLivingItems = [
    {
      name: "Earth Shelter",
      image: "/assets/images/earth-shelter.webp",
    },
    {
      name: "Self-Sustainable",
      image: "/assets/images/self-sustainable.webp",
    },
    {
      name: "Tent-Structure",
      image: "/assets/images/tent-structure.webp",
    },
    {
      name: "Pre-fabricate",
      image: "/assets/images/pre-fabricate.webp",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[400px] z-20 w-full">
        {/* Hero Background */}
        <Image
          fill
          className="absolute inset-0 object-cover bg-center"
          alt="Residential Hero"
          src="/assets/images/residential-hero.jpg"
        />
        {/* black overlay for shade */}
        <div className="absolute inset-0 bg-black/30 " />

        {/* Search Container */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-4xl">
          <div className="rounded-lg bg-white p-4 shadow-xl">
            {/* Navigation Tabs */}
            <div className="mb-4 flex flex-wrap gap-8 border-b">
              {["Buy", "Rent", "New Launch", "Residential", "Projects"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-sm transition-colors tracking-wider
                  ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-black"
                      : "text-gray-600"
                  }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Search Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex">
                {(activeTab === "Buy" || activeTab === "Rent") && (
                  <Button
                    variant="outline"
                    className="w-fit justify-center text-gray-600"
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                      setIsMiniDropdownOpen(false);
                      setIsBudgetOpen(false);
                      setIsBedroomOpen(false);
                      setIsConstructionStatusOpen(false);
                    }}
                  >
                    Property Types
                    {!isDropdownOpen && (
                      <span className="ml-2">
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    )}
                    {isDropdownOpen && (
                      <span className="ml-2">
                        <ChevronUp className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                )}
                {activeTab === "New Launch" && (
                  <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                    Residential
                  </div>
                )}
                {activeTab === "Residential" && (
                  <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                    All Residential
                  </div>
                )}
                {activeTab === "Projects" && (
                  <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                    All Projects
                  </div>
                )}

                {/* Property Types Dropdown */}
                {isDropdownOpen &&
                  (activeTab === "Buy" || activeTab === "Rent") && (
                    <div className="absolute top-full left-0 z-50 mt-2 w-[50vw] rounded-md border bg-white p-4 shadow-lg">
                      {!isMiniDropdownOpen && (
                        <div className="">
                          <button className="w-fit absolute top-[10px] right-[15px] text-base border-none shadow-none hover:bg-transparent text-orange-600 hover:text-orange-700 bg-transparent  px-2 py-0 m-0 ">
                            Clear
                          </button>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6">
                            {propertyTypes.map((type) => (
                              <div
                                key={type}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox id={type} />
                                <label
                                  htmlFor={type}
                                  className="text-sm text-gray-600"
                                >
                                  {type}
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 text-sm text-gray-800">
                            Looking for commercial properties?
                            <a
                              href="/commercial"
                              className="text-orange-600 ml-2 hover:underline"
                            >
                              Click here
                            </a>
                          </div>
                          <Separator className="mb-8 mt-2" />
                        </div>
                      )}

                      {/* Filters (Mini dropdown) */}
                      <div className="flex flex-wrap gap-4">
                        {/* Heading */}
                        <div className="flex flex-wrap gap-4 w-full">
                          <div
                            onClick={() => {
                              setIsMiniDropdownOpen(true);
                              setIsBudgetOpen(!isBudgetOpen);
                              setIsBedroomOpen(false);
                              setIsConstructionStatusOpen(false);
                            }}
                          >
                            <div
                              className={`text-gray-700 text-sm flex justify-center items-center border border-gray-300 hover:bg-orange-400 transition duration-300 hover:text-white rounded-full px-2 py-1 hover:cursor-pointer ${
                                isBudgetOpen ? "bg-orange-400 text-white" : ""
                              }`}
                            >
                              Budget
                              {isBudgetOpen && (
                                <ChevronUp className="h-4 w-4" />
                              )}
                              {!isBudgetOpen && (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </div>
                          <div
                            onClick={() => {
                              setIsMiniDropdownOpen(true);
                              setIsBudgetOpen(false);
                              setIsBedroomOpen(!isBedroomOpen);
                              setIsConstructionStatusOpen(false);
                            }}
                          >
                            <div
                              className={`text-gray-700 text-sm flex justify-center items-center border border-gray-300 hover:bg-orange-400 transition duration-300 hover:text-white rounded-full px-2 py-1 hover:cursor-pointer
                            ${isBedroomOpen ? "bg-orange-400 text-white" : ""}`}
                            >
                              Bedroom
                              {isBedroomOpen && (
                                <ChevronUp className="h-4 w-4" />
                              )}
                              {!isBedroomOpen && (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </div>
                          <div
                            onClick={() => {
                              setIsMiniDropdownOpen(true);
                              setIsBudgetOpen(false);
                              setIsBedroomOpen(false);
                              setIsConstructionStatusOpen(
                                !isConstructionStatusOpen
                              );
                            }}
                          >
                            <div
                              className={`text-gray-700 text-sm flex justify-center items-center border border-gray-300 hover:bg-orange-400 transition duration-300 hover:text-white rounded-full px-2 py-1 hover:cursor-pointer ${
                                isConstructionStatusOpen
                                  ? "bg-orange-400 text-white"
                                  : ""
                              }`}
                            >
                              Construction Status
                              {isConstructionStatusOpen && (
                                <ChevronUp className="h-4 w-4" />
                              )}
                              {!isConstructionStatusOpen && (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </div>
                        </div>
                        {/* Heading's content */}
                        <div className="flex flex-wrap w-full gap-4">
                          {/* Budget */}
                          {isBudgetOpen && (
                            <div className="w-full max-w-3xl px-4 py-6">
                              <div className="space-y-4">
                                <h2 className="text-base text-gray-700 dark:text-gray-100">
                                  Select Price Range
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {budgetValue[0]} - {budgetValue[1]}+ Crore
                                </p>
                                <Slider.Root
                                  className="relative flex items-center w-full h-5 select-none touch-none"
                                  value={budgetValue}
                                  onValueChange={setBudgetValue}
                                  max={100}
                                  step={1}
                                  aria-label="Price Range"
                                >
                                  <Slider.Track className="relative h-1 grow rounded-full bg-gray-200 dark:bg-gray-800">
                                    <Slider.Range className="absolute h-full rounded-full bg-blue-500" />
                                  </Slider.Track>
                                  <Slider.Thumb
                                    className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Minimum price"
                                  />
                                  <Slider.Thumb
                                    className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Maximum price"
                                  />
                                </Slider.Root>
                                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                  <span>0</span>
                                  <span>100+ Crores</span>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* Bedroom */}
                          {isBedroomOpen && (
                            <div className="w-full max-w-3xl px-4 py-6">
                              <h3 className="text-gray-700">
                                Number of Bedrooms
                              </h3>
                              <div className="flex justify-start items-center mt-4 gap-4">
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ 1 BHK</span>
                                </div>
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ 2 BHK</span>
                                </div>
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ 3 BHK</span>
                                </div>
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ 4 BHK</span>
                                </div>
                              </div>
                            </div>
                          )}
                          {/* Construction Status */}
                          {isConstructionStatusOpen && (
                            <div className="w-full max-w-3xl px-4 py-6">
                              <h3 className="text-gray-700">
                                Construction Status
                              </h3>
                              <div className="flex justify-start items-center mt-4 gap-4">
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ New Launch</span>
                                </div>
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ Under Construction</span>
                                </div>
                                <div className="text-gray-600 border border-gray-300 rounded-full px-3 py-1 hover:cursor-pointer tracking-wider hover:bg-orange-400 text-sm hover:text-white">
                                  <span>+ Ready to Move</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
              </div>

              <div className="flex flex-1 items-center gap-2 rounded-md border px-3">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search location..."
                  className="flex-1 py-2 outline-none text-gray-700"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Comunity-based living */}
      <section className="relative px-4 pt-48 pb-24 bg-[#C4C4C4] text-gray-700">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
                Community Based,
                <br />
                Living
              </h2>
              <Button className="bg-[#4A4A4A] hover:bg-[#383838] transition duration-300 text-white border-none px-8 py-6 text-lg">
                Know More
              </Button>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl">
                Discover a vibrant community-based living experience with our
                thoughtfully designed homes that foster connection and
                engagement among residents.
              </p>
              <p className="text-lg md:text-xl">
                Enjoy shared amenities, green spaces, and communal areas that
                encourage social interaction and create a sense of belonging.
              </p>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityItems.map((feature) => (
              <div
                key={feature.title}
                className="relative group overflow-hidden rounded-lg aspect-[4/3]"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4">
                  <span className="text-3xl mb-2">{feature.icon}</span>
                  <h3 className="text-2xl text-white font-serif text-center">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacation & investment properties */}
      <section className="w-full px-4 py-16 bg-[#f8f8f8]">
        <h2 className="text-2xl md:text-3xl font-medium text-center mb-12 text-gray-800">
          Vacation & Investment Properties
        </h2>

        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 relative">
            {/* Left Project */}
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/assets/images/time-share.webp"
                  alt="Time share"
                  width={500}
                  height={400}
                  className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-start justify-between">
                <h2 className="text-lg text-gray-700 mb-2 tracking-wider font-bold underline">
                  Time-Share
                </h2>
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    Shared ownership is smart, and a <br />
                    <strong>time-share</strong> is freedom.
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </div>
              </div>
            </div>

            {/* Center Project - Offset on desktop */}
            <div className="group cursor-pointer lg:translate-y-16">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/assets/images/holiday-home.webp"
                  alt="Modern farmhouse interior"
                  width={500}
                  height={400}
                  className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <h2 className="text-lg text-gray-700 mb-2 tracking-wider font-bold underline">
                  Holiday Home
                </h2>
                <div className="flex items-center ">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    A <strong>holiday home</strong> is joy, a retreat forever
                    yours.
                  </h3>
                  <ArrowRight className="w-6 h-6 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </div>
              </div>
            </div>

            {/* Right Project */}
            <div className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4">
                <Image
                  src="/assets/images/luxury.webp"
                  alt="Garden with swimming pool"
                  width={500}
                  height={400}
                  className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <h2 className="text-lg text-gray-700 mb-2 tracking-wider font-bold underline">
                  Luxury Home
                </h2>
                <div className="flex items-center ">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    Elegance meets comfort, a <strong>luxury home</strong>{" "}
                    defines grand living.
                  </h3>
                  <ArrowRight className="w-7 h-7 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-24">
            <button className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* Traditional Residential Properties */}
      <div className="max-w px-4 sm:px-24 pt-24 pb-4 flex flex-col md:flex-row">
        {/* left side  */}
        <div className=" w-full flex flex-col justify-start mr-2 ">
          <h3 className="text-3xl sm:text-4xl md:text-4xl tracking-widest uppercase pt-20 pb-8 px-3 text-gray-700">
            Traditional Residential Properties
          </h3>
          {/* top div  */}
          <div className="w-full mb-16 group cursor-pointer hover:scale-105 transition duration-300">
            <Image
              width={200}
              height={200}
              src="/assets/images/penthouse.webp"
              alt="bg image"
              className="object-cover sm:h-[500px] w-full"
            />
            {/* content */}
            <div className="p-4 flex flex-col items-start justify-between">
              <h2 className="text-2xl text-gray-700 mb-2 tracking-wider underline">
                Penthouse
              </h2>
              <div className="flex items-center justify-start w-full">
                <h3 className="text-sm uppercase tracking-wider text-gray-700">
                  Skyline views and exclusivity at the pinnacle of luxury.
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
              </div>
            </div>
          </div>
          {/* bottom div  */}
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <div className="flex-1 group sm:mt-20 cursor-pointer hover:scale-105 transition duration-300">
              <Image
                width={200}
                height={200}
                src="/assets/images/individual-villa.webp"
                alt="bg image"
                className="object-cover w-full"
              />
              {/* content */}
              <div className="p-4 flex flex-col items-start justify-between">
                <h2 className="text-2xl text-gray-700 mb-2 tracking-wider underline">
                  Individual Villa
                </h2>
                <div className="flex items-center justify-start w-full">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    Serenity and space, your private escape from the world.
                  </h3>

                  <ArrowRight className="w-8 h-8 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </div>
              </div>
            </div>
            <div className="flex-1 group cursor-pointer h-fit hover:scale-105 transition duration-300">
              <Image
                width={200}
                height={200}
                src="/assets/images/private-dwelling.webp"
                alt="bg image"
                className="object-cover w-full"
              />
              {/* content */}
              <div className="p-4 flex flex-col items-start justify-between">
                <h2 className="text-2xl text-gray-700 mb-2 tracking-wider underline">
                  Private Dwelling
                </h2>
                <div className="flex items-center justify-start w-full">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    A secluded haven, where comfort and privacy unite.
                  </h3>
                  <ArrowRight className="w-7 h-7 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="w-full flex flex-col justify-start ml-2">
          {/* top div  */}
          <div className="flex flex-col sm:flex-row  gap-4 mb-16">
            <div className="flex-1 group mt-20 cursor-pointer hover:scale-105 transition duration-300">
              <Image
                width={200}
                height={200}
                src="/assets/images/mansion.webp"
                alt="bg image"
                className="object-cover w-full"
              />
              {/* content */}
              <div className="p-4 flex flex-col items-start justify-between">
                <h2 className="text-2xl text-gray-700 mb-2 tracking-wider underline">
                  Mansion
                </h2>
                <div className="flex items-center justify-start w-full">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    Grandeur redefined, a masterpiece of space and
                    sophistication.
                  </h3>
                  <ArrowRight className="w-6 h-6 text-gray-700 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="flex-1 group cursor-pointer h-fit hover:scale-105 transition duration-300">
              <Image
                width={200}
                height={200}
                src="/assets/images/apartment.webp"
                alt="bg image"
                className="object-cover w-full"
              />
              {/* content */}
              <div className="p-4 flex flex-col items-start justify-between">
                <h2 className="text-2xl text-gray-700 mb-2 tracking-wider underline">
                  Apartment
                </h2>
                <div className="flex items-center justify-start w-full">
                  <h3 className="text-sm uppercase tracking-wider text-gray-700">
                    Modern living made simple, stylish, and conveniently yours.
                  </h3>
                  <ArrowRight className="w-7 h-7 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </div>
              </div>
            </div>
          </div>
          {/* bottom div  */}
          <div className="group cursor-pointer hover:scale-105 transition duration-300">
            <Image
              width={200}
              height={200}
              src="/assets/images/chateau.webp"
              alt="bg image"
              className="object-cover sm:h-[800px] w-full"
            />
            {/* content */}
            <div className="p-4 flex flex-col items-start justify-between">
              <h2 className="text-2xl text-gray-700 mb-2 tracking-wider underline">
                Chateau
              </h2>
              <div className="flex items-center justify-start w-full">
                <h3 className="text-sm uppercase tracking-wider text-gray-700">
                  Timeless elegance, a regal retreat in breathtaking
                  surroundings.
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sustainable living  */}
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Sustainable Living
          </h2>
          <div className="flex items-center gap-6">
            <div className="hidden md:block hover:cursor-pointer text-sm uppercase tracking-wider border-b border-black hover:border-gray-600 pb-1 transition-colors hover:text-gray-600">
              Know More
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {sustainableLivingItems.map((item, index) => (
            <div
              key={index}
              className="group space-y-4 hover:cursor-pointer hover:scale-105 transition duration-300"
            >
              <div className="aspect-square relative bg-white p-4 rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2 px-4">
                <h3 className="text-lg md:text-xl flex items-center text-gray-700 group-hover:text-gray-600 underline group-hover:no-underline font-medium">
                  {item.name}{" "}
                  <ArrowRight className="w-5 h-5 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 ml-2" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden hover:cursor-pointer block text-sm uppercase tracking-wider text-center mt-8 border-b border-black pb-1 w-fit mx-auto">
          Know More
        </div>
      </section>

      {/*Sell any property*/}
      <section className="min-h-[600px] bg-[#f5f5f3] px-4 py-16 md:py-24">
        <ContactPopup
          isContactPopupOpen={isContactPopupOpen}
          setIsContactPopupOpen={setIsContactPopupOpen}
        />
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-gray-800">
                List or Sell Your Property with Us
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Whether you are looking to list or sell your property, our
                platform provides the tools and support you need to reach
                potential buyers and achieve your real estate goals.
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsContactPopupOpen(true);
                  }}
                  className="rounded-full px-8 py-6 text-base border-gray-400 hover:bg-gray-100 transition-colors"
                >
                  Contact us
                </Button>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/luxury.webp"
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
    </div>
  );
};

export default Residential;
