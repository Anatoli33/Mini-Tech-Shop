import "./navigation.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Mini Tech Shop</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Product List</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
