import React from "react";

function Button(props){
    let {onClick, colourName="olive"} = props
    return (
        <button onClick={onClick} className="m-2 p-2 text-white font-semibold rounded-xl">{colourName}</button>
    )
}

export default Button;