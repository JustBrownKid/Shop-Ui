import React, { useState, useEffect,useContext  } from "react";
import { Drawer, Button, Space } from "antd";
import { CloseOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import CartTotal from '../cart/CartTotal';
import { CartContext } from "../../Contex/CartContext";


const CartDrawer = ({ title, open, onClose, children }) => {
  const [drawerWidth, setDrawerWidth] = useState(400);
  const { cart } = useContext(CartContext);

    const totalCartPrice = cart
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDrawerWidth(width * 0.8);
      } else {
        setDrawerWidth(400);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      closable={false}
      placement="right"
      width={drawerWidth}
      bodyStyle={{ 
        padding: 0, 
        display: "flex", 
        flexDirection: "column", 
        height: "100%" 
      }}
      title={
       <div className="flex justify-between items-center w-full">
        <span className="font-semibold text-lg">{title}</span>
        <Button
          size="small"
          onClick={onClose}
          style={{
            backgroundColor: "#9f9f9f",
            border: "none",
            borderRadius: "15%", 
            width: "40px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
  <CloseOutlined style={{ fontSize: "16px", fontWeight: "bold" }} />
</Button>

      </div>
      }
    >
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        {children}
      </div>

      <div className="px-10 py-4 border-t flex flex-col  justify-end bg-white">
        <CartTotal total={totalCartPrice} />
        <Button
          color="default"
          variant="solid"
          size="large"
          href="/cart"
          icon={<ShoppingCartOutlined style={{ fontSize: "1.4em" }} />}
        >
          View Cart
        </Button>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
