import { useContext } from "react";
import { CartContext } from "../../Contex/CartContext";
import QuantitySelector from "./QuantitySelector";
import Button from "../utils/Button";

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

  const handleBuyNow = () => {
    if (!product) return alert("Product not loaded yet");
    if (!color?.name) return alert("Please select a color!");
    console.log(`Buying ${quantity} x ${product.title} (${color.name}) now!`);
  };

  return (
    <div className="flex flex-col gap-3 w-full md:w-[380px]">
      <div className="flex gap-3">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
       <Button onClick={handleAddToCart}>
        Add To Cart
      </Button>
      </div>

      <button
          className="bg-black !text-white font-semibold py-3 px-4 border border-black text-xl w-full transition-colors duration-200 hover:!bg-white hover:!text-black"
        
        onClick={handleBuyNow}
      >
        Buy It Now
      </button>
    </div>
  );
};

export default ProductActions;
