import React, { useState } from "react";
import { Button } from "antd";
import QuantitySelector from "./QuantitySelector";

const ProductActions = (props) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="flex flex-col gap-3 w-full sm:w-[350px]">
            <div className="flex gap-3">
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
                <button
                    className="bg-white text-black font-semibold py-2 px-4 border border-black text-xl w-full transition-colors duration-200 hover:bg-black hover:text-white"
                    onClick={() => {
                        console.log(props.color.name, 'color item', quantity, 'pcs order');
                    }}
                >
                    Add To Cart
                </button>

            </div>

            <button className="w-full h-[50px] text-xl rounded-none bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-200">
                Buy It Now
            </button>
        </div>
    );
};

export default ProductActions;