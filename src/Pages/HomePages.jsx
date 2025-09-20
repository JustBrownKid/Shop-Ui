import ItemCard from '../components/ui/ItemCard.jsx';
import { useState } from "react";

function HomePage() {
const items = new Array(20).fill(null);
    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100'>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center">
                 {items.map((_, index) => (
                    <ItemCard
                    key={index}
                    title="Test Title For item"
                    price={`150000 ${index} MMK`}
                    src={`https://placehold.co/800?text=This is ${index}&font=roboto`}
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;
