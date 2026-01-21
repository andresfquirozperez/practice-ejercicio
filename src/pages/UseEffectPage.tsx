import { useEffect, useState } from "react";
import { BtnVolver } from "../components/ui/BtnVolver";

export const UseEffectPage = () => {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);
  return (
    <main className="bg-amber-500 h-screen">
      <BtnVolver />
      <span>UseEffect: </span>
      {segundos}
    </main>
  );
};

export default UseEffectPage;
