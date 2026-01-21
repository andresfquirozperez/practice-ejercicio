import { CardProducto } from "./components/CardProducto";
import { Contador } from "./components/Contador";
import { HolaMundo } from "./components/HolaMundo";

function App() {
  const frutas = ["manzana", "banana", "pera"];
  const productos = [
    { nombre: "laptop", precio: 1200, destacado: true },
    { nombre: "mouse", precio: 45, destacado: false },
    { nombre: "teclado", precio: 250, destacado: false },
  ];
  return (
    <div className="bg-black h-screen text-white">
      <HolaMundo />
      <Contador />
      {/* la funcion flecha permite hacer más de una // cosa dentro de la funcion*/}
      {frutas.map((item, index) => {
        const texto = "Hola";
        return (
          <div key={index} className="text-white">
            {item} {texto}
          </div>
        );
      })}
      {/*
      // Al hacerlo con parentesis no puedo retornar // Ver diferencia con lo
      anterior
      {frutas.map((item, index) => (
        <div key={index} className="text-white">
          {" "}
          {item}
        </div>
      ))}
        */}

      <section className="flex flex-col gap-4">
        <span>Productos</span>
        {productos.map((item, index) => (
          <CardProducto key={index} item={item} />
        ))}
      </section>
    </div>
  );
}
// 1 54 37
export default App;
