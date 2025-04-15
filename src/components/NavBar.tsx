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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

            {/* Desktop menu, show/hide based on menu state */}
            {isMenuOpen && (
              <div className="hidden lg:block fixed top-16 right-40 h-full w-64 bg-black/50 backdrop-blur-lg shadow-lg z-20">
                <div className="absolute bottom-0 left-0 text-sm w-full  text-white text-center py-2">
                  <Phone className="h-4 w-4 inline-block mr-2" />
                  Contact us: +91 234 567-890
                </div>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute right-[8px] top-[35px] p-1 hover:cursor-pointer"
                >
                  <X className="block h-4 w-4" aria-hidden="true" />
                </div>
                <div className="hidden lg:block top-20 relative w-fit">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                      href="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <Album className="h-5 w-5" />
                      About Us
                    </Link>
                    <Link
                      href="/category"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <Building2 className="h-5 w-5" />
                      Properties
                    </Link>
                    <Link
                      href="/market-trends"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <ChartNoAxesCombined className="h-5 w-5" />
                      Market trends
                    </Link>
                    <Link
                      href="/market-trends"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <BellIcon className="h-5 w-5" />
                      Notifications
                    </Link>

                    <Link
                      href="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <UserCircle className="h-5 w-5" />
                      Services
                    </Link>
                    <Link
                      href="/testimonials"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <Bell className="h-5 w-5" />
                      Testimonials
                    </Link>
                    <Link
                      href="/careers"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <Building className="h-5 w-5" />
                      Careers
                    </Link>
                    <Link
                      href="blog/resources"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <PackageOpen className="h-5 w-5" />
                      Additional Resources
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
                    >
                      <Flag className="h-5 w-5" />
                      Help & Support
                    </Link>
                    {/* {isLoggedIn ? (
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        href="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Login/Signup
                      </Link>
                    )} */}
                  </div>
                </div>
              </div>
            )}

            {/* PG/Real Estate Toggle Button */}
              <div className="ml-96">
                <ToggleButton leftOption="PG" rightOption="Real Estate" initialState="right" onChange={handleToggleChange} />
              </div> 
          </div> {/* This closing div was missing, causing the layout error */}

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
             onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                       <div className="text-base font-medium">Hello 👋</div>
                       <div className="flex items-center gap-1">
                         <div className="flex items-center gap-1 text-xs text-gray-600">
                           <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                           Easy Contact with sellers
                         </div>
                       </div>
                       <div className="flex items-center gap-1 text-xs text-gray-600">
                         <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                         Personalized experience
                       </div>
                     </div>
                     <button 
                       onClick={() => {
                         setIsProfileOpen(false);
                         setIsLoginPopupOpen(true);
                         setIsSignupPopupOpen(false);
                       }}
                       className="ml-auto bg-emerald-500 text-white px-4 py-1.5 rounded-md text-sm"
                     >
                       Login
                     </button>
                   </div>

                   {/* Activity Section */}
                   <div className="mb-6">
                     <h3 className="text-sm font-medium mb-3">My Activity</h3>
                     <div className="grid grid-cols-4 gap-2">
                       <div className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-50 cursor-pointer">
                         <div className="w-6 h-6 mb-1">
                           <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                             <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
                           </svg>
                         </div>
                         <span className="text-xs text-gray-600">Contacted</span>
                         <span className="text-xs font-medium">00</span>
                       </div>
                       <div className="flex flex-col items-center p-2 bg-purple-50 rounded-lg cursor-pointer">
                         <div className="w-6 h-6 mb-1">
                           <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                             <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                           </svg>
                         </div>
                         <span className="text-xs text-gray-600">Seen</span>
                         <span className="text-xs font-medium">00</span>
                       </div>
                       <div className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-50 cursor-pointer">
                         <div className="w-6 h-6 mb-1">
                           <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                             <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                           </svg>
                         </div>
                         <span className="text-xs text-gray-600">Saved</span>
                         <span className="text-xs font-medium">00</span>
                       </div>
                       <div className="flex flex-col items-center p-2 rounded-lg hover:bg-purple-50 cursor-pointer">
                         <div className="w-6 h-6 mb-1">
                           <svg viewBox="0 0 24 24" className="w-full h-full text-purple-600">
                             <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                           </svg>
                         </div>
                         <span className="text-xs text-gray-600">Recent</span>
                         <span className="text-xs font-medium">00</span>
                       </div>
                     </div>
                   </div>

                   {/* Post Property Card */}
                   <div className="bg-orange-50 rounded-lg p-4 flex items-center gap-4 mb-6">
                     <div className="w-12 h-12">
                       <img src="/assets/images/house-icon.png" alt="House" className="w-full h-full" />
                     </div>
                     <div className="flex-1">
                       <h3 className="text-sm font-medium">Looking to sell / rent your property?</h3>
                       <button className="text-sm text-purple-600 font-medium">Post property for FREE</button>
                     </div>
                   </div>

                   {/* Menu Links */}
                   <div className="space-y-3">
                     <Link href="/zero-brokerage" className="flex items-center gap-3 text-sm text-gray-700">
                       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                       </svg>
                       Zero Brokerage Properties
                     </Link>
                     <Link href="/transactions" className="flex items-center gap-3 text-sm text-gray-700">
                       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M9 17l-5-5 5-5m6 10l5-5-5-5"/>
                       </svg>
                       My Transactions
                     </Link>
                     <div className="flex items-center gap-3 text-sm text-gray-700">
                       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                       </svg>
                       My Reviews
                       <span className="ml-1 bg-red-500 text-white text-xs px-1.5 rounded">NEW</span>
                     </div>
                     <div className="flex items-center justify-between text-sm text-gray-700">
                       <div className="flex items-center gap-3">
                         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                         </svg>
                         Quick Links
                       </div>
                       <ChevronDown className="w-4 h-4" />
                     </div>
                     <div className="flex items-center justify-between text-sm text-gray-700">
                       <div className="flex items-center gap-3">
                         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                         </svg>
                         Residential Packages
                       </div>
                       <ChevronDown className="w-4 h-4" />
                     </div>
                     <div className="flex items-center justify-between text-sm text-gray-700">
                       <div className="flex items-center gap-3">
                         <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                         </svg>
                         Housing Edge
                       </div>
                       <ChevronDown className="w-4 h-4" />
                     </div>

                     <Link href="/help-center" className="flex items-center gap-3 text-purple-600 text-sm">
                       <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                       </svg>
                       Visit Help Center
                     </Link>

                     {/* Download App Section */}
                     <div className="pt-4 border-t">
                       <p className="text-sm text-gray-600 mb-2">Download Housing App</p>
                       <div className="flex items-center gap-2">
                         <img src="/assets/images/app-store.png" alt="App Store" className="h-8" />
                         <img src="/assets/images/play-store.png" alt="Play Store" className="h-8" />
                         <img src="/assets/images/qr-code.png" alt="QR Code" className="h-8 w-8" />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}
           </div>
         </div>

          </div>


          {/* Navigation Items - Mobile */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center z-50  p-2 text-white font-bold"
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
      

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-full w-64 bg-black/30 backdrop-blur-lg shadow-lg z-20">
          <div className="absolute bottom-0 left-0 text-sm w-full  text-white text-center py-2">
            <Phone className="h-4 w-4 inline-block mr-2" />
            Contact us: +91 234 567-890
          </div>
          <div className="lg:hidden top-20 relative w-fit">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Album className="h-5 w-5" />
                About Us
              </Link>
              <Link
                href="/category"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Building2 className="h-5 w-5" />
                Properties
              </Link>
              <Link
                href="/market-trends"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <ChartNoAxesCombined className="h-5 w-5" />
                Market trends
              </Link>
              <Link
                href="/market-trends"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <BellIcon className="h-5 w-5" />
                Notifications
              </Link>

              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <UserCircle className="h-5 w-5" />
                Services
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Bell className="h-5 w-5" />
                Testimonials
              </Link>
              <Link
                href="/careers"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Building className="h-5 w-5" />
                Careers
              </Link>
              <Link
                href="blog/resources"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <PackageOpen className="h-5 w-5" />
                Additional Resources
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
              >
                <Flag className="h-5 w-5" />
                Help & Support
              </Link>
              {
              isLoggedIn ? (
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Dashboard
                      </Link>
                    ) : (
                      <Link
                        href="/login"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Login/Signup
                      </Link>
                    )}
                    
            </div>
          </div>
        </div>
        
      )}

      {showPopup && <Popup />}
      {showManualPopup && <ManualCityPopup />}
      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />
      <SignupPopup 
        isOpen={isSignupPopupOpen} 
        onClose={() => setIsSignupPopupOpen(false)}
        onLoginClick={() => {
          setIsSignupPopupOpen(false);
          setIsLoginPopupOpen(true);
        }}
      />
    </nav>
  );
};

export default Navbar;
