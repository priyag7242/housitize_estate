"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsRight, X } from "lucide-react";
import ContactPopup from "./ContactPopup";
import Link from "next/link";

const Loan = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ContactPopup
        isContactPopupOpen={isContactPopupOpen}
        setIsContactPopupOpen={setIsContactPopupOpen}
      />
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Video Player Container */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-blue-600">
          <ReactPlayer
            url="/assets/loan-video.mp4"
            width="100%"
            height="100%"
            controls={true}
            light={false}
            playing={true}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                  disablePictureInPicture: true,
                },
              },
            }}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl text-gray-800 sm:text-4xl font-bold tracking-tight">
              Realize your Home Dream with our{" "}
              <span className="text-green-700">Home Loans!</span>
            </h1>
          </div>

          <ul className="space-y-4">
            {[
              "Customized Repayment Plans",
              "Low-Interest Rates",
              "Expert Guidance",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 flex-none text-green-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <circle cx="10" cy="10" r="10" opacity="0.1" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-relaxed">
            Make your dream home a reality with our home loan services. Enjoy
            low interest rates and flexible EMIs to suit your needs.
          </p>
          <div className="flex gap-8 items-center justify-start">
            <div
              onClick={() => setOpen(true)}
              className="text-base border-[2px] border-gray-700 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-white hover:text-gray-800 hover:cursor-pointer"
            >
              GET QUOTE{" "}
            </div>
            <Link
              href="/loan"
              className="flex items-center group hover:cursor-pointer text-green-800 underline"
            >
              Know More{" "}
              <ChevronsRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
            </Link>
          </div>

          {/* popup */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[600px] p-0">
              <DialogHeader className="p-6 pb-0">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </button>
                <DialogTitle className="text-2xl sm:text-3xl font-bold">
                  Unlock Best{" "}
                  <span className="text-green-700">Home Loan Offers</span>
                  <div className="text-xl sm:text-2xl font-normal mt-1">
                    From 10+ Lenders
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="p-6 pt-4 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    type="number"
                    placeholder="Required Loan Amount"
                    className="rounded-md border-gray-300"
                  />
                  <Input
                    type="number"
                    placeholder="Monthly Net Salary"
                    className="rounded-md border-gray-300"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Select>
                    <SelectTrigger className="rounded-md border-gray-300">
                      <SelectValue placeholder="Occupation Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salaried">Salaried</SelectItem>
                      <SelectItem value="self-employed">
                        Self Employed Professional
                      </SelectItem>
                      <SelectItem value="business">Business Owner</SelectItem>
                      <SelectItem value="partner">Partner</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="rounded-md border-gray-300">
                      <SelectValue placeholder="Choose Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" className="mt-1" />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I hereby appoint Demigod Real Estate as my authorised
                    representative to receive my credit information from CIBIL.
                    I hereby accept terms & conditions.{" "}
                  </label>
                </div>

                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-6 rounded-md text-lg">
                  Get Quotes →
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>

    // Earlier loan div structure
    // <div className="container mx-auto px-4 py-8">
    //   <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8">
    //     Explore your home loan options
    //   </h2>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //     {/* Card 1 */}
    //     <div className="relative overflow-hidden rounded-lg h-[400px] group">
    //       <Image
    //         fill
    //         src="/assets/images/homepage-loan1.jpg"
    //         alt="People looking at home loan options"
    //         className="absolute inset-0 w-full h-full object-cover"
    //       />
    //       <Link
    //         href="/"
    //         className="absolute group bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
    //       >
    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //           Easy Home Loans
    //         </h3>
    //         <p className="text-gray-600 mb-3 text-sm">
    //           Discover home loans that are easy to apply for and manage, with
    //           flexible options to suit your needs.
    //         </p>
    //         <a
    //           href="#"
    //           className="text-blue-600 hover:text-blue-700 font-medium"
    //         >
    //           Check Now
    //         </a>
    //       </Link>
    //     </div>

    //     {/* Card 2 */}
    //     <div className="relative overflow-hidden rounded-lg h-[400px] group">
    //       <Image
    //         fill
    //         src="/assets/images/homepage-loan2.jpg"
    //         alt="People discussing loan options"
    //         className="absolute inset-0 w-full h-full object-cover"
    //       />
    //       <Link
    //         href="/"
    //         className="absolute group bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
    //       >
    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //           Low Interest Rates
    //         </h3>
    //         <p className="text-gray-600 mb-3 text-sm">
    //           Take advantage of our competitive low interest rates to make your
    //           home loan more affordable.
    //         </p>
    //         <a
    //           href="#"
    //           className="text-blue-600 hover:text-blue-700 font-medium"
    //         >
    //           Check Now
    //         </a>
    //       </Link>
    //     </div>

    //     {/* Card 3 */}
    //     <div className="relative overflow-hidden rounded-lg h-[400px] group">
    //       <Image
    //         fill
    //         src="/assets/images/homepage-loan3.jpg"
    //         alt="Person on phone"
    //         className="absolute inset-0 w-full h-full object-cover"
    //       />
    //       <Link
    //         href="/"
    //         className="absolute group bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
    //       >
    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //           Fast Approvals
    //         </h3>
    //         <p className="text-gray-600 mb-3 text-sm">
    //           Get your home loan approved quickly with our streamlined process
    //           and dedicated support team.
    //         </p>
    //         <a
    //           href="#"
    //           className="text-blue-600 hover:text-blue-700 font-medium"
    //         >
    //           Check Now
    //         </a>
    //       </Link>
    //     </div>

    //     {/* Card 4 */}
    //     <div className="relative overflow-hidden rounded-lg h-[400px] group">
    //       <Image
    //         fill
    //         src="/assets/images/homepage-loan4.jpg"
    //         alt="Home loan consultation"
    //         className="absolute inset-0 w-full h-full object-cover"
    //       />
    //       <Link
    //         href="/"
    //         className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg"
    //       >
    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //           Flexible Payment Plans
    //         </h3>
    //         <p className="text-gray-600 mb-3 text-sm">
    //           Choose payment plans that fit your budget and lifestyle, making
    //           home ownership accessible.
    //         </p>
    //         <a
    //           href="#"
    //           className="text-blue-600 hover:text-blue-700 font-medium"
    //         >
    //           Check Now
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Loan;
