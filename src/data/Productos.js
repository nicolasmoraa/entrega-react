import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProductos = async () => {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductoPorId = async (id) => {
  const docRef = doc(db, "productos", id);
  const snapshot = await getDoc(docRef);
  return { id: snapshot.id, ...snapshot.data() };
};

export const getProductosPorCategoria = async (categoriaId) => {
  const productosRef = collection(db, "productos");
  const q = query(productosRef, where("categoria", "==", categoriaId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
