const productos = [
    { id: "1", nombre: "Bariloche", categoria: "sur", descripcion: "Montañas y lagos", precio: 60000, imagen: "/img/bariloche.jpg" },
    { id: "2", nombre: "Calafate", categoria: "sur", descripcion: "Glaciares", precio: 75000, imagen: "/img/calafate.jpg" },
    { id: "3", nombre: "Iguazú", categoria: "norte", descripcion: "Cataratas", precio: 50000, imagen: "/img/iguazu.jpg" },
    { id: "4", nombre: "La Costa", categoria: "costa", descripcion: "Playas argentinas", precio: 45000, imagen: "/img/costa.jpg" },
  ];
  
  export const getProductos = () =>
    new Promise(resolve => setTimeout(() => resolve(productos), 1000));
  
  export const getProductoPorId = (id) =>
    new Promise(resolve =>
      setTimeout(() => resolve(productos.find(prod => prod.id === id)), 1000)
    );
  
  export const getProductosPorCategoria = (categoriaId) =>
    new Promise(resolve =>
      setTimeout(() => resolve(productos.filter(prod => prod.categoria === categoriaId)), 1000)
    );
  