"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";

interface PropertyDetailsProps {
  desc: string;
  location: string;
  status: string;
}

const Description = ({ desc, location, status }: PropertyDetailsProps) => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <h2 className="text-xl sm:text-2xl tracking-[0.2em] font-light">
            DESCRIPTION
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">{desc}</p>
        </div>

        <Separator className="my-8" />

        {/* Location Section */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <h2 className="text-xl sm:text-2xl tracking-[0.2em] font-light">
            LOCATION
          </h2>
          <p className="text-gray-700 font-light">{location}</p>
        </div>

        <Separator className="my-8" />

        {/* Status Section */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <h2 className="text-xl sm:text-2xl tracking-[0.2em] font-light">
            STATUS
          </h2>
          <p className="text-gray-700 font-light">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
