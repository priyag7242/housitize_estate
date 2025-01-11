"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const ManualCityPopup = ({ onClose }: { onClose: () => void }) => {
  const [search, setSearch] = useState("");

  // interface City {
  //   name: string
  //   image: string
  //   selected?: boolean
  // }

  // const cities: City[] = [
  //   { name: "Delhi NCR", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Bangalore", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Mumbai", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Hyderabad", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Ahmedabad", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Chennai", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Pune", image: "/placeholder.svg?height=400&width=400", selected: true },
  //   { name: "New Delhi", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Gurgaon", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Noida", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Ghaziabad", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Lucknow", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Jaipur", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Kolkata", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Kochi", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Nashik", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Nagpur", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Coimbatore", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Indore", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Patna", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Chandigarh", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Surat", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Chandigarh", image: "/placeholder.svg?height=400&width=400" },
  //   { name: "Ludhiana", image: "/placeholder.svg?height=400&width=400" },
  // ]

  const country = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Congo (Congo-Kinshasa)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // Group cities by first letter
  const groupedCities = country.reduce(
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
          <h2 className="text-md text-gray-800 font-semibold">
            Select your city
          </h2>
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

          {/*popular countries*/}
          {/* <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Popular cities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cities.map((city, index) => (
                <button
                  key={`${city.name}-${index}`}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      width={0}
                      height={0}
                      src={city.image}
                      alt={`${city.name} cityscape`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {city.selected && (
                <div className="absolute inset-0 bg-black/20">
                  <div className="absolute right-2 top-2 rounded-full bg-white p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                </div>
              )}
                  </div>
                  <span className="mt-2 text-sm font-medium">{city.name}</span>
                </button>
              ))}
            </div>
          </div> */}

          <div className="p-4 text-gray-800">
            {/* { Object.entries(groupedCities).map( */}
            {search &&
              Object.entries(groupedCities).map(
                ([letter, letterCities]) =>
                  letterCities.length > 0 && (
                    <div key={letter} className="mb-6">
                      {/* <h3 className="text-lg font-semibold mb-3">{letter}</h3> */}
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
