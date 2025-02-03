"use client";
import ManualCityPopup from "../components/ManualCityPopup";
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import AIFeatures from "@/components/AIFeatures";
import ImmersivePropertyExperience from "@/components/ImmersivePropertyExperience";
import Testimonial from "@/components/Testimonial";
import FeaturedListings from "@/components/FeatureListings";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const Home = () => {
  const showPopup = useSelector((state: RootState) => state.popup.showPopup);
  const showManualPopup = useSelector(
    (state: RootState) => state.popup.showManualPopup
  );

  return (
    <div>
      {showPopup && <Popup />}
      {showManualPopup && <ManualCityPopup />}
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
