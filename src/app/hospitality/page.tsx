"use client";

import SiteFilters from "@/components/SiteFilters";
import React from "react";

const GuestFav = [
  {
    title: "Entire villa in Goa, India",
    location: "Goa, India",
    price: "₹5,200 night",
    rating: 4.96,
    image: "https://ext.same-assets.com/3017561144/2244626118.jpeg",
  },
  {
    title: "Boutique stay with pool, Udaipur",
    location: "Udaipur, India",
    price: "₹4,000 night",
    rating: 4.82,
    image: "https://ext.same-assets.com/3017561144/1634671963.jpeg",
  },
  {
    title: "Luxury villa in Lonavala",
    location: "Lonavala, India",
    price: "₹6,100 night",
    rating: 4.9,
    image: "https://ext.same-assets.com/3017561144/679924008.jpeg",
  },
  {
    title: "Heritage haveli, Jaipur",
    location: "Jaipur, India",
    price: "₹3,700 night",
    rating: 4.83,
    image: "https://ext.same-assets.com/3017561144/4203559795.jpeg",
  },
  {
    title: "Hilltop paradise, Ooty",
    location: "Ooty, India",
    price: "₹2,900 night",
    rating: 4.77,
    image: "https://ext.same-assets.com/3017561144/1038771835.jpeg",
  },
  {
    title: "Cabin by the river, Manali",
    location: "Manali, India",
    price: "₹3,500 night",
    rating: 4.91,
    image: "https://ext.same-assets.com/3017561144/717477816.jpeg",
  },
];

function LoaderCard() {
  return (
    <div className="animate-pulse rounded-2xl bg-gray-200 h-[320px] w-full" />
  );
}

function ListingCard({ image, title, location, price, rating }: any) {
  return (
    <div className="group cursor-pointer rounded-2xl shadow-sm bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full px-2 py-[2px] text-xs font-semibold shadow-sm">
          ★ {rating}
        </div>
      </div>
      <div className="p-3 flex-1 flex flex-col gap-1">
        <div className="font-semibold truncate" title={title}>
          {title}
        </div>
        <div className="text-xs text-airbnb-gray truncate">{location}</div>
        <div className="text-sm pt-1">
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className=" inset-x-0 z-40 bg-[#fbfbfb]  border-gray-200 flex items-center justify-center px-6 pt-16 py-3 md:px-12 ">
      {/* Center search bar, mock only */}
      <div className="hidden md:flex flex-1 mx-6 max-w-3xl mt-4">
  <div className="flex flex-1 bg-white rounded-full border shadow px-6 py-3 items-center hover:shadow-md transition-shadow">
    
    {/* Where */}
    <div className="flex flex-col items-start justify-center flex-1 border-r border-gray-200 pr-4">
      <span className="font-medium text-sm">Where</span>
      <p className="text-sm text-gray-500">Search destination</p>
    </div>

    {/* Check In */}
    <div className="flex flex-col items-start justify-center flex-1 border-r border-gray-200 px-4">
      <span className="font-medium text-sm">Check In</span>
      <p className="text-sm text-gray-500">Select date</p>
    </div>

    {/* Check Out */}
    <div className="flex flex-col items-start justify-center flex-1 border-r border-gray-200 px-4">
      <span className="font-medium text-sm">Check Out</span>
      <p className="text-sm text-gray-500">Select date</p>
    </div>

    {/* Who */}
    <div className="flex flex-col items-start justify-center flex-1 px-4">
      <span className="font-medium text-sm">Who</span>
      <p className="text-sm text-gray-500">Add guest</p>
    </div>

    {/* Search Icon */}
    <div className="ml-4 text-red-500">
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke="#FF5A5F" strokeWidth="2" />
        <path
          d="M21 21L17 17"
          stroke="#FF5A5F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
</div>

      {/* User menu */}
      {/* <div className="flex items-center gap-2">
        <button className="hidden md:inline px-3 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">Become a Host</button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 12.7c2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4z" stroke="#222" strokeWidth="2"/><path d="M19.14 19.14A7.963 7.963 0 0012 16c-1.98 0-3.8.72-5.19 1.91" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <button className="border rounded-full flex items-center gap-2 px-4 py-2 hover:shadow-sm transition-shadow">
          <svg width="18" height="18" fill="none" viewBox="0 0 32 32"><path d="M16 14a4 4 0 100-8 4 4 0 000 8z" fill="#888"/><path d="M16 2.75c-6.186 0-11.25 5.064-11.25 11.25S9.814 25.25 16 25.25 27.25 20.186 27.25 14 22.186 2.75 16 2.75zM16 27c-7.18 0-13-5.485-13-12.25S8.82 2.5 16 2.5 29 7.985 29 14.75 23.18 27 16 27z" fill="#888"/></svg>
          <span className="text-airbnb-black font-semibold text-sm">Profile</span>
        </button>
      </div> */}
    </header>
  );
}

function Banner() {
  return (
    <section className="pt-8 px-4 md:px-0 w-full flex justify-center">
      <div className="rounded-3xl md:rounded-[40px] overflow-hidden w-full max-w-7xl relative">
        <img
          src="https://ext.same-assets.com/3017561144/2244626118.jpeg"
          alt="Airbnb Hero"
          className="w-full h-[240px] md:h-[380px] object-cover object-center transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center p-6 md:p-12">
          <h1 className="font-bold text-3xl md:text-5xl text-white drop-shadow-lg">
            Find your next stay
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium mt-2 drop-shadow">
            Discover amazing places to stay with Housitize
          </p>
        </div>
      </div>
    </section>
  );
}

function ListingsSection() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-0 mt-10 mb-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 px-1">
        Guest Favourites in India
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {GuestFav.map((l, i) => (
          <ListingCard key={i} {...l} />
        ))}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-sans ">
      <Header />
      <SiteFilters />
      <Banner />
      <ListingsSection />
    </div>
  );
}
