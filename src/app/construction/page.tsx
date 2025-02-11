"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  MessageSquare,
  Pencil,
  LayoutGrid,
  Cone,
  Hammer,
  Users,
  AlertTriangle,
  User,
  Tractor,
  Pickaxe,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Construction = () => {
  const slider = useRef<Slider | null>(null);
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
  const cardsData = [
    {
      imageSrc: "/assets/images/construction-aboutus.jpg",
      imageAlt: "Construction professionals reviewing plans",
      title: "Why Choose Us?",
      description:
        "Structure personnel participate in ethics training as part of our best practices program, and each employee is provided with a skill set that helps them make the best decisions.",
      buttonText: "Read More",
    },
    {
      imageSrc: "/assets/images/construction-best-facade-renovation.jpg",
      imageAlt: "Yellow excavator at construction site",
      title: "Best Facade Renovation",
      description:
        "We are here to help you from the initial phase to the final construction phase. Our mission is to provide you the highest quality work that meets your expectation.",
      buttonText: "Our Price",
    },
    {
      imageSrc: "/assets/images/construction-structure.jpg",
      imageAlt: "Construction team members",
      title: "About Structure Ltd.",
      description:
        "We are here to help you from the initial phase to the final construction phase. Our mission is to provide you the highest quality work that meets your expectation.",
      buttonText: "Read More",
    },
    {
      imageSrc: "/assets/images/construction-best-facade-renovation.jpg",
      imageAlt: "Yellow excavator at construction site",
      title: "Best Facade Renovation",
      description:
        "We are here to help you from the initial phase to the final construction phase. Our mission is to provide you the highest quality work that meets your expectation.",
      buttonText: "Our Price",
    },
    {
      imageSrc: "/assets/images/construction-best-facade-renovation.jpg",
      imageAlt: "Yellow excavator at construction site",
      title: "Best Facade Renovation",
      description:
        "We are here to help you from the initial phase to the final construction phase. Our mission is to provide you the highest quality work that meets your expectation.",
      buttonText: "Our Price",
    },
    {
      imageSrc: "/assets/images/construction-best-facade-renovation.jpg",
      imageAlt: "Yellow excavator at construction site",
      title: "Best Facade Renovation",
      description:
        "We are here to help you from the initial phase to the final construction phase. Our mission is to provide you the highest quality work that meets your expectation.",
      buttonText: "Our Price",
    },
  ];
  const secondDivSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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

  const testimonials = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto, consequuntur eligendi esse explicabo laboriosam nisi nobis omnis praesentium quas.",
    "Dolor sit amet, consectetur adipisicing elit. Amet laboriosam nisi nobis omnis quas.",
    "Consequuntur eligendi esse explicabo laboriosam nisi nobis omnis praesentium quas ipsum.",
    "Sit amet, consectetur adipisicing elit. Animi architecto praesentium quas.",
  ];
  const testimonialsSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/construction-hero3.png"
            alt="Background"
            layout="fill"
            fill
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

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
      <div className="container mx-auto px-4 py-24">
        <Slider
          ref={slider}
          {...secondDivSettings}
          className="max-w-5xl mx-auto"
        >
          {cardsData.map((card, index) => (
            <div key={index} className="px-1">
              <div className="relative group">
                <div className="w-full h-[300px] relative overflow-hidden">
                  <Image
                    fill
                    src={card.imageSrc || "/placeholder.svg"}
                    alt={card.imageAlt}
                    className="object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-full bg-gray-800/70 transform translate-y-full opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full border-2 -translate-y-8 border-white flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                {/* Card Content */}
                <div className="relative -mt-16 ml-6">
                  <div className="bg-white p-6 shadow-lg flex flex-col h-full xl:min-h-[300px]">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                      {card.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{card.description}</p>
                    <button className="mt-auto border border-gray-300 text-gray-700 px-6 py-2 uppercase text-sm tracking-wider hover:bg-gray-50 transition-colors">
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Bottom Buttons */}
        <section className="flex justify-center items-center gap-4 mt-2">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="px-6 py-2 text-sm md:text-base bg-gray-100 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 hover:-translate-x-1 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="px-6 py-2 text-sm md:text-base bg-gray-100 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200 hover:translate-x-1 transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </section>
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
            <div className="h-[2px] w-48 sm:w-64 bg-gray-500 mx-auto" />
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
                developing intuitive interfaces. We&apos;ll go into detail, so you
                don&apos;t have to, and we&apos;ll show your business how the application
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

      {/*Certifications*/}
      <div className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700 tracking-tight">
            CERTIFICATIONS
          </h2>
          <div className="mt-2 w-32 sm:w-48 h-[2px] bg-gray-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 text-gray-800/80">
              <Hammer className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">SAFETY</h3>
            <p className="text-gray-600">
              Safety is the most important of our core values. It is our first
              priority.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 text-gray-800/80">
              <Users className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">COMMUNITY</h3>
            <p className="text-gray-600">
              Involvement in and support of the community are at the heart of
              us.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 text-gray-800/80">
              <Cone className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">
              SUSTANABILITY
            </h3>
            <p className="text-gray-600">
              Structure&apos;s commitment to green building and sustainability
              is long-standing.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 text-gray-800/80">
              <AlertTriangle className="w-full h-full" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">INTEGRITY</h3>
            <p className="text-gray-600">
              We have operated with an unwavering commitment honesty and
              integrity.
            </p>
          </div>
        </div>
      </div>

      {/*Testimonials and Our Clients*/}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Testimonials Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 inline-block relative">
              TESTIMONIALS
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 -mb-1"></span>
            </h2>
            <div className="relative">
              <Slider {...testimonialsSettings}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-8 rounded-lg relative shadow-md"
                  >
                    <span className="text-gray-200 text-9xl font-serif absolute top-4 left-4">
                      &quot;
                    </span>
                    <blockquote className="relative z-10 italic text-gray-600 text-lg leading-relaxed pl-4">
                      {testimonial}
                    </blockquote>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Clients Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 inline-block relative">
              OUR CLIENTS
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 -mb-1"></span>
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-auto bg-gray-100 flex items-center justify-center"
                >
                  {/* <Image
                    width={800}
                    height={800}
                    src="/assets/images/construction-hero2.jpg"
                    alt={`Client ${i + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  /> */}
                  <User className="w-28 h-28 text-gray-400 p-6" />
                </div>
              ))}
            </div>
            <a
              href="#"
              className="flex gap-2 items-center mt-8 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span> VIEW ALL OUR CLIENTS</span> <span>»</span>
            </a>
          </section>
        </div>
      </div>

      {/* Last div */}
      <div className="bg-gray-900 py-12 min-h-[50vh] flex justify-center items-center">
        <div className="flex flex-col w-full max-w-7xl justify-center items-center md:flex-row md:justify-between mx-auto px-4 sm:px-12 text-center">
          <div className="flex flex-col items-center justify-center h-full mb-6">
            <h2 className="text-2xl md:text-3xl max-w-xl font-bold text-start align-middle text-gray-100 mb-4">
              Leading the way in building and civil construction
            </h2>
            <div className="mt-2 w-full h-[2px] bg-gray-500"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Projects Completed */}
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-4xl md:text-5xl mb-2">
                <Tractor className="w-12 h-12" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-400">
                2368
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Projects Completed
              </p>
            </div>
            {/* Workers Employed */}
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-4xl md:text-5xl mb-2">
              <Pickaxe className="w-12 h-12" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-400">999</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Workers Employed
              </p>
            </div>
            {/* Awards Won */}
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-4xl md:text-5xl mb-2">
              <Trophy className="w-12 h-12" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-400">366</h3>
              <p className="text-gray-400 text-sm md:text-base">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
