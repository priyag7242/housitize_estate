"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSelectedLocation } from "@/redux/selected-location/selectedLocationSlice";
import { closeManualPopup } from "@/redux/popup/popupSlice";

const ManualCityPopup = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const popularCountries: {
    name: string;
    image: string;
  }[] = [
    { name: "Argentina", image: "/assets/images/city-scapes/argentina.jpg" },
    { name: "Australia", image: "/assets/images/city-scapes/australia.jpg" },
    { name: "Brazil", image: "/assets/images/city-scapes/brazil.jpg" },
    { name: "Canada", image: "/assets/images/city-scapes/canada.jpg" },
    { name: "China", image: "/assets/images/city-scapes/china.jpg" },
    { name: "Egypt", image: "/assets/images/city-scapes/egypt.jpg" },
    { name: "France", image: "/assets/images/city-scapes/france.jpg" },
    { name: "Germany", image: "/assets/images/city-scapes/germany.jpg" },
    { name: "Greece", image: "/assets/images/city-scapes/greece.jpg" },
    { name: "India", image: "/assets/images/city-scapes/india.jpg" },
    { name: "Indonesia", image: "/assets/images/city-scapes/indonatia.jpg" },
    { name: "Italy", image: "/assets/images/city-scapes/italy.jpg" },
    { name: "Japan", image: "/assets/images/city-scapes/japan.jpg" },
    { name: "Mexico", image: "/assets/images/city-scapes/mexico.jpg" },
    {
      name: "Netherlands",
      image: "/assets/images/city-scapes/netherlands.jpg",
    },
    { name: "New Zealand", image: "/assets/images/city-scapes/newzealand.jpg" },
    { name: "Russia", image: "/assets/images/city-scapes/russia.jpg" },
    { name: "Singapore", image: "/assets/images/city-scapes/singapore.jpg" },
    { name: "South Africa", image: "/assets/images/city-scapes/greece.jpg" },
    { name: "South Korea", image: "/assets/images/city-scapes/indonatia.jpg" },
    { name: "Spain", image: "/assets/images/city-scapes/brazil.jpg" },
    { name: "Switzerland", image: "/assets/images/city-scapes/france.jpg" },
    { name: "Thailand", image: "/assets/images/city-scapes/italy.jpg" },
    { name: "Turkey", image: "/assets/images/city-scapes/singapore.jpg" },
    {
      name: "United Arab Emirates",
      image: "/assets/images/city-scapes/china.jpg",
    },
    { name: "United Kingdom", image: "/assets/images/city-scapes/canada.jpg" },
    { name: "United States", image: "/assets/images/city-scapes/greece.jpg" },
  ];

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

  const filteredPopularCountries = popularCountries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // Group countries by first letter
  const groupedCountries = country.reduce(
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

  const setLocationAndClosePopup = ({ country }: { country: string }) => {
    dispatch(setSelectedLocation(country));
    console.log(country);
    dispatch(closeManualPopup());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl h-[75vh] overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-md text-gray-800 font-semibold">
            Select your country
          </h2>
        </div>
        <div className="no-scrollbar h-[calc(75vh-72px)] overflow-y-auto">
          <div className="sticky top-0 bg-white mx-2 pt-2 z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for your country"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-gray-800 text-sm pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/*popular countries*/}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Popular Countries</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {filteredPopularCountries.map((country, index) => (
                <button
                  onClick={() =>
                    setLocationAndClosePopup({ country: country.name })
                  }
                  key={`${country.name}-${index}`}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      fill
                      src={country.image}
                      alt={`${country.name} cityscape`}
                      className="h-full w-full object-cover transition-transform duration-300"
                    />
                  </div>
                  <span className="mt-2 text-sm font-medium">
                    {country.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 text-gray-800">
            {/* {search &&
              Object.entries(groupedCities).map( */}
            {Object.entries(groupedCountries).map(
              ([letter, letterCountries]) =>
                letterCountries.length > 0 && (
                  <div key={letter} className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">{letter}</h3>
                    <div className="flex flex-wrap gap-3">
                      {letterCountries.map((country) => (
                        <button
                          key={country}
                          onClick={() => setLocationAndClosePopup({ country })}
                          className="px-4 py-1 rounded-lg hover:bg-gray-100 transition-colors border text-sm"
                        >
                          {country}
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
