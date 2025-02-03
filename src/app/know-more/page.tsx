"use client";
import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const contactFormSchema = z.object({
  inquiryType: z.string({
    required_error: "Please select an inquiry type",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number with country code.",
  }),
  country: z.string({
    required_error: "Please select your country/region",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  privacyAgreement: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy statement" }),
  }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

const KnowMore = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const imageUrl = searchParams.get("imageUrl");
  const heading = searchParams.get("heading");
  const description = searchParams.get("description");
  console.log({ imageUrl, heading, description }); // Log the query to check the parameters

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      message: "",
      privacyAgreement: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    form.reset();
    alert("Form submitted successfully!");
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[70vh] md:h-screen w-full">
        <Image
          //   src={imageUrl as string}
          src="/assets/images/self-sustainable-home-hero.jpg"
          alt="Charming cottage style house with steep roof and surrounded by greenery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark overlay (gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
            {/* Demo heaiding */}
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg md:text-lg lg:text-xl">
            {description}
            {/* Demo description */}
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid lg:grid-cols-5 mt-20 bg-[#FDF8F7]">
        <div className="relative hidden lg:flex lg:h-full lg:col-span-2">
          <Image
            src="/assets/images/contact-us-img.jpg"
            alt="A bridge over a river with trees and mountains in the background"
            fill
            priority
            className="object-cover h-full w-full"
          />
          {/* Dark overlay (gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-black/20" />
        </div>

        <div className="bg-[#FDF8F7] p-8 lg:p-16 flex flex-col lg:col-span-3 justify-center">
          <Form {...form}>
            <h1 className="text-5xl font-bold  text-gray-800">Contact Us</h1>
            <p className="text-gray-600  mb-8">
              Please provide the following information and we&apos;ll put you in
              touch with the right person.
            </p>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 pr-8 sm:pr-20"
            >
              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl text-gray-800">
                      Inquiry Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="px-4 py-6">
                        <SelectTrigger className="text-gray-700">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="text-gray-700 bg-[#FDF8F7]">
                        <SelectItem value="residential">
                          Residential Property
                        </SelectItem>
                        <SelectItem value="commercial">
                          Commercial Property
                        </SelectItem>
                        <SelectItem value="investment">
                          Real Estate Investment
                        </SelectItem>
                        <SelectItem value="rental">Rental Property</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <h2 className="text-xl font-semibold mb-4">About You</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            className="px-4 py-6"
                            placeholder="Enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="px-4 py-6"
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            className="px-4 py-6"
                            type="email"
                            placeholder="Enter your email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number (include country code)
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="px-4 py-6"
                            type="tel"
                            placeholder="e.g. +91 123 456 7890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country/Region</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="px-4 py-6">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country/region" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help you?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your inquiry"
                        className="min-h-[100px] px-4 py-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacyAgreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the use or processing of my personal
                        information by Demigod for the purpose of fulfilling
                        this request and in accordance with Demigod&apos;s
                        Privacy Statement.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-fit md:w-auto px-8 py-4 bg-[#E9D7B7] text-black hover:bg-[#dcc59f] rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
