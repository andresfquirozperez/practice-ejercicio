import { useState } from "react";

export const Contador = () => {
  const [state, setState] = useState(true);
  return (
    <div className="bg-amber-600 p-4 rounded-2xl">
      <h1 className="title">Contador</h1>
      <button
        className="buttonClick"
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "Ver" : "Ocultar"}
      </button>
    </div>
  );
};
1;
33;
28;
