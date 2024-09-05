import React from "react";
import './Button1.css';
import './Button2.css'

function Button(props){
    return(
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

export default Button;