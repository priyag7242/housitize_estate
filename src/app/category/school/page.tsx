'use client'
import Description from "@/components/reusable-component/Description";
import Map from "@/components/reusable-component/Map";
import PropertyAmenities from "@/components/reusable-component/PropertyAmenities";
import PropertyHeroCarousel from "@/components/reusable-component/PropertyHeroCarousel";
import PropertyInfo from "@/components/reusable-component/PropertyInfo";
import SimilarListings from "@/components/reusable-component/SimilarListings";
import React from "react";

const page = () => {
  const images = [
    "/assets/images/school-property/property-carousel-img4.jpg",
    "/assets/images/property-carousel2new.jpg",
    "/assets/images/property-carousel3new.jpg",
    "/assets/images/property-carousel4.jpg",
  ];

  const propertyInfo = {
    price: 2000000,
    address: "1234 MG Road, Bengaluru",
    beds: 3,
    baths: 2,
    sqft: 1500,
  };

  const descriptionData = {
    desc: "An adjoining outdoor terrace among the treetops provides a serene escape. Finally, the pool house is a breathtaking retreat, with soaring ceilings and gorgeous antique steel and glass windows that create a seamless connection to the pool and the welcoming grounds beyond. Cromwell Hill is a testament to the timeless elegance of Old Enfield, where history and modernity intertwine to create an unparalleled living experience. This is more than just a property; it's a legacy waiting to be embraced.",
    location: "1234 MG Road, Bengaluru",
    status: "For Sale",
  };
  const propertyData = {
    interior: {
      totalBedrooms: 5,
      halfBathrooms: 2,
      fullBathrooms: 5,
    },
    areaAndLot: {
      lotArea: "6.61 Acres",
      livingArea: "7,945 Sq.Ft.",
      mlsId: "4LLQMP",
      yearBuilt: 1932,
      architectureStyles: "Historical",
      type: "Residential",
      status: "For Sale",
    },
  };
  return (
    <div>
      <PropertyHeroCarousel images={images} />
      <PropertyInfo {...propertyInfo} />
      <Description {...descriptionData} />
      <PropertyAmenities data={propertyData} />
      <Map />
      <SimilarListings />
    </div>
  );
};

export default page;
