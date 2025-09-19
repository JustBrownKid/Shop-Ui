import PostCard from '../components/ui/PostCard.jsx';
import { useState } from "react";

function BlogPage() {

    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100 min-h-screen'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">

                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1628320281190-89b24da58b0f' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1650654410550-adefa7f16d5c' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1677691820099-a6e8040aa077' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1558174685-430919a96c8d' />
                    <PostCard title="Test Title For Blog"   
                        src='https://images.unsplash.com/photo-1544474560-5b2a788d024a' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1497275376929-a891025f53ee' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1497864768494-78100d1ddf01' />
                    <PostCard title="Test Title For Blog" 
                        src='https://images.unsplash.com/photo-1542744095-291d1f67b221' />
                    <PostCard title="Test Title For Blog" 
                        src='https://plus.unsplash.com/premium_photo-1661412938808-a0f7be3c8cf1' />
                    <PostCard title="Test Title For Blog" 
                        src='https://images.unsplash.com/photo-1733503711060-1df31554390f' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1726065235158-d9c3f817f331' />
                    <PostCard title="Test Title For Blog"
                        src='https://images.unsplash.com/photo-1663882658055-40f1d4249867' />

                </div>
            </div>
        </>
    );
}

export default BlogPage;
