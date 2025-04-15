"use client";
import React, { useState, useEffect } from "react";
import { X, Eye, EyeOff } from "lucide-react";

// Reuse the same country codes from LoginPopup
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
].sort((a, b) => a.country.localeCompare(b.country));



interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 mt-[500px] flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-md mx-4 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
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
          <h2 className="text-xl font-semibold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign up to get started with Housitize
          </p>
        </div>

        {/* Signup Form */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Email Field */}
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

          {/* Phone Number Field */}
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

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
            Create Account
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button 
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors" 
                onClick={() => {
                    
                
                  }}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
