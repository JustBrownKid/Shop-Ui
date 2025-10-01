import React from "react";

const CartTotal = ({ total }) => {
  return (
    <div className="flex justify-center sm:justify-end mt-6">
      <p className="text-xl sm:text-2xl font-bold">
        Total: {parseFloat(total).toLocaleString()} MMK
      </p>
    </div>
  );
};

export default CartTotal;
