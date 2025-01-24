"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  PencilRuler,
  IndianRupee,
  Award,
  Users,
  Sofa,
  Heart,
  PiggyBank,
  Sparkles,
  Star,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import { FileText, PenToolIcon as Tool, Handshake, Wrench } from "lucide-react";
import Link from "next/link";

const Interior = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const whyChooseUsSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  const getInspiredSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const heroFeatures = [
    {
      text: "Personalised Designs",
      icon: PencilRuler,
    },
    {
      text: "Transparent Pricing",
      icon: IndianRupee,
    },
    {
      text: "Flat 10-year warranty",
      icon: Award,
    },
  ];
  const getInspiredSlides = [
    {
      id: 1,
      title: "Master Bedroom",
      image: "/assets/images/bedroom.jpg",
    },
    {
      id: 2,
      title: "Living Area",
      image: "/assets/images/living-room.jpg",
    },
    {
      id: 3,
      title: "Kitchen",
      image: "/assets/images/kitchen.jpg",
    },
    {
      id: 4,
      title: "Prayer Room",
      image: "/assets/images/prayer-room.jpg",
    },
    {
      id: 5,
      title: "Bathroom",
      image: "/assets/images/bathroom.jpg",
    },
  ];
  const whyChooseUsFeatures = [
    {
      icon: <Users className="w-6 h-6 " />,
      title: "Dedicated Project Team",
      description:
        "Proficient team of professionals, skilled designers and experienced project managers",
    },
    {
      icon: <Sofa className="w-6 h-6 " />,
      title: "End to End Execution",
      description:
        "Turning your dream home interior into reality, from design to installation and finishing touches",
    },
    {
      icon: <Heart className="w-6 h-6 " />,
      title: "Personalized Designs",
      description:
        "Personalized Interior design that truly fits your needs and complement lifestyle",
    },
    {
      icon: <PiggyBank className="w-6 h-6 " />,
      title: "Value for Money",
      description:
        "We provide services at competitive prices with the highest standards of quality",
    },
    {
      icon: <Sparkles className="w-6 h-6 " />,
      title: "Quality Assurance",
      description:
        "Maintaining unwavering high standards throughout with 250+ quality checks",
    },
  ];
  const testimonials = [
    {
      name: "Iron Man",
      role: "Homeowner",
      content:
        "The interior design services were exceptional! My home looks stunning and reflects my personality perfectly.",
      rating: 5,
      image: "/assets/images/ironman.jpeg",
    },
    {
      name: "Captain America",
      role: "Property Investor",
      content:
        "The attention to detail and quality of work were impressive. The interiors have significantly increased the value of my properties.",
      rating: 4,
      image: "/assets/images/captain-america.jpg",
    },
    {
      name: "Hulk",
      role: "Relocating Professional",
      content:
        "The team made my relocation seamless with their efficient and beautiful interior designs. Highly recommend!",
      rating: 5,
      image: "/assets/images/hulk.jpg",
    },
    {
      name: "Thor",
      role: "Real Estate Agent",
      content:
        "The interior design services have been a game-changer for my clients. The homes sell faster and at better prices.",
      rating: 4,
      image: "/assets/images/thor.jpg",
    },
    {
      name: "Loki Odison",
      role: "Home Seller",
      content:
        "The interior makeover helped me sell my home quickly. The design was modern and appealing to buyers.",
      rating: 3,
      image: "/assets/images/loki.jpeg",
    },
  ];

  const services = [
    {
      title: "Interior design",
      description:
        "Transform your space with our expert interior design services, tailored to your unique style and preferences.",
    },
    {
      title: "Civil Work",
      description:
        "Our civil work services ensure a solid foundation and structure for your dream home, with quality and precision.",
    },
    {
      title: "Modular Furniture",
      description:
        "Discover our range of modular furniture, designed to maximize space and functionality in your home.",
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

  const recentProjects = [
    {
      name: "DLF Cyber City",
      location: "Gurgaon",
      style: "Modern",
      rating: 5,
      image: "/assets/images/bedroom-recent-interior.jpg",
    },
    {
      name: "Prestige Shantiniketan",
      location: "Bangalore",
      style: "Minimalist",
      rating: 5,
      image: "/assets/images/living-room-recent-interior.jpg",
    },
    {
      name: "Lodha Park",
      location: "Mumbai",
      style: "Luxury",
      rating: 5,
      image: "/assets/images/kitchen-recent-interior.jpg",
    },
    {
      name: "Sobha City",
      location: "Delhi",
      style: "Contemporary",
      rating: 5,
      image: "/assets/images/bedroom2-recent-interior.jpg",
    },
  ];

  //for focus shift of whyChooseUsFeatures div
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % whyChooseUsFeatures.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [whyChooseUsFeatures.length]);

  return (
    <div>
      {/*Hero*/}
      <div className="h-[75vh] sm:h-[85vh] relative pt-16 w-full bg-gray-50 flex flex-col items-center justify-center">
        {/*Gradient background*/}
        {/* <div className="bg-slate-200 absolute inset-0 bg-[radial-gradient(circle,_rgba(255,219,247,1)_0%,_rgba(182,199,186,1)_100%)]"></div> */}
        <Image
          src="/assets/images/interior-hero-sofa.jpg"
          alt="Interior Image"
          fill
        />
        {/* To give the black opacity */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative w-full h-full flex items-center justify-start">
          {/* Content */}
          <div className="z-0 px-4 w-full lg:flex max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[55%] mx-auto text-start lg:text-left relative xl:-translate-x-96 lg:-translate-x-72">
            {/* Explore More Desktop */}
            <div className="group  hidden lg:flex items-center max-w-56 transform -rotate-90  px-4 py-2 cursor-pointer transition-all duration-300">
              <ChevronLeft className="h-8 w-8 text-white group-hover:-translate-x-1" />
              <span className="text-white text-xs tracking-[5px] w-full uppercase flex items-center">
                Explore More
              </span>
            </div>
            <div>
              <h1 className="text-white z-0 text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                We design your imagination,
              </h1>
              <h1 className="text-white z-0 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                we build your home.
              </h1>

              <p className="text-white text-sm sm:text-base md:text-lg mb-6">
                Our goal is to build your dream house with care and effort.
              </p>

              <div className="z-0 flex flex-wrap gap-4 justify-start mb-6">
                <Button className="text-white bg-black/40 backdrop-blur-sm border border-white hover:bg-black/10 hover:backdrop-blur-sm tracking-wide rounded-full px-6 py-2 text-sm">
                  Visit
                </Button>
                <Button className="text-white bg-black/40 backdrop-blur-sm border border-white hover:bg-black/10 hover:backdrop-blur-sm tracking-wide rounded-full px-6 py-2 text-sm">
                  Call
                </Button>
              </div>

              {/* Explore More (Mobile) */}
              <div className="absolute flex lg:hidden text-xs items-center justify-center">
                <span className="text-white text-xs sm:tracking-[5px] uppercase">
                  Explore More
                </span>
                <ChevronRight className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="uppercase absolute z-0 text-xs lg:text-base px-4 py-1 text-white border bg-black/10 hover:scale-105 backdrop-blur-sm border-white rounded-full md:px-8 sm:py-3
         tracking-widest bottom-0 right-0 -translate-y-14 -translate-x-8 lg:-translate-y-16 lg:-translate-x-24"
        >
          GET QUOTE
        </Link>

        {/*bottom marquee*/}
        <div
          className={`w-full absolute bottom-0 bg-black/30 backdrop-blur-sm py-3 text-white `}
        >
          {/* Desktop view */}
          <div className="hidden md:flex items-center justify-center">
            {heroFeatures.map((feature, index) => (
              <div
                key={feature.text}
                className="flex items-center justify-center gap-2"
              >
                <feature.icon className="h-4 w-4" />
                <span>{feature.text}</span>
                {index !== heroFeatures.length - 1 && (
                  <div className="mx-4 h-4 w-px bg-gray-300/20" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet view with Marquee */}
          <div className="md:hidden">
            <Marquee speed={40} gradient={false} className="overflow-hidden">
              <div className="flex items-center">
                {heroFeatures.map((feature, index) => (
                  <div
                    key={feature.text}
                    className="flex items-center justify-center gap-2"
                  >
                    <feature.icon className="h-4 w-4" />
                    <span>{feature.text}</span>
                    {index !== heroFeatures.length - 1 && (
                      <div className="mx-4 h-6 w-px bg-white" />
                    )}
                  </div>
                ))}
                <div className="mx-4 h-6 w-px bg-white" />

                {heroFeatures.map((feature, index) => (
                  <div
                    key={feature.text}
                    className="flex items-center justify-center gap-2"
                  >
                    <feature.icon className="h-4 w-4" />
                    <span>{feature.text}</span>
                    {index !== heroFeatures.length - 1 && (
                      <div className="mx-4 h-6 w-px bg-white" />
                    )}
                  </div>
                ))}
                <div className="mx-4 h-6 w-px bg-white" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/*About Us*/}
      <section className="w-full min-h-screen bg-gray-50 px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className=" max-w-4xl mb-16">
            <h2 className="text-sm tracking-[6px] text-gray-600 mb-1">ABOUT</h2>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-gray-700">
              We are the best interior design studio in Colarado
            </h1>
            <p className="text-base text-gray-600">
              At DEMIGOD, we bring your vision to life through exceptional
              interior design. Our passion lies in creating functional and
              aesthetic spaces tailored to your unique style. With a focus on
              innovation, craftsmanship, and attention to detail, we transform
              houses into homes and spaces into experiences.
            </p>
          </div>

          {/* Stats and Images Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Stats Column */}
            <div className="space-y-12 flex gap-8">
              <div className="flex lg:grid gap-6 sm:gap-10">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">
                    2K+
                  </h3>
                  <p className="text-sm tracking-widest text-gray-600">
                    PROJECTS
                    <br />
                    DONE
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">
                    20+
                  </h3>
                  <p className="text-sm tracking-widest text-gray-600">
                    PRO
                    <br />
                    TEAMS
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-700 mb-2">
                    300+
                  </h3>
                  <p className="text-sm tracking-widest text-gray-600">
                    GLOBAL
                    <br />
                    CLIENTS
                  </p>
                </div>
              </div>
            </div>

            {/* Images Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
              <div className="relative h-[250px] md:h-[350px] overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/living-room-recent-interior.jpg"
                  alt="Modern chair and table in sunlight"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] md:h-[350px] overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/bedroom-recent-interior.jpg"
                  alt="Pendant lamp and sculpture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <div className="relative h-[250px] md:h-[270px] overflow-hidden rounded-lg">
                  <Image
                    src="/assets/images/kitchen-recent-interior.jpg"
                    alt="Office chair and desk setup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-0 w-full hidden md:flex justify-center">
                  <Button
                    variant="outline"
                    className="border-[#B28863] text-[#5b3e2af5] rounded-full text-sm sm:px-8 py-0 tracking-widest hover:bg-[#5b3e2af5] transition duration-300 hover:text-white "
                  >
                    LEARN ABOUT
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:hidden">
                <Button
                  variant="outline"
                  className="border-[#B28863] text-[#5b3e2af5] w-fit rounded-full text-sm sm:px-8 py-0 tracking-widest hover:bg-[#5b3e2af5] transition duration-300 hover:text-white "
                >
                  LEARN ABOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Logo Marquee*/}
      <div className="w-full bg-white">
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

      {/*Services*/}
      <section className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.title}>
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative">
                  <h2 className="text-3xl font-medium tracking-tight text-gray-800 sm:text-4xl">
                    {service.title}
                  </h2>
                </div>
                <div className="space-y-6">
                  <p className="text-base leading-8 text-gray-600">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="group text-gray-700 text-sm font-semibold p-0 h-auto no-underline hover:no-underline"
                  >
                    LEARN MORE{" "}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              {index !== services.length - 1 && (
                <hr className="my-8 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/*Get Inspired*/}
      <div className=" px-4 md:px-12 lg:px-24 py-12 bg-[#f9ede07b]">
        <div className="max-w-7xl mx-auto sm:mx-8 ">
          <div className="mb-4 sm:mb-8 flex justify-between">
            <div>
              <h2 className="text-xl sm:text-3xl font-semibold tracking-wider text-gray-700 mb-2">
                Get Inspired
              </h2>
              <p className="text-sm sm:text-lg tracking-wider text-gray-500">
                Save ideas for your home
              </p>
            </div>
            <Link
              href="/interior"
              className="flex group tracking-wide w-fit h-fit text-green-700 "
            >
              View All{" "}
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition duration-300" />
            </Link>
          </div>

          {/* Slider */}
          <div className="relative rounded-lg ">
            <Slider ref={sliderRef} {...getInspiredSettings}>
              {getInspiredSlides.map((slide) => (
                <Link href="/interior" key={slide.id}>
                  <div className="grid  md:grid-cols-9 rounded-lg overflow-hidden">
                    <div className="relative w-full h-[180px] md:col-span-6">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div className="bg-white h-[180px] p-4 flex flex-col justify-center md:col-span-3">
                      <div className="text-white  ">
                        <button className=" text-black gap-4 py-3 inline-flex items-center transition-colors">
                          <span>{slide.title}</span>
                          <span className="ml-2 -translate-x-3">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/*how it works div*/}
      <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Free Design Consultation */}
            <div className="flex items-start gap-6">
              <div className="bg-white p-3 rounded-full">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-base tracking-wider font-semibold text-gray-700 mb-1">
                  Free Design Consultation
                </h3>
                <p className="tracking-wider text-sm text-gray-600">
                  Explore the latest design trends with our designer
                </p>
              </div>
            </div>

            {/* Dream Home Design */}
            <div className="flex items-start gap-6">
              <div className="bg-white p-3 rounded-full">
                <Tool className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-base tracking-wider font-semibold text-gray-700 mb-1">
                  Dream Home Design
                </h3>
                <p className="tracking-wider text-sm text-gray-600">
                  Personalized Detailed design based on your need and lifestyle
                </p>
              </div>
            </div>

            {/* Booking Confirmation */}
            <div className="flex items-start gap-6">
              <div className="bg-white p-3 rounded-full">
                <Handshake className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-base tracking-wider font-semibold text-gray-700 mb-1">
                  Booking Confirmation
                </h3>
                <p className="tracking-wider text-sm text-gray-600">
                  Confirm the Dream Home Design By Paying Token
                </p>
              </div>
            </div>

            {/* Onsite Services & Installation */}
            <div className="flex items-start gap-6">
              <div className="bg-white p-3 rounded-full">
                <Wrench className="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-base tracking-wider font-semibold text-gray-700 mb-1">
                  Onsite Services & Installation
                </h3>
                <p className="tracking-wider text-sm text-gray-600">
                  On-site Service works and Installation of Modular units
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Recent Projects*/}
      <section className="w-full py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-2 text-3xl tracking-wide font-bold text-gray-800">
            Our Recent Projects
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            5000+ houses turned into homes in India.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                      {project.location}
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                      {project.style}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{project.rating}/5</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*why choose us*/}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-12">
            Why Choose Us
          </h2>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 px-6">
            {whyChooseUsFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={
                  "transition-all duration-500 ease-in-out p-6 rounded-lg text-center " +
                  (activeIndex === index ? "bg-blue-50" : "")
                }
              >
                <div className="flex justify-center mb-4 p-3 text-gray-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-700 sm:tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile and Tablet Layout */}
        <div className="md:hidden px-4">
          <Slider {...whyChooseUsSettings}>
            {whyChooseUsFeatures.map((feature) => (
              <div key={feature.title} className="p-6 text-center">
                <div className="flex justify-center mb-4 p-3 text-gray-600">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2 text-gray-700 sm:tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/*Testimonials*/}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto sm:mt-10 sm:mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-start text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <Slider {...testimonialSettings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-white shadow-md  rounded-lg p-6  flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 mr-4 object-cover rounded-full"
                      />
                      <div>
                        <h3 className=" text-base tracking-wide text-gray-900">
                          {testimonial.name}
                        </h3>
                        {/* <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p> */}
                      </div>
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Interior;
