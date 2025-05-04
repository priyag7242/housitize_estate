"use client";

import SiteFilters from "@/components/SiteFilters";
import { Search, Share2, X } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import FacebookPlayer from "react-player/facebook";
import Slider from "react-slick";

const GuestFav = [
  {
    title: "Entire villa in Goa, India",
    location: "Goa, India",
    price: "₹5,200 night",
    rating: 4.96,
    image: "https://ext.same-assets.com/3017561144/2244626118.jpeg",
  },
  {
    title: "Boutique stay with pool, Udaipur",
    location: "Udaipur, India",
    price: "₹4,000 night",
    rating: 4.82,
    image: "https://ext.same-assets.com/3017561144/1634671963.jpeg",
  },
  {
    title: "Luxury villa in Lonavala",
    location: "Lonavala, India",
    price: "₹6,100 night",
    rating: 4.9,
    image: "https://ext.same-assets.com/3017561144/679924008.jpeg",
  },
  {
    title: "Heritage haveli, Jaipur",
    location: "Jaipur, India",
    price: "₹3,700 night",
    rating: 4.83,
    image: "https://ext.same-assets.com/3017561144/4203559795.jpeg",
  },
  {
    title: "Hilltop paradise, Ooty",
    location: "Ooty, India",
    price: "₹2,900 night",
    rating: 4.77,
    image: "https://ext.same-assets.com/3017561144/1038771835.jpeg",
  },
  {
    title: "Cabin by the river, Manali",
    location: "Manali, India",
    price: "₹3,500 night",
    rating: 4.91,
    image: "https://ext.same-assets.com/3017561144/717477816.jpeg",
  },
];

function LoaderCard() {
  return (
    <div className="animate-pulse rounded-2xl bg-gray-200 h-[320px] w-full" />
  );
}

function ListingCard({ image, title, location, price, rating }: any) {
  return (
    <div className="group cursor-pointer rounded-2xl shadow-sm bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full px-2 py-[2px] text-xs font-semibold shadow-sm">
          ★ {rating}
        </div>
      </div>
      <div className="p-3 flex-1 flex flex-col gap-1">
        <div className="font-semibold truncate" title={title}>
          {title}
        </div>
        <div className="text-xs text-airbnb-gray truncate">{location}</div>
        <div className="text-sm pt-1">
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className=" inset-x-0 z-40 bg-[#fbfbfb]  border-gray-200 flex  items-center justify-center px-6 pt-16 py-3 md:px-12 ">
      {/* Center search bar, mock only */}
      <div className="hidden md:flex flex-1 mx-6 max-w-3xl mt-4">
        <div className="flex flex-1 bg-white rounded-full border shadow px-6 py-3 items-center hover:shadow-md transition-shadow">
          {/* Where */}
          <div className="flex flex-col items-start justify-center flex-1 border-r border-gray-200 pr-4">
            <span className="font-medium text-sm">Where</span>
            <p className="text-sm text-gray-500">Search destination</p>
          </div>

          {/* Check In */}
          <div className="flex flex-col items-start justify-center flex-1 border-r border-gray-200 px-4">
            <span className="font-medium text-sm">Check In</span>
            <p className="text-sm text-gray-500">Select date</p>
          </div>

          {/* Check Out */}
          <div className="flex flex-col items-start justify-center flex-1 border-r border-gray-200 px-4">
            <span className="font-medium text-sm">Check Out</span>
            <p className="text-sm text-gray-500">Select date</p>
          </div>

          {/* Who */}
          <div className="flex flex-col items-start justify-center flex-1 px-4">
            <span className="font-medium text-sm">Who</span>
            <p className="text-sm text-gray-500">Add guest</p>
          </div>

          {/* Search Icon */}
          <div className="ml-4 text-red-500">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" stroke="#FF5A5F" strokeWidth="2" />
              <path
                d="M21 21L17 17"
                stroke="#FF5A5F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* User menu */}
      {/* <div className="flex items-center gap-2">
        <button className="hidden md:inline px-3 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">Become a Host</button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 12.7c2.21 0 4-1.79 4-4 0-2.21-1.79-4-4-4-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4z" stroke="#222" strokeWidth="2"/><path d="M19.14 19.14A7.963 7.963 0 0012 16c-1.98 0-3.8.72-5.19 1.91" stroke="#222" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <button className="border rounded-full flex items-center gap-2 px-4 py-2 hover:shadow-sm transition-shadow">
          <svg width="18" height="18" fill="none" viewBox="0 0 32 32"><path d="M16 14a4 4 0 100-8 4 4 0 000 8z" fill="#888"/><path d="M16 2.75c-6.186 0-11.25 5.064-11.25 11.25S9.814 25.25 16 25.25 27.25 20.186 27.25 14 22.186 2.75 16 2.75zM16 27c-7.18 0-13-5.485-13-12.25S8.82 2.5 16 2.5 29 7.985 29 14.75 23.18 27 16 27z" fill="#888"/></svg>
          <span className="text-airbnb-black font-semibold text-sm">Profile</span>
        </button>
      </div> */}
    </header>
  );
}

