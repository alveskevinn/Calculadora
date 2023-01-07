import React, { useState } from "react";
import Botao from "../../components/Botao";
import Display from "../Display";
import "./Calculadora.css";
import "./Botao.css";

export default function Calculadora() {
  const [numeroDisplay, setNumeroDisplay] = useState(0);
  const [numeroAntigo, setNumeroAntigo] = useState(0);
  const [operador, setOperador] = useState();
  const [ac, setAc] = useState(true)

  const limparDisplay = () => {
  if(ac == true){
    setNumeroAntigo(0)
    setNumeroDisplay(0)
    setOperador("")
  }
  };
  const inserirDigito = (digito) => {
    if (numeroDisplay === 0) {
      setNumeroDisplay(parseFloat(digito));
    } else {
      let valorConvertido = Number(numeroDisplay + digito)
      setNumeroDisplay(valorConvertido);
    }
  };

  const operacao = (operadorInput) => {
    setNumeroDisplay(0);
    setOperador(operadorInput);
    setNumeroAntigo(numeroDisplay);
    setAc(false)
  };

  const calcular = () => {
    setAc(true)
    if(operador == "/"){
      setNumeroDisplay(Number(numeroAntigo) / Number(numeroDisplay))
    }if(operador == "*"){
      setNumeroDisplay(Number(numeroAntigo) * Number(numeroDisplay))
    }if(operador == "-"){
      setNumeroDisplay(Number(numeroAntigo) - Number(numeroDisplay))
    }if(operador == "+"){
      setNumeroDisplay(Number(numeroAntigo) + Number(numeroDisplay))
    }if(operador == "+"){
      setNumeroDisplay(Number(numeroAntigo) + Number(numeroDisplay))
    }
  }

  return (
    <div className="calculadora">
      <Display valor={numeroDisplay} />
      <Botao label={ac ? "AC" : "C"} triple click={() => limparDisplay()} />
      <Botao label="/" operation click={operacao} />
      <Botao label="7" click={inserirDigito} />
      <Botao label="8" click={inserirDigito} />
      <Botao label="9" click={inserirDigito} />
      <Botao label="*" operation click={operacao} />
      <Botao label="4" click={inserirDigito} />
      <Botao label="5" click={inserirDigito} />
      <Botao label="6" click={inserirDigito} />
      <Botao label="-" operation click={operacao} />
      <Botao label="1" click={inserirDigito} />
      <Botao label="2" click={inserirDigito} />
      <Botao label="3" click={inserirDigito} />
      <Botao label="+" operation click={operacao} />
      <Botao label="0" double={true} click={inserirDigito} />
      <Botao label="." click={inserirDigito} />
      <button onClick={() => calcular()} className="button operation">=</button>
      
    </div>
  );
}
