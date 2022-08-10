import React from "react";

const Label = ({ text, tipo }) => {
    return(
        <div>
            <label className={ tipo? 'normal text-lg font-bold ' : 'tachado text-decoration-line: underline cursor-pointer'}>{text}</label>
        </div>
    )
}

export default Label;