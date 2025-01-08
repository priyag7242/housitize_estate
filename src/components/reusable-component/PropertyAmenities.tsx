interface PropertyAmenities {
  interior: {
    totalBedrooms: number;
    halfBathrooms: number;
    fullBathrooms: number;
  };
  areaAndLot: {
    lotArea: string;
    livingArea: string;
    mlsId: string;
    yearBuilt: number;
    architectureStyles: string;
    type: string;
    status: string;
  };
}
interface PropertyAmenitiesProps {
  data: PropertyAmenities;
}

const PropertyAmenities = ({data}: PropertyAmenitiesProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-12 py-16">
      <h1 className="text-4xl text-gray-600 md:text-5xl text-center mb-16 font-light tracking-widest">
        PROPERTY AMENITIES
      </h1>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Interior Section */}
        <div>
          <h2 className="text-xl text-gray-800 sm:text-3xl mb-8 font-light tracking-widest">INTERIOR</h2>
          <div className="space-y-6 text-gray-600">
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">
                TOTAL BEDROOMS:
              </span>
              <span className="text-sm">{data.interior.totalBedrooms}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">
                HALF BATHROOMS:
              </span>
              <span className="text-sm">{data.interior.halfBathrooms}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">
                FULL BATHROOMS:
              </span>
              <span className="text-sm">{data.interior.fullBathrooms}</span>
            </div>
          </div>
        </div>

        {/* Area & Lot Section */} 
        <div>
          <h2 className="text-xl text-gray-800 sm:text-3xl mb-8 font-light tracking-widest">
            AREA & LOT
          </h2>
          <div className="space-y-6 text-gray-600">
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">LOT AREA</span>
              <span className="text-sm">{data.areaAndLot.lotArea}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">
                LIVING AREA
              </span>
              <span className="text-sm">{data.areaAndLot.livingArea}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">MLS® ID</span>
              <span className="text-sm">{data.areaAndLot.mlsId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">
                YEAR BUILT
              </span>
              <span className="text-sm">{data.areaAndLot.yearBuilt}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">
                ARCHITECTURE STYLES
              </span>
              <span className="text-sm">
                {data.areaAndLot.architectureStyles}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">TYPE</span>
              <span className="text-sm">{data.areaAndLot.type}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase text-sm tracking-wider">STATUS</span>
              <span className="text-sm">{data.areaAndLot.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyAmenities;