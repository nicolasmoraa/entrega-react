import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function ItemDetail({ id, nombre, descripcion, precio, imagen }) {
  const { addItem } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    addItem({ id, nombre, precio }, cantidad);
    setAgregado(true);
  };

  return (
    <div className="card">
      {/* ...contenido del producto... */}
      {!agregado ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p className="text-success mt-3">¡Producto agregado!</p>
      )}
    </div>
  );
}

export default ItemDetail;
