import PostCard from '../components/ui/card/PostCard.jsx';
import { useState } from "react";
import HiringItem from '../components/ui/card/HiringCard.jsx';
import { useApi } from '../hook/ApiCall.jsx';
import Loading from '../components/ui/animation/Loading.jsx'
  

function HiringPage() {
    const { data, loading, error } = useApi(
    `${import.meta.env.VITE_API_URL}/hirings`
  );
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 font-sans">
      <div className="w-full max-w-xl mx-auto space-y-4">
        <h1 className="text-3xl w-full font-bold text-center text-gray-800 mb-6">Hiring Opportunities</h1>
        {data?.data.map((hiring) => (
          <HiringItem key={hiring.id} label={hiring.title} sections={hiring.sections} />
        ))}
      </div>
    </div>
  );
}

export default HiringPage;
