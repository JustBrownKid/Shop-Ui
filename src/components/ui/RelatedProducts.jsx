import React from 'react';
import ItemCard from './ItemCard';
import { useApi } from '../../hook/ApiCall';

const items = new Array(20).fill(null);

const RelatedProducts = () => {

  
const { data, error, loading, refetch } = useApi(
    "http://127.0.0.1:8000/api/products?home=1"
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <ul className="flex overflow-x-auto list-none p-0 m-0">
      {data?.data?.map(( product) => (
          <li key={product.id} className="flex-none w-52">
          <ItemCard
                   key={product.id}
                    title={product.title}
                    price={product.price}
                    src={product.image}
                    />
        </li>
      ))}
    </ul>
  );
};

export default RelatedProducts;