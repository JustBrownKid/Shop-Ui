import { Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./Pages/HomePages.jsx";
import DetailsPages from "./Pages/DetailsPages.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import LocationPage from "./Pages/LocationPage.jsx";
import HiringPage from "./Pages/HiringPage.jsx";
import NotFound from "./components/ui/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/hiring" element={<HiringPage />} />
      <Route path="/location" element={<LocationPage />} />

      <Route path="/details/:id" element={<DetailsPages />} />

      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
