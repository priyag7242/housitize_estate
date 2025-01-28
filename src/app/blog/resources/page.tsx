"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
const categories = [
  { id: "all", label: "All" },
  { id: "build", label: "Build Your Presence" },
  { id: "inside", label: "Inside DG" },
  { id: "marketing", label: "Marketing & Branding" },
  { id: "lead", label: "Lead Generation" },
  { id: "best", label: "Best Practices" },
  { id: "trending", label: "Trending Topics" },
  { id: "video", label: "Video" },
  { id: "podcasts", label: "Podcasts" },
];

const secondDivItems = [
  {
    id: "0",
    image: "/assets/images/blog-inside-dg.png",
    tags: ["INTRODUCTION", "WELCOME"],
    title: "Welcome to Our Real Estate Blog",
    description:
      "Discover valuable insights, tips, and resources to help you succeed in the real estate industry. Stay tuned for the latest updates and expert advice.",
    link: "/welcome",
    category: "all",
  },
  {
    id: "1",
    image: "/assets/images/blog-build-your-presence.png",
    tags: ["AGENT WEBSITES", "MARKETING"],
    title:
      "The Luxury Presence Playbook for Building the Perfect Agent Website",
    description:
      "As a real estate agent, your website is your digital business card—it's how you introduce yourself to potential clients online and market your listings...",
    link: "/playbook",
    category: "build",
  },
  {
    id: "2",
    image: "/assets/images/blog-inside-dg.png",
    tags: ["INSIDE LP", "NEWS"],
    title: "Luxury Presence Announces New Features",
    description:
      "Stay updated with the latest product updates and company news from Luxury Presence...",
    link: "/news",
    category: "inside",
  },
  {
    id: "3",
    image: "/assets/images/blog-marketing.jpg",
    tags: ["MARKETING", "BRANDING"],
    title: "Top 10 Marketing Strategies for Real Estate Agents",
    description:
      "Discover the most effective marketing strategies to boost your real estate business...",
    link: "/marketing-strategies",
    category: "marketing",
  },
  {
    id: "4",
    image: "/assets/images/blog-lead.jpg",
    tags: ["LEAD GENERATION", "TIPS"],
    title: "How to Generate More Leads in Real Estate",
    description:
      "Learn the best techniques for generating and converting leads in the real estate industry...",
    link: "/lead-generation",
    category: "lead",
  },
  {
    id: "5",
    image: "/assets/images/blog-marketing.jpg",
    tags: ["BEST PRACTICES", "GUIDELINES"],
    title: "Best Practices for Real Estate Agents",
    description:
      "Stay updated with industry-leading best practices and guidelines for real estate agents...",
    link: "/best-practices",
    category: "best",
  },
  {
    id: "6",
    image: "/assets/images/blog-build-your-presence.png",
    tags: ["TRENDING TOPICS", "TRENDS"],
    title: "Trending Topics in Real Estate",
    description:
      "Keep up with the latest trends and developments in the real estate industry...",
    link: "/trending-topics",
    category: "trending",
  },
  {
    id: "7",
    image: "/assets/images/blog-marketing.jpg",
    tags: ["VIDEO", "CONTENT"],
    title: "Educational Videos for Real Estate Agents",
    description:
      "Access our library of educational and informative video content for real estate agents...",
    link: "/videos",
    category: "video",
  },
  {
    id: "8",
    image: "/assets/images/blog-inside-dg.png",
    tags: ["PODCASTS", "DISCUSSIONS"],
    title: "Podcasts for Real Estate Professionals",
    description:
      "Listen to insights and discussions from industry experts in our podcast series...",
    link: "/podcasts",
    category: "podcasts",
  },
];

const heroContent = {
  all: {
    title: "All Resources",
    description: "Explore our complete collection of resources and insights.",
  },
  build: {
    title: "Build Your Presence",
    description:
      "Learn how to establish and grow your digital presence effectively.",
  },
  inside: {
    title: "Inside LP",
    description:
      "Get details on all the latest product updates, company news, and industry accolades at Luxury Presence.",
  },
  marketing: {
    title: "Marketing & Branding",
    description:
      "Discover strategies to enhance your marketing and brand presence.",
  },
  lead: {
    title: "Lead Generation",
    description:
      "Learn effective techniques for generating and converting leads.",
  },
  best: {
    title: "Best Practices",
    description:
      "Stay updated with industry-leading best practices and guidelines.",
  },
  trending: {
    title: "Trending Topics",
    description:
      "Keep up with the latest trends and developments in the industry.",
  },
  video: {
    title: "Video Content",
    description:
      "Access our library of educational and informative video content.",
  },
  podcasts: {
    title: "Podcasts",
    description: "Listen to insights and discussions from industry experts.",
  },
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-[45vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
        <Image
          src="/assets/images/blog-hero.jpeg"
          alt="Blog Hero Image"
          layout="fill"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
            {heroContent[activeCategory as keyof typeof heroContent].title}
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl">
            {
              heroContent[activeCategory as keyof typeof heroContent]
                .description
            }
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="w-full bg-[#f9ede07b] border-b border-gray-200 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Second div */}
      <div className="bg-[#f9ede07b]">
        <div className="max-w-7xl  mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Column */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={
                  secondDivItems.find(
                    (item) => item.category === activeCategory
                  )?.image || ""
                }
                alt={
                  secondDivItems.find(
                    (item) => item.category === activeCategory
                  )?.title || ""
                }
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {secondDivItems
                  .find((item) => item.category === activeCategory)
                  ?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#d3c9b8] text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                {secondDivItems.find((item) => item.category === activeCategory)
                  ?.title || ""}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600">
                {secondDivItems.find((item) => item.category === activeCategory)
                  ?.description || ""}
              </p>

              {/* Read More Link */}
              <Link
                href={
                  secondDivItems.find(
                    (item) => item.category === activeCategory
                  )?.link || "#"
                }
                className="inline-flex bg-[#DCC59F] w-fit px-4 py-2 rounded-full items-center text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
