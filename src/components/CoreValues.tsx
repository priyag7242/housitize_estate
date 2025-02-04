"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { motion} from "framer-motion";

interface CoreValues {
  number: string;
  title: string;
  description: string;
}

interface Props {
  coreValues: CoreValues[];
}

const CoreValues = ({ coreValues }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl lg:sticky lg:top-32 sm:text-4xl font-normal mb-16">
        Core Values
      </h2>
      <div className="space-y-20">
        {coreValues.map((value) => {
        //   const ref = useRef(null); 
        //   const { scrollYProgress } = useScroll({
        //     target: ref,
        //     offset: ["center center", "center center"],
        //   });

        //   const color = useTransform(
        //     scrollYProgress,
        //     [0.4, 0.5, 0.6], // Scroll range where the color changes
        //     ["#000", "#1D4ED8", "#000"]
        //   );

          return (
            <div key={value.number}>
              <div className="flex flex-col lg:flex-row justify-end items-start">
                <div className="lg:w-2/3">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center lg:items-start">
                    <motion.div
                    //   ref={ref}
                    //   style={{
                    //     scale: scrollYProgress, 
                    //     color: color, 
                    //   }}
                      initial={{ scale: 0.8 }}
                      whileInView={{scale:1}}
                    //   animate={{ scale: 1, opacity: 1 }}
                    //   exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{
                        margin: "-400px"
                    }}
                    >
                      <span className="text-[120px] sm:text-[180px] font-light leading-none mr-12 sm:mr-20 lg:mr-12">
                        {value.number}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl mb-6 text-gray-700">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 tracking-widest text-lg leading-relaxed">
                        {value.description}
                      </p>
                      <Separator className="my-8 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
