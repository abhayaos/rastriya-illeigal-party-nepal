import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-black border-b border-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white">
              RI
            </div>

            <div>
              <h1 className="text-white font-bold text-lg leading-none">
                Rastriya Illegal
              </h1>
              <p className="text-xs text-red-500">
                Gen-Z For 2026
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-white font-semibold transition duration-300">
              Join Movement
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden bg-black border-t border-red-600 py-5 flex flex-col gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-red-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}

            <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold">
              Join Movement
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;