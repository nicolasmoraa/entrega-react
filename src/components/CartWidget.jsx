import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);
  const cantidad = getTotalQuantity();

  return (
    <Link to="/cart" className="btn btn-light position-relative">
      🛒
      {cantidad > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          {cantidad}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
