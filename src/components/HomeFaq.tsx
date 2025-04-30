import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {}

const HomeFaq = (props: Props) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-yellow-600 mb-3">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to our FAQ section where we answer commonly asked questions about our products, services, and more.
          This will give you better insight into what we do at Mshel Homes!
        </p>
      </div>

      <Accordion type="multiple" className="grid md:grid-cols-2 gap-6">
        <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-md px-6 py-3">
          <AccordionTrigger className="text-left  text-base font-semibold text-gray-800 hover:no-underline">
            What type of property do Mshel Homes Sell?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-[15px] ">
            Mshel Homes sells a variety of properties in Abuja, including estate lands, houses, and commercial spaces.
            We also offer a variety of payment plans.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-md px-6 py-3">
          <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:no-underline">
            Is the land payment inclusive of the infrastructure levy?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600  text-[15px]">
            No, the infrastructure levy depends on the plot size and is paid once the building reaches the carcass level.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-md px-6 py-3">
          <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:no-underline">
            What is Mshel Homes' commitment to customer satisfaction?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600  text-[15px]">
            We prioritize delivering high-quality properties and providing exceptional customer service throughout the buying journey.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-md px-6 py-3">
          <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:no-underline">
            How do I get started with buying a property from Mshel Homes?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600  text-[15px]">
            You can start by browsing our listings, selecting a property, and contacting our sales team for a site inspection and documentation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-white rounded-2xl shadow-md px-6 py-3">
          <AccordionTrigger className="text-left text-base font-semibold text-gray-800 hover:no-underline">
            Can we make adjustments to  different kind of building design?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600  text-[15px]">
            Yes, we offer flexibility in building design to meet your specific preferences and needs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default HomeFaq
