import Image from "next/image";
import Link from "next/link";

const Features = () => {
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
              className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-light uppercase tracking-wider text-white">
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
              className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-light uppercase tracking-wider text-white">
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
              className="object-cover opacity-80 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-light uppercase tracking-wider text-white">
              AI Chatbot
            </h3>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default Features;
