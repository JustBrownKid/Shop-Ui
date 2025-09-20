import PostCard from '../components/ui/PostCard.jsx';
import { useState } from "react";

function BlogPage() {
const items = new Array(10).fill(null);
    
    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                    {items.map((_, index) => (
                        <PostCard
                            key={index}
                            title="Test Title For Blog"
                            src={`https://placehold.co/800?text=This is ${index}&font=roboto`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BlogPage;

        
