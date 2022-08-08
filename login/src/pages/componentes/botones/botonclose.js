import React from "react";

const botonClose = ({ text, close, alt }) => {
    return (
        <div>
            <button className="float-right">
                <img src={close} alt={alt} className='w-9 h-9 m-2'/>
                {text}
                
            </button>
        </div>
    )
}

export default botonClose;