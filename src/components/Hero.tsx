import React from "react";

const Hero = () => {
  return (
    <div className="object-cover w-full">
      <div className="bg-slate-600 h-screen w-full  ">
        <video
          src="/assets/hero.mp4"
          autoPlay
          muted
          loop
          className="opacity-50 w-full h-full min-w-full min-h-full absolute top-0 left-0 object-cover"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="mb-16 translate-y-16">
            <h5
              className="mb-8 max-w-3xl text-lg md:text-xl text-white tracking-wide"
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              DISCOVER THE FUTURE OF REAL ESTATE
            </h5>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wider"
              style={{ fontFamily: "Avenir, sans-serif" }}
            >
              FINEST REAL ESTATE
            </h1>
          </div>

          {/* Bottom Navigation */}
          {/* <div className="flex flex-row translate-y-40 items-center justify-center gap-8 md:gap-16">
            {[
              { num: "01", text: "HOUSE" },
              { num: "02", text: "LAND" },
              { num: "03", text: "SCHOOLS" },
              { num: "04", text: "DEMOTEXT" },
              { num: "05", text: "AGAINTEXT" },
            ].map((item) => (
              <div
                key={item.text}
                className="group relative pb-10 py-10 flex flex-col items-center gap-3 text-white hover:text-gray-300 transition-colors"
                style={{ fontFamily: "Avenir, sans-serif" }}
              >
                <div className="flex divide-x-2 items-center gap-3 group-hover:translate-y-[-30px] transition-transform duration-300">
                  <span className="text-sm opacity-75">{item.num}</span>
                  <span className="text-2xl px-4 tracking-wider">
                    {item.text}
                  </span>
                </div>
                <button className="view-button hover:bg-white border-2 hover:text-black border-white w-28 opacity-0 group-hover:opacity-100 px-4 py-2 transition-opacity duration-300 text-xs mt-2">
                  VIEW
                </button>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
