
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

type Props = {}

const HomeFaq = (props: Props) => {
  return (
    <div><section className="w-full max-w-3xl mx-auto px-4 py-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-3">Have More Question?</h2>
      <p className="text-muted-foreground">
        Find answers to common questions below.
      </p>
    </div>

    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className="rounded-lg px-6">
        <AccordionTrigger className="text-left text-lg hover:no-underline">
          What methods of payments are supported?
        </AccordionTrigger>
        <AccordionContent>
          We support various payment methods including credit cards, debit
          cards, PayPal, and bank transfers.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="rounded-lg px-6">
        <AccordionTrigger className="text-left  text-lg hover:no-underline">
          Can I cancel at anytime?
        </AccordionTrigger>
        <AccordionContent>
          Yes, you can cancel your subscription at any time. Your access
          will continue until the end of your current billing period.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="rounded-lg px-6">
        <AccordionTrigger className="text-left  text-lg hover:no-underline">
          How do I get a receipt for my purchase?
        </AccordionTrigger>
        <AccordionContent>
          Receipts are automatically sent to your registered email address
          immediately after purchase. You can also access them from your
          account dashboard.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="rounded-lg px-6">
        <AccordionTrigger className="text-left  text-lg hover:no-underline">
          Which license do I need?
        </AccordionTrigger>
        <AccordionContent>
          The license you need depends on your usage. We offer personal,
          business, and enterprise licenses. Contact our sales team for
          detailed information.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="rounded-lg px-6">
        <AccordionTrigger className="text-left  text-lg hover:no-underline">
          How do I get access to a theme I purchased?
        </AccordionTrigger>
        <AccordionContent>
          After purchase, you&apos;ll receive an email with download
          instructions. You can also access your purchased themes from your
          account dashboard.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section></div>
  )
}

export default HomeFaq