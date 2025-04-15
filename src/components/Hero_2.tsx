"use client"

import Image from "next/image"
import { Search } from "lucide-react"
import PopularLocalities from "./ui/popularLocalities"
import { useState } from "react"
// import ToggleButton from "./toggle-button"

export default function HeroSectionV2() {
  const [activeTab, setActiveTab] = useState("BUY")


  const backgroundImages = {
    BUY: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    RENT: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    COMMERCIAL: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    "PG/CO-LIVING": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af",
    PLOTS: "https://images.unsplash.com/photo-1524813686514-a57563d77965"
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }


  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImages[activeTab as keyof typeof backgroundImages]}
          alt={`${activeTab} background`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mt-[7%] mx-auto px-4 pt-24 flex flex-col items-center">
      

        <h1 className="text-white text-4xl font-bold text-center mt-6">
          Properties to {activeTab.toLowerCase()} in Bhopal
        </h1>
        <p className="text-white text-lg mt-2 text-center">11K+ listings added daily and 65K+ total verified</p>

        {/* Search tabs and bar */}
        <div className="mt-8 w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-white/20">
            {["BUY", "RENT", "COMMERCIAL", "PG/CO-LIVING", "PLOTS"].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-white ${activeTab === tab ? "tab-active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex p-2">
            <div className="flex items-center bg-white rounded-l-full px-4 py-2 w-1/4">
              <span className="font-medium">Bhopal</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down ml-2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="flex-1 bg-white">
              <input
                type="text"
                placeholder="Search for locality, landmark, project, or builder"
                className="w-full px-4 py-2 outline-none"
              />
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded-r-full flex items-center">
              <Search className="mr-1 h-5 w-5" />
              Search
            </button>
          </div>
        </div>

        {/* Debug info to show active tab - can be removed in production */}
        {/* <div className="mt-2 text-white text-xs bg-black/30 px-2 py-1 rounded">
          Active Tab: {activeTab} | Toggle: {toggleState}
        </div> */}

        {/* Popular localities */}
        <PopularLocalities />

      

        {/* Property owner CTA */}
        <div className="mt-20  bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white text-lg">
          Are you a Property Owner? <a className="font-medium hover:underline" href="#">Sell / Rent for FREE</a>
        </div>
      </div>
    </section>
  )
}

