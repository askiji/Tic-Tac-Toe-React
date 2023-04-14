import { useState } from 'react';
import React = require('react');

function Boton({ indice }) {
  const [value, setValue] = useState(null);
  function handleClick(hola: string) {
    setValue('X');
    console.log(`clicado el ${indice} ${hola}`);
  }
  return (
    <button className="cuadrado" onClick={() => handleClick('mola')}>
      {value || String.fromCharCode(32)}
    </button>
  );
}

export default Boton;
