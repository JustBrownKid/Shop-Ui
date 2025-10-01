import { ShoppingCartOutlined } from "@ant-design/icons";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-50 sm:py-20 text-center text-gray-500">
      <div className="text-6xl mb-4">
        <ShoppingCartOutlined />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
      <p className="mb-6">Looks like you haven’t added any items yet.</p>
      <a
        href="/"
        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Go Shopping
      </a>
    </div>
  );
};

export default EmptyCart;
