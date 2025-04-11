"use client";
import React, { useEffect, useState, useRef } from "react";
import type { LucideIcon } from "lucide-react";
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

const Navbar = () => {
  const [isLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
          <div className="hidden lg:flex lg:gap-6 text-xs font-normal items-center ">
          

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

            {/* {[
              {
                href: "/",
                text: "HOME",
                title: "Home",
              },
              {
                href: "/residential",
                text: "RESIDENTIAL",
                title: "Residential",
              },
              {
                href: "/commercial",
                text: "COMMERCIAL",
                title: "Commercial",
              },
              {
                href: "/industries",
                text: "INDUSTRIES",
                title: "industries",
              },
              {
                href: "/joint-venture",
                text: "JOINT VENTURE",
                title: "Joint Venture",
              },
            ].map((link) => (
              <div key={link.text} className="relative group">
                <Link
                  key={link.text}
                  href={link.href}
                  title={link.title}
                  className={`px-4 py-2 text-xs flex justify-center items-center hover:text-slate-300  ${
                    isScrolled ? "text-gray-800 " : ""
                  } `}
                >
                  {link.text}
                  {link.text === "RESIDENTIAL" && (
                    <ChevronDown className="h-4 w-4 inline-block" />
                  )}
                  {link.text === "COMMERCIAL" && (
                    <ChevronDown className="h-4 w-4 inline-block" />
                  )}
                </Link>
                {link.text === "RESIDENTIAL" && (
                  <div className="absolute -left-[100px] w-[50vw] hidden group-hover:block">
                    <div className="grid grid-cols-2 bg-black/20 rounded-full backdrop-blur-lg gap-10 p-4 sm:grid-cols-3 md:grid-cols-5">
                      <ResidentialHover
                        href="#"
                        icon={Home}
                        title="Buy A Home"
                        tag="New"
                      />
                      <ResidentialHover
                        href="#"
                        icon={HousePlus}
                        title="Rent A Home"
                        tag="New"
                      />

                      <ResidentialHover
                        href="#"
                        icon={HousePlug}
                        title="Lease"
                      />

                      <ResidentialHover
                        href="#"
                        icon={PaintBucket}
                        title="Home Interiors"
                        tag="Sale is live"
                      />
                      <ResidentialHover
                        href="#"
                        icon={HandCoins}
                        title="Avail Home Loan"
                      />
                    </div>
                  </div>
                )}
                {link.text === "COMMERCIAL" && (
                  <div className="absolute -left-[200px] w-[50vw] hidden group-hover:block">
                    <div className="grid grid-cols-2 bg-black/20 rounded-full backdrop-blur-lg p-4 gap-10 sm:grid-cols-3 md:grid-cols-5">
                      <ResidentialHover
                        href="#"
                        icon={Home}
                        title="Buy A Commercial"
                        tag="New"
                      />
                      <ResidentialHover
                        href="#"
                        icon={HousePlus}
                        title="Rent A Commercial"
                      />

                      <ResidentialHover
                        href="#"
                        icon={HousePlug}
                        title="Lease"
                      />

                      <ResidentialHover
                        href="#"
                        icon={PaintBucket}
                        title="Interiors"
                        tag="10% off"
                      />
                      <ResidentialHover
                        href="#"
                        icon={HandCoins}
                        title="Avail Commercial Loan"
                        tag="lowest rate"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))} */}
          </div>

          {/* PG/Real Estate Toggle Button */}
              <div className="ml-52">
                <ToggleButton leftOption="PG" rightOption="Real Estate" initialState="right" onChange={handleToggleChange} />
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
               <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-50">
                 {/* Profile header */}
                 <div className="px-4 py-3 border-b">
                   <div className="flex items-center">
                     <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                       P
                     </div>
                     <div className="flex-grow">
                       <div className="flex justify-between items-center">
                         <span className="font-medium text-gray-800">Priya Goyal</span>
                         <button className="text-purple-600 text-xs">Edit</button>
                       </div>
                       <div className="text-sm text-gray-500">igoyal.priya@gmail.com</div>
                     </div>
                   </div>
                   <button className="w-full bg-purple-600 text-white rounded-md py-2 mt-3 text-sm font-medium">
                     Upgrade to Premium
                   </button>
                 </div>
                 
                 {/* Activity section */}
                 <div className="border-b pb-2">
                   <div className="px-4 pt-3 pb-2 flex justify-between items-center">
                     <span className="text-gray-700 text-sm">My Activity</span>
                     <button className="text-purple-600 text-xs">View All</button>
                   </div>
                   
                   <div className="grid grid-cols-2 px-4">
                     <div className="py-2 text-center">
                       <div className="text-purple-600 font-medium">0</div>
                       <div className="text-gray-500 text-xs">Contacted</div>
                     </div>
                     <div className="py-2 text-center">
                       <div className="text-purple-600 font-medium">1</div>
                       <div className="text-gray-500 text-xs">Viewed</div>
                     </div>
                     <div className="py-2 text-center">
                       <div className="text-purple-600 font-medium">0</div>
                       <div className="text-gray-500 text-xs">Saved</div>
                     </div>
                     <div className="py-2 text-center">
                       <div className="text-purple-600 font-medium">0</div>
                       <div className="text-gray-500 text-xs">Searches</div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Menu options */}
                 <div>
                   <div className="px-4 py-2 flex justify-between items-center hover:bg-gray-50">
                     <span className="text-gray-700">Post Property</span>
                     <span className="text-purple-600 text-xs font-medium">FREE</span>
                   </div>
                   
                   <Link href="/my-properties">
                     <div className="px-4 py-2 text-gray-700 hover:bg-gray-50">My Properties</div>
                   </Link>
                   
                   <Link href="/shortlisted">
                     <div className="px-4 py-2 text-gray-700 hover:bg-gray-50">Shortlisted</div>
                   </Link>
                   
                   <Link href="/contacted">
                     <div className="px-4 py-2 text-gray-700 hover:bg-gray-50">Contacted</div>
                   </Link>
                   
                   <Link href="/account-settings">
                     <div className="px-4 py-2 text-gray-700 hover:bg-gray-50">Account Settings</div>
                   </Link>
                   
                   <Link href="/help-center">
                     <div className="px-4 py-2 text-gray-700 hover:bg-gray-50">Help Center</div>
                   </Link>
                   
                   <div className="border-t mt-1">
                     <button className="px-4 py-2 text-red-500 hover:bg-gray-50 w-full text-left">
                       Log Out
                     </button>
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
    </nav>
  );
};

interface residentialHoverProps {
  icon: LucideIcon;
  title: string;
  tag?: string;
  href: string;
}

function ResidentialHover({
  icon: Icon,
  title,
  tag,
  href,
}: residentialHoverProps) {
  return (
    <a
      href={href}
      className="group my-2 py-5 relative flex flex-col items-center justify-center transition-colors"
    >
      {tag && (
        <span className="absolute -top-2 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-900">
          {tag}
        </span>
      )}
      <div className="mb-2 flex h-6 w-6 items-center justify-center rounded-lg bg-black/10 text-white  ">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-xs font-medium w-full text-center text-white ">
        {title}
      </span>
    </a>
  );
}

export default Navbar;
