import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navigation.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Mini Tech Shop</h1>

      {/* Hamburger */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" onClick={closeMenu}>
            Product List
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" onClick={closeMenu}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;