import React from "react";

const AddToCartButton = ({ onClick, children }) => {
  return (
    <button
      className="bg-white text-black font-semibold py-3 px-4 border border-black text-xl w-full 
                 transition-all duration-200 
                 hover:bg-black hover:!text-white 
                 active:scale-[0.95]  active:bg-black active:!text-white "
      onClick={onClick}
    >
      {children || "Add To Cart"}
    </button>
  );
};

export default AddToCartButton;