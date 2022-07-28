import React from "react";
import '../hojas-de-estilo/Boton.css';
//otra manerea de poner props es por poner los valores adentro de los parentisis, ademas podemos agregar una función
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return(
    // Usamos un operador ternario para asiganar el tipo de boton
    <button 
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} 
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;