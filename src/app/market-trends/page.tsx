"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import Slider from "react-slick";
import { Building2, Home, Newspaper, FileText, MapPinned } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface InsightCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const insightCards: InsightCard[] = [
  {
    title: "Transaction Prices",
    description: "Check property transaction values and many more",
    icon: <Building2 className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "About My Property",
    description: "Track prices & analyse market demands",
    icon: <Home className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "Read Latest News",
    description: "Around real estate and allied industries",
    icon: <Newspaper className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "Check Articles",
    description: "On trending topics and policy updates",
    icon: <FileText className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "About My Property",
    description: "Track prices & analyse market demands",
    icon: <Home className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "Read Latest News",
    description: "Around real estate and allied industries",
    icon: <Newspaper className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "Check Articles",
    description: "On trending topics and policy updates",
    icon: <FileText className="w-8 h-8 text-gray-500" />,
  },
];

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

const MarketTrends = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/*Hero*/}
      <div className="h-[50vh] pt-16 relative w-full bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-slate-200 absolute inset-0 bg-[radial-gradient(circle,_rgba(255,219,247,1)_0%,_rgba(182,199,186,1)_100%)]"></div>
        {/* To give the black opacity */}
        <div className="absolute inset-0 bg-black/20" />

        <MapPinned className="w-20 h-20 z-0 text-gray-600" />

        <h1 className="text-gray-600 z-0 text-4xl md:text-5xl font-bold mb-2 text-center">
          Locality Insights
        </h1>

        <p className="text-gray-600 z-0 mb-8 text-center text-sm md:text-base">
          Property Rates | Reviews | Lifestyle & more
        </p>

        <div className="w-full max-w-2xl relative">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Enter a city, locality or society"
              className="w-full px-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent shadow-sm text-gray-900 placeholder:text-gray-400"
            />
            <button className="hidden sm:flex absolute right-2 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors text-sm md:text-base">
              Search Locality Insights
            </button>
            <button className="flex sm:hidden absolute right-2 bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors text-sm md:text-base">
              Search
            </button>
          </div>
        </div>
      </div>

      {/*second div*/}
      <div className="w-full flex justify-center pb-8 sm:pb-16">
        <div className="container max-w-6xl px-4 sm:px-10 py-8 mt-12">
          <h2 className="text-2xl md:text-3xl tracking-wider font-semibold text-gray-700 mb-2">
            Select a country
          </h2>
          <p className="text-gray-600 tracking-wider">
            To view Locality insights, Price Trend, Reviews and more
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 mt-8 md:mt-12">
            {popularCountries.map((country) => (
              <Link
                key={country.name}
                href={`/country/${country.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
              >
                <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden mb-2">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={`${country.name} cityscape`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-center text-sm font-medium tracking-wider text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {country.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/*Insights & Tools*/}
      <div className="flex justify-center px-4 sm:px-10 mb-10 md:mb-20">
        <div className="max-w-6xl w-full py-12 px-4 md:px-8 lg:rounded-xl bg-[radial-gradient(circle,_rgba(255,219,247,1)_0%,_rgba(182,199,186,1)_100%)]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8">
              <div className="mb-4 sm:mb-0">
                <h2 className="text-2xl font-bold text-gray-700">
                  Insights & Tools
                </h2>
                <p className="text-gray-600 mt-1">Go from browsing to buying</p>
              </div>
              <a
                href="#"
                className="text-gray-700 rounded-md hover:text-white hover:bg-gray-700 transition duration-400 px-4 py-2 border border-gray-700  font-medium text-sm"
              >
                View all Insights
              </a>
            </div>

            <div className="relative">
              <Slider {...settings} className="flex gap-4">
                {insightCards.map((card, index) => (
                  <Link key={index} href="/market-trends" className="block">
                    <div className="bg-blue-50 rounded-lg p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        {card.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {card.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;