function Banner() {
  return (
    <section className="pt-8 px-4 md:px-4 w-full flex justify-center">
      <div className="rounded-3xl md:rounded-[40px] overflow-hidden w-full max-w-7xl relative ">
        <img
          src="https://ext.same-assets.com/3017561144/2244626118.jpeg"
          alt="Airbnb Hero"
          className="w-full h-[240px] md:h-[380px] object-cover object-center transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center p-6 md:p-12">
          <h1 className="font-bold text-3xl md:text-5xl text-white drop-shadow-lg">
            Find your next stay
          </h1>
          <p className="text-lg md:text-2xl text-white font-medium mt-2 drop-shadow">
            Discover amazing places to stay with Housitize
          </p>
        </div>
      </div>
    </section>
  );
}

function ListingsSection() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-0 mt-10 mb-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6 px-1">
        Guest Favourites in India
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {GuestFav.map((l, i) => (
          <ListingCard key={i} {...l} />
        ))}
      </div>
    </main>
  );
}

function AboutSection() {
  return (
    <div className="testing z-20">
    <section className="max-w-7xl mx-auto  px-6 py-12 md:py-16 lg:py-20  ">
      <h2 className="flex gap-responsive-xl-24 items-center text-center dark:text-white max-w-5xl mx-auto mb-4">
        <span className="border-t border-yellow-500 grow h-0 min-w-50"></span>
        <span className="text-4xl  font-bold px-2">Our Hospitailies</span>
        <span className="border-t border-yellow-500 grow h-0 min-w-50"></span>
      </h2>
      <div className="flex flex-col md:gap-20">
        <div className="grid gap-8 lg:grid-cols-2  items-center py-12">
          {/* Text Content */}
          <div className="max-w-xl ">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700 mb-6">
              <span className="text-[#e2a22b]">Buy</span> Industrial Land &
              Build Your Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for industrial land to buy? We offer prime locations for
              factories, warehouses, and manufacturing units. Invest in the
              perfect space for your growth!
            </p>
          </div>

          {/* Image Collage */}
          <div className="relative grid  grid-cols-6 gap-4  px-4">
            {/* Large Left Image */}
            <div className="col-span-4 h-[450px] relative">
              <Image
                src="/assets/images/industries6.webp"
                alt="Person working on laptop"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Column Images */}
            <div className="col-span-2  flex flex-col gap-5 ">
              <div className="relative h-[215px]">
                <Image
                  src="/assets/images/industries1.webp"
                  alt="People collaborating"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="relative h-[215px]">
                <Image
                  src="/assets/images/industries5.webp"
                  alt="Person using mobile device"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 items-center py-12">
          {/* Image Collage */}
          <div className="relative grid grid-cols-6 gap-4  px-4">
            <div className="rounded-lg overflow-hidden shadow-md w-[330px]">
              <img
                src="/assets/images/industries6.webp"
                alt="Laundry"
                className=" h-[450px]"
              />
            </div>

            <div className="absolute top-28 left-1/2 transform -translate-x-1/3 rounded-lg overflow-hidden shadow-lg border-8 border-white">
              <img
                src="/assets/images/industries1.webp"
                className="w-full h-[220px] object-cover"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700 mb-6">
              <span className="text-[#e2a22b]">Buy</span> Industrial Land &
              Build Your Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for industrial land to buy? We offer prime locations for
              factories, warehouses, and manufacturing units. Invest in the
              perfect space for your growth!
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center py-12">
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700 mb-6">
              <span className="text-[#e2a22b]">Buy</span> Industrial Land &
              Build Your Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for industrial land to buy? We offer prime locations for
              factories, warehouses, and manufacturing units. Invest in the
              perfect space for your growth!
            </p>
          </div>

          {/* Image Collage */}
          <div className="relative grid grid-cols-6 gap-4  px-4">
            {/* Right Column Images */}
            <div className="col-span-2 flex flex-col gap-5 ">
              <div className="relative h-[215px]">
                <Image
                  src="/assets/images/industries1.webp"
                  alt="People collaborating"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="relative h-[215px]">
                <Image
                  src="/assets/images/industries5.webp"
                  alt="Person using mobile device"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="col-span-4 h-[450px] relative">
              <Image
                src="/assets/images/industries6.webp"
                alt="Person working on laptop"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 i`tems-center py-12">
          {/* Image Collage */}
          <div className="relative grid grid-cols-6 gap-4  px-4">
            <div className="">
              <div className="rounded-lg overflow-hidden shadow-md w-[330px]">
                <img
                  src="/assets/images/industries6.webp"
                  alt="Laundry"
                  className=" h-[450px]"
                />
              </div>

              <div className="absolute top-28 left-1/2 transform -translate-x-1/3 rounded-lg overflow-hidden shadow-lg border-8 border-white">
                <img
                  src="/assets/images/industries1.webp"
                  className="w-full h-[220px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-700 mb-6">
              <span className="text-[#e2a22b]">Buy</span> Industrial Land &
              Build Your Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looking for industrial land to buy? We offer prime locations for
              factories, warehouses, and manufacturing units. Invest in the
              perfect space for your growth!
            </p>
          </div>
        </div>


        
      </div>
    </section>
    </div>
  );
}

const logos = [
  "/assets/images/nestle-logo.png",
  "/assets/images/nissan-logo.webp",
  "/assets/images/mercedes-logo.webp",
  "/assets/images/ibm-logo.png",
  "/assets/images/demigod-logo.webp",
  "/assets/images/apple-logo.webp",
];

function Spotlight() {
  return (
    <section className="bg-gray-100 py-16 text-center md:mt-20 mt-10">
      <h2 className="text-4xl font-bold">
        The <span className="text-yellow-600">spotlight</span> on us
      </h2>
      <p className="mt-3 text-lg text-gray-600">
        We don't just make second homes. We make headlines as well.
      </p>

      <div className="py-12 max-w-6xl mx-auto">
        <Marquee gradient={false} speed={40}>
          {logos.map((src, idx) => (
            <div key={idx} className="mx-8">
              <img
                src={src}
                alt={`Logo ${idx}`}
                className="h-16 grayscale opacity-70 hover:opacity-100 transition mix-blend-multiply"
              />
            </div>
          ))}
          {logos.map((src, idx) => (
            <div key={idx} className="mx-8">
              <img
                src={src}
                alt={`Logo ${idx}`}
                className="h-16 grayscale opacity-70 hover:opacity-100 transition mix-blend-multiply"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <button className="mt-10 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-500 transition">
        Read More
      </button>
    </section>
  );
}

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
  slidesToShow: 4,
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

function SliderContent() {
  const slider = useRef<Slider | null>(null);
  return (
    <div className="container py-10 max-w-7xl mx-auto px-6  overflow-hidden">
      <div className="text-center flex flex-col justify-center py-10">
        <h2 className=" text-center dark:text-white  mb-2">
          <span className="text-4xl  font-bold px-2">
            <span className="text-yellow-600">Never</span> a Dull Moment
          </span>
        </h2>
        <p className="text-lg">
          In your story, your stay with us will be the most memorable chapter.
        </p>
      </div>

      <Slider ref={slider} {...secondDivSettings} className=" mx-auto">
        {cardsData.map((card, index) => (
          <div key={index} className="">
            <div className="relative group">
              <div className="w-full h-[300px] relative overflow-hidden">
                <Image
                  fill
                  src={card.imageSrc || "/placeholder.svg"}
                  alt={card.imageAlt}
                  className="object-cover"
                />
                {/* Hover Overlay */}

                <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center h-full bg-gray-800/80 transform translate-y-full opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="mx-auto px-6 text-white/100 mb-4 text-center">
                    {card.description}
                  </div>
                  <div className="flex space-x-4 mb-4 absolute bottom-0">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <Search className="w-4 h-4 text-white" />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <X className="w-4 h-4 text-white" />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function FingerTipsSection (){
    return (
<section className="bg-[#f8ba1c29] px-4">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 py-24 px-6">
    {/* Text Content */}
    <div>
     
      <div className="mb-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Always have us <br />
          <span className="text-yellow-600">at your fingertips</span>
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="h-[40vh] overflow-scroll scrollbar-hide pr-2">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          All payments and dues, in one place
        </h3>
        <div className="h-1 w-10 bg-yellow-600 mb-4" />
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          No running around here and there paying all your bills. While paying,
          tracking and managing your rent and other expenses on your app, the
          only thing that'll move would be your fingertips.
        </p>

        {/* Repeatable Content */}
        {[...Array(2)].map((_, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              All payments and dues, in one place
            </h3>
            <div className="h-1 w-10 bg-yellow-600 mb-4" />
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              No running around here and there paying all your bills. While
              paying, tracking and managing your rent and other expenses on
              your app, the only thing that'll move would be your fingertips.
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Image Content */}
    <div className="relative flex justify-center">
      <div className="absolute bg-yellow-600 w-52 h-52 rounded-full z-0 top-8 left-3/4 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <img
        src="/assets/images/mobile.jpg"
        alt="App Screenshot"
        className="relative z-10 object-cover w-[350px] h-[450px] rounded-lg"
      />
    </div>
  </div>
</section>


    )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfb] font-sans ">
      <Header />
      <SiteFilters />
      <Banner />
      <AboutSection />
      <FingerTipsSection/>
      <SliderContent />
      <Spotlight />

      {/* <ListingsSection /> */}
    </div>
  );
}
