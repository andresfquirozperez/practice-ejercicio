interface Producto {
  nombre: string;
  precio: number;
  destacado: boolean;
}

interface CardProducto {
  item: Producto;
}
export const CardProducto = ({ item }: CardProducto) => {
  return (
    <div className="p-4 border rounded-2xl shadow-2xl">
      <h3 className="text-xl font-bold">{item.nombre}</h3>
      <p className="text-gray-600">{item.precio}</p>

      {item.destacado && (
        <span className="text-yellow-600 font-semibold">
          ⭐ Producto destacado
        </span>
      )}
    </div>
  );
};
