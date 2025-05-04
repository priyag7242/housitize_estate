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
import { useRouter } from "next/navigation";

const Navbar = () => {
  // State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);
  const [isPackagesMenuOpen, setIsPackagesMenuOpen] = useState(false);

  // Refs
  const profileRef = useRef<HTMLDivElement>(null);
  const packagesMenuRef = useRef<HTMLDivElement>(null);
  
  // Redux
  const dispatch = useDispatch();

  const selectedLocation = useSelector(
    (state: RootState) => state.selectedLocation.selectedLocation
  );

  const showPopup = useSelector((state: RootState) => state.popup.showPopup);
  const showManualPopup = useSelector(
    (state: RootState) => state.popup.showManualPopup
  );

  const router = useRouter();
 
  const handleToggleChange = (state: "left" | "right") => {
    if (state === "left") {
      router.push("/"); 
    } else {
      router.push("/hospitality"); 
    }
  };

  const togglePackagesMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsPackagesMenuOpen(!isPackagesMenuOpen);
  };

  // Close packages menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        packagesMenuRef.current && 
        !packagesMenuRef.current.contains(event.target as Node) &&
        isPackagesMenuOpen
      ) {
        setIsPackagesMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPackagesMenuOpen]);

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

  return (
    <nav
      className={`fixed w-screen h-16 top-0 bg-black/50 backdrop-blur-sm text-white z-[100] transition-all duration-300`}
    >
      <div className="max-w-8xl xl:mx-20 px-1 xl:px-4 p-1">
        <div className="flex justify-between items-center h-14">
          {/* Logo and Toggle - Desktop */}
          <div className="hidden lg:flex lg:gap-6 text-base font-normal items-center">
            {/* Logo Image and Name */}
            <Link href="/"> 
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Housing.com%27s_logo.png"
                    alt="Housitize Logo"
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <span className={`font-bold font-sans md-hidden text-lg`}>
                  HOUSITIZE.com
                </span>
              </div>
            </Link>
          </div>

          {/* PG/Real Estate Toggle Button */}
          <div className="ml-[40vh]">
            <ToggleButton 
              leftOption="Real Estate" 
              rightOption="Hospitality" 
              initialState="right" 
              onChange={handleToggleChange} 
            />
          </div>

          {/* Navbar Links */}
          <div className={`flex items-center gap-4`}>
            {/* Location selector */}
            <button
              onClick={() => dispatch(openPopup())}
              className="text-5 p-1 rounded-sm flex items-center justify-center w-fit uppercase"
            >
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
                className="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <ChevronDown className="h-4 w-4" /> 
            </button>

            {/* Saved Button */}
            <button className={`text-xs font-bold flex items-center gap-1`}>
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

            {/* Packages Button with Click-to-Open Submenu */}
            <div 
              className="relative"
              ref={packagesMenuRef}
            >
              <button 
                onClick={togglePackagesMenu}
                className="text-xs font-bold flex items-center gap-1"
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
                  className="lucide lucide-package"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
                Packages <ChevronDown className={`h-4 w-4 transition-transform ${isPackagesMenuOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Submenu - Now opens on click and stays open until click outside */}
              {isPackagesMenuOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/developers" className="block px-4 py-2 text-sm text-gray-500 hover:bg-purple-50 hover:text-purple-500 border-b border-gray-100">
                    For Developers
                  </Link>
                  <Link href="/broker" className="block px-4 py-2 text-sm text-gray-500 hover:bg-purple-50 hover:text-purple-500 border-b border-gray-100">
                    For Brokers
                  </Link>
                  <Link href="/owners" className="block px-4 py-2 text-sm text-gray-500 hover:bg-purple-50 hover:text-purple-500 border-b border-gray-100">
                    For Owners
                  </Link>
                  <Link href="/housingpremium" className="block px-4 py-2 text-sm text-gray-500 hover:bg-purple-50 hover:text-purple-500">
                    Housitize Premium
                  </Link>
                </div>
              )}
            </div>

            {/* Housitize Connect Button */}
            <button className=" text-white font-bold rounded-md text-xs flex items-center gap-1">
              Housitise connect <span className="text-xs bg-red-500 font-light text-white px-1 rounded">FREE</span>
            </button>

            {/* User and Menu Button */}
            <div onClick={() => setIsProfileSidebarOpen(true)} className="h-8 w-16 p-1 border spacing-x-0.5 hidden lg:flex lg:gap-1 text-xs font-normal bg-white rounded-full items-center justify-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center cursor-pointer text-black space-x-2">
                <Menu className={`h-4 w-4 ${isScrolled ? "text-gray-800" : ""}`} />
              </button>
              <div className="relative" ref={profileRef}>
                <div className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center cursor-pointer">
                  <User className="h-5 w-5 text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <button onClick={() => dispatch(openPopup())} className="block w-full text-left">Select Location</button>
          <Link href="/saved" className="block">Saved</Link>
          <div>
            <p className="font-semibold">Packages</p>
            <Link href="/developers" className="block">For Developers</Link>
            <Link href="/broker" className="block">For Brokers</Link>
            <Link href="/owners" className="block">For Owners</Link>
            <Link href="/housingpremium" className="block">Housitize Premium</Link>
          </div>
          <Link href="#" className="block">Housitize Connect</Link>
          <button onClick={() => setIsProfileSidebarOpen(true)} className="block">Profile</button>
        </div>
      )}

      {/* Profile Sidebar */}
      <ProfileSidebar isOpen={isProfileSidebarOpen} onClose={() => setIsProfileSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;
