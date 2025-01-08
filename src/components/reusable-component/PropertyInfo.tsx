import React from 'react'
import { Button } from '../ui/button'
import { Separator } from "@/components/ui/separator";

interface PropertyInfoProps {
    price: number;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
  }

const PropertyInfo = ({ price = 0, address = "", beds = 0, baths = 0, sqft = 0 }: PropertyInfoProps) => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8 mt-16 text-center">
      <div className="text-gray-700 text-2xl sm:text-3xl md:text-4xl font-light tracking-wide">
        {`₹${price.toLocaleString()}`}
      </div>
      
      <h1 className="text-2xl text-gray-800 sm:text-3xl md:text-4xl lg:text-4xl font-light  tracking-widest">
        {address}
      </h1>
      
      <div className="text-gray-600 text-sm sm:text-base md:text-lg font-light tracking-wider">
        <span>{beds} Beds</span>
        <span className="mx-2">|</span>
        <span>{baths} Baths</span>
        <span className="mx-2">|</span>
        <span>{sqft.toLocaleString()} Sq.Ft.</span>
      </div>
      
      <Button 
        variant="outline" 
        className="mt-6 px-8 py-6 text-sm border-2 border-gray-800 tracking-widest hover:bg-black hover:text-white transform transition-colors duration-300"
      >
        INQUIRE NOW
      </Button>
    </div>
    <Separator className="my-8" />

    </div>
  )
}

export default PropertyInfo