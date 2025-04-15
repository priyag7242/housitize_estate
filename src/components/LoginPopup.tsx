"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import SignupPopup from "./SignupPopup";

// Add country codes data
const countryCodes = [
  { code: "+93", country: "Afghanistan" },
  { code: "+355", country: "Albania" },
  { code: "+213", country: "Algeria" },
  { code: "+376", country: "Andorra" },
  { code: "+244", country: "Angola" },
  { code: "+1", country: "United States/Canada" },
  { code: "+91", country: "India" },
  { code: "+44", country: "United Kingdom" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+61", country: "Australia" },
  // Add more country codes as needed
].sort((a, b) => a.country.localeCompare(b.country));

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [showSignup, setShowSignup] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restore scroll position when component unmounts
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 mt-[500px] flex items-center justify-center z-50"
        onClick={onClose} // Close when clicking outside
      >
        <div 
          className="bg-white rounded-lg w-full max-w-md mx-4 relative animate-fadeIn"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          style={{
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="p-4 sm:p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Login</h2>
            <p className="text-sm text-gray-600 mt-1">
               Please login to your account
            </p>
          </div>

          {/* Login options */}
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 sm:gap-4 mb-6">
              <button
                onClick={() => setLoginMethod("email")}
                className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-sm font-medium transition-colors ${
                  loginMethod === "email"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setLoginMethod("phone")}
                className={`flex-1 py-2 px-2 sm:px-4 rounded-md text-sm font-medium transition-colors ${
                  loginMethod === "phone"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Phone Number
              </button>
            </div>

            {loginMethod === "email" ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 text-black focus:ring-purple-500"
                  />
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  Continue with Email
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <select 
                      className="w-full sm:w-28 px-3 py-2 border rounded-md text-sm focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
                      value={selectedCountryCode}
                      onChange={(e) => setSelectedCountryCode(e.target.value)}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} {country.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter phone number"
                      className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
                  Continue with Phone
                </button>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <button 
                  className="text-purple-600 font-medium hover:text-purple-700 transition-colors" 
                  onClick={() => setShowSignup(true)}
                >
                  SignUp
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignupPopup 
        isOpen={showSignup} 
        onClose={() => setShowSignup(false)} 
        onLoginClick={() => {
          setShowSignup(false);
          onClose();
        }}
      />
    </>
  );
};

export default LoginPopup;