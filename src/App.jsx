import { Routes, Route,BrowserRouter } from "react-router-dom";

import HomePage from "./Pages/HomePages.jsx";
import DetailsPages from "./Pages/DetailsPages.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import NotFound from "./components/ui/animation/NotFound.jsx";
import CartList from "./Pages/CartPage.jsx";
import Navbar from "./components/ui/nav/NavBar.jsx";
import PrderPage from './Pages/OrderPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="py-10">
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/hiring" element={<HiringPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/cart" element={<CartList />} />
      <Route path="/order" element={<PrderPage />} />
      <Route path="/details/:id" element={<DetailsPages />} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
      </main>
      
     </BrowserRouter>
    
  );
}

export default App;
