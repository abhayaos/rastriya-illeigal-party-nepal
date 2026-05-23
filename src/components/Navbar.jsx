import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "What We Want", path: "/what-we-want" },
    { name: "Movement", path: "/movement" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50" style={{ background: '#e8d5a3', borderBottom: '3px double #8b4513' }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
            <div>
              <h1 className="vintage-heading text-2xl leading-none" style={{ fontStyle: 'italic' }}>
                Rastriya Illegal
              </h1>
              <p className="text-sm vintage-heading" style={{ color: '#5c3a1e', fontStyle: 'italic' }}>
                Party
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="vintage-nav-link"
              >
                {item.name}
              </Link>
            ))}

            <Link to="/movement" className="vintage-btn px-5 py-2" style={{ textDecoration: 'none' }}>
              Join Movement
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{ color: '#2c1810' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div
            style={{
              background: '#e8d5a3',
              borderTop: '2px solid #8b4513',
            }}
            className="py-5 flex flex-col gap-5"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="vintage-nav-link"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/movement"
              onClick={() => setOpen(false)}
              className="vintage-btn py-3"
              style={{ textDecoration: 'none', textAlign: 'center' }}
            >
              Join Movement
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
