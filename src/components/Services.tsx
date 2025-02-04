import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HandCoins,
  HousePlus,
  PackageOpen,
  Palette,
  Scale,
  ScrollText,
  UserSearch,
  UsersRound,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    icon: HandCoins,
    title: "Home Loan",
    description: "Secure the best home loan deals and offers available.",
  },
  {
    icon: Palette,
    title: "Home Interior",
    description:
      "Transform your home with our expert interior design services.",
  },
  {
    icon: UsersRound,
    title: "Architect / Architecture",
    description:
      "Professional architectural services to design your dream home.",
  },
  {
    icon: PackageOpen,
    title: "Packers / Movers",
    description: "Reliable packers and movers for a hassle-free relocation.",
  },
  {
    icon: ScrollText,
    title: "Property Management",
    description: "Comprehensive property management services for landlords.",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Trusted legal services for all your property needs.",
  },
  {
    icon: HousePlus,
    title: "Sell / Rent Property",
    description: "Efficient services to help you sell or rent your property.",
  },
  {
    icon: UserSearch,
    title: "Property Consultants",
    description: "Accurate property valuation services by experienced experts.",
  },
];

const Services = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-thin text-slate-900">
              Real Estate Services
            </h2>
            <p className="text-xl text-slate-600">
              Your satisfaction is our priority with unmatched service offerings
            </p>
            <Button className="group" size="lg">
              Explore our services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Top Right side */}
          <div className="relative shadow-2xl overflow-hidden">
            <div className="relative aspect-video overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  src="/assets/service-video.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full absolute inset-0 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* services */}
        <div className="relative p-6">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 text-green-800 tracking-wide">
            Our Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mx-4">
            {services.map((service, index) => (
              <div key={index} className="">
                <Card className="hover:shadow-lg  hover:scale-110 transition duration-300 h-full">
                  <CardContent className="p-0">
                    <Link
                      href="/"
                      className="relative group overflow-hidden p-6 flex flex-col items-start justify-between h-48"
                    >
                      <div>
                        <h3 className="mb-1 text-base text-gray-900 text-start">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                      <Button className="bg-green-700 text-white group-hover:bg-green-800">
                        Read More
                      </Button>
                      <div className=" absolute bottom-0 right-0 translate-x-20 translate-y-20 rounded-full bg-gray-200 pr-24 pb-24 pl-8 pt-8">
                        <service.icon className="h-14 w-14 text-green-800" />
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
