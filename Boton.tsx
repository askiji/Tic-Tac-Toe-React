import React = require('react');

function Boton({ indice }) {
  function handleClick() {
    console.log(`clicado el ${indice}`);
  }
  return (
    <button className="cuadrado" onClick={handleClick}>
      {indice}
    </button>
  );
}

export default Boton;
