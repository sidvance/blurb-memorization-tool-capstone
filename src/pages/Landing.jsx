import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from 'axios'
import AuthContext from "../store/authContext";

const Landing = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)
    const authCtx = useContext(AuthContext)
    console.log(authCtx)

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(register ? "/api/register" : "/api/login", {username, password})
            .then(res => {
                authCtx.login(res.data.userId)
            })
            .catch(theseHands => console.log(theseHands))
    }

    return(
        <main className='flex min-w-full h-[100vh] items-center justify-center flex-col'>
            <img src='https://scontent.flas1-1.fna.fbcdn.net/v/t39.30808-6/353401072_4225106444381460_5501482169437103377_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=OsKszKMlEmMAX8JK0GS&_nc_ht=scontent.flas1-1.fna&oh=00_AfDS75S9O_A4cybKvd4bGSV23EgyYSHka_ImB2Tmv-snqA&oe=64899D1E' alt='blurb' width='250' height='250'></img>
        {register ? (
            <form onSubmit={e => handleSubmit(e)} className='flex flex-col justify-space-evenly items-center m-10'> 
                <input placeholder='username' onChange={(e => setUsername(e.target.value))} className='p-1 shadow-md rounded'></input>
                <input placeholder='password' type='password' name='password' onChange={(e => setPassword(e.target.value))} className='p-1 m-7 shadow-md rounded'></input>
                <button className="bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan py-2 px-5">register</button>
            </form>
        ) : (
            <form onSubmit={e => handleSubmit(e)} className='flex flex-col justify-space-evenly items-center m-10'> 
                <input placeholder='username' onChange={(e => setUsername(e.target.value))} className='p-1 shadow-md rounded'></input>
                <input placeholder='password' type='password' name='password' onChange={(e => setPassword(e.target.value))} className='m-7 p-1 shadow-md rounded'></input>
                <button className="bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan py-2 px-5">login</button>
            </form>
        )}
            <button onClick={() => setRegister(!register)} className='hover:underline'> need to {register ? "login?" : "register?"}</button>
        </main>
    )
}

export default Landing

