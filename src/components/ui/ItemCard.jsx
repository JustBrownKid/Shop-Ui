import React from "react";
import ColorSelector from "./ColorSelector.jsx";

const ItemCard = ({ src, title, price, colors }) => {
    return (
        <div className="cursor-pointer m-3 bg-white rounded-md shadow-md overflow-hidden">
            <img
                className="w-full aspect-square object-cover"
                alt={title}
                src={src}
            />

            <div className="p-4 flex flex-col gap-2">
                <p className="text-2xl font-bold text-black">{title}</p>
                <span className="text-xl text-yellow-500">{price}</span>

                <div className="flex gap-2 mt-1">
                    <ColorSelector colors={colors} size={25} />
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
