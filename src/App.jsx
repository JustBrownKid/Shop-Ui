import HomePage from './Pages/HomePages.jsx'
import DetailsPages from './Pages/DetailsPages.jsx'
function App() {

    const product = {
        image: 'https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww',
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
          {/*<HomePage/>*/}
          <DetailsPages
              product={product}
          />
      </>
  );
}

export default App;
