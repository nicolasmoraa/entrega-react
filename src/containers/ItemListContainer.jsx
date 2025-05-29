import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../data/productos';
import ItemList from '../components/ItemList';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const obtenerDatos = categoriaId ? getProductosPorCategoria : getProductos;
    obtenerDatos(categoriaId).then(setProductos);
  }, [categoriaId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Destinos {categoriaId ? `- ${categoriaId}` : ''}</h2>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
