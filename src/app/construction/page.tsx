"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, MessageSquare, Pencil, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Construction = () => {
  const [activeTab, setActiveTab] = useState("ALL PROJECTS");

  const categories = [
    "ALL PROJECTS",
    "INTERIOR DESIGN",
    "ISOLATION",
    "PLUMBING",
    "TILING",
  ];

  const projects = [
    {
      category: "ALL PROJECTS",
      images: [
        {
          url: "/assets/images/construction-latest-project1.jpg",
          title: "Green School",
        },
        {
          url: "/assets/images/construction-latest-project2.jpg",
          title: "Modern Office",
        },
        {
          url: "/assets/images/construction-latest-project3.jpg",
          title: "City Complex",
        },
        {
          url: "/assets/images/construction-latest-project4.jpg",
          title: "Urban Design",
        },
      ],
    },
    {
      category: "INTERIOR DESIGN",
      images: [
        {
          url: "/assets/images/construction-latest-project3.jpg",
          title: "City Complex",
        },
        {
          url: "/assets/images/construction-latest-project4.jpg",
          title: "Urban Design",
        },
        {
          url: "/assets/images/construction-latest-project1.jpg",
          title: "Green School",
        },
        {
          url: "/assets/images/construction-latest-project2.jpg",
          title: "Modern Office",
        },
      ],
    },
    {
      category: "ISOLATION",
      images: [
        {
          url: "/assets/images/construction-latest-project2.jpg",
          title: "Modern Office",
        },
        {
          url: "/assets/images/construction-latest-project1.jpg",
          title: "Green School",
        },
        {
          url: "/assets/images/construction-latest-project4.jpg",
          title: "Urban Design",
        },
        {
          url: "/assets/images/construction-latest-project3.jpg",
          title: "City Complex",
        },
      ],
    },
    {
      category: "PLUMBING",
      images: [
        {
          url: "/assets/images/construction-latest-project2.jpg",
          title: "Modern Office",
        },
        {
          url: "/assets/images/construction-latest-project3.jpg",
          title: "City Complex",
        },
        {
          url: "/assets/images/construction-latest-project1.jpg",
          title: "Green School",
        },
        {
          url: "/assets/images/construction-latest-project4.jpg",
          title: "Urban Design",
        },
      ],
    },
    {
      category: "TILING",
      images: [
        {
          url: "/assets/images/construction-latest-project1.jpg",
          title: "Green School",
        },
        {
          url: "/assets/images/construction-latest-project3.jpg",
          title: "City Complex",
        },
        {
          url: "/assets/images/construction-latest-project4.jpg",
          title: "Urban Design",
        },
        {
          url: "/assets/images/construction-latest-project2.jpg",
          title: "Modern Office",
        },
      ],
    },
  ];

  const activeProject =
    projects.find((p) => p.category === activeTab) || projects[0];
  return (
    <div>
      {/* Hero */}
      <div className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/construction-hero.jpg"
            alt="Background"
            layout="fill"
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
            WE INNOVATE
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mb-8">
            We focus on innovations, as perfect technologies and global
            experience make us trendsetters in the construction industry.
          </p>
          <Link
            href="/projects"
            className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
          >
            PROJECTS
          </Link>
        </div>

        {/* Bottom Links */}
        <div className="relative z-10 grid grid-cols-2 w-full">
          <Link
            href="/construction"
            className="bg-white/10 backdrop-blur-md text-white py-2 sm:py-6 text-center hover:bg-white/5 transition-colors"
          >
            CONSTRUCTION
          </Link>
          <Link
            href="/construction"
            className="bg-black/30 backdrop-blur-md text-white py-2 sm:py-6 text-center hover:bg-black/50 transition-colors"
          >
            FIT-OUT
          </Link>
        </div>
      </div>

      {/* Second div */}
      <div className="container mx-auto flex justify-center px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 max-w-5xl gap-8">
          {/* Why Choose Us Card */}
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/assets/images/construction-aboutus.jpg"
                alt="Construction professionals reviewing plans"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                Why Choose Us?
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">
                Structure personnel participate in ethics training as part of
                our best practices program, and each employee is provided with a
                skill set that helps them make the best decisions.
              </p>
              <Button variant="outline" className="hover:bg-gray-100">
                READ MORE
              </Button>
            </CardContent>
          </Card>

          {/* Best Facade Renovation Card */}
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/assets/images/construction-best-facade-renovation.jpg"
                alt="Yellow excavator at construction site"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                Best Facade Renovation
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">
                We are here to help you from the initial phase to the final
                construction phase. Our mission is to provide you the highest
                quality work that meets your expectation.
              </p>
              <Button variant="outline" className="hover:bg-gray-100">
                OUR PRICE
              </Button>
            </CardContent>
          </Card>

          {/* About Structure Ltd. Card */}
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/assets/images/construction-structure.jpg"
                alt="Construction team members"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="pb-2">
              <h2 className="text-2xl font-bold text-gray-800">
                About Structure Ltd.
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">
                We are here to help you from the initial phase to the final
                construction phase. Our mission is to provide you the highest
                quality work that meets your expectation
              </p>
              <Button variant="outline" className="hover:bg-gray-100">
                READ MORE
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/*Latest Projects*/}
      <div className="w-full relative bg-gray-800/90 py-12 md:py-16">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/images/construction-hero.jpg"
            alt="Background"
            layout="fill"
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold sm:tracking-widest text-white mb-2">
              LATEST PROJECTS
            </h2>
            <div className="h-1 w-48 bg-gray-500 mx-auto" />
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={cn(
                  "px-4 py-2 text-xs md:text-sm transition-colors",
                  activeTab === category
                    ? "text-white border-b-2 border-gray-300"
                    : "text-gray-400 hover:text-gray-300"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {activeProject.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] w-full overflow-hidden group"
              >
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-700/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <h3 className="text-white text-2xl font-light italic mb-4">
                    {image.title}
                  </h3>
                  <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*We have the solution*/}
      <div className="min-h-fit w-full bg-gray-800 p-6 relative pb-12 md:pb-48">
        {/* Heading */} 
        <div className="absolute right-0 top-12 p-6 md:px-12">
          <h1 className="text-right">
            <span className="text-4xl sm:text-7xl md:text-[100px] lg:text-[120px] text-gray-600 font-light tracking-tight">
              we have
            </span>
            <br />
            <span className="text-5xl sm:text-8xl md:text-[120px] lg:text-[140px] font-bold text-white tracking-tight leading-none">
              the solution
            </span>
          </h1>
        </div>

        {/* Cards */}
        <div className="relative pt-48 md:pt-56 lg:pt-64 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4">
            {/* Consult Card */}
            <Card className="bg-gray-700/20 border-white/30 text-white p-8 md:translate-y-0">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">Consult</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                We have experienced business consultants who can quickly analyse
                your business needs and identify areas where web and mobile apps
                can make immediate improvements in business efficiency.
              </p>
            </Card>

            {/* Design Card */}
            <Card className="bg-gray-700/20 border-white/30 text-white p-8 md:translate-y-16">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                <Pencil className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">Design</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our user experience designers have years of experience
                developing intuitive interfaces. We'll go into detail, so you
                don't have to, and we'll show your business how the application
                will be brought to life.
              </p>
            </Card>

            {/* Deliver Card */}
            <Card className="bg-gray-700/20 border-white/30 text-white p-8 md:translate-y-32">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mb-6">
                <LayoutGrid className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">Deliver</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our dedicated team of app developers provide native iOS Apps,
                Android Apps and Web Application Development. We have a
                tried-and-tested formula to develop and deliver applications
                within the project timescales.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
