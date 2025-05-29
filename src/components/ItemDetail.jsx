import ItemCount from './ItemCount';

function ItemDetail({ nombre, descripcion, precio, imagen }) {
  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} unidad/es de "${nombre}" al carrito`);
  };

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text"><strong>${precio}</strong></p>
            <ItemCount stock={10} initial={1} onAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
