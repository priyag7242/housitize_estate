"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import CoreValues from "@/components/CoreValues";

interface TeamMember {
  name: string;
  title: string;
}

const About = () => {
  const [activeTab, setActiveTab] = useState("team");

  const coreValues = [
    {
      number: "01",
      title: "Experience",
      description:
        "We are one of the most seasoned real estate investment teams in the Western United States, investing across multiple market cycles with an elite group of capital providers for over 50 years. The 21 most senior SteelWave professionals have an average tenure of 23 years working together as a team, and 32 years in the real estate industry.",
    },
    {
      number: "02",
      title: "Execution",
      description:
        "The saying goes: if you want something done right, do it yourself. That's why we do it all. We believe that an all-hands-on-deck team approach to managing real estate assets are superior to an allocator's model of outsourcing to a variety of third-party service providers. We work collaboratively as a team to manage every aspect of each project, enabling us to provide consistent execution and attention to detail.",
    },
    {
      number: "03",
      title: "Integrity",
      description:
        "Our business is built on trust, transparency, and ethical practices that have earned us long-standing relationships with partners and investors. Our business is built on trust, transparency, and ethical practices that have earned us long-standing relationships with partners and investors.",
    },
    {
      number: "04",
      title: "Passion",
      description:
        "We are deeply passionate about what we do, how we do it and when we do it. We hire and nurture team members who have demonstrated a track record of passion and a commitment to excellence in everything that they do. These are the attributes that define the essence of who we are as individuals and as a company.",
    },
  ];
  const teamMembers: TeamMember[] = [
    {
      name: "Regional Vice President",
      title: "Denver Metropolitan Area and Texas",
    },
    {
      name: "Chief Administrative Officer",
      title: "Accounting Officer",
    },
    {
      name: "Regional Vice President",
      title: "Seattle & Portland",
    },
    {
      name: "Regional Vice President",
      title: "Denver Metropolitan Area and Texas",
    },
    {
      name: "Chief Administrative Officer",
      title: "Accounting Officer",
    },
    {
      name: "Regional Vice President",
      title: "Seattle & Portland",
    },
    {
      name: "Regional Vice President",
      title: "Denver Metropolitan Area and Texas",
    },
    {
      name: "Chief Administrative Officer",
      title: "Accounting Officer",
    },
    {
      name: "Regional Vice President",
      title: "Seattle & Portland",
    },
    {
      name: "Regional Vice President",
      title: "Denver Metropolitan Area and Texas",
    },
    {
      name: "Chief Administrative Officer",
      title: "Accounting Officer",
    },
    {
      name: "Regional Vice President",
      title: "Seattle & Portland",
    },
  ];

  const boardMembers: TeamMember[] = [
    {
      name: "Co-Founder",
      title: "Chief Executive Officer & Chairman",
    },
    {
      name: "Senior Vice President",
      title: "Property Management Services & CDS",
    },
    {
      name: "Co-Founder",
      title: "Chief Executive Officer & Chairman",
    },
    {
      name: "Senior Vice President",
      title: "Property Management Services & CDS",
    },
    {
      name: "Senior Vice President",
      title: "Property Management Services & CDS",
    },
    {
      name: "Co-Founder",
      title: "Chief Executive Officer & Chairman",
    },
    {
      name: "Senior Vice President",
      title: "Property Management Services & CDS",
    },
  ];

  const executiveMembers: TeamMember[] = [
    {
      name: "Managing Director",
      title: "A&D, Seattle, Portland",
    },
    {
      name: "Creative Director",
      title: "Design & Innovation",
    },
    {
      name: "Creative Director",
      title: "Design & Innovation",
    },
    {
      name: "Managing Director",
      title: "A&D, Seattle, Portland",
    },
    {
      name: "Creative Director",
      title: "Design & Innovation",
    },
    {
      name: "Creative Director",
      title: "Design & Innovation",
    },
  ];

  return (
    <div>
      {/*Hero*/}
      {/* Hero Section */}
      <div className="min-h-screen w-full flex items-center justify-end px-4 md:px-8 lg:px-20 relative">
        {/* Background Image Wrapper */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/property-carousel3new.jpg"
            alt="Image"
            fill
            className="object-cover"
          />
          {/* Black shade on the background image */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Section */}
        <div className="relative z-20 w-full md:w-3/4 lg:w-1/2 ml-auto">
          <h1
            className="text-3xl md:text-4xl lg:text-[4rem] text-white font-normal leading-tight md:leading-tight lg:leading-[1.15]"
            style={{ fontFamily: "initial" }}
          >
            Demigod is a privately held full-service creative life science,
            creative office, and industrial real estate management firm.
          </h1>
        </div>
      </div>

      {/* second div */}
      <div className="min-h-fit w-full mt-8 md:mt-16 p-6 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-0">
            <h1 className="text-5xl md:text-6xl lg:text-8xl tracking-widest text-gray-800 font-normal leading-tight">
              Strength +
            </h1>
            <div className="text-5xl md:text-6xl lg:text-8xl font-normal leading-tight">
              <span
                className="inline-block tracking-widest text-transparent"
                style={{
                  WebkitTextStroke: "1.5px gray",
                }}
              >
                Flexibility
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:space-y-12">
            <h2 className="text-xl md:text-2xl lg:text-2xl max-w-[500px] tracking-wider text-gray-800 leading-snug">
              We create spaces focused on elevated and exceptional user
              experiences. Through unparalleled design and thoughtful execution,
              we spark creativity and invigorate collaboration.
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              SteelWave and its predecessor companies, Legacy Partners
              Commercial and Lincoln Property West, have been active in
              commercial real estate for over 50 years. We are a vertically
              integrated real estate company, believing that an
              &quot;all-hands-on deck&quot; team approach to managing real
              estate assets is superior to an allocator&apos;s model of
              outsourcing to third-party service providers.
            </p>

            <Link
              href="/history"
              className="inline-flex items-center text-lg hover:opacity-70 transition-opacity"
            >
              Our History
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/*horizontal text scroll*/}
      <Marquee
        speed={100}
        style={{
          WebkitTextStroke: "1.5px gray",
        }}
        className="text-[150px] overflow-hidden uppercase p-2 w-full text-transparent"
      >
        - Read out our story - read out our story
      </Marquee>

      <CoreValues coreValues={coreValues} />

      {/*Team*/}
      <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-16 py-16">
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-8 space-y-4 lg:space-y-0">
            <h1 className=" sm:text-[100px] md:text-[130px] lg:text-[150px] font-light tracking-tight whitespace-nowrap">
              <span className="font-normal">Our</span>
              <span
                style={{
                  WebkitTextStroke: "1.5px gray",
                }}
                className="text-transparent"
              >
                Team
              </span>
            </h1>
            <p className="text-lg text-gray-600 lg:pr-10 md:-translate-x-20 max-w-lg">
              As creative problem-solvers, we create exceptional environments
              and delivers enduring value for every investor, partner, and
              client.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <Tabs
              defaultValue="team"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="h-auto bg-transparent space-x-2 flex flex-row justify-start w-full lg:w-auto overflow-x-auto">
                <TabsTrigger
                  value="team"
                  className="justify-start text-lg md:text-xl hover:-translate-y-1 data-[state=active]:bg-transparent data-[state=active]:text-gray-700 whitespace-nowrap"
                >
                  Team
                </TabsTrigger>
                <TabsTrigger
                  value="board"
                  className="justify-start text-lg md:text-xl hover:-translate-y-1 data-[state=active]:bg-transparent data-[state=active]:text-gray-700 whitespace-nowrap"
                >
                  Board of Directors
                </TabsTrigger>
                <TabsTrigger
                  value="executive"
                  className="justify-start text-lg md:text-xl hover:-translate-y-1 data-[state=active]:bg-transparent data-[state=active]:text-gray-700 whitespace-nowrap"
                >
                  Executive Committee
                </TabsTrigger>
              </TabsList>
              <Separator className="my-2" />
            </Tabs>

            <div className="flex-1">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                {(activeTab === "team"
                  ? teamMembers
                  : activeTab === "board"
                  ? boardMembers
                  : executiveMembers
                ).map((member, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-2xl text-gray-600 font-normal">
                      {member.name}
                    </h3>
                    <p className="text-gray-500">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        speed={100}
        style={{
          WebkitTextStroke: "1.5px gray",
        }}
        className="text-[150px] overflow-hidden uppercase p-2 w-full text-transparent"
      >
        - Backed by the best - Backed by the best
      </Marquee>

      {/*Let's talk*/}
      <div className="flex justify-start items-center px-20 w-full h-[60vh]">
        {/*content*/}
        <div className="flex flex-row justify-start items-center text-[30px] sm:text-[90px] md:text-[120px] lg:text-[160px] group">
          <div className="cursor-pointer">Let&apos;s talk</div>
          <div className="ml-4 transform transition-transform group-hover:translate-x-3">
            <MoveRight className="h-[40px] w-[50px] sm:h-[80px] sm:w-[90px] lg:h-[100px] lg:w-[120px]" />
          </div>
        </div>
      </div>

      {/* Hero */}
      {/* <div className="relative w-full h-[50vh] sm:h-[85vh] "> */}
      {/* Image container */}
      {/* <div className="absolute inset-0">
        <Image
          src="/assets/images/about-team.jpg"
          alt="Modern office interior with team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div> */}

      {/* Text content */}
      {/* <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-sm tracking-[0.3em] uppercase mb-4 md:mb-6">Meet</p>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-wider">
          THE DEMIGOD TEAM
        </h1>
      </div> */}
      {/* </div> */}

      {/* Second div */}
      {/* <div className="container mx-auto px-4 py-16 md:py-24"> */}
      {/* Text Content */}
      {/* <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl text-gray-700 md:text-4xl uppercase lg:text-5xl tracking-widest mb-8 font-extralight leading-tight">
          ₹50 Crore+ RECORD-BREAKING SALES
          <br />
          IN Pune and Mumbai
        </h2>
        <p className="text-gray-600 font-extralight tracking-widest text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
          With over ₹50 Crore in record-breaking sales in Pune and Mumbai,
          DEMIGOD Real Estate&apos;s expertise and dedication are unmatched.
          Their portfolio of luxury homes, estates, and properties is truly
          exceptional and sets a new standard in the real estate market.
        </p>
      </div> */}

      {/* Images Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 mx-4 sm:mx-20 gap-4 md:gap-8">
        <div className="relative w-full h-[400px]">
          <Image
            src="/assets/images/best-property1.jpg"
            alt="Luxury interior with chandeliers"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[400px]">
          <Image
            src="/assets/images/best-property2.jpg"
            alt="Outdoor space with blooming trees"
            fill
            className="object-cover"
          />
        </div>
      </div> */}
      {/* </div> */}

      {/* <Separator className="my-6 " /> */}

      {/* Recent Sales */}
      {/* <div className="mx-auto px-4 md:px-24 py-8"> */}
      {/* <h2 className="uppercase text-4xl flex justify-center font-thin tracking-widest text-gray-700">
        Recent Sales
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8"> */}
      {/* Left Image */}
      {/* <div className="relative w-full md:w-1/2 group">
          <div className="relative w-full h-[300px] md:h-[517px]">
            <Image
              src="/assets/images/recent-sales1.jpg"
              alt="Recent sale 1"
              fill
              className="object-cover transition-transform"
            />

            <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
              <p className="text-white text-3xl md:text-4xl font-light mb-2">
                200000
              </p>
              <p className="text-white text-lg md:text-xl">
                Valley Luxary, Pune
              </p>

              <div className="flex gap-4 text-white opacity-0 transform translate-y-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
                <span>4 Beds</span>
                <span>{(2300).toLocaleString()} Sq. Ft.</span>
              </div>
            </div>
          </div>
        </div> */}
      {/* Right Images */}
      {/* <div className="flex flex-col gap-4 w-full md:w-1/2"> */}
      {/* Top Image */}
      {/* <div className="relative w-full h-[300px] md:h-[250px] group"> */}
      {/* <Image
              src="/assets/images/recent-sales2.jpg"
              alt="Recent sale 2"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
              <p className="text-white text-3xl md:text-4xl font-light mb-2">
                150000
              </p>
              <p className="text-white text-lg md:text-xl">
                Urban Oasis, Mumbai
              </p>
              <div className="flex gap-4 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span>3 Beds</span>
                <span>{(1800).toLocaleString()} Sq. Ft.</span>
              </div>
            </div> */}
      {/* </div> */}
      {/* Bottom Image */}
      {/* <div className="relative w-full h-[300px] md:h-[250px] group">
            <Image
              src="/assets/images/recent-sales3.jpg"
              alt="Recent sale 3"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-1rem]">
              <p className="text-white text-3xl md:text-4xl font-light mb-2">
                180000
              </p>
              <p className="text-white text-lg md:text-xl">
                Coastal Retreat, Goa
              </p>
              <div className="flex gap-4 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span>5 Beds</span>
                <span>{(2500).toLocaleString()} Sq. Ft.</span>
              </div>
            </div>
           </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6 sm:my-10">
        <Button
          variant="outline"
          className="mt-6 px-8 py-6 text-sm uppercase border-2 border-gray-600 tracking-widest hover:bg-gray-700 hover:text-white transform rounded-full transition-colors duration-300"
        >
          VIEW ALL PROPERTIES
        </Button>
      </div> */}
      {/* </div> */}

      {/* Demigod banner */}
      {/* <div className="relative min-h-[300px] w-full">
        <Image
          src="/assets/images/demigod-banner.jpg"
          alt="Modern office interior with team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" /> */}

      {/* Content Container */}
      {/* <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0"> */}
      {/* Heading */}
      {/* <h1 className="text-3xl md:text-4xl uppercase lg:text-5xl font-mono tracking-wider text-white">
              Demigod Real Estate
            </h1> */}
      {/* right side content */}
      {/* <div className="md:ml-8 "> */}
      {/* Description */}
      {/* <p className="text-white text-base mb-4 md:text-lg tracking-widest font-mono leading-relaxed max-w-3xl">
                Our goal is to offer an unparalleled level of service to our
                highly respected clients. We guarantee that our expertise,
                professionalism and dedication will guide you toward meeting
                your unique real estate needs.
              </p> */}

      {/* Button */}
      {/* <button className="inline-block border-2 border-white text-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
