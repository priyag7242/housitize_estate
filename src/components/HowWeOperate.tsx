import {
  Search,
  FileCheck,
  Award,
  Shield,
  Home,
  Coins,
  UserCheck,
} from "lucide-react";

const HowWeOperate = () => {
  const steps = [
    { icon: Search, title: "SELECT PROPERTY" },
    { icon: FileCheck, title: "SUBMIT YOUR ENQUIRY" },
    { icon: Award, title: "MEET OUR EXPERT" },
    { icon: Shield, title: "VISIT PROPERTY" },
    { icon: Home, title: "BUY PROPERTY" },
    { icon: Coins, title: "LOAN ASSISTANCE" },
    { icon: UserCheck, title: "CUSTOMER SUPPORT" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-12 pt-12 md:pt-16 lg:pt-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How We Operate
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">360° Framework</p>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-[25px]" />

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon container */}
              <div className="relative mb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-700" />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-sm md:text-sm tracking-wide text-gray-900 leading-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeOperate;
