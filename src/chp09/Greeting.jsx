import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import UserGreating from "./UserGreating";
import GuestGreeting from "./GuestGreating";


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreating />;
    }
    return <GuestGreeting />;
}

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    let btn;
    if (isLoggedIn) {
        btn = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        btn = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {btn}
        </div>
    );
}

export default LoginControl;
