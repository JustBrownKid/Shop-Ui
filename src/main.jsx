import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/reset.css"; 
import { CartProvider } from "./components/Contex/CartContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
  </React.StrictMode>
);
