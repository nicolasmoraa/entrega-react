function ItemDetail({ nombre, descripcion, precio, imagen }) {
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
              <button className="btn btn-success">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ItemDetail;
  