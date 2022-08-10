import React from "react";


const boton = ({ text, tipoBoton, google, alt, onclick  }) => {
  return (
    <div>
      <button className={tipoBoton ?
        'inicar-sesion flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg   w-full bg-main-blue m-2' :
        'google flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg  border-white w-full bg-main-gray m-2'}>

        <img src={google} alt={alt} />
        {text}
        
      </button>
    </div>
  )
}

export default boton;