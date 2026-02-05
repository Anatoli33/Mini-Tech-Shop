import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        toast.success(`${product.title} quantity increased`);
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      const newProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.img,
        quantity: 1,
      };

      toast.success(`${product.title} added to cart`);
      return [...prev, newProduct];
    });
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((p) => p.id === id);

    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );

    if (item) {
      if (item.quantity === 1) {
        toast.error(`${item.title} removed from cart`);
      } else {
        toast(`${item.title} quantity decreased`);
      }
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find((p) => p.id === id);
    if (item) toast.error(`${item.title} removed from cart`);

    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    toast("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
