import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const { cart, getTotalQuantity, cartTotal, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.telefono) {
      alert("Por favor completá todos los campos");
      return;
    }

    const orden = {
      cliente: form,
      items: cart,
      total: cartTotal(),
      fecha: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      alert("Error al generar la orden");
      console.error(error);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <h2>✅ ¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")} className="btn btn-success mt-3">Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Nombre</label>
          <input className="form-control" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Teléfono</label>
          <input className="form-control" name="telefono" value={form.telefono} onChange={handleChange} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Generar orden</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
