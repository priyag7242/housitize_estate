"use client";
import Image from "next/image";
import React from "react";
import { ClipboardList, Headphones, MapPin, PenLine } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

const ContactUs = () => {
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

  const services = [
    {
      icon: ClipboardList,
      title: "Ask Demigod",
      description:
        "The quickest and easiest way to reach us! Fill out our secure online form and tell us about your dream home. We'll get back to you within 24 hours.",
      buttonText: "Get in Touch",
    },
    {
      icon: Headphones,
      title: "Call Us",
      description:
        "Speak to a real estate expert today! Our friendly team is available by phone to answer your questions and guide you through the process.",
      buttonText: "Call Us",
    },
    {
      icon: MapPin,
      title: "Find Us",
      description:
        "Visit our office in person! We're located at 123 Dream House Lane, Dreamville, India. We're open Monday to Friday, 9am to 5pm.",
      buttonText: "Find Us",
    },
    {
      icon: PenLine,
      title: "Write to Us",
      description:
        "Take your time and share your details. Send us an email at contact@dreamhouse.io with your questions or specific requests.",
      buttonText: "Write to Us",
    },
  ];
  const contactUsAccordion = [
    {
      id: "item-1",
      question: "How can I get in touch with Demigod Estate?",
      answer:
        "You can reach us by filling out our online form, calling us, visiting our office, or sending us an email. Check the details above for more information.",
      buttons: [
        {
          text: "Contact Us",
          action: () => alert("Redirecting to Contact Page..."),
        },
      ],
    },
    {
      id: "item-2",
      question: "What are your office hours?",
      answer:
        "Our office is open from Monday to Friday, 9am to 5pm. Feel free to visit us during these hours.",
      buttons: [],
    },
    {
      id: "item-3",
      question: "Where is your office located?",
      answer:
        "Our office is located at 123 Dream House Lane, Dreamville, India. We look forward to your visit.",
      buttons: [
        {
          text: "Get Directions",
          action: () => alert("Opening Google Maps..."),
        },
      ],
    },
    {
      id: "item-4",
      question: "How soon can I expect a response after contacting you?",
      answer:
        "We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly.",
      buttons: [],
    },
    {
      id: "item-5",
      question: "Can I schedule an appointment?",
      answer:
        "Yes, you can schedule an appointment by calling us or filling out our online form. We will confirm your appointment as soon as possible.",
      buttons: [
        {
          text: "Schedule Now",
          action: () => alert("Redirecting to Schedule Page..."),
        },
        { text: "Call Us", action: () => alert("Dialing...") },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[70vh] md:h-screen w-full">
        <Image
          src="/assets/images/contact-us-hero.jpg"
          alt="Charming cottage style house with steep roof and surrounded by greenery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark overlay (gradient) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Talk About
            <br />
            Your Dream Home
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg md:text-lg lg:text-xl">
            What does your dream home look like?
            <br />
            Cozy and charming, spacious and modern, or something entirely
            different?
          </p>
        </div>
      </div>

      {/* Your Guide */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <h1 className="mb-12 text-3xl font-medium text-center text-gray-900 md:text-4xl">
          Your Guide to Finding Your Dream Home
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-gray-600" />
                  <h2 className="mt-4 text-xl font-medium text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <p className="flex-1 text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="w-fit px-4 py-2 text-sm text-white bg-black border rounded-full hover:bg-white hover:text-gray-600 hover:border-gray-600 transition duration-300">
                  {service.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/*FAQ*/}
      <section className="w-full max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Have More Questions?</h2>
          <p className="text-muted-foreground">
            Find answers to common questions below or contact us for more
            information.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {contactUsAccordion.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-gray-800 tracking-wide text-base sm:text-lg hover:no-underline">
                {index + 1}. {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                <p>{item.answer}</p>
                {item.buttons && item.buttons.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.buttons.map((button, btnIndex) => (
                      <Button
                        key={btnIndex}
                        onClick={button.action}
                        className="px-4 py-2 text-sm font-medium"
                      >
                        {button.text}
                      </Button>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

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

export default ContactUs;
