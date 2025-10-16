import ItemCard from '../components/ui/card/ItemCard.jsx';
import { useState } from "react";
import { useApi } from "../hook/ApiCall.jsx"
import Loading from '../components/ui/animation/Loading.jsx'
import NotFound from '../components/ui/animation/NotFound.jsx';


function HomePage() {
    

    const { data, error, loading, refetch } = useApi(
    `${import.meta.env.VITE_API_URL}/product`
    );

    if (loading) return <Loading/>;
    if (error) return <NotFound/>;
    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100'>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center">
                 {data?.map((product) => (
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
