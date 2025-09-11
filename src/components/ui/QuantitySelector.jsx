import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const QuantitySelector = ({ quantity, setQuantity }) => {
    const increase = () => setQuantity((prev) => prev + 1);
    const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="inline-flex items-center border bg-white  border-black ">
            <button
                onClick={decrease}
                className="flex items-center justify-center w-12 h-12 text-2xl hover:bg-gray-100 transition"
            >
                <MinusOutlined />
            </button>

            <span className="flex items-center justify-center w-10 text-2xl ">
        {quantity}
      </span>

            <button
                onClick={increase}
                className="flex items-center justify-center w-12 h-12 text-2xl hover:bg-gray-100 transition"
            >
                <PlusOutlined />
            </button>
        </div>
    );
};

export default QuantitySelector;
