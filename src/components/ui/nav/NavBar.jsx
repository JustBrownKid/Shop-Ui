import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button } from "antd";
import { CartContext } from "../../Contex/CartContext";
import CartDrawer from '../cart/CartDrawer'
import CartPage from '../../../Pages/CartPage'


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Assuming CartContext provides totalQuantity
  const { totalQuantity } = useContext(CartContext);

  const links = [
    { name: "Home", to: "/" },
    { name: "Blog", to: "/blog" },
    { name: "Location", to: "/location" },
    { name: "Hiring", to: "/hiring" },
  ];

  const NavItem = ({ name, to }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150
            ${isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`
        }
        onClick={() => setOpen(false)}
      >
        {name}
      </NavLink>
    );
  };

  return (
    // FIX: Changed z-1100 to z-50.
    // z-50 is a high but standard Tailwind z-index value (z-index: 50),
    // which is guaranteed to be lower than the drawer's zIndex={5000}.
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-600 to-indigo-200 flex items-center justify-center text-white font-bold">N</div>
              <span className="text-lg font-semibold text-gray-900">Neonova</span>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {links.map((l) => (
              <NavLink
                key={l.name}
                to={l.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-all duration-150
                    ${isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"}`
                }
              >
                {l.name}
              </NavLink>
            ))}
          </nav>

          {/* Right: Cart and Mobile button */}
          <div className="flex items-center gap-4">

            {/* Cart Link (Visible on ALL screens, but text hidden on small screens) */}

            <button

              onClick={() => setOpenDrawer((prev) => !prev)}

              className="flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white text-sm font-medium shadow-sm hover:opacity-95 relative"
            >
              {/* "View Cart" text hidden below sm breakpoint */}
              <span className="hidden sm:inline-block text-amber-50">View Cart</span>

              {/* Badge positioned relative to icon */}
              <Badge
                count={totalQuantity}
                size={"small"}
                offset={[10, -6]}
                showZero={false}
              >
                <ShoppingCartOutlined
                  style={{
                    fontSize: "1.5em",
                    color: "white",
                    padding: '0 4px',
                  }}
                />
              </Badge>
            </button>
            <CartDrawer
              title="Shopping Cart" 
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              zIndex={5000}
            >
              <CartPage />
            </CartDrawer>

            {/* Mobile menu button */}
            <button
              className="inline-flex md:hidden items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t">

          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((l) => (
              <NavItem key={l.name} {...l} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
