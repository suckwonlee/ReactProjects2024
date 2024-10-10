import React, {useState} from "react";
//상태변경을 포함한 이벤트 처리

function Counter(){
    const[count,setCount]=useState(0)

    function handleCount(){
        setCount(prevState => prevState+1);
    }
    function handleCount10(){
        setCount(prevState => prevState+10);
    }
    function handleCount100(){
        setCount(prevState => prevState+100);
    }
    function handleCountV(){
        setCount(prevState => prevState*prevState);
    }

    return(
        <div>
            <p>클릭횟수: {count}</p>
            <button onClick={handleCount}>1씩 증가됨</button>
            <button onClick={handleCount10}>10씩 증가됨</button>
            <button onClick={handleCount100}>100씩 증가됨</button>
            <button onClick={handleCountV}>제곱으로 증가됨</button>
        </div>
    );
}

export default Counter;