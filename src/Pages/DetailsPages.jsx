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
            "This is a high-quality product designed to meet the demands of everyday use. It combines durability, functionality, and style to provide an exceptional user experience.",
            "Crafted with premium materials, it ensures long-lasting performance and reliability. Each component has been carefully selected and tested to maintain consistent quality standards.",
            "Perfect for daily use, whether at home, in the office, or during travel. Its ergonomic design and attention to detail make it a practical and elegant choice for anyone looking for both efficiency and comfort.",
        ],
    };

    const infoTwo = {
        title: "Specification",
        description: [
            "Weight: 1kg – lightweight and easy to carry, making it suitable for portable use without compromising durability.",
            "Color: Black – sleek and modern finish that complements any setting or personal style.",
            "Material: High-grade steel and reinforced components ensure strength, resistance to wear and tear, and long-term reliability.",
            "Dimensions: 10 x 5 x 3 cm – compact and space-efficient, designed to fit conveniently in small spaces while maintaining functionality.",
            "Connectivity: Supports multiple connection options including USB-C and Bluetooth 5.0 for seamless integration with other devices.",
            "Battery Life: Up to 12 hours of continuous use, allowing you to rely on it throughout the day without frequent recharging.",
            "Certifications: Complies with international safety and quality standards, ensuring a reliable and safe user experience.",
        ],
    };

    const infoThree = {
        title: "Warranty",
        description: [
            "1-year comprehensive manufacturer warranty covering all hardware defects and malfunctions, giving you peace of mind with your purchase.",
            "Covers any unexpected failures under normal usage conditions, including repairs or replacements for defective parts or components.",
            "Customer support is available 24/7 via phone, email, and online chat to provide assistance, answer questions, and resolve any issues promptly.",
            "Optional extended warranty plans are available for purchase, offering additional coverage for up to 3 years, including accidental damage protection and priority service.",
            "All warranty claims are handled efficiently with minimal downtime, ensuring your product remains functional and dependable throughout its lifecycle.",
        ],
    };

    return (
        <div className="p-5 md:py-[200px] md:px-[300px] bg-[#f0f0f0]">
            <div className="flex flex-col md:flex-row gap-10 md:mb-[30px]">
                <div className="w-full md:w-[750px]">
                    <Image
                        className="w-full aspect-square object-cover rounded-lg"
                        src={image}
                    />
                </div>

                <div className="flex-1 flex flex-col md:mx-[15px]">
                    <p className="m-0 max-w-full md:max-w-[550px] leading-snug text-[30px] md:text-[35px] font-bold">
                        {title}
                    </p>
                    <LabelText title="Vendor" value={vendor} />
                    <LabelText title="Sku" value={sku} />
                    <LabelText title="Avalibal" value={stock} />
                    <LabelText title="Type" value={type} />

                    <p className="m-0 text-black text-[25px] md:text-[30px] font-bold">{price} MMK</p>

                    <div className="flex flex-col mb-2.5">
                        <p className="m-0 text-xl md:text-2xl">Color {color.name}</p>
                        <ColorSelector setColor={setColor} size={30} colors={colors} />
                    </div>
                    <ProductActions color={color} quanity={value} />
                    <SupportDetails />
                </div>
            </div>

            <div className="flex justify-center mb-4">
                <Segmented
                    size="middle"
                    style={{ backgroundColor: '#9f9f9f'  }}
                    className="w-full md:w-[600px] font-bold text-base md:text-lg p-2 text-black"
                    shape="default"
                    options={["Description", "Specification", "Warranty"]}
                    value={value}
                    onChange={setValue}
                    block={true}
                />
            </div>
            <ProductInfo
                info={
                    value === "Description"
                        ? infoOne
                        : value === "Specification"
                            ? infoTwo
                            : value === "Warranty"
                                ? infoThree
                                : ""
                }
            />
        </div>
    );
}

export default DetailsPages;