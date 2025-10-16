import React, { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";
import EmptyCart from "../cart/EmptyCart";
import CartOrderItem from "../card/CartOrderItem";

const CartDrawerPage = ({ cartData = [],removeItem }) => {
  const context = useContext(CartContext);

  const cart = cartData.length > 0 ? cartData : context.cart || [];
  const rem = removeItem || context.removeItem;

  if (!cart || cart.length === 0) return <EmptyCart />;

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-1 w-full max-w-4xl">
        {cart.map((item) => {
          const {
            productId = null,
            colorName = "",
            name = "Unknown Product",
            quantity = 1,
            price = 0,
            image = null,
          } = item;

          return (
            <CartOrderItem
              key={`${productId || Math.random()}-${colorName}`}
              item={{ productId, colorName, name, quantity, price, image }}
              removeItem={productId ? rem : undefined}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartDrawerPage;
