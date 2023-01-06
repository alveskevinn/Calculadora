import React from "react";
import "./Botao.css";

export default function Botao({ label, operation, double, triple, click }) {
  return (
    <button onClick={_ => click && click(label)}
      className={`button ${operation ? "operation" : ""} ${
        double ? "double" : ""
      } ${triple ? "triple" : ""}`}
    >
      {label}
    </button>
  );
}
