"use client";
import React, { useEffect, useState, useRef } from "react";
import { UserCircle, Menu, X, Bell, BellIcon, Flag, PackageOpen, ChartNoAxesCombined, Building2, Album, Building, Phone, Home, PaintBucket, ChevronDown, HandCoins, HousePlus, HousePlug } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import Popup from "./Popup";
import ManualCityPopup from "./ManualCityPopup";
import { openPopup } from "@/redux/popup/popupSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import ToggleButton from "./ui/toggleButton";
import { User } from "lucide-react"
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";

const Navbar = () => {
  const [isLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const selectedLocation = useSelector(
    (state: RootState) => state.selectedLocation.selectedLocation
  );
  const showPopup = useSelector((state: RootState) => state.popup.showPopup);
  const showManualPopup = useSelector(
    (state: RootState) => state.popup.showManualPopup
  );

  const [toggleState, setToggleState] = useState<"left" | "right">("right")

  const handleToggleChange = (state: "left" | "right") => {
    setToggleState(state)
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen top-0 text-white  z-50 bg-transparent transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }
        transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-8xl xl:mx-20 px-2 xl:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Navigation Items Left side - Desktop */}
          <div className="hidden lg:flex lg:gap-6 text-base font-normal items-center ">
          

            {/* Logo Image and Name */}
            <Link href="/"> 
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/assets/images/logo.png"
                      alt="Housitize Logo"
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                  <span className={`font-bold text-lg ${isScrolled ? "text-gray-800" : "text-white"}`}>
                    HOUSITIZE
                  </span>
                </div> 
              </div>
            </Link>


            {/* PG/Real Estate Toggle Button */}
              <div className="ml-96">
                <ToggleButton leftOption="Real Estate" rightOption="Hospitality" initialState="right" onChange={handleToggleChange} />
              </div> 
          </div>

          {/* Navbar Links */}
          <div
            className={`flex items-center gap-6 ${
              isScrolled ? "text-gray-700 " : ""
            }`}
          >  
         
            <button
              onClick={() => dispatch(openPopup())}
              className={`text-sm gap-1 px-2 py-1 rounded-sm flex items-center justify-center w-fit uppercase ${
                isScrolled
                  ? "text-gray-700 border border-gray-700"
                  : "border border-white"
              }`
            }
            >
              <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-map-pin"
          >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
          </svg>
              {selectedLocation || "Mars"}

              <ChevronDown className="h-4 w-4" /> 
            </button>
            {showPopup && <Popup />}
            {showManualPopup && <ManualCityPopup />}

            {/* <div className="h-12 border" /> */}
            {/* <Link href="/" className="text-xs font-bold "> */}
              {/* <div>DEMIGOD</div>
              <div className="">REAL</div>
              <div className="">ESTATE</div> */}
              {/* <Image
                src="/assets/images/demigod-logo.png"
                alt="Logo"
                width={200}
                height={200} */}
              {/* /> */}
            {/* </Link> */}

{/* Saved Link */}
<button className="text-white text-sm flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Saved
        </button>

        {/* Packages link */}
        <button className="text-white text-sm flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-package"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          Packages <ChevronDown className="h-4 w-4" />
        </button>

{/* connect */}
<button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
          Housitise connect <span className="text-xs bg-white text-red-500 px-1 rounded">FREE</span>
        </button>

        {/* user and hamburger button */}
        <div className="h-12 w-24 border border-white spacing-x-0.5  hidden lg:flex lg:gap-3 text-xs font-normal bg-white/40 rounded-full items-center justify-center">
           <button
        
             className="flex items-center pl-4 py-2 cursor-pointer space-x-2"
           >
             <Menu
               className={`h-6 w-6 ${isScrolled ? "text-gray-800 " : ""}`}
             />
           </button>
           <div className="relative" ref={profileRef}>
             <div 
               onClick={() => setIsProfileOpen(!isProfileOpen)}
               className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
             >
               <User className="h-5 w-5 text-purple-700 cursor-pointer" />
             </div>
             
             {isProfileOpen && (
               <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-4 z-50">
                 {/* Header */}
                 <div className="px-4 pb-4">
                   <div className="flex items-center gap-2 mb-4">
                     <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                       <img src="/assets/images/avatar-placeholder.png" alt="User" className="w-full h-full rounded-full object-cover" />
                     </div>
                     <div>
                       <p className="text-sm font-semibold">John Doe</p>
                       <p className="text-xs text-gray-500">johndoe@example.com</p>
                     </div>
                   </div>
                   <button className="text-sm text-red-500">Logout</button>
                 </div>
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
