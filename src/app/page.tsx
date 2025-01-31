"use client";
import React, { useState } from "react";
import ManualCityPopup from "../components/ManualCityPopup";
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import AIFeatures from "@/components/AIFeatures";
import ImmersivePropertyExperience from "@/components/ImmersivePropertyExperience";
import Testimonial from "@/components/Testimonial";
import FeaturedListings from "@/components/FeatureListings";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showManualPopup, setShowManualPopup] = useState(false)

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
          openManualPopup={openManualPopup}
        />
      )}
      {showManualPopup && (
        <ManualCityPopup
          onClose={closeManualPopup}
        />
      )}
      <div
        className={
          showPopup || showManualPopup ? "blur-sm  pointer-events-none" : ""
        }
      >
        <Hero />
        <AIFeatures />
        <FeaturedListings />
        <ImmersivePropertyExperience />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
