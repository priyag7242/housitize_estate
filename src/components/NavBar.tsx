"use client";
import React, { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  UserCircle,
  Menu,
  X,
  Bell,
  BellIcon,
  Flag,
  PackageOpen,
  ChartNoAxesCombined,
  Building2,
  Album,
  Building,
  Phone,
  Home,
  PaintBucket,
  ChevronDown,
  HandCoins,
  HousePlus,
  HousePlug,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import Popup from "./Popup";
import ManualCityPopup from "./ManualCityPopup";
import { openPopup } from "@/redux/popup/popupSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  const selectedLocation = useSelector(
    (state: RootState) => state.selectedLocation.selectedLocation
  );
  const showPopup = useSelector((state: RootState) => state.popup.showPopup);
  const showManualPopup = useSelector(
    (state: RootState) => state.popup.showManualPopup
  );

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

  return (
    <nav
      className={`fixed w-screen top-0 text-white  z-50 bg-tranparent transition-all duration-300 ${
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center pl-4 py-2 cursor-pointer space-x-2"
            >
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-gray-800 " : ""}`}
              />
            </button>

            {/* Desktop menu, show/hide based on menu state */}
            {isMenuOpen && (
              <div className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-black/50 backdrop-blur-lg shadow-lg z-20">
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

            {[
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
            ))}
          </div>

          {/* Logo */}
          <div
            className={`flex items-center gap-10 ${
              isScrolled ? "text-gray-700 " : ""
            }`}
          >
            <button
              onClick={() => dispatch(openPopup())}
              className={`text-sm  px-2 py-1 rounded-sm flex items-center justify-center w-fit uppercase ${
                isScrolled
                  ? "text-gray-700 border border-gray-700"
                  : "border border-white"
              }`}
            >
              {selectedLocation || "Mars"}
              <ChevronDown className="h-4 w-4" />
            </button>
            {showPopup && <Popup />}
            {showManualPopup && <ManualCityPopup />}

            <div className="h-12 border" />
            <Link href="/" className="text-xs font-bold ">
              {/* <div>DEMIGOD</div>
              <div className="">REAL</div>
              <div className="">ESTATE</div> */}
              <Image
                src="/assets/images/demigod-logo.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </Link>
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
