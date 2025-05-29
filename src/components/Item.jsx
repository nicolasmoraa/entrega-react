import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, imagen }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">${precio}</p>
          <Link to={`/detalle/${id}`} className="btn btn-success">Ver más</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
