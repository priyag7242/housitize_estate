"use client";
import React, { useState } from "react";
import ManualCityPopup from "../components/ManualCityPopup";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import AIFeatures from "@/components/AIFeatures";
import FeaturedListings from "@/components/FeaturedListings";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showManualPopup, setShowManualPopup] = useState(false); 
  const [selectedLocation, setSelectedLocation] = useState<{
    city: string;
  } | null>(null);

  const closePopup = () => {
    setShowPopup(false);
  };

  const openManualPopup = () => {
    setShowPopup(false);
    setShowManualPopup(true);
  };

  const closeManualPopup = () => {
    setShowManualPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <Popup 
          onClose={closePopup} 
          onLocationSelect={setSelectedLocation} 
          openManualPopup={openManualPopup} 
        />
      )}
      {showManualPopup && <ManualCityPopup onClose={closeManualPopup} />}
      <div className={showPopup || showManualPopup ? "blur-sm  pointer-events-none" : ""}>
        {/* <NavBar /> */}
        <Hero />
        <AIFeatures />
        <FeaturedListings />
      </div>
    </div>
  );
};

export default Home;
