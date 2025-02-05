"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Intro Card */}
          <div className="bg-emerald-50 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Complete Interior Services
              </h2>
              <p className="text-gray-600 mb-6">
                Transforming spaces with stunning designs, meticulous attention
                to detail, and unparalleled customer service, we turn your
                dreams into reality.
              </p>
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="inline-flex group w-fit hover:cursor-pointer items-center text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              KNOW MORE
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition duration-300" />
            </div>
          </div>

          {/* We Design */}
          <div className="text-center p-6">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/images/interior-design.svg"
                alt=""
                width={150}
                height={150}
                className="h-32 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">We Design</h3>
            <p className="text-gray-600">
              Our expert designers craft dream homes, chic kitchens, and stylish
              storage solutions that reflect your unique vision.
            </p>
          </div>

          {/* We Execute */}
          <div className="text-center p-6">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/images/interior-execute.svg"
                alt=""
                width={150}
                height={150}
                className="h-32 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">We Execute</h3>
            <p className="text-gray-600">
              With precision and passion, we bring your interior visions to
              life, ensuring every detail is flawlessly executed.
            </p>
          </div>

          {/* We Manage */}
          <div className="text-center p-6">
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/images/interior-manage.svg"
                alt=""
                width={150}
                height={150}
                className="h-32 w-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">We Manage</h3>
            <p className="text-gray-600">
              Our elite interior designers ensure impeccable quality and provide
              unwavering support even after your project is complete.
            </p>
          </div>
        </div>
      </div>

      {/* POPUP/DIALOGUE */}
      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Meet the Designer
            </DialogTitle>
            
          </DialogHeader>
          <form className="grid gap-4 py-4">
            <Input placeholder="Name" />

            <div className="flex gap-2">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Mobile" className="flex-1" />
            </div>

            <Input type="email" placeholder="Email" />

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="I'm Interested in Interiors For" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="office">Office</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Checkbox id="whatsapp" />
              <label htmlFor="whatsapp" className="text-sm">
                You can reach me on WhatsApp
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Book Free Consultation
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to the{" "}
              <a href="#" className="text-emerald-500 hover:underline">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-emerald-500 hover:underline">
                terms of use
              </a>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
