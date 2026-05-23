import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        borderTop: '3px double #8b4513',
        background: '#e8d5a3',
        color: '#2c1810',
        marginTop: '3rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="vintage-heading text-xl">Rastriya Illegal Party</h3>
            <p className="mt-3" style={{ color: '#5c3a1e', fontSize: '0.875rem' }}>
              A Gen-Z movement for a future-first Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="vintage-heading text-lg mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="vintage-nav-link">Home</Link>
              <Link to="/about" className="vintage-nav-link">About</Link>
              <Link to="/movement" className="vintage-nav-link">Movement</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="vintage-heading text-lg mb-3">Connect</h4>
            <p style={{ color: '#5c3a1e', fontSize: '0.875rem' }}>
              Join the movement. Your voice matters.
            </p>
          </div>

        </div>

        <hr className="vintage-divider" />

        <p
          className="text-center"
          style={{ color: '#5c3a1e', fontSize: '0.8rem' }}
        >
          &copy; {new Date().getFullYear()} Rastriya Illegal Party. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
