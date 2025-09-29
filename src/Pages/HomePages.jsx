import ItemCard from '../components/ui/ItemCard.jsx';
import { useState } from "react";
import { useApi } from "../hook/ApiCall.jsx"
import Loading from '../components/ui/Loading.jsx'
import NotFound from '../components/ui/NotFound.jsx';


function HomePage() {
    

    const { data, error, loading, refetch } = useApi(
    "http://127.0.0.1:8000/api/products?home=1"
    );

    if (loading) return <Loading/>;
    if (error) return <NotFound/>;
    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100'>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center">
                 {data?.data?.map((product) => (
                    <ItemCard
                         key={product.id}
                         id={product.id}
                    title={product.title}
                    price={product.price}
                    src={product.image}
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;
