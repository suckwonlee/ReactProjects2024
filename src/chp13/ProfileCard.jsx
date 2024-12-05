import React from "react";
import Card from "./Card";
import './styles.css';
function ProfileCard(){
    return (
//         <>
//         <Card title="SuckwonLee" backgroundColor="red">
//             <p>안녕하세요~ 이석원입니다.</p>
//             <p>리엑트로 카드형 템플릿을 작성중입니다.</p>
//         </Card>
//         <Card title="willson" backgroundColor="green">
//         <p>안녕하세요~ 윌슨입니다.</p>
//         <p>리엑트로 카드형 템플릿을 작성중입니다.</p>
//         </Card>
//         <Card title="Cayde" backgroundColor="blue">
//         <p>안녕하세요~ 케이드입니다.</p>
//         <p>리엑트로 카드형 템플릿을 작성중입니다.</p>
//         </Card>
//         <card>
//
//         </card>
// </>
        <Card className="profile-card" title="suckwonLee">
            <p>안녕하세요 이석원입니다.</p>
            <p>리엑트로 카드형 템플릿을 작성중입니다.</p>
        </Card>
    );
}

export default ProfileCard;