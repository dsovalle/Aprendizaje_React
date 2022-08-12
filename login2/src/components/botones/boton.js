import React from "react";


const boton = ({ text, className, google, alt }) => {
  return (
    <div>
      <button className={className}>

        <img src={google} alt={alt} />
        {text}
        
      </button>
    </div>
  )
}

export default boton;