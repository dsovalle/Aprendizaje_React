import React from 'react';

const Title = ({ text, titulo }) => {
  return (
    <div>
      <h1 className={ titulo ?  'centrado text-4xl font-bold text-main-blue tracking-tighter grid place-items-center' : 'Izquierda text-4xl font-bold text-main-blue tracking-tighter grid place-items-start'} >
         {text} 
      </h1>
    </div>
  );
}

export default Title;