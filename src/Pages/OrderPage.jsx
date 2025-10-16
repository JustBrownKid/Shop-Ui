import React, { useState , useContext} from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../components/Contex/CartContext";

import CartOrderPage from "../components/ui/order/CartOrderPage";
import axios from 'axios';

const OrderPage = () => {
  const location = useLocation();
  const rawOrderData = location.state?.orderData || [];
  const staticCart = Array.isArray(rawOrderData) ? rawOrderData : [rawOrderData];

   const context = useContext(CartContext);
  const cart = staticCart.length > 0 ? staticCart  : context.cart || [];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setError("");

    const payload = {
      cusName: formData.firstName + " " + formData.lastName,
      cusPhone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      note: formData.note,
      items: cart.map((item) => ({
        product_id: item.productId,
        color_name: item.colorName,
         color_value: item.colorValue ,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/orders`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          withCredentials: true, 
        }
      );

      console.log('Order Response:', response.data);
      alert(response.data.message || 'Order submitted successfully!');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        note: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to submit order.');
      alert(err.response?.data?.message || 'Failed to submit order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-3 min-h-screen sm:px-1 md:px-5 lg:px-25">
      {/* Order Form */}
      <div className="flex-1 flex justify-center">
        <form
          className="p-6 rounded-lg w-full max-w-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-black">
            Order Form
          </h1>

          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* City & State */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          {/* Note */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Enter any additional notes..."
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black !text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
          >
            {loading ? "Submitting..." : "Submit Order"}
          </button>

          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>

      {/* Cart Section */}
      <div className="flex-1 flex justify-center">
        <div className="p-6 rounded-lg w-full">
          <h2 className="text-xl font-bold mb-4 text-black">Your Cart</h2>
          <div className="h-screen-h overflow-y-auto">
            <CartOrderPage cartData={staticCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
