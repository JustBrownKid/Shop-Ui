import React, { useContext } from "react";
import { CartContext } from "../components/Contex/CartContext";
import EmptyCart from '../components/ui/cart/EmptyCart';
import CartItemDrawer from '../components/ui/card/CartItemDrawer';

const CartDrawerPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

  if (!cart || cart.length === 0) return <EmptyCart />

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-1 w-full max-w-4xl">
        {cart.map((item) => (
          <CartItemDrawer
            key={`${item.productId}-${item.colorName}`}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartDrawerPage;
