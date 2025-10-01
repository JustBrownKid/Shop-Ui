import React from "react";
import { Button } from "antd";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div className="flex flex-col items-center sm:items-start bg-white p-4 rounded-lg border border-gray-300 shadow-sm w-full ">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full items-center">

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 items-center">
          <div className="flex mb-2 sm:mb-0">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="font-semibold text-lg sm:text-xl mb-1">{item.name}</p>
            <div className="flex gap-3 text-gray-600 text-sm justify-center sm:justify-start">
              <p>Color: {item.colorName}</p>
              <p>Price: {item.price.toLocaleString()} MMK</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2 mt-2 sm:mt-0">
          <div className="flex items-center gap-1">
            <Button size="small" onClick={() => decreaseQuantity(item.productId, item.colorName)}>-</Button>
            <span className="px-2 font-medium">{item.quantity}</span>
            <Button size="small" onClick={() => increaseQuantity(item.productId, item.colorName)}>+</Button>
          </div>
          <p className="font-semibold">{(item.quantity * item.price).toLocaleString()} MMK</p>
        </div>
      </div>

      <div className="flex sm:justify-center  mt-2">
        <Button size="small" danger onClick={() => removeItem(item.productId, item.colorName)}>
          Remove
        </Button>
      </div>

    </div>
  );
};

export default CartItem;
