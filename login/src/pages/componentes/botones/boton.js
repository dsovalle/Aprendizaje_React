import React from "react";

const boton = ({ text, tipoBoton, google, alt }) => {
    return (
        <div>
            <button className={tipoBoton ?
                'inicar-sesion flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-2  rounded-full text-white font-semibold text-lg border-2  w-full bg-prsazul m-1' :
                'google flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-full text-black font-semibold text-lg border-2 border-white w-full bg-prsgray m-1'}>
                <img src={google} alt={alt} />
                {text}
                
            </button>
        </div>
    )
}

export default boton;