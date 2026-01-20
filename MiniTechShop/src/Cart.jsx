import { useCart } from "./context/CartContext.jsx";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length === 0 && <p className="empty-cart">Your cart is empty.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <p>{item.title} x {item.quantity}</p>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
