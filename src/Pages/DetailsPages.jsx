import { Segmented, Image } from "antd";
import React, { useState, useEffect } from "react";
import ProductActions from "../components/ui/ProductActions.jsx";
import ColorSelector from "../components/ui/ColorSelector.jsx";
import ProductInfo from "../components/ui/ProductInfo.jsx";
import SupportDetails from "../components/ui/SupportDetails.jsx";
import LabelText from "../components/ui/LabelText.jsx";
import RelatedProducts from "../components/ui/RelatedProducts.jsx";
import { useApi } from "../hook/ApiCall.jsx";
import Loading from '../components/ui/Loading.jsx'
import NotFound from "../components/ui/NotFound.jsx";
import { useParams } from "react-router-dom";

import CartList from './CartList'

function DetailsPages() {
  const [value, setValue] = useState("Description");
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();


  const { data, loading, error } = useApi(
    `http://127.0.0.1:8000/api/products/${id}`
  );

  useEffect(() => {
    if (data) setProduct(data?.data);
  }, [data]);

  const handleAddToCartParent = (product) => {
  };
  
  if (loading) return <Loading />;
  if (error) return <NotFound/>;
  if (!product) return <p>Loading product...</p>;

  const { image, title, vendor, sku, stock, type, price, colors } = product;

  const infoOne = {
    title: "Description",
    description: [
      "This is a high-quality product designed to meet the demands of everyday use.",
      "Crafted with premium materials for long-lasting performance.",
      "Perfect for daily use, ergonomic design for comfort and efficiency.",
    ],
  };

  const infoTwo = {
    title: "Specification",
    description: [
      "Weight: 1kg – lightweight and easy to carry.",
      "Color: Black – sleek and modern.",
      "Material: High-grade steel and reinforced components.",
      "Dimensions: 10 x 5 x 3 cm – compact and functional.",
      "Connectivity: USB-C and Bluetooth 5.0 supported.",
      "Battery Life: Up to 12 hours of use.",
      "Certifications: Complies with international standards.",
    ],
  };

  const infoThree = {
    title: "Warranty",
    description: [
      "1-year manufacturer warranty covering hardware defects.",
      "Covers unexpected failures under normal usage.",
      "24/7 customer support via phone, email, and chat.",
      "Optional extended warranty up to 3 years available.",
      "Warranty claims handled efficiently with minimal downtime.",
    ],
  };

  return (
    <div className="p-4 sm:p-6 lg:p-10 xl:p-12 bg-[#f0f0f0]">
      {/* Product Image & Info */}
    <div className="flex flex-col md:flex-row lg:ml-50 gap-6 lg:gap-10 mb-8 justify-center items-center">
        {/* Image container */}
        <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 aspect-square rounded-lg overflow-hidden">
        <Image
            src={image}
            preview={false}
             className="w-full h-auto md:w-[600px] md:h-[600px]" 
        />
        </div>


        {/* Product details */}
        <div className="w-full lg:w-1/2 flex gap flex-col md:gap-1 lg:gap-4">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</p>

          <LabelText title="Vendor" value={vendor} />
          <LabelText title="Sku" value={sku} />
          <LabelText title="Available" value={stock} />
          <LabelText title="Type" value={type} />

          <p className="text-black text-xl sm:text-2xl font-bold">{price} MMK</p>

          {/* Color selector */}
          <div className="flex flex-col mb-2 gap-2">
                      <p className="text-lg sm:text-xl md:text-2xl">Color:{color.name}</p>
                     <ColorSelector setColor={setColor} size={30} colors={colors} />
          </div>

          {/* Quantity & actions */}
          <ProductActions
            product={product}
            color={color}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={() => handleAddToCartParent(product , color)} 
          />

          {/* <CartList/> */}

        </div>
      </div>
          <SupportDetails />

      {/* Segmented info tabs */}
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

      {/* Product Info Section */}
      <ProductInfo
        info={
          value === "Description"
            ? infoOne
            : value === "Specification"
            ? infoTwo
            : infoThree
        }
      />

      {/* Related Products */}
      <RelatedProducts />
    </div>
  );
}

export default DetailsPages;
