"use client";
import React, { useEffect, useState } from "react";
import { 
  User, 
  X, 
  Building2, 
  UserCircle, 
  Network, 
  Phone, 
  Info,
  LogIn,
  Heart,
  Package,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import LoginPopup from "../LoginPopup";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ 
  isOpen, 
  onClose
}) => {
  // State for login popup
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle login button click
  const handleLoginClick = () => {
    setIsLoginPopupOpen(true);
  };

  return (
    <>
      {/* Overlay - now doesn't close when clicked */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
      ></div>
      
      {/* Sidebar - removed click handler that stopped propagation */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-[30%] min-w-[320px]
          bg-white shadow-2xl z-50 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button - Only this will close the sidebar now */}
        <button 
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} strokeWidth={2} />
        </button>
        
        {/* Header with User Profile and Login Button on same line */}
        <div className="p-6 pt-12 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="text-white h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-semibold">Guest User</p>
                <p className="text-sm text-gray-500">Welcome to Housitize!</p>
              </div>
            </div>
            <button 
              onClick={handleLoginClick}
              className="flex items-center justify-center gap-1 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 transition-colors whitespace-nowrap"
            >
              <LogIn size={16} />
              Login
            </button>
          </div>
        </div>
        
        {/* Menu Items - With right arrows */}
        <div className="p-6 space-y-3">
          <p className="text-xs text-gray-400 uppercase font-medium tracking-wider mb-2">
            Menu
          </p>
          
          <Link href="/saved" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Heart size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">Saved</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
          
          <Link href="/packages" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Package size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">Packages</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
          
          <Link href="/properties" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Building2 size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">Properties</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
          
          <Link href="/services" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <UserCircle size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">Services</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
          
          <Link href="/networking" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Network size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">Networking</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
          
          <Link href="/about" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Info size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">About Us</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
          
          <Link href="/contact" 
            className="flex items-center justify-between text-gray-700 hover:text-purple-500 p-3 rounded-md hover:bg-purple-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Phone size={20} className="group-hover:text-purple-500" />
              <span className="text-base group-hover:text-purple-500">Contact Us</span>
            </div>
            <ChevronRight size={18} className="text-gray-400 group-hover:text-purple-500" />
          </Link>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-white">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} Housitize. All rights reserved.
          </p>
        </div>
      </div>

      {/* Login Popup */}
      <LoginPopup 
        isOpen={isLoginPopupOpen} 
        onClose={() => setIsLoginPopupOpen(false)} 
      />
    </>
  );
};

export default ProfileSidebar;