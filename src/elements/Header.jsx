import React from "react";
import { NavLink } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import AuthContext from "../store/authContext";


const Header = () => {
    const {userId, logout} = useContext(AuthContext)

    return (
        userId ? (
            <nav className='flex justify-center items-align h-[10vh] border-black border-solid md-border-dotted border-2 '>
                <NavLink to='/home' className="top-1/2 left-1/2">Home</NavLink>
                <NavLink to='/add-blurb'>Add a Blurb</NavLink>
                <button onClick={logout} className="top-1/2 right-1/2">Logout</button>
            </nav>
        ) : (
            null
        )
    )

}

export default Header