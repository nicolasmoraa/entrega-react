import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <Link className="navbar-brand" to="/">Viajes 2025</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/categoria/sur">Sur</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/categoria/norte">Norte</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/categoria/costa">Costa</Link></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
