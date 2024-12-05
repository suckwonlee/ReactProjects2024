import React from "react";
import banner from "../imgs/banner.jpg"
function Card({title,price,rating,imageUrl}){
    return(
        <div className='card'>
            <img src={imageUrl} alt={banner}/>
            <h3>{title}</h3>
            <p>￦{price.toLocaleString()} / 박</p>
            <p>★{rating}</p>
        </div>
    );
}
export default Card;