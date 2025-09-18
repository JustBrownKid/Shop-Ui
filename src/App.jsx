import HomePage from './Pages/HomePages.jsx'
import DetailsPages from './Pages/DetailsPages.jsx'
import BlogPage from './Pages/BlogPage.jsx'
import Map from './components/Map/Map.jsx';

function App() {

    const product = {
        image: 'https://images.unsplash.com/photo-1706275399494-fb26bbc5da63',
        title: 'This is Test Item Title Power Bank 1000Mah',
        vendor: 'Test Vendor',
        sku: 'WIBKE10V',
        stock: 'Available',
        type: "power bank",
        price: '35000',
        colors: [
            { name: "Pink", value: "#e5e1da" },
            { name: "Sky Blue", value: "#aad7d9" },
            { name: "Yellow", value: "#fdffab" },
            { name: "Orange", value: "#FFA500" },
        ]
    };

    return (
      <>
            {/* <HomePage /> */}
            <BlogPage />
            <Map />
          {/* <DetailsPages
              product={product}
          /> */}
      </>
  );
}

export default App;
