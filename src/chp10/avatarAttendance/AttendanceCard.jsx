import React from "react";
import './AttendanceCard2.css';
import imgs from './imgs/1.jpg';

const students = [
    {id: 1, name: "윤이나", grade: 2, major: "인공지능소프트웨어", avatar: "https://randomuser.me/api/portraits/men/1.jpg"},
    {id: 2, name: "박현경", grade: 3, major: "전기", avatar: "https://randomuser.me/api/portraits/men/2.jpg"},
    {id: 3, name: "임희정", grade: 3, major: "그린에너지", avatar: "https://randomuser.me/api/portraits/women/3.jpg"},
    {id: 4, name: "유현주", grade: 4, major: "시각디자인", avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id: 5, name: "마다솜", grade: 1, major: "인공지능소프트웨어", avatar: "https://randomuser.me/api/portraits/men/5.jpg"},
    {id: 6, name: "김지우", grade: 2, major: "경영학", avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id: 7, name: "이민호", grade: 3, major: "기계공학", avatar: "https://randomuser.me/api/portraits/men/7.jpg"},
    {id: 8, name: "조아영", grade: 4, major: "심리학", avatar: "https://randomuser.me/api/portraits/women/8.jpg"},
    {id: 9, name: "또 하나의 나", grade: 19, major: "타짜", avatar: "https://i.namu.wiki/i/yluYzXHS0xQmzwTFPjgWjrLHrfsh_0rpvELJrHKwQr7cB3C6FCgiUAPi5y2Yfnlrq2d2Lm0vwRKBoQmcZhzb2Q.webp"},
    {id: 10, name: "윌슨", grade: 24, major: "친구학", avatar: "src/chp10/avatarAttendance/imgs/1.jpg"},

];


function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((students)=>(
                        <div className="student-card">
                            <img src={students.avatar} alt={students.avatar} className="student-avartar"/>
                            <div className="student-info">
                                <h3>{students.name}</h3>
                                <p>{students.grade}학년 | {students.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;