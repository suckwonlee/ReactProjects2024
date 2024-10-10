import React from "react";
//기본적인 클릭 이벤트 처리
//버튼을 클릭하면 알림창이 표시되게 하시오
//함수형 컴포넌트

function ClickButton(){
    function handleclick(){
        alert("버튼을 클릭하였습니다.");
    }

    return(
      <button onClick={handleclick}>
          클릭
      </button>
    );
}

export default ClickButton;