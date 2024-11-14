import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './chp03/Book.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from "./chp03/Library";
// import ConfirmDialog from "./chp04/ConfirmDialog";
// import Clock from "./chp04/Clock";
// import Commentlist from "./chp05/Commentlist";
// import NotificationList from "./chp06/NotificationList";
// import Accommodate from "./chp07/Accommodate";
// import Toggle from "./chp08/Toggle";
// import mybutton from "./chp08/Mybutton";
// import Toggle2 from "./chp08/Toggle2";
// import ClickButton from "./chp08/ClickButton";
// import Counter from "./chp08/Counter";
// import InputTest from "./chp08/inputTest";
// import ConfirmButton from "./chp08/ConfirmButton";
// import ConfirmButton3 from "./chp08/ConfirmButton3";
// import Greeting from "./chp09/Greeting";
// import MailBox from "./chp09/MailBox";
// import LoginControl2 from "./chp09/LoginControl2";
// import LandingPage from "./chp09/LandingPage";
// import AppNumberList from "./chp10/AppNumberList";
import StudentAttendance from "./chp10/StudentAttendance";
import AppStudentAttendance from "./chp10/AppStudentAttendance";
import AttendanceCard from "./chp10/avatarAttendance/AttendanceCard";



const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <AttendanceCard/>
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
