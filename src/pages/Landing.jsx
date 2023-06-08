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
        <>
        {register ? (
            <form onSubmit={e => handleSubmit(e)}> 
                <input placeholder='Username' onChange={(e => setUsername(e.target.value))}></input>
                <input placeholder='Password' onChange={(e => setPassword(e.target.value))}></input>
                <button>Register</button>
            </form>
        ) : (
            <form onSubmit={e => handleSubmit(e)}> 
                <input placeholder='Username' onChange={(e => setUsername(e.target.value))}></input>
                <input placeholder='Password' onChange={(e => setPassword(e.target.value))}></input>
                <button>Login</button>
            </form>
        )}
            <button onClick={() => setRegister(!register)}> Need to {register ? "login?" : "register?"}</button>
        </>
    )
}

export default Landing