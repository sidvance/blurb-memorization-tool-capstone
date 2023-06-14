import React from "react";
import { NavLink } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import AuthContext from "../store/authContext";


const Header = () => {
    const {userId, logout} = useContext(AuthContext)

    return (
        userId ? (
            <nav className='flex items-center h-[10vh] shadow-md'>
                <img className='float-left pl-1' src='https://scontent.flas1-1.fna.fbcdn.net/v/t39.30808-6/353401072_4225106444381460_5501482169437103377_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=OsKszKMlEmMAX8JK0GS&_nc_ht=scontent.flas1-1.fna&oh=00_AfDS75S9O_A4cybKvd4bGSV23EgyYSHka_ImB2Tmv-snqA&oe=64899D1E' alt='blurb' width='70' height='70'></img>
                <div className='mr-auto'>
                    <NavLink to='/home' className='top-1/2 left-1/2 p-2 m-3 bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan'>home</NavLink>
                    <NavLink to='/add-blurb' className='p-2 m-1 bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan'>add a blurb</NavLink>
                </div>
                    <button onClick={logout} className='ml-auto m-4 p-2 bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan'>logout</button>
                    
            </nav>
        ) : (
            null
        )
    )

}

export default Header