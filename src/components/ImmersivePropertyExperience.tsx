import { Button } from "@/components/ui/button";
import { ArrowRight, Glasses, Play } from "lucide-react";
import Link from "next/link";

const ImmersivePropertyExperience = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-thin text-slate-900">
              Experience Properties Like Never Before
            </h2>
            <p className="text-xl text-slate-600">
              Take a virtual walk through your dream home from anywhere.
            </p>
            <Button className="group" size="lg">
              Experience Virtual Tours
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* AR/VR */}
          <Link href="/" className="group relative shadow-2xl overflow-hidden">
            <div className="relative aspect-video bg-slate-200  overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="absolute inset-0 flex items-center justify-center">
                <Glasses className="h-24 w-24 text-slate-400" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm rounded p-4">
                <p className="text-sm font-medium text-slate-900">
                  Interactive AR/VR Demo
                </p>
                <p className="text-xs text-slate-600">
                  Click to explore a sample virtual property tour
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Features and Video Section */}
        <div className="mt-16 bg-graybackground px-4 py-4 sm:px-8 sm:py-8 md:px-10 md:py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="grid grid-cols-1 gap-8">
            {[
              "360° Tours",
              "AR Furniture Placement",
              "VR Walkthroughs",
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature}
                </h3>
                <p className="text-slate-600">
                  Experience cutting-edge technology for immersive property
                  viewing.
                </p>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                How to Use AR/VR Feature
              </h3>
              <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <Button variant="outline" size="icon" className="rounded-full w-16 h-16">
                    <Play className="h-8 w-8" />
                    <span className="sr-only">Play video</span>
                  </Button>
                </div>
                <video
                  src="/assets/ar-vr-video.mp4"
                  loop
                  className=" w-full h-full min-w-full min-h-full absolute top-0 left-0 object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Watch this quick tutorial to learn how to make the most of our
                AR/VR features for your property search.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmersivePropertyExperience;
