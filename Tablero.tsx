import React = require('react');
import Boton from './Boton';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function Tablero() {
  const columna = [];
  let aux: number = 0;
  for (let i = 0; i < 3; i++) {
    const casilla = [];
    for (let j = 0; j < 3; j++) {
      aux++;
      casilla.push(<Boton indice={aux}></Boton>);
    }
    columna.push(<div className="fila">{casilla}</div>);
  }

  return <>{columna}</>;
}
export default Tablero;
