import React from "react";
import {
  Home,
  HomeIcon,
  FileText,
  Building,
  Scale,
  Sofa,
  DollarSign,
} from "lucide-react";
import { Select } from "@/components/ui/select";

const HeroSection = () => {
  const services = [
    { icon: <HomeIcon />, label: "Buy" },
    { icon: <HomeIcon className="fill-white" />, label: "Rent" },
    { icon: <FileText />, label: "Sell" },
    { icon: <Building />, label: "Commercial" },
    { icon: <Scale />, label: "Legal Help" },
    { icon: <Sofa />, label: "Interior Design" },
    { icon: <DollarSign />, label: "Loans" },
  ];

  return (
    <div className="min-h-screen bg-[#f9fdfc] flex flex-col justify-center items-center p-8 relative">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Find Anything Real Estate.</h1>
        <p className="text-xl font-medium text-gray-600">No Middlemen. Just Results.</p>
        <p className=" text-gray-500 mt-2">
          Explore homes, offices, PGs, legal help, interiors, and more.
        </p>
      </div>

      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {services.map((service) => (
          <div
            key={service.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <div className="bg-teal-600 text-white p-4 rounded-full">
              {service.icon}
            </div>
            <span className="text-sm font-medium">{service.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-4xl flex flex-wrap gap-4 items-center justify-between z-20">
       
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
      </div>
      <img
        src="/assets/images/building.jpeg" 
        alt="Cityscape"
        className="w-full max-w-5xl bottom-0 object-contain absolute mix-blend-multiply z-0"
      />
    </div>
  );
};

export default HeroSection;
