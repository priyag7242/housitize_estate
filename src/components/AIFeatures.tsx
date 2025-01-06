import Image from "next/image";
import Link from "next/link";

const AIFeatures = () => {
  return (
    <main className="min-h-screen w-full bg-white px-10 py-28 md:px-8 lg:px-16">
      {/* Header Section */}
      <section className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-sm uppercase tracking-widest  text-gray-500">
          Elevating the Beauty & Business of Real Estate
        </h2>

        <h1 className="mb-12 text-3xl font-thin uppercase tracking-wider text-gray-700 md:text-4xl lg:text-5xl">
          Revolutionizing Real Estate
        </h1>

        <p className="mx-auto mb-16 max-w-4xl text-center text-gray-600 md:text-base">
          Unlock the future of real estate with AI-powered recommendations,
          immersive AR/VR property tours, and tailored insights designed to make
          your dream home search seamless and exciting
        </p>
      </section>

      {/* Image Cards Section */}
      <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/" className="group relative shadow-2xl overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src="/assets/images/ai-assistant4.jpg"
              alt="Exclusive Listings"
              fill
              className="object-cover opacity-80 group-hover:opacity-70 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-light uppercase tracking-wider text-white transition-transform duration-300 group-hover:-translate-y-20">
              Dynamic Recommendations
            </h3>
          </div>
        </Link>

        <Link href="/" className="group relative shadow-2xl overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src="/assets/images/trend-graph.jpg"
              alt="Property Trends"
              fill
              className="object-cover opacity-80 group-hover:opacity-70 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-light uppercase tracking-wider text-white transition-transform duration-300 group-hover:-translate-y-20">
              Property Trends
            </h3>
          </div>
        </Link>

        <Link href="/" className="group relative shadow-2xl overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src="/assets/images/ai-chatbot.jpg"
              alt="AI Chatbot"
              fill
              className="object-cover opacity-80 group-hover:opacity-70 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-light uppercase tracking-wider text-white transition-transform duration-300 group-hover:-translate-y-20 ">
              AI Chatbot
            </h3>
          </div>
        </Link>
      </section>

      {/*bottom ratings and statistics*/}
      <div className="w-full py-12 mt-24 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {/* Years of existence */}
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-light text-gray-600">
                  22
                </span>
                <span className="mt-2 text-sm text-gray-500">
                  years of existence
                </span>
              </div>

              {/* buyer's satisfaction */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <span className="text-4xl lg:text-5xl font-light text-gray-600">
                    4.85
                  </span>
                  <span className="text-4xl lg:text-5xl font-light text-gray-600">
                    /5
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="mt-2 text-sm text-gray-500">
                  buyer satisfaction 2023-2024
                </span>
              </div>

              {/* some text */}
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-light text-gray-600">
                  100%
                </span>
                <span className="mt-2 text-sm text-gray-500">
                  some demo text 
                </span>
              </div>

              {/* Property */}
              <div className="flex flex-col items-center">
                <span className="text-4xl lg:text-5xl font-light text-gray-600">
                  190
                </span>
                <span className="mt-2 text-sm text-gray-500">properties</span>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
};

export default AIFeatures;
