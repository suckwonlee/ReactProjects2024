import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments=[
    {
        name:"이석원",
        comment:"추석연휴 잘 보내고 오세요",
    },
    {
        name:"차기환",
        comment:"집에 언제 가나~ 차막혀서",
    },
    {
        name:"김종현",
        comment:"XCOM 프로젝트 예습용,실습용을 나눈다.",
    },
];
function Commentlist(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment} />

                );
            })}
        </div>
    );
}

export default Commentlist;