import Image from "next/image";
import Link from "next/link";
import React from "react";

const Loan = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8">
        Explore your home loan options
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-lg h-[400px] group">
          <Image
            fill
            src="/assets/images/homepage-loan1.jpg"
            alt="People looking at home loan options"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link
            href="/"
            className="absolute group bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Home Loans
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              Discover home loans that are easy to apply for and manage, with
              flexible options to suit your needs.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Check Now
            </a>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-lg h-[400px] group">
          <Image
            fill
            src="/assets/images/homepage-loan2.jpg"
            alt="People discussing loan options"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link
            href="/"
            className="absolute group bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Low Interest Rates
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              Take advantage of our competitive low interest rates to make your
              home loan more affordable.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Check Now
            </a>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden rounded-lg h-[400px] group">
          <Image
            fill
            src="/assets/images/homepage-loan3.jpg"
            alt="Person on phone"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link
            href="/"
            className="absolute group bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Approvals
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              Get your home loan approved quickly with our streamlined process
              and dedicated support team.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Check Now
            </a>
          </Link>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden rounded-lg h-[400px] group">
          <Image
            fill
            src="/assets/images/homepage-loan4.jpg"
            alt="Home loan consultation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <Link
            href="/"
            className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Flexible Payment Plans
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              Choose payment plans that fit your budget and lifestyle, making
              home ownership accessible.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Check Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loan;
