import React, { useContext } from "react";
import { CartContext } from "../components/Contex/CartContext";
import { Button } from "antd";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  if (!cart || cart.length === 0)
    return <p className="text-center mt-10 text-xl">Your cart is empty</p>;

  const totalCartPrice = cart
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Shopping Cart
      </h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={`${item.productId}-${item.colorName}`}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded shadow gap-4"
          >
            {/* Image + details */}
            <div className="flex items-center gap-4 flex-1">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Color: {item.colorName}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Price: {item.price.toLocaleString()} MMK
                </p>
              </div>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Button
                onClick={() => decreaseQuantity(item.productId, item.colorName)}
              >
                -
              </Button>
              <span className="px-2">{item.quantity}</span>
              <Button
                onClick={() => increaseQuantity(item.productId, item.colorName)}
              >
                +
              </Button>
            </div>

            {/* Item total */}
            <div className="font-semibold text-center sm:text-left">
              {(item.quantity * item.price).toLocaleString()} MMK
            </div>

            {/* Remove button */}
            <div className="flex justify-center sm:justify-end">
              <Button
                danger
                onClick={() => removeItem(item.productId, item.colorName)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="flex justify-center sm:justify-end mt-6">
        <p className="text-xl sm:text-2xl font-bold">
          Total: {parseFloat(totalCartPrice).toLocaleString()} MMK
        </p>
      </div>
    </div>
  );
};

export default CartPage;
