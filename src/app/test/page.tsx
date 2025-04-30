import TypeWriterText from "@/components/reusable-component/TypeWriterText";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  ChevronDown,
  ChevronUp,
  FileText,
  HomeIcon,
  Search,
} from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const services = [
    { icon: <HomeIcon />, label: "Buy", link: "" },
    { icon: <HomeIcon className="fill-white" />, label: "Rent", link: "" },
    { icon: <FileText />, label: "Sell", link: "" },
    { icon: <Building />, label: "Explore more", link: "/services" },
  ];

  const [activeTab, setActiveTab] = useState("Buy");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMiniDropdownOpen, setIsMiniDropdownOpen] = useState(false);

  const propertyTypes = [
    "Office",
    "Retail",
    "Warehouse",
    "Store",
    "Multiplex",
    "Industrial",
    "Co-working",
    "Showroom",
    "Factory",
    "Commercial Land",
    "Other",
  ];

  return (
    <section>
      <div className="h-[80dvh] bg-[#f9fdfc]   flex flex-col gap-2 justify-center items-center p-8 relative ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/assets/hero-vid3.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20" />

        <div className="relative z-50 ">
          <div className="text-center mb-5 ">
            <h1 className="text-5xl font-bold mb-2 text-white">
              <TypeWriterText text={"Find Anything Real Estate."} speed={50} />
            </h1>
            <p className="text-lg font-medium text-white">
              No Middlemen. Just Results.
            </p>
            <p className=" text-white ">
              Explore homes, offices, PGs, legal help, interiors, and more.
            </p>
          </div>

          {/* <div className="flex gap-6  flex-wrap justify-center z-20">
        {services.map((service) => (
          <div
            key={service.label}
            className="flex flex-col items-center gap-2 text-center hover:-translate-y-1.5 transition-all duration-200 ease-in cursor-pointer"
          >
           <Link href={service.link}> <div className="bg-teal-600 hover:bg-teal-500 text-white p-3 rounded-full">
              {service.icon}
            </div> </Link>
            <span className="text-sm font-medium">{service.label}</span>
          </div>
        ))}
      </div> */}

          <div className=" w-full max-w-4xl ">
            <div className="rounded-lg bg-white p-4 shadow-2xl">
              {/* Navigation Tabs */}
              <div className="mb-4 flex flex-wrap gap-8 border-b">
                {["Buy", "Rent", "New Launch", "Commercial", "Projects"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 text-sm transition-colors tracking-wider
                  ${
                    activeTab === tab
                      ? "border-b-2 border-orange-500 text-black"
                      : "text-gray-600"
                  }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              {/* Search Bar */}
              <div className="flex flex-wrap items-center gap-4 ">
                <div className="relative flex">
                  {(activeTab === "Buy" || activeTab === "Rent") && (
                    <Button
                      variant="outline"
                      className="w-fit justify-center text-gray-600"
                      onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                        setIsMiniDropdownOpen(false);
                      }}
                    >
                      Property Types
                      {!isDropdownOpen && (
                        <span className="ml-2">
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      )}
                      {isDropdownOpen && (
                        <span className="ml-2">
                          <ChevronUp className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  )}
                  {activeTab === "New Launch" && (
                    <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                      Commercial
                    </div>
                  )}
                  {activeTab === "Commercial" && (
                    <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                      All Commercial
                    </div>
                  )}
                  {activeTab === "Projects" && (
                    <div className="py-2 px-4 text-sm border rounded-md text-gray-600">
                      All Projects
                    </div>
                  )}

                  {/* Property Types Dropdown */}
                  {isDropdownOpen &&
                    (activeTab === "Buy" || activeTab === "Rent") && (
                      <div className="absolute top-full left-0 z-50 mt-2 w-[50vw] rounded-md border bg-white p-4 shadow-lg">
                        {!isMiniDropdownOpen && (
                          <div className="">
                            <button className="w-fit absolute top-[10px] right-[15px] text-base border-none shadow-none hover:bg-transparent text-orange-600 hover:text-orange-700 bg-transparent  px-2 py-0 m-0 ">
                              Clear
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6">
                              {propertyTypes.map((type) => (
                                <div
                                  key={type}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox id={type} />
                                  <label
                                    htmlFor={type}
                                    className="text-sm text-gray-600"
                                  >
                                    {type}
                                  </label>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 text-sm text-gray-800">
                              Looking for residential properties?
                              <a
                                href="/residential"
                                className="text-orange-600 ml-2 hover:underline"
                              >
                                Click here
                              </a>
                            </div>
                            <Separator className="my-3" />
                          </div>
                        )}
                      </div>
                    )}
                </div>

                <div className="flex flex-1 items-center gap-2 rounded-md border px-3">
                  <Search className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search location..."
                    className="flex-1 py-2 outline-none text-gray-700"
                  />
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-black/40 backdrop-blur-md  rounded-t-full gap-1 px-6 py-1.5 dark:text-white text-white text-sm absolute -bottom-1 border border-white/10 
      shadow-lg flex items-center"
        >
          <div className="relative animate-bounce-slow">
            <img
              src="/assets/images/diamond.svg"
              className="h-2.5 animate-glow"
            />
            <img
              src="/assets/images/diamond.svg"
              className="absolute -left-2 h-1.5 animate-glow"
            />
          </div>
          Are you a Property Owner?{" "}
          <a className="font-semibold hover:underline" href="#">
            Sell / Rent for FREE
          </a>
        </div>

        <div className="absolute -bottom-10 left-0 right-0 z-40">
          <svg
            data-v-1b274456=""
            viewBox="0 0 1440 320"
            className="absolute bottom-[-1px] left-0 w-full z-0"
          >
            <path
              data-v-1b274456=""
              fill="#ffffff"
              d="M0,224L80,208C160,192,320,160,480,176C640,192,800,256,960,266.7C1120,277,1280,235,1360,213.3L1440,192V320H0Z"
            ></path>
          </svg>

          <Button className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:border hover:border-yellow-600 absolute bottom-20 left-[16%]">
            Download NewsLetter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
