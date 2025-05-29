import { useState } from 'react';

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="text-center mt-3">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
        <button className="btn btn-outline-secondary" onClick={disminuir}>-</button>
        <span className="fs-4">{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={aumentar}>+</button>
      </div>
      <button
        className="btn btn-success"
        onClick={() => onAdd(cantidad)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
