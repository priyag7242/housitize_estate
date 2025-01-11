// pages/index.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 p-6 h-full bg-white">
      {/* Image 1 (Left-aligned) */}
      <div className="flex justify-start px-4">
        <Image
          src="/assets/images/recent-sales1.jpg"
          alt="Image 1"
          width={300}
          height={200}
          className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Image 2 (Right-aligned) */}
      <div className="flex justify-end px-4">
        <Image
          src="/assets/images/recent-sales1.jpg"
          alt="Image 2"
          width={300}
          height={200}
          className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Image 3 (Left-aligned) */}
      <div className="flex justify-start px-4">
        <Image
          src="/assets/images/recent-sales1.jpg"
          alt="Image 3"
          width={300}
          height={200}
          className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Image 4 (Right-aligned) */}
      <div className="flex justify-end px-4">
        <Image
          src="/assets/images/recent-sales1.jpg"
          alt="Image 4"
          width={300}
          height={200}
          className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Image 5 (Left-aligned) */}
      <div className="flex justify-start px-4">
        <Image
          src="/assets/images/recent-sales1.jpg"
          alt="Image 5"
          width={300}
          height={200}
          className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
