import React, { useState } from 'react';
import { Search, Home, TrendingUp, BookOpen, UserCircle, LogIn, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-800">DEMIGOD ESTATE</span>
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/ai-search" className="text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/properties" className="text-gray-600 hover:text-gray-900">Properties</Link>
            <Link href="/market-trends" className="text-gray-600 hover:text-gray-900">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-1" />
                <span>Market trends</span>
              </div>
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-1" />
                <span>Resources</span>
              </div>
            </Link>
            <Link 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Contact us
            </Link>
            {isLoggedIn ? (
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                <UserCircle className="h-6 w-6" />
              </Link>
            ) : (
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                <LogIn className="h-6 w-6" />
              </Link>
            )}
          </div>

          {/* Navigation Items - Mobile */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/ai-search" className="text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Link>
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
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
            <Link href="/properties" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Properties</Link>
            <Link href="/market-trends" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Market trends</Link>
            <Link href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Resources</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact us</Link>
            {isLoggedIn ? (
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Dashboard</Link>
            ) : (
              <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login/Signup</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

