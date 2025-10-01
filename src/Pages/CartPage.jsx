import React, { useContext } from "react";
import { CartContext } from "../components/Contex/CartContext";
import EmptyCart from '../components/ui/cart/EmptyCart';
import CartItem from '../components/ui/cart/CartItem';
import CartTotal from '../components/ui/cart/CartTotal';

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext);

  if (!cart || cart.length === 0) return <EmptyCart />

  const totalCartPrice = cart
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);

  return (
    <div className="flex flex-col items-center mt-6 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6  text-center">
        Shopping Cart
      </h1>

      <div className="space-y-4 w-full max-w-4xl">
        {cart.map((item) => (
          <CartItem
            key={`${item.productId}-${item.colorName}`}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>

      <CartTotal total={totalCartPrice} />
    </div>
  );
};

export default CartPage;
