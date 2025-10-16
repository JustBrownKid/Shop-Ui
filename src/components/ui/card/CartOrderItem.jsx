import React from "react";

const CardOrderItem = ({
  item,
  className = "",
  imageSize = 80,
  children,
}) => {
  return (
    <div
      className={`flex items-center bg-white p-3 rounded-lg border border-gray-200 w-full gap-3 ${className}`}
    >
      {item.image && (
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: imageSize, height: imageSize }}
            className="object-cover rounded"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col justify-center gap-1 px-2">
        {item.name && <p className="text-sm font-medium">{item.name}</p>}
        {item.colorName && <p className="text-xs text-gray-500">{item.colorName}</p>}
      </div>

      <div className="flex flex-col items-end gap-1">
        <p className="text-sm">Quantity: {item.quantity}</p>
        {item.price !== undefined && (
          <p className="text-sm font-semibold">
            {Number(item.price * item.quantity).toLocaleString()} MMK
          </p>
        )}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

export default CardOrderItem;
