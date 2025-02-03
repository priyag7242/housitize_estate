import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bath,
  HousePlus,
  LeafyGreen,
  PackageOpen,
  Palette,
  Scale,
  ScrollText,
  Sun,
  UsersRound,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: LeafyGreen,
    title: "Eco-Infra Tech",
  },
  {
    icon: HousePlus,
    title: "Next Gen. Housing",
  },
  {
    icon: Palette,
    title: "Interior & Decor",
  },
  {
    icon: Sun,
    title: "Solar Rooftop",
  },
  {
    icon: UsersRound,
    title: "Architect",
  },
  {
    icon: PackageOpen,
    title: "Packers/Movers",
  },
  {
    icon: ScrollText,
    title: "Property Management",
  },
  {
    icon: Bath,
    title: "Sanitary & Bathroom Fittings",
  },
  {
    icon: Scale,
    title: "Legal Services",
  },
];

const ImmersivePropertyExperience = () => {
  const servicesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-thin text-slate-900">
              Unmatched Services for Every Client
            </h2>
            <p className="text-xl text-slate-600">
              Your satisfaction is our priority with unmatched service offerings
            </p>
            <Button className="group" size="lg">
              Explore our services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* AR/VR */}
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
        <div className="relative bg-gray-100 p-6">
          <Slider
            {...servicesSettings}
            className="featured-categories-slider -mx-4"
          >
            {services.map((service, index) => (
              <div key={index} className="px-4">
                <Card className="transition-shadow hover:shadow-lg h-full">
                  <CardContent className="flex flex-col items-center p-6 h-48">
                    <div className="mb-4 rounded-full bg-gray-100 p-6">
                      <service.icon className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="mb-1 text-base text-gray-900 text-center">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImmersivePropertyExperience;
