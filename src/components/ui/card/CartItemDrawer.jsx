import React from "react";
import { Button } from "antd";

const CartItemDrawer = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-2 rounded border border-gray-200 w-full gap-3">
      {/* Image & Info */}
      <div className="flex items-center gap-2 sm:w-auto w-full">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded flex-shrink-0"
          />
        )}
        <div className="flex flex-col">
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-xs text-gray-500">Color: {item.colorName}</p>
          <p className="text-xs text-gray-500">{item.price.toLocaleString()} MMK</p>
        </div>
      </div>

      {/* Qty & Actions */}
      <div className="flex sm:flex-col flex-row sm:items-end items-center justify-between gap-2 w-full sm:w-auto">
        {/* Quantity Controls */}
        <div className="flex items-center gap-1">
          <Button
            size="small"
            onClick={() => decreaseQuantity(item.productId, item.colorName)}
          >
            -
          </Button>
          <span className="px-1 text-sm">{item.quantity}</span>
          <Button
            size="small"
            onClick={() => increaseQuantity(item.productId, item.colorName)}
          >
            +
          </Button>
        </div>

        {/* Price */}
        <div className="text-sm font-semibold">
          {(item.quantity * item.price).toLocaleString()} MMK
        </div>

        {/* Remove Button */}
        <Button
          size="small"
          danger
          type="link"
          onClick={() => removeItem(item.productId, item.colorName)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItemDrawer;
