"use client";

import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import * as Slider from "@radix-ui/react-slider";
import ContactPopup from "@/components/ContactPopup";

const SearchHero = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [budgetValue, setBudgetValue] = useState([0, 4000]);

  const [activeTab, setActiveTab] = useState("Buy");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMiniDropdownOpen, setIsMiniDropdownOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [isConstructionStatusOpen, setIsConstructionStatusOpen] =
    useState(false);

  const propertyTypes = [
    "Office",
    "Retail",
    "Warehouse",
    "Store",
    "Multiplex",
    "Industrial",
    "Co-working",
    "Showroom",
    "Factory",
    "Commercial Land",
    "Other",
  ];

  return (
    <div>
      {/* Hero  */}
      <div className="relative min-h-[400px] z-20 w-full">
        {/* Hero Background */}
        <Image
          fill
          className="absolute inset-0 object-cover bg-center"
          alt="Residential Hero"
          src="/assets/images/commercial-hero.webp"
        />
        {/* black overlay for shade */}
        <div className="absolute inset-0 bg-black/30 " />

        {/* Search Container */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-4xl">
          <div className="rounded-lg bg-white p-4 shadow-xl">
            {/* Navigation Tabs */}
            <div className="mb-4 flex flex-wrap gap-8 border-b">
              {["Buy", "Rent", "New Launch", "Commercial", "Projects"].map(
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
                      setIsAreaOpen(false);
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
                    Commercial
                  </div>
                )}
                {activeTab === "Commercial" && (
                  <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                    All Commercial
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
                            Looking for residential properties?
                            <a
                              href="/residential"
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
                              setIsAreaOpen(false);
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
                              setIsAreaOpen(!isAreaOpen);
                              setIsConstructionStatusOpen(false);
                            }}
                          >
                            <div
                              className={`text-gray-700 text-sm flex justify-center items-center border border-gray-300 hover:bg-orange-400 transition duration-300 hover:text-white rounded-full px-2 py-1 hover:cursor-pointer
                            ${isAreaOpen ? "bg-orange-400 text-white" : ""}`}
                            >
                              Area
                              {isAreaOpen && <ChevronUp className="h-4 w-4" />}
                              {!isAreaOpen && (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </div>
                          <div
                            onClick={() => {
                              setIsMiniDropdownOpen(true);
                              setIsBudgetOpen(false);
                              setIsAreaOpen(false);
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
                                <h2 className="text-base text-gray-700">
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
                          {/* Area */}
                          {isAreaOpen && (
                            <div className="w-full max-w-3xl px-4 py-6">
                              <div className="space-y-4">
                                <h3 className="text-gray-700 mb-4">
                                  Select Area Range
                                </h3>
                                <p className="text-sm text-gray-700">
                                  {budgetValue[0]} - {budgetValue[1]}+ sq.ft.
                                </p>
                                <Slider.Root
                                  className="relative flex items-center w-full h-5 select-none touch-none"
                                  value={budgetValue}
                                  onValueChange={setBudgetValue}
                                  max={4000}
                                  step={100}
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
                                  <span>4000+ sq.ft.</span>
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

      {/* Work & commerce */}
      <div className=" bg-slate-800 px-4 pt-48 pb-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="flex items-start mt-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Work & Commerce
                </h1>
                <p className="text-lg text-gray-300">
                  Discover dynamic spaces meticulously crafted for unparalleled
                  productivity, thriving commerce, and memorable guest
                  experiences. Elevate your business environment with innovative
                  designs that inspire success and foster growth.
                </p>
                <div>
                  <button className="inline-flex items-center rounded-full bg-gray-700 px-6 py-3 text-base font-medium text-white hover:border hover:border-white">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* Right Images Grid */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <div className="flex flex-col gap-8">
                {/* office */}
                <div className="relative flex-1  min-w-[300px] hover:cursor-pointer hover:scale-105 transition duration-300">
                  <div className="relative h-64 sm:h-52 overflow-hidden rounded-2xl">
                    <Image
                      src="/assets/images/office.webp"
                      alt="Office"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
                      Office
                    </h3>
                  </div>
                </div>

                {/* retail */}
                <div className="relative flex-1 min-w-[300px] hover:cursor-pointer hover:scale-105 transition duration-300">
                  <div className="relative h-64 sm:h-80 overflow-hidden rounded-2xl">
                    <Image
                      src="/assets/images/retail.webp"
                      alt="Retail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
                      Retail
                    </h3>
                  </div>
                </div>
              </div>

              {/* hospitality */}
              <div className="relative flex-1 flex-shrink hover:cursor-pointer hover:scale-105 transition duration-300">
                <div className="relative sm:mt-24 h-64 sm:h-[500px] overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/images/hospitality.webp"
                    alt="Hospitality"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-white">
                    Hospitality
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production & Storage */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Hero Text */}
        <h1 className="text-3xl md:text-3xl lg:text-4xl text-gray-700 tracking-wider text-center font-normal leading-tight mb-16 max-w-4xl mx-auto">
          Optimized Spaces for High-Performance Production, Secure Storage, and
          Streamlined Logistics
        </h1>
        <h1 className="text-base lg:text-lg text-gray-700 tracking-wider text-center font-normal leading-tight mb-16 max-w-4xl mx-auto">
          <strong>Buy</strong>, <strong>sell</strong>, <strong>lease</strong>,
          or <strong>construct</strong> your ideal warehouse—let’s make it
          happen! Contact us today!
        </h1>

        {/* Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First Image */}
          <div className="aspect-[4/3] relative">
            <Image
              src="/assets/images/industry1.webp"
              alt="Sliding door installation in concrete interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="aspect-[4/3] relative hidden lg:block">
            <Image
              src="/assets/images/industry2.webp"
              alt="Sliding door system showcase"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6 md:mt-0 mt-4">
            <div className="space-y-2">
              <p className="text-2xl">Industries</p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Robust and versatile spaces built to support high-efficiency
              manufacturing, production, and industrial growth.
            </p>
            <div className="inline-block text-lg hover:cursor-pointer underline underline-offset-4 hover:text-gray-600 transition-colors text-gray-700">
              View more
            </div>
          </div>
        </div>

        {/* Warehouse */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First Image */}
          <div className="aspect-[4/3] relative">
            <Image
              src="/assets/images/warehouse1.webp"
              alt="Sliding door installation in concrete interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="aspect-[4/3] relative hidden lg:block">
            <Image
              src="/assets/images/warehouse2.webp"
              alt="Sliding door system showcase"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6 md:mt-0 mt-4">
            <div className="space-y-2">
              <p className="text-2xl">Warehouse</p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Secure, spacious, and strategically designed for seamless storage,
              distribution, and logistics efficiency.
            </p>
            <div className="inline-block hover:cursor-pointer text-lg underline underline-offset-4 hover:text-gray-600 transition-colors text-gray-700">
              View more
            </div>
          </div>
        </div>
      </section>

      {/* Specialized & growth sector */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Text Content */}
          <div className="w-full ">
            <h2 className="text-4xl sm:text-5xl font-light tracking-wider mb-6">
              Unlocking Potential in
              <br />
              Specialized & Growth Sectors
            </h2>
            <p className="text-lg text-gray-600">
              Discover innovative solutions tailored for specialized sectors,
              driving growth and unlocking new opportunities.
            </p>
          </div>

          {/* Images */}
          <div className="space-y-12">
            {/* Circular Images with Statistics */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-end">
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-32 h-32 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-4">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/healthcare.jpg"
                    alt="Interior view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center w-full lg:text-left">
                  <p className="text-2xl lg:text-3xl text-center font-medium mb-2">
                    Healthcare
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-32 h-32 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-4">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/educational.jpg"
                    alt="Building exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center w-full lg:text-left">
                  <p className="text-2xl sm:text-3xl text-center font-medium mb-2">
                    Educational
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-32 h-32 sm:w-52 sm:h-52 rounded-full overflow-hidden mb-4">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/joint-venture-high-rise.jpg"
                    alt="Modern interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center w-full lg:text-left">
                  <p className="text-2xl sm:text-3xl text-center font-medium mb-2">
                    Joint Venture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Sell any property*/}
      <section className="min-h-[600px] bg-[#f5f5f3] px-4 py-16 md:py-24">
        <ContactPopup
          isContactPopupOpen={isContactPopupOpen}
          setIsContactPopupOpen={setIsContactPopupOpen}
        />
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[200px] md:h-[300px] lg:h-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/office.webp"
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
                Sell or Lease Out Your Commercial Land with Us
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
                  className="rounded-full px-8 py-6 text-base border-gray-400 bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchHero;
