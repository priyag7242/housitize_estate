"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Users,
  Key,
  MapPin,
  Building2,
  ArrowRight,
  Building,
  BuildingIcon as Building4,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Marquee from "react-fast-marquee";

const steps = [
  {
    icon: Home,
    title: "Find Real Estate",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    icon: Users,
    title: "Meet Relator",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    icon: Key,
    title: "Take The Keys",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
];

const categories = [
  {
    icon: Home,
    title: "Town House",
    properties: 2,
  },
  {
    icon: Building2,
    title: "Modern Villa",
    properties: 10,
  },
  {
    icon: Building,
    title: "Apartment",
    properties: 3,
  },
  {
    icon: Building4,
    title: "Office",
    properties: 3,
  },
  {
    icon: Home,
    title: "Single Family",
    properties: 5,
  },
  {
    icon: Store,
    title: "Shop House",
    properties: 2,
  },
];

const properties = [
  {
    id: 1,
    title: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    image: "/assets/images/featured-listing1.jpg",
    status: "FOR SALE",
    beds: 4,
    baths: 2,
    sqft: 450,
    price: 280000,
  },
  {
    id: 2,
    title: "North Dillard Street",
    address: "4330 Bell Shoals Rd",
    image: "/assets/images/featured-listing2.jpg",
    status: "FOR RENT",
    beds: 4,
    baths: 2,
    sqft: 400,
    price: 250,
  },
  {
    id: 3,
    title: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
    image: "/assets/images/featured-listing3.jpg",
    status: "FOR SALE",
    featured: true,
    beds: 4,
    baths: 2,
    sqft: 450,
    price: 180000,
  },
];
const companiesMarquee = [
  {
    name: "Nestle",
    logo: "/assets/images/nestle-logo.png",
  },
  {
    name: "Nissan",
    logo: "/assets/images/nissan-logo.webp",
  },
  {
    name: "Mercedes-Benz",
    logo: "/assets/images/mercedes-logo.webp",
  },
  {
    name: "IBM",
    logo: "/assets/images/ibm-logo.png",
  },
  {
    name: "Deloitte",
    logo: "/assets/images/demigod-logo.webp",
  },
  {
    name: "Apple",
    logo: "/assets/images/apple-logo.webp",
  },
];
const countries = [
  {
    name: "United States",
    properties: 8,
    image: "/assets/images/japan.jpg",
  },
  {
    name: "France",
    properties: 2,
    image: "/assets/images/france.jpg",
  },
  {
    name: "Japan",
    properties: 1,
    image: "/assets/images/japan.jpg",
  },
  {
    name: "Australia",
    properties: 7,
    image: "/assets/images/spain.jpg",
  },
  {
    name: "Italy",
    properties: 3,
    image: "/assets/images/italy.jpg",
  },
];
const team = [
  {
    name: "Tony Stark",
    role: "Service Support",
    image: "/assets/images/ironman.jpeg",
  },
  {
    name: "Thor",
    role: "Marketing",
    image: "/assets/images/thor.jpg",
  },
  {
    name: "Loki Odinson",
    role: "Designer",
    image: "/assets/images/loki.jpeg",
  },
  {
    name: "Steve Rogers",
    role: "Marketing",
    image: "/assets/images/captain-america.jpg",
  },
];

const House = () => {
  const [listingType, setListingType] = useState<"sale" | "rent">("sale");

  const featuredCategorySettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* HERO */}
      <div className="relative min-h-[85vh] flex items-center justify-start w-full overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-[#323024] to-black z-0" />

        {/* Right side image */}
        <div
          className="absolute right-0 top-0 lg:mt-28 h-full w-full lg:w-[45%]"
          style={{
            backgroundImage: `url(${"/assets/images/house-hero.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 lg:bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full lg:ml-24 ml-8 mt-10 sm:mt-0 w-full max-w-3xl lg:max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="lg:w-[55%]">
            {/* Header Text */}
            <div className="space-y-4">
              <p className="text-xs font-medium text-gray-200 tracking-wider border border-white w-fit px-3 rounded-sm py-1">
                LET US GUIDE YOUR HOME
              </p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Find Your <span className="text-amber-400">Dream</span> Home.
              </h1>
              <p className="text-sm text-gray-300 sm:text-base">
                From as low as $10 per day with limited time offer discounts
              </p>
            </div>

            {/* Sale/Rent Toggle */}
            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => setListingType("sale")}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors sm:text-base
                ${
                  listingType === "sale"
                    ? "border-amber-400 text-white"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                Sale
              </button>
              <button
                onClick={() => setListingType("rent")}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors sm:text-base
                ${
                  listingType === "rent"
                    ? "border-amber-400 text-white"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Search Section */}
          <div className="mt-8">
            <div className="flex flex-col gap-4 bg-white py-3 px-6 shadow-lg sm:flex-row sm:items-center">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter Keyword"
                  className="h-12 border-0 text-base shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="w-full sm:w-28">
                <Select>
                  <SelectTrigger className="h-12 border-0 text-base shadow-none focus:ring-0">
                    <SelectValue placeholder="All Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="h-10 rounded-none border-gray-200"
                >
                  Filter
                </Button>
                <Button className="h-10 bg-amber-400 px-8 rounded-none text-base font-semibold text-black/80 hover:bg-amber-500">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Steps*/}
      <section className="py-16 flex justify-center md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It works? Find a perfect home
            </h2>
            <p className="mb-16 text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100">
                  <step.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Featured Categories*/}
      <section className="py-16 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Featured Categories
              </h2>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet</p>
            </div>
            <Link
              href="/categories"
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              View All Categories
              <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="relative px-4">
            <Slider
              {...featuredCategorySettings}
              className="featured-categories-slider -mx-4"
            >
              {categories.map((category, index) => (
                <div key={index} className="px-4">
                  <Card className="transition-shadow hover:shadow-lg">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="mb-4 rounded-full bg-gray-100 p-3">
                        <category.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <h3 className="mb-1 text-sm font-semibold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.properties} Properties
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/*Our best deals*/}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              Discover Our Best Deals
            </h2>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet</p>
          </div>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
          >
            View All Properties
            <span className="inline-block">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={300}
                  className="w-full h-[240px] object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-emerald-700 rounded-full">
                    {property.status}
                  </span>
                  {property.featured && (
                    <span className="px-3 py-1 text-xs font-semibold text-gray-900 bg-amber-400 rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{property.address}</span>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="flex gap-4 text-gray-600">
                    <div className="flex items-center">
                      <span className="font-semibold">{property.beds}</span>
                      <span className="ml-1">bed</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">{property.baths}</span>
                      <span className="ml-1">bath</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold">{property.sqft}</span>
                      <span className="ml-1">sqft</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-gray-900">
                      $
                      {property.status === "FOR RENT"
                        ? `${property.price}/mo`
                        : property.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Take a look at our Numbers*/}
      <div className="flex justify-center items-center w-full">
        <div className="bg-[#E9C46A] rounded-xl max-w-7xl  w-full m-4 md:m-24 p-8 md:px-12 md:py-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            {/*left content*/}
            <div className="space-y-2 mb-6 sm:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Take a look at our numbers
              </h2>
              <p className="text-sm md:text-base text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            {/*right content*/}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-black">
                  99%
                </div>
                <p className="text-sm text-black/80">Customer satisfaction</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-black">
                  50M+
                </div>
                <p className="text-sm text-black/80">In property sales</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-black">
                  2,600+
                </div>
                <p className="text-sm text-black/80">Successful sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Find Properties in these Countries*/}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              Find Properties in These Countries
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Link
            href="/cities"
            className="group text-gray-600 hover:text-gray-700 flex items-center"
          >
            View All Countries
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition duration-300 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 sm:col-span-2 lg:row-span-2 lg:col-span-1 gap-4">
            {/* First card - New York */}
            <div className="relative rounded-2xl overflow-hidden h-full">
              <Image
                src={countries[0].image}
                alt={`${countries[0].name} cityscape`}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="text-sm mb-1">
                  {countries[0].properties} Properties
                </p>
                <h2 className="text-xl font-semibold">{countries[0].name}</h2>
              </div>
            </div>
          </div>

          {/* Rest of the cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:col-span-2 lg:col-span-2 gap-4">
            {countries.slice(1).map((city) => (
              <div
                key={city.name}
                className="relative rounded-2xl overflow-hidden"
              >
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={`${city.name} cityscape`}
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm mb-1">
                    {city.properties}{" "}
                    {city.properties === 1 ? "Property" : "Properties"}
                  </p>
                  <h2 className="text-xl font-semibold">{city.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Logo Marquee*/}
      <div className="w-full bg-white flex flex-col justify-center items-center my-16">
        <p className="mb-4 text-sm text-gray-700">
          Thousands of world&apos;s leading companies trust Demigod
        </p>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={false}
          className="[&>*]:mx-auto bg-blue-50  py-5"
        >
          <div className="flex items-center justify-center gap-16 px-8">
            {companiesMarquee.map((company) => (
              <Image
                key={company.name}
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={40}
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
            {companiesMarquee.map((company) => (
              <Image
                key={company.name}
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={40}
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/*Team*/}
      <section className="py-12 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">
            Meet Our Team Of Experts
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl">
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/*Why you should work with us*/}
      <section className="grid lg:grid-cols-2 mt-20">
        {/* Left Image Section */}
        <div className="relative h-[400px] lg:h-full">
          <Image
            fill
            src="/assets/images/living-room-house.jpg"
            alt="Modern interior design"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content Section */}
        <div className="bg-[#FDF8F7] p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              Why You Should Work With Us
            </h2>

            <p className="text-gray-600 mb-12">
              We provide exceptional service and support to help you find your
              dream home. Our team of experts is dedicated to ensuring a smooth
              and successful real estate experience, whether you&apos;re buying,
              selling, or renting. With a proven track record and trusted by
              thousands, we offer personalized solutions tailored to your needs.
            </p>

            <div className="grid gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Buy or Rent Homes
                </h3>
                <p className="text-gray-600">
                  We sell your home at the best market price and very quickly as
                  well.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Trusted by Thousands
                </h3>
                <p className="text-gray-600">
                  We offer you free consultancy to get a loan for your new home.
                </p>
              </div>
            </div>

            <button className="group inline-flex items-center px-6 py-3 bg-[#E9D7B7] text-black rounded-full hover:bg-[#dcc59f] transition-colors">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <section className="w-full max-w-3xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Have More Question?</h2>
          <p className="text-muted-foreground">
            Find answers to common questions below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              What methods of payments are supported?
            </AccordionTrigger>
            <AccordionContent>
              We support various payment methods including credit cards, debit
              cards, PayPal, and bank transfers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Can I cancel at anytime?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time. Your access
              will continue until the end of your current billing period.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How do I get a receipt for my purchase?
            </AccordionTrigger>
            <AccordionContent>
              Receipts are automatically sent to your registered email address
              immediately after purchase. You can also access them from your
              account dashboard.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              Which license do I need?
            </AccordionTrigger>
            <AccordionContent>
              The license you need depends on your usage. We offer personal,
              business, and enterprise licenses. Contact our sales team for
              detailed information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              How do I get access to a theme I purchased?
            </AccordionTrigger>
            <AccordionContent>
              After purchase, you&apos;ll receive an email with download
              instructions. You can also access your purchased themes from your
              account dashboard.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default House;
