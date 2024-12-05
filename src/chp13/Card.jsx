import React from "react";
import './styles.css';
function Card({title,className,children}){
    return(
        <div className={`card ${className}`}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}
export default Card;