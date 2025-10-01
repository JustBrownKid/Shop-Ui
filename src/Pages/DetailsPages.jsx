import { Segmented, Image ,Button} from "antd";
import React, { useState, useEffect } from "react";
import ProductActions from "../components/ui/products/ProductActions.jsx";
import ColorSelector from "../components/ui/products/ColorSelector.jsx";
import ProductInfo from "../components/ui/products/ProductInfo.jsx";
import SupportDetails from "../components/ui/products/SupportDetails.jsx";
import RelatedProducts from "../components/ui/products/RelatedProducts.jsx";
import { useApi } from "../hook/ApiCall.jsx";
import Loading from '../components/ui/animation/Loading.jsx'
import NotFound from "../components/ui/animation/NotFound.jsx";
import { useParams } from "react-router-dom";
import ProductOverview from '../components/ui/products/ProductOverview.jsx'


function DetailsPages() {
  const [value, setValue] = useState("Description");
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();


  const { data, loading, error } = useApi(
    `${import.meta.env.VITE_API_URL}/products/${id}`
  );

  useEffect(() => {
    if (data) setProduct(data?.data);
  }, [data]);

  const handleAddToCartParent = () => {
  };
  
  if (loading) return <Loading />;
  if (error) return <NotFound/>;
  if (!product) return <p>Loading product...</p>;

  const { image, title, vendor, sku, stock, type, price, colors } = product;

  return (
    <div className="p-4 sm:p-6 lg:p-10 xl:p-12 bg-[#f0f0f0]">
     
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6 lg:gap-10 mb-8 items-start">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end max-w-lg mx-auto md:max-w-none md:mx-0">
          <div className="max-w-lg aspect-square rounded-lg overflow-hidden">
            <Image
              src={image}
              preview={false}
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col  max-w-lg mx-auto md:max-w-none md:mx-0"> 
          
          <ProductOverview
            title={title}
            vendor={vendor}
            sku={sku}
            stock={stock}
            type={type}
            price={price}
          />

          <div className="flex flex-col mb-2 ">
            <p className="text-lg sm:text-xl md:text-2xl">Color:{color.name}</p>
            <ColorSelector setColor={setColor} size={30} colors={colors} />
          </div>

          <ProductActions product={product} color={color} quantity={quantity} setQuantity={setQuantity}
            onAddToCart={() => handleAddToCartParent(product, color)} />
        </div>
      </div>
      
      
      <SupportDetails />

      <div className="flex justify-center mb-6">
        <Segmented
          size="middle"
          className="w-full max-w-[600px] font-bold text-base md:text-lg"
          style={{ backgroundColor: "#9f9f9f" }}
          options={["Description", "Specification", "Warranty"]}
          value={value}
          onChange={setValue}
          block
        />
      </div>

      <ProductInfo
        title={value}
        info={product}
        field={
          value === "Description"
            ? "description"
            : value === "Specification"
            ? "specification"
            : "warranty"
        }
      />

      <RelatedProducts />
    </div>
  );
}

export default DetailsPages;