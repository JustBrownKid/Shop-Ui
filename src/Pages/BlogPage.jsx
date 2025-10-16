import PostCard from '../components/ui/card/PostCard.jsx';
import { useState } from "react";
import { useApi } from '../hook/ApiCall.jsx';
import Loading from '../components/ui/animation/Loading.jsx'

function BlogPage() {
const items = new Array(10).fill(null);
    const { data, error, loading, refetch } = useApi(
    `${import.meta.env.VITE_API_URL}/blogs`
    );

    if (loading) return <Loading/>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                    {data?.data?.map(( blog) => (
                        <PostCard
                            key={blog.id}
                            title={blog.title}
                            src={blog.image}
                            tag={blog.tag}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BlogPage;

        
