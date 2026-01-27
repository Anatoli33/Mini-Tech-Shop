import { useCart } from "./context/CartContext.jsx";
import "./cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();


  const totalPrice = cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length === 0 && <p className="empty-cart">Your cart is empty.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} width={80} className="cart-item-image" />
          <div className="cart-item-details">
            <p className="cart-item-title">{item.title}</p>
            <p>Price: €{item.price}</p>
            <p className="quantity">Quantity: {item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total: €{totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;