import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">🛒 El carrito está vacío</h2>;
  }

  const total = cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de compras</h2>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.nombre} x{item.quantity}
            <span>${item.precio * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h4>Total: ${total}</h4>
      <Link to="/checkout" className="btn btn-success mt-3">Finalizar compra</Link>

    </div>
  );
}

export default Cart;
