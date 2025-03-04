import Image from "next/image";
import { useState } from "react";

const ArchitectureSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    | "architecture"
    | "sustainableDesign"
    | "urbanPlanning"
    | "historicPreservation"
    | "constructionTech"
    | "collaboration"
  >("architecture");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const architecture = {
    title: "Constructive culture, urban development and efficiency",
    description:
      "The value of architecture at DEMIGOD lies not only in its dialogue with modern art, the recovery and reconversion of industrial spaces and research into new materials, but also in reflection and study on current and future challenges in this discipline. Consequently, DEMIGOD promotes debates, organises professional encounters, conferences and receives visits with the aim of generating and sharing value.",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sustainableDesign = {
    title: "Innovative Design and Sustainable Solutions",
    description:
      "At DEMIGOD, we prioritize innovative design and sustainable solutions that not only meet the aesthetic and functional needs of our clients but also contribute to the well-being of our environment. Our approach integrates cutting-edge technology with eco-friendly practices to create spaces that are both beautiful and responsible.",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heading2 = {
    title: "Urban Planning and Community Development",
    description:
      "Our urban planning initiatives focus on creating vibrant, inclusive communities that foster social interaction and economic growth. We work closely with local stakeholders to ensure that our projects meet the needs of the community and contribute to the overall quality of life.",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heading3 = {
    title: "Historical Preservation and Adaptive Reuse",
    description:
      "We are committed to preserving the historical and cultural heritage of our cities. Our adaptive reuse projects breathe new life into old buildings, transforming them into functional spaces while maintaining their historical significance.",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heading4 = {
    title: "Innovative Construction Techniques",
    description:
      "Our team is at the forefront of innovative construction techniques, utilizing the latest technologies and materials to deliver high-quality, sustainable buildings. We continuously explore new methods to improve efficiency, reduce costs, and minimize environmental impact.",
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const heading5 = {
    title: "Collaborative Design Process",
    description:
      "We believe that the best designs emerge from c</div>ollaboration. Our design process involves close collaboration with clients, stakeholders, and multidisciplinary teams to ensure that every</div> project meets the highest standards of excellence and functionality.",
  };

  return (
    <section className="w-full">
      {/* Hero section with background image */}
      <div className="flex pt-20">
        <div className="relative h-[100px] md:h-[175px] w-full sm:max-w-5xl bg-[#4A4A4A] flex items-center justify-center px-6 md:px-12">
          <h1 className="text-white max-w-lg sm:max-w-3xl text-start text-3xl md:text-4xl lg:text-5xl font-medium ">
            {eval(activeCategory).title}
          </h1>
        </div>
        <Image
          width={200}
          height={200}
          src="/assets/images/homepage-architecture.png"
          alt="bg image"
          className="hidden md:block flex-1 object-cover"
        />
      </div>

      {/* Content section */}
      <div className="flex justify-center bg-[#C4C4C4]">
        <div className=" px-6 md:px-12 py-24 flex flex-col md:flex-row gap-3">
          {/* Vertical text */}
          <div className="md:w-16">
            <p className="text-gray-500 text-xl md:vertical-rl md:-rotate-90 w-fit transform md:h-full">
              ARCHITECTURE
            </p>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col md:flex-row gap-12">
            <div className="md:max-w-2xl">
              <p className="text-gray-800 text-lg leading-relaxed">
                {eval(activeCategory).description}
              </p>
            </div>

            {/* side tabs */}
            <div className="space-y-4">
              <div
                onClick={() => setActiveCategory("architecture")}
                className={`flex items-center cursor-pointer hover:text-gray-700 transition-colors ${
                  activeCategory === "architecture"
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                <span className="mr-2">→</span>
                <span>Architecture</span>
              </div>
              <div
                onClick={() => setActiveCategory("sustainableDesign")}
                className={`flex items-center cursor-pointer hover:text-gray-700 transition-colors ${
                  activeCategory === "sustainableDesign"
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                <span className="mr-2">→</span>
                <span>sustainableDesign</span>
              </div>
              <div
                onClick={() => setActiveCategory("urbanPlanning")}
                className={`flex items-center cursor-pointer hover:text-gray-700 transition-colors ${
                  activeCategory === "urbanPlanning"
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                <span className="mr-2">→</span>
                <span>urbanPlanning</span>
              </div>
              <div
                onClick={() => setActiveCategory("historicPreservation")}
                className={`flex items-center cursor-pointer hover:text-gray-700 transition-colors ${
                  activeCategory === "historicPreservation"
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                <span className="mr-2">→</span>
                <span>historicPreservation</span>
              </div>
              <div
                onClick={() => setActiveCategory("constructionTech")}
                className={`flex items-center cursor-pointer hover:text-gray-700 transition-colors ${
                  activeCategory === "constructionTech"
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                <span className="mr-2">→</span>
                <span>constructionTech</span>
              </div>
              <div
                onClick={() => setActiveCategory("collaboration")}
                className={`flex items-center cursor-pointer hover:text-gray-700 transition-colors ${
                  activeCategory === "collaboration"
                    ? "text-gray-700"
                    : "text-gray-500"
                }`}
              >
                <span className="mr-2">→</span>
                <span>collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
