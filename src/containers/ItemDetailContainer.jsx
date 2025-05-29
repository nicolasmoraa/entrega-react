import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../data/productos';
import ItemDetail from '../components/ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductoPorId(itemId).then(setProducto);
  }, [itemId]);

  return (
    <div className="container mt-4">
      {producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
