import ItemCard from '../components/ui/ItemCard.jsx';
import { useState } from "react";

function HomePage() {
    const [test, setTest] = useState();

    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100 min-h-screen'>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center">

                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1637160151663-a410315e4e75'
                    />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1617350142147-7403b8fb9889' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1706275399494-fb26bbc5da63' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1618384887929-16ec33fab9ef' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1605773527852-c546a8584ea3' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1637160151663-a410315e4e75' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1617350142147-7403b8fb9889' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1706275399494-fb26bbc5da63' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1618384887929-16ec33fab9ef' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://images.unsplash.com/photo-1605773527852-c546a8584ea3' />
                    <ItemCard title="Test Title For item" price='150000 MMK'
                        src='https://plus.unsplash.com/premium_photo-1677838847804-4054143fb91a' />

                </div>
            </div>
        </>
    );
}

export default HomePage;
