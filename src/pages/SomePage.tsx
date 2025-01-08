import React from 'react';
import PropertyInfo from '../components/reusable-component/PropertyInfo';

const SomePage = () => {
  const propertyData = {
    price: 5000000,
    address: "123 Main St, Anytown, USA",
    beds: 4,
    baths: 3,
    sqft: 2500,
  };

  return (
    <div>
      <PropertyInfo {...propertyData} />
    </div>
  );
};

export default SomePage;
