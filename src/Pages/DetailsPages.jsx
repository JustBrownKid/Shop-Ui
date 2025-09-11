import { Segmented, Image } from "antd";
import React, { useState } from "react";
import ProductActions from "../components/ui/ProductActions.jsx";
import ColorSelector from "../components/ui/ColorSelector.jsx";
import ProductInfo from "../components/ui/ProductInfo.jsx";
import SupportDetails from "../components/ui/SupportDetails.jsx";
import LabelText from "../components/ui/LabelText.jsx";

function DetailsPages({ product }) {
    const { image, title, vendor, sku, stock, type, price, colors } = product;
    const [value, setValue] = useState("Description");
    const [color, setColor] = useState({});

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
        <div className="p-4 sm:p-6  lg:p-10 xl:p-12 bg-[#f0f0f0]">
            <div className="flex flex-col xl:ml-30 lg:flex-row gap-6 lg:gap-10 mb-8">
                <div className="w-full h-full  lg:w-1/2 flex justify-center lg:justify-start">
                    <Image
                        className="w-full  aspect-square object-cover rounded-lg"
                        src={image}
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</p>

                    <LabelText title="Vendor" value={vendor} />
                    <LabelText title="Sku" value={sku} />
                    <LabelText title="Available" value={stock} />
                    <LabelText title="Type" value={type} />

                    <p className="text-black text-xl sm:text-2xl font-bold">{price} MMK</p>

                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-lg sm:text-xl md:text-2xl">Color: {color.name}</p>
                        <ColorSelector setColor={setColor} size={30} colors={colors} />
                    </div>

                    <ProductActions color={color} quanity={value} />
                    <SupportDetails />
                </div>
            </div>

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
                info={
                    value === "Description"
                        ? infoOne
                        : value === "Specification"
                            ? infoTwo
                            : infoThree
                }
            />
        </div>
    );
}

export default DetailsPages;
