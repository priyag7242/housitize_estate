'use client'
import React, { useEffect, useState } from "react";
import { Search, UserCircle, LogIn, Menu, UserRound } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      }`}
    >
      <div className="max-w-8xl lg:mx-20 px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Navigation Items Right side - Desktop */}
          <div className="hidden lg:flex lg:gap-6 text-xs font-normal items-center ">
          <div className="flex items-center px-4 py-2 cursor-pointer space-x-2">
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-gray-800 " : ""}`}
              />
              <div className={`${isScrolled ? "text-gray-800 " : ""}`}>
              <UserRound
                className={`h-6 w-6 ${isScrolled ? "text-gray-800 " : ""}`}
              />
              </div>
            </div>
            {[
              { href: "/about", text: "ABOUT" },
              { href: "/category", text: "PROPERTIES" },
              { href: "/market-trends", text: "MARKET TRENDS" },
              { href: "/resources", text: "PUBLICATIONS" },
              { href: "/contact", text: "CONTACT US" },
            ].map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className={`px-4 py-2 hover:text-slate-300 ${
                  isScrolled ? "text-gray-800 " : ""
                } transition-transform duration-300 transform hover:-translate-y-1`}
              >
                {link.text}
              </Link>
            ))}

            

            {/*User Account/Dashboard Icon*/}
            {/* {isLoggedIn ? (
              <Link
                href="/dashboard"
                className={` hover:text-gray-900 ${
                  isScrolled ? "text-gray-800  " : ""
                }`}
              >
                <UserCircle className="h-6 w-6" />
              </Link>
            ) : (
              <Link
                href="/login"
                className={` hover:text-gray-900 ${
                  isScrolled ? "text-gray-800  " : ""
                }`}
              >
                <LogIn className="h-6 w-6" />
              </Link>
            )} */}
          </div>
          <Link 
            href="/"
            className={`divide-x-2 flex items-center gap-10 ${
              isScrolled ? "text-gray-700 " : ""
            }`}
          >

            <div
              className={`text-sm px-7 ${isScrolled ? "text-gray-700 " : ""}`}
            >
              INDIA
            </div>
            <div className="text-xs font-bold ">
              <div>DEMIGOD</div>
              <div className="">REAL</div>
              <div className="">ESTATE</div>
            </div>
          </Link>


          {/* Navigation Items - Mobile */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Properties
            </Link>
            <Link
              href="/market-trends"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Market trends
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contact us
            </Link>
            {isLoggedIn ? (
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
      )}
    </nav>
  );
};

export default Navbar;
