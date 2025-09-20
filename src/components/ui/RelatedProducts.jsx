import React from 'react';
import ItemCard from './ItemCard';

const items = new Array(20).fill(null);

const RelatedProducts = () => {
  return (
    <ul className="flex overflow-x-auto list-none p-0 m-0">
      {items.map((_, index) => (
          <li key={index} className="flex-none w-52">
          <ItemCard
            title="Test Title For item"
            price={`150000 MMK`}
            src={`https://placehold.co/800?text=This is ${index}&font=roboto`}
          />
        </li>
      ))}
    </ul>
  );
};

export default RelatedProducts;