import React from "react";
import UserGreating from "./UserGreating";
import GuestGreating from "./GuestGreating";
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreating />;
    }
    return <GuestGreating/>
}

export default Greeting;