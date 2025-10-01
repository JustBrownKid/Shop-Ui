import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart && storedCart !== "undefined" ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cart]);

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addToCart = (product) => {
    const storedCart = localStorage.getItem("cart");
    const currentCart = storedCart ? JSON.parse(storedCart) : [];

    const existing = currentCart.find(
      (item) =>
        item.productId === product.productId &&
        item.colorName === product.colorName
    );

    let newCart;

    if (existing) {
      newCart = currentCart.map((item) =>
        item.productId === product.productId &&
        item.colorName === product.colorName
          ? {
              ...item,
              quantity: item.quantity + (product.quantity || 1),
              totalPrice: (item.quantity + (product.quantity || 1)) * item.price,
            }
          : item
      );
    } else {
      newCart = [
        ...currentCart,
        {
          ...product,
          quantity: product.quantity || 1,
          totalPrice: (product.quantity || 1) * product.price,
        },
      ];
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQuantity = (productId, colorName) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.colorName === colorName
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId, colorName) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.productId === productId && item.colorName === colorName
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId, colorName) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.productId === productId && item.colorName === colorName)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
