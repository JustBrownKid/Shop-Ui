import LocationCard from '../components/ui/card/LocationCard.jsx';
import { useApi } from "../hook/ApiCall.jsx"
import Loading from '../components/ui/animation/Loading.jsx'
import NotFound from '../components/ui/animation/NotFound.jsx';

function LocationPage() {
const { data, error, loading, refetch } = useApi(
    `${import.meta.env.VITE_API_URL}/locations`
    );

    if (loading) return <Loading/>;
    if (error) return <NotFound/>;
    return (
        <>
            <div  className='xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 py-10 bg-gray-100 min-h-screen'>
                <div className="">
                    {data?.data?.map((location) => (
                        <LocationCard title={location.title}
                            text={location.title}
                            position={[parseFloat(location.latitude), parseFloat(location.longitude)]}
                            phone={location.phone}
                        />))}
                </div>
            </div>
        </>
    );
}

export default LocationPage;
