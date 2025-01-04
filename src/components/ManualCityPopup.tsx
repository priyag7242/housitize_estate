"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";

const ManualCityPopup = ({ onClose }: { onClose: () => void }) => {
  const [search, setSearch] = useState('');

  const cities = [
    "Agartala",
    "Ahmednagar",
    "Ajmer",
    "Akola",
    "Alappuzha",
    "Alibaug",
    "Aligarh",
    "Allahabad",
    "Alwar",
    "Ambala",
    "Ambedkar Nagar",
    "Ambikapur",
    "Amravati",
    "Amreli",
    "Amritsar",
    "Anand",
    "Arrah",
    "Asansol",
    "Aurangabad",
    "Azamgarh",
    "Bahadurgarh",
    "Balasore",
    "Ballia",
    "Banda",
    "Barabanki",
    "Baramati",
    "Bareilly",
    "Basti",
    "Bathinda",
    "Beawar",
    "Beed",
    "Belgaum",
    "Berhampur",
    "Bhagalpur",
    "Bharatpur",
    "Bharuch",
    "Bhavnagar",
    "Bhilai",
    "Bhilwara",
    "Bhiwani",
    "Bhopal",
    "Bhubaneswar",
    "Bhuj",
    "Bijapur",
    "Bikaner",
    "Bilaspur",
    "Bokaro",
    "Bulandshahar",
    "Buldana",
    "Burdwan",
    "Burhanpur",
    "Calicut",
    "Chalakudy",
    "Chandrapur",
    "Chengalpattu",
    "Chhindwara",
    "Chitradurga",
    "Cuddalore",
    "Cuttack",
    "Dahod",
    "Darbhanga",
    "Davangere",
    "Deesa",
    "Dehradun",
    "Dewas",
    "Dhanbad",
    "Dharwad",
    "Dhule",
    "Dibrugarh",
    "Dimapur",
    "Dindigul",
    "Durgapur",
    "Erode",
    "Etawah",
    "Faizabad",
    "Faridabad",
    "Firozabad",
    "Gandhidham",
    "Gandhinagar",
    "Gaya",
    "Ghazipur",
    "Goa",
    "Godhra",
    "Gondal",
    "Gondia",
    "Gorakhpur",
    "Gulbarga",
    "Guna",
    "Guntur",
    "Gurdaspur",
    "Guruvayur",
    "Guwahati",
    "Gwalior",
    "Hajipur",
    "Haldia",
    "Haldwani",
    "Hanumangarh",
    "Hapur",
    "Hardoi",
    "Haridwar",
    "Hassan",
    "Hathras",
    "Himatnagar",
    "Hisar",
    "Hooghly",
    "Hosapete",
    "Hoshiarpur",
    "Hosur",
    "Howrah",
    "Hubli",
    "Idukki",
    "Itanagar",
    "Jabalpur",
    "jaipur",
    "Jalandhar",
    "Jalgaon",
    "Jalna",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jaunpur",
    "Jhajjar",
    "Jhansi",
    "Jhunjhunu",
    "Jind",
    "Jodhpur",
    "Jorhat",
    "Junagadh",
    "Kakinada",
    "Kalol",
    "Kannur",
    "Kanpur",
    "Karad",
    "Karimnagar",
    "Karnal",
    "Kasaragod",
    "Kashipur",
    "Katni",
    "Kayamkulam",
    "Khammam",
    "Khandwa",
    "Kharagpur",
    "Khopoli",
    "Kohima",
    "Kolhapur",
    "Kollam",
    "Korba",
    "Kota",
    "Kottayam",
    "Kotturu",
    "Kurukshetra",
    "Latur",
    "Madurai",
    "Malappuram",
    "Malda",
    "Malegaon",
    "Mandi",
    "Mandsaur",
    "Mandya",
    "Mangalore",
    "Mathura",
    "Meerut",
    "Mehsana",
    "Mirzapur",
    "Mohali",
    "Moradabad",
    "Morbi",
    "Muvattupuzha",
    "Muzaffarnagar",
    "Muzaffarpur",
    "Mysore",
    "Nadiad",
    "Nagaon",
    "Nagercoil",
    "Namakkal",
    "Nanded",
    "Navsari",
    "Nellore",
    "North 24 Parganas",
    "Osmanabad",
    "Palakkad",
    "Palanpur",
    "Palghar",
    "Pali",
    "Palwal",
    "Panchkula",
    "Panchmahal",
    "Panipat",
    "Parassala",
    "Patna",
    "Pathanamthitta",
    "Pathankot",
    "Patiala",
    "Pilibhit",
    "Pollachi",
    "Pondicherry",
    "Porbander",
    "Pratapgarh",
    "Puri",
    "Purnea",
    "Raibareli",
    "Raichur",
    "Raipur",
    "Rajahmundry",
    "Rajnandgaon",
    "Rajsamand",
    "Rampur",
    "Ranchi",
    "Ranipet",
    "Ratlam",
    "Rewa",
    "Rewari",
    "Rohtak",
    "Rourkela",
    "Rudrapur",
    "Sagar",
    "Saharanpur",
    "Salem",
    "Samastipur",
    "Sambalpur",
    "Sangli",
    "Sangrur",
    "Satara",
    "Satna",
    "Shahjahanpur",
    "Shillong",
    "Shimla",
    "Shimoga",
    "Shrirampur",
    "Sikar",
    "Siliguri",
    "Singrauli",
    "Sirsa",
    "Sitapur",
    "Siwan",
    "Solan",
    "Solapur",
    "Sonipat",
    "Sriganganagar",
    "Srinagar",
    "Surendranagar",
    "Thanjavur",
    "Thodupuzha",
    "Thrissur",
    "Tinsukia",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupati",
    "Tiruppur",
    "Tirur",
    "Trivandrum",
    "Tumkur",
    "Tuticorin",
    "Udaipur",
    "Udupi",
    "Ujjain",
    "Unnao",
    "Vadakara",
    "Valsad",
    "Vapi",
    "Varanasi",
    "Vellore",
    "Veraval",
    "Vijayawada",
    "Villupuram",
    "Visakhapatnam",
    "Warangal",
    "Wardha",
    "Yavatmal",
    "Zirakpur",
  ];

  // Group cities by first letter
  const groupedCities = cities.reduce(
    (acc: { [key: string]: string[] }, city) => {
      const firstLetter = city[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      // if (search && city.toLowerCase().includes(search.toLowerCase())) {
      if (city.toLowerCase().includes(search.toLowerCase())) {
        acc[firstLetter].push(city);
      }
      return acc;
    },
    {}
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl h-[75vh] overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-md text-gray-800 font-semibold">Select your city</h2>
        </div>
        <div className="no-scrollbar h-[calc(75vh-72px)] overflow-y-auto">
          <div className="sticky top-0 bg-white p-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for your city"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-gray-800 text-sm pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="p-4 text-gray-800">
            {/* {search && Object.entries(groupedCities).map( */}
            { Object.entries(groupedCities).map(
              ([letter, letterCities]) =>
                letterCities.length > 0 && (
                  <div key={letter} className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">{letter}</h3>
                    <div className="flex flex-wrap gap-3">
                      {letterCities.map((city) => (
                        <button
                          key={city}
                          onClick={() => onClose()}
                          className="px-4 py-1 rounded-lg hover:bg-gray-100 transition-colors border text-sm"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualCityPopup;
