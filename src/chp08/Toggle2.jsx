import React, {useState} from "react";

function Toggle2(){
    const [isToggleon,SetIsToggleon]=useState(true)
    //첫번째 방법: 함수 컴포넌트 내에 함수로 정의하는 방법
    // function handleClick(){
    //     SetIsToggleon((isToggleon)=>!isToggleon);
    // }

    //함수형 컴포넌트2
    const handleClick = ()=>{
        SetIsToggleon((isToggleon)=>!isToggleon);
    }
    return(
        <button onClick={handleClick}>
            함수형 컴포넌트{isToggleon? "켜짐":"꺼짐"}
        </button>
    );

}

export default Toggle2;