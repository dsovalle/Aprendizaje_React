import React from "react";

const Label = ({ text, className }) => {
    return(
        <div>
            <label className={className}>{text}</label>
        </div>
    )
}

export default Label;