import React = require('react');
import Boton from './Boton';

function Tablero() {
  const columna = [];
  let aux: number = 0;
  for (let i = 0; i < 3; i++) {
    const casilla = [];
    for (let j = 0; j < 3; j++) {
      aux++;
      casilla.push(<Boton indice={aux}></Boton>);
    }
    columna.push(<div>{casilla}</div>);
  }
  console.log(columna);
  return <div>{columna}</div>;
}
export default Tablero;
