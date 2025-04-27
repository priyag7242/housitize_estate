"use client";
import FacilityManagement from "@/components/FacilityManagement";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <div className="relative min-h-[450px] z-20 w-full ">
        {/* Hero Background */}
        <Image
          fill
          className="absolute inset-0 object-cover bg-center"
          alt="Residential Hero"
          src="/assets/images/hero-pic1.jpg"
        />

        <div className="absolute inset-0 bg-black/10 " />

        
      </div>
      <div>
            <FacilityManagement/>
        </div>
    </div>
  );
};

export default page;
