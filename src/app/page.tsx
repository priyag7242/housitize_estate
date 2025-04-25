"use client";
import ManualCityPopup from "../components/ManualCityPopup";
// import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import SelfSustainableHome from "@/components/SelfSustainableHome";
import Services from "@/components/Services";
import Hospitality from "@/components/Hospitality";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import HowWeOperate from "@/components/HowWeOperate";
import Loan from "@/components/Loan";
import Interior from "@/components/Interior";
import Commercial from "@/components/Commercial";
import PropertyConsulting from "@/components/PropertyConsulting";
import Architecture from "@/components/Architecture";
import FacilityManagement from "@/components/FacilityManagement";
import HeroSectionV2 from "@/components/Hero_2";
import BelowHeroItems from "@/components/belowHeroItems";
import HeroSection from "./test/page";
// import BuyComponent from "@/components/BuyComponent";
// import PGComponent from "@/components/PGComponent";


const Home = () => {
  // const showPopup = useSelector((state: RootState) => state.popup.showPopup);
  // const showManualPopup = useSelector(
  //   (state: RootState) => state.popup.showManualPopup
  // );

  return (
    <div>
      {/* {showPopup && <Popup />}
      {showManualPopup && <ManualCityPopup />} */}
      {/* <div
        className={
          showPopup || showManualPopup ? "blur-sm  pointer-events-none" : ""
        }
      > */}
        {/* <Hero/> */}
        {/* <HeroSectionV2/> */}

        <HeroSection />

        
        {/* <BuyComponent/> */}
        {/* <PGComponent/> */}
        <BelowHeroItems/>
        <HowWeOperate />
        <SelfSustainableHome />
        <Hospitality />
        <Services />
        <PropertyConsulting />
        <Loan />
        <Interior />
        <Commercial />
        <Architecture />
        <FacilityManagement />
      {/* </div> */}
    </div>
  );
};

export default Home;
