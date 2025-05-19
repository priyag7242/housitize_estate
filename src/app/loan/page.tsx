"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Building2, Car, Banknote, FileText, Key } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const carouselContent = [
  {
    bgImage: "/assets/images/loan-hero.jpg",
    leftImage: "/assets/images/loan-compare.webp",
    heading: "Compare and Choose",
    desc: "One place to Compare offers from all the best banks",
  },
  {
    bgImage: "/assets/images/loan-hero.jpg",
    leftImage: "/assets/images/loan-emi.webp",
    heading: "Calculate your EMI",
    desc: "Use the EMI calculator to calculate your monthly EMI",
  },
  {
    bgImage: "/assets/images/loan-hero.jpg",
    leftImage: "/assets/images/loan-offer.webp",
    heading: "Best offers",
    desc: "Lowest Interest rates",
  },
];
const Loan = () => {
  const slider = useRef<Slider | null>(null);

  const heroSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero */}
      <div className="w-full relative overflow-hidden">
        <Card className="bg-white absolute right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-[100px] lg:right-[150px]  xl:right-[200px] top-1/2 -translate-y-2/3 sm:-translate-y-1/2  z-10 w-[300px] lg:w-[400px] h-fit pt-2 px-4 shadow-none">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Enter the loan details
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 space-y-6">
            <div className="space-y-4">
              <Select>
                <SelectTrigger className="w-full text-gray-400 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-gray-400 focus:ring-0">
                  <SelectValue placeholder="Select Property Amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100000">₹1,00,000</SelectItem>
                  <SelectItem value="500000">₹5,00,000</SelectItem>
                  <SelectItem value="1000000">₹10,00,000</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full text-gray-400 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-gray-400 focus:ring-0">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="text"
                placeholder="Pin code"
                className="w-full text-gray-400 border-t-0 border-x-0 border-b border-gray-200 rounded-none focus:border-none px-4"
              />

              <div className="space-y-3">
                <Label className="text-gray-900 font-normal">
                  Property Identified
                </Label>
                <RadioGroup defaultValue="no" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="yes"
                      id="yes"
                      className="border-2 border-gray-300"
                    />
                    <Label htmlFor="yes" className="font-normal">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="no"
                      id="no"
                      className="border-2 border-gray-300"
                    />
                    <Label htmlFor="no" className="font-normal">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button className="w-fit bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-10 mt-2 py-6">
              Submit
            </Button>
          </CardContent>
        </Card>
        <div className="relative h-screen w-full">
          <Slider
            ref={slider}
            {...heroSettings}
            className="absolute inset-0 z-0"
          >
            {carouselContent.map((item, index) => (
              <div key={index} className="relative w-full h-screen">
                <Image
                  fill
                  src={item.bgImage}
                  alt="Hero"
                  className="w-full h-full absolute inset-0 object-cover"
                />
                {/* To give the black opacity */}
                <div className="absolute inset-0 bg-black/30" />

                {/* left content */}
                <div className="absolute ml-8 xl:ml-56 flex items-end pb-[70px] sm:pb-24 sm:items-center justify-center h-full z-10">
                  <div className="h-fit">
                    <Image
                      src={item.leftImage}
                      alt="Left Image"
                      priority
                      width={384}
                      height={384}
                      quality={100}
                      className="w-96 h-96 hidden sm:block object-cover mb-8"
                    />
                    <div className="w-full text-start">
                      <h1 className="text-white mb-3 text-4xl font-bold">
                        {item.heading}
                      </h1>
                      <p className="text-white text-lg">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Menu */}
          <div className="w-full absolute px-4 bottom-0 flex justify-center items-center gap-16 border-b h-16 border-gray-200 bg-black/30 backdrop-blur-lg">
            <div className="tracking-wider space-x-8 flex justify-center">
              <a
                href="#"
                className="text-gray- text-white hover:text-gray-300 text-lg font-medium"
              >
                Bank Information
              </a>
              <a
                href="#"
                className="text-gray- text-white hover:text-gray-300 text-lg font-medium"
              >
                EMI Calculator
              </a>
              <a
                href="#"
                className="text-gray- text-white hover:text-gray-300 text-lg font-medium"
              >
                News
              </a>
              <a
                href="#"
                className="text-gray- text-white hover:text-gray-300 text-lg font-medium"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* End to end assistance */}
      <div className="min-h-[80vh] bg-[#f9ede07b] p-4 md:p-8 lg:pt-48">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 md:mb-16 lg:mb-20 text-gray-800">
          End To End Assistance
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[33px] left-0 right-0 h-[1px] bg-gray-300 -translate-y-1/2 z-0" />

            {/* Timeline items */}
            <TimelineItem
              icon={<Building2 className="w-6 h-6" />}
              title="Search & Shortlisting"
              description="Find your perfect property from our curated listings"
            />

            <TimelineItem
              icon={<Car className="w-6 h-6" />}
              title="Site Visit"
              description="Guided site visits with our relationship managers"
            />

            <TimelineItem
              icon={<Banknote className="w-6 h-6" />}
              title="Home Loan Assistance"
              description="Get help with your home loan application process"
            />

            <TimelineItem
              icon={<FileText className="w-6 h-6" />}
              title="Legal Advice"
              description="Expert legal guidance throughout the process"
            />

            <TimelineItem
              icon={<Key className="w-6 h-6" />}
              title="Unit Booking"
              description="Secure your dream property with ease"
            />
          </div>
        </div>
      </div>

      {/* Human tech and insightful data */}
      <div className="w-full flex flex-col items-center relative md:justify-between md:items-stretch md:flex-row gap-6 p-4 my-16">
        <div className="w-full max-w-[550px] bg-[#f62937fa] p-8 rounded-lg">
          <h2 className="text-2xl  max-w-[350px] md:text-3xl font-semibold text-white mb-4">
            Humanizing
            <br />
            Technology
          </h2>
          <p className="text-white/90 max-w-[350px] text-sm md:text-base leading-relaxed">
            We constantly leverage innovative technology for ease of property
            shortlisting. Right from an interactive property viewing experience
            to serving real time critical information on the go.
          </p>
        </div>

        <div className="w-full flex flex-col items-end max-w-[550px] bg-slate-900 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl max-w-[350px] font-semibold text-white mb-4 text-right">
            Insightful
            <br />
            Data
          </h2>
          <p className="text-white/90 text-sm max-w-[350px] md:text-base leading-relaxed text-right">
            We create and deliver insights that anticipate the needs of the
            customer. With real time tracking of 50+ parameters like supply &
            demand analysis, inventory movement, catchment analysis etc., we
            cover the residential sector pan India for an ever informed choice.
          </p>
        </div>

        {/* images */}
        <Image
          src="/assets/images/humanizing-tech.avif"
          alt="Human Tech"
          width={300}
          height={300}
          className="rounded-lg max-[1444px]:hidden min-[1445px]:absolute left-[420px] top-1/2 -translate-y-1/2 "
        />
        <Image
          src="/assets/images/insightful-data.avif"
          alt="Insightful Data"
          width={300}
          height={300}
          className="rounded-lg max-[1444px]:hidden min-[1445px]:absolute min-[1445px]:right-[420px] top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive?: boolean;
}

function TimelineItem({
  icon,
  title,
  description,
  isActive,
}: TimelineItemProps) {
  return (
    <div className="relative group">
      <div
        className={`
            flex flex-col items-center text-center
            transition-all duration-300 ease-in-out
            ${isActive ? "scale-110" : ""}
          `}
      >
        {/* Icon circle */}
        <div
          className={`
              w-16 h-16 rounded-full flex items-center justify-center
              mb-4 relative z-10 transition-colors duration-300
              bg-white text-gray-700 group-hover:bg-[#DCC59F] 
              shadow-lg
            `}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>

        {/* Description and button - hidden by default, shown on hover/active */}
        <div
          className={`
              opacity-0 max-h-0 overflow-hidden
              transition-all duration-300 ease-in-out
              group-hover:opacity-100 group-hover:max-h-48
            `}
        >
          <p className="text-sm text-gray-600 mb-3">{description}</p>
          <Button
            variant="secondary"
            className="bg-[#DCC59F] text-gray-900  hover:bg-[#DCC59F]"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Loan;
