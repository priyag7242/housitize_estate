import React, { useState } from "react";
import {
  Home,
  HomeIcon,
  FileText,
  Building,
  Scale,
  Sofa,
  DollarSign,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import TypeWriterText from "@/components/reusable-component/TypeWriterText";

const HeroSection = () => {
  const services = [
    { icon: <HomeIcon />, label: "Buy" , link:"" },
    { icon: <HomeIcon className="fill-white" />, label: "Rent" , link:"" },
    { icon: <FileText />, label: "Sell" , link:""},
    { icon: <Building />, label: "Explore more" , link:"/services" },
    // { icon: <Scale />, label: "Legal Help" },
    // { icon: <Sofa />, label: "Interior Design" },
    // { icon: <DollarSign />, label: "Loans" },
  ];

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
    <div className="min-h-screen bg-[#f9fdfc]  flex flex-col justify-center items-center p-8 relative">
  
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">
        <TypeWriterText text={"Find Anything Real Estate."} speed={50} />
          </h1>
        <p className="text-xl font-medium text-gray-600">
          No Middlemen. Just Results.
        </p>
        <p className=" text-gray-500 mt-2">
          Explore homes, offices, PGs, legal help, interiors, and more.
        </p>
      </div>

      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {services.map((service) => (
          <div
            key={service.label}
            className="flex flex-col items-center gap-2 text-center hover:-translate-y-1.5 transition-all duration-200 ease-in cursor-pointer"
          >
           <Link href={service.link}> <div className="bg-teal-600 hover:bg-teal-500 text-white p-4 rounded-full">
              {service.icon}
            </div> </Link>
            <span className="text-sm font-medium">{service.label}</span>
          </div>
        ))}
      </div>

      <div className=" w-full max-w-4xl z-20 -mt-3">
        <div className="rounded-lg bg-white p-4 shadow-2xl">
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
                        <Separator className="my-3" />
                      </div>
                    )}
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
            <Button className="bg-teal-600 hover:bg-teal-700">Search</Button>
          </div>
        </div>
      </div>

      {/* <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl flex flex-wrap gap-4 items-center justify-between z-20">
       
        <input
          type="text"
          placeholder="Service"
          className="flex-1 min-w-[150px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="Location"
          className="flex-1 min-w-[150px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="Property Type"
          className="flex-1 min-w-[150px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="text"
          placeholder="Budget"
          className="flex-1 min-w-[150px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition">
          Search
        </button>
      </div> */}
ho
      <img
        src="/assets/images/building.jpeg"
        alt="Cityscape"
        className="w-full max-w-5xl bottom-0 object-contain absolute mix-blend-multiply z-0"
      />

      <div className="bg-black/40 backdrop-blur-md rounded-t-full gap-1 px-6 py-2 dark:text-white text-white text-md absolute bottom-1 border border-white/10 shadow-lg flex items-center">
        <div className="relative animate-bounce-slow">
          <img src="/assets/images/diamond.svg" className="h-3 animate-glow" />
          <img
            src="/assets/images/diamond.svg"
            className="absolute -left-2 h-2 animate-glow"
          />
        </div>
        Are you a Property Owner?{" "}
        <a className="font-semibold hover:underline" href="#">
          Sell / Rent for FREE
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
