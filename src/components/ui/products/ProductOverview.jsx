import React from 'react';

const ProductOverview = ({ title, vendor, sku, stock, type, price }) => {
  return (
    <>
      <p className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</p>

      <p>
        <span className="font-semibold text-gray-600 w-20 inline-block">Vendor:</span>
        <span className="font-medium text-black ml-2">{vendor}</span>
      </p>
      
      <p >
        <span className="font-semibold text-gray-600 w-20 inline-block">Sku:</span>
        <span className="font-medium text-black ml-2">{sku}</span>
      </p>
      
      <p>
        <span className="font-semibold text-gray-600 w-20 inline-block">Available:</span>
        <span className="font-medium text-black ml-2">{stock}</span>
      </p>
      
      <p>
        <span className="font-semibold text-gray-600 w-20 inline-block">Type:</span>
        <span className="font-medium text-black ml-2">{type}</span>
      </p>

      <p className="text-black text-xl sm:text-2xl font-bold mt-2">{price} MMK</p>
    </>
  );
};

export default ProductOverview;