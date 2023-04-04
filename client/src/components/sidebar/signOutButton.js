import React from 'react'
import { IconContext } from 'react-icons/lib'
import { Link, useLocation } from 'react-router-dom'
import '../sidebar/signOutButton.css'

function SignOutButton(props) {

    const location = useLocation();

    const isActive = location.pathname === props.to;

    const signOutClass = isActive ? "sign-out-body active" : "sign-out-body";

    return (
        <Link to = {props.to} >
        <div className={signOutClass}>
        <IconContext.Provider value={{size: "30px", className: "btn-icon"}}>
            {props.icon}
            <p className="sign-out-title">{props.title}</p>
            </IconContext.Provider>
        </div>
        </Link>
    )
}

export default SignOutButton
