import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
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

          {/* Right: CTA / Mobile button */}
          <div className="flex items-center gap-4">
            <a
              href="/cart"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-rose-500 text-white text-sm font-medium shadow-sm hover:opacity-95"
            >
              View Cart
            </a>

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

            {/* extra mobile actions */}
            <div className="mt-2 px-3">
              <a href="/cart" className="block w-full text-center px-4 py-2 rounded-md bg-rose-500 text-white font-medium">
                View Cart
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
