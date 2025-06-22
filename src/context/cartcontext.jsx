import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);
    if (itemInCart) {
      setCart(cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const getTotalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
