import React from "react";
import banner from "../imgs/banner.jpg"
function Hero() {
    return(
        <div className="hero" style={{backgroundImage: `url(${banner})`}}>
            <h1>특별한 숙소를 예약하세요</h1>
            <p>에이비앤비에서 독특한 숙소를 찾아보세요.</p>
        </div>
    )


}

export default Hero;