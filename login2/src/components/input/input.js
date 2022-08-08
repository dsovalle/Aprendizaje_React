import React from "react";

const input = ({ text, types }) => {
    return(
        <div>
            <input className='w-full border border-black rounded-xl p-2 bg-transparent' placeholder={text} type={types} ></input>
        </div>
    )
}

export default input;