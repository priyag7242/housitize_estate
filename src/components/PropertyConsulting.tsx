"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    number: 1,
    title: "Discover Needs",
    description:
      "We understand your vision, preferences, and budget to provide personalized property solutions",
  },
  {
    number: 2,
    title: "Analyze Market",
    description:
      "Get expert insights on market trends, pricing, and the best investment opportunities",
  },
  {
    number: 3,
    title: "Evaluate Options",
    description:
      "We assess properties based on value, location, and future potential to match your goals",
  },
  {
    number: 4,
    title: "Smart Strategies",
    description:
      "Receive strategic advice on buying, selling, or investing for maximum returns",
  },
  {
    number: 5,
    title: "Seamless Decisions",
    description:
      "We guide you through negotiations, paperwork, and final choices with confidence",
  },
];

const PropertyConsulting = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 m-24">
          <Image
            layout="responsive"
            width={300}
            height={300}
            src="/assets/images/the-way-we-work.webp"
            alt="The we work image"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Expert Property Consulting
            </h2>
            <p className="text-gray-600">
              Transforming your real estate dreams into reality with precision
              and expertise.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between max-w-2xl md:border-none">
              {steps.map((step, index) => (
                <div key={step.number}>
                  <div className="relative flex flex-col items-center space-y-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors duration-300 ${
                        activeStep === index
                          ? "bg-rose-200 text-rose-700"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div
                      className={`hidden md:block text-[14px] text-center  ${
                        activeStep === index ? "text-gray-800" : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </div>
                    {/* {index < steps.length - 1 && (
                      <div className="absolute h-[1px] bg-gray-200 w-12 -z-10 translate-x-[60px]" />
                    )} */}
                  </div>
                </div>
              ))}
              <div className="hidden xl:block absolute h-[1px] bg-gray-200 w-[500px] translate-x-[35px] -translate-y-[15px]  -z-10" />
            </div>

            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyConsulting;
