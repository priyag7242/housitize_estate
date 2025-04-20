"use client";
import React, { useEffect, useState, useRef } from "react";
import { 
  Menu, 
  X, 
  ChevronDown,
  User
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import Popup from "./Popup";
import ManualCityPopup from "./ManualCityPopup";
import { openPopup } from "@/redux/popup/popupSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import ToggleButton from "./ui/toggleButton";
import ProfileSidebar from "./ui/profilesidebar";

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);
  
  // Refs
  const profileRef = useRef<HTMLDivElement>(null);
  
  // Redux
  const dispatch = useDispatch();
  const selectedLocation = useSelector(
    (state: RootState) => state.selectedLocation.selectedLocation
  );
  const showPopup = useSelector((state: RootState) => state.popup.showPopup);
  const showManualPopup = useSelector(
    (state: RootState) => state.popup.showManualPopup
  );

  // Handlers
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleToggleChange = (state: "left" | "right") => {
    // Implementation will be added later when needed
  };

  // Effects
  useEffect(() => {
    // Handle navbar visibility on scroll
    const handleScrollVisibility = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, [lastScrollY]);

  useEffect(() => {
    // Handle navbar background change on scroll
    const handleScrollBackground = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollBackground);
    return () => window.removeEventListener("scroll", handleScrollBackground);
  }, []);

  // Removed the click-outside effect since we don't want it anymore
  // useEffect(() => {
  //   // Close profile sidebar when clicking outside
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
  //       setIsProfileSidebarOpen(false);
  //     }
  //   };
  //
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <nav
      className={`
        fixed w-screen top-0 text-white z-50 
        transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
        transition-transform duration-500 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-8xl xl:mx-20 px-2 xl:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Toggle - Desktop */}
          <div className="hidden lg:flex lg:gap-6 text-base font-normal items-center">
            {/* Logo Image and Name */}
            <Link href="/"> 
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
            </Link>

            {/* PG/Real Estate Toggle Button */}
            <div className="ml-96">
              <ToggleButton 
                leftOption="Real Estate" 
                rightOption="Hospitality" 
                initialState="right" 
                onChange={handleToggleChange} 
              />
            </div> 
          </div>

          {/* Navbar Links */}
          <div className={`flex items-center gap-6 ${isScrolled ? "text-gray-700" : ""}`}>
            {/* Location selector */}
            <button
              onClick={() => dispatch(openPopup())}
              className={`
                text-sm gap-1 px-2 py-1 rounded-sm 
                flex items-center justify-center w-fit uppercase
                ${isScrolled ? "text-gray-700 border border-gray-700" : "border border-white"}
              `}
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

            {/* Saved Button */}
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

            {/* Packages Button */}
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

            {/* Housitize Connect Button */}
            <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1">
              Housitise connect <span className="text-xs bg-white text-red-500 px-1 rounded">FREE</span>
            </button>

            {/* User and Menu Button */}
            <div className="h-12 w-24 border border-white spacing-x-0.5 hidden lg:flex lg:gap-3 text-xs font-normal bg-white/40 rounded-full items-center justify-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center pl-4 py-2 cursor-pointer space-x-2"
              >
                <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : ""}`} />
              </button>
              <div className="relative" ref={profileRef}>
                <div 
                  onClick={() => setIsProfileSidebarOpen(true)}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
                >
                  <User className="h-5 w-5 text-purple-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center z-50 p-2 text-white font-bold"
            >
              {isMenuOpen ? (
                <X className="block h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Popups */}
      {showPopup && <Popup />}
      {showManualPopup && <ManualCityPopup />}
      
      {/* Profile Sidebar */}
      <ProfileSidebar 
        isOpen={isProfileSidebarOpen}
        onClose={() => setIsProfileSidebarOpen(false)}
        onLoginClick={() => {
          setIsProfileSidebarOpen(false);
          // You might want to add your login logic here
        }}
      />
    </nav>
  );
};

export default Navbar;