import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Mini Tech Shop</h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/products">
            Product List
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
