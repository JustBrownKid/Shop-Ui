import React, { useContext } from "react";
import { CartContext } from "../Contex/CartContext";
import QuantitySelector from "./QuantitySelector";

const ProductActions = ({ product, color, quantity, setQuantity, onAddToCart }) => {
  const { addToCart } = useContext(CartContext);

const handleAddToCart = () => {
  if (!product) return alert("Product not loaded yet");
  if (!color?.name) return alert("Please select a color!");

  const cartItem = {
    productId: product.id,
    name: product.title,
    price: product.price || 0,
    colorName: color.name,
    colorId: color.id,
    quantity: quantity || 1,
    image: product.image,
  };

  addToCart(cartItem);

  if (onAddToCart) onAddToCart(cartItem);
  console.log(`${quantity} x ${product.title} added to cart with color ${color.name}`);
};


  return (
    <div className="flex flex-col gap-3 w-full sm:w-[350px]">
      <div className="flex gap-3">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <button
          className="bg-white text-black font-semibold py-2 px-4 border border-black text-xl w-full transition-colors duration-200 hover:bg-black hover:text-white"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
