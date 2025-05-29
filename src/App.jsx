import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 className="text-center mt-4">404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
