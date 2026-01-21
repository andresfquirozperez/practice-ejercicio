import { useState } from "react";
import styles from "./Contador.module.css";

export const Contador = () => {
  const [state, setState] = useState(true);
  return (
    <div className={styles.card}>
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
