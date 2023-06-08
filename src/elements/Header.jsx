import React from "react";
import { NavLink } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import AuthContext from "../store/authContext";


const Header = () => {
    const {userId, logout} = useContext(AuthContext)

    return (
        userId ? (
        <nav className="flex justify-between">
            <NavLink to='/'>Landing</NavLink>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/add-blurb'>Add a Blurb</NavLink>
            <button onClick={logout}>Logout</button>
        </nav>
        ) : (
            null
        )
    )

}

export default Header