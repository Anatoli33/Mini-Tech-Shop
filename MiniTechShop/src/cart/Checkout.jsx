import { useState } from "react";
import "./checkout.css";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
  });

  const cartItems = [
    { id: 1, name: "Premium Plan", price: 49 },
    { id: 2, name: "Extra Storage", price: 19 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Order submitted:", formData);
  }

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <h2>Checkout</h2>

        {/* Order Summary */}
        <section className="order-summary">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}

          <hr />

          <div className="order-total">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </section>

        {/* Billing Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Billing Details</h3>

          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}
