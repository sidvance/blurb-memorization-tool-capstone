import React from "react";
import {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from '../store/authContext'

const AddBlurb = () => {
    const [quote, setQuote] = useState('')
    const [source, setSource] = useState('')
    const [title, setTitle] = useState('')
    const navigate = useNavigate()
    const {userId} = useContext(AuthContext)

    const handleSubmitForm = e => {
        e.preventDefault()
        const body = {
            title,
            source,
            quote,
            userId
        }

        axios.post('/api/blurbs', body)
            .then(res => {
                navigate('/home')
                console.log(res.data)
            })
            .catch(theseHands => console.log(theseHands))

    }


    return (
        <div className='bg-lightTan w-screen h-screen'>
            <form className='mt-[10vh]' onSubmit={handleSubmitForm}>
                <div className="flex flex-col items-center">
                    <input className='w-1/2 rounded shadow-md m-2 p-1' placeholder='title of your blurb' onChange={e => setTitle(e.target.value)} />
                    <input className='w-1/2 rounded shadow-md m-2 p-1' placeholder='source of your blurb' onChange={e => setSource(e.target.value)} />
                    <textarea maxLength='10000' className='w-1/2 h-96 rounded shadow-md m-2 p-1' placeholder='your blurb' onChange={e => setQuote(e.target.value)} />
                    <button className="p-2 m-2 bg-white text-black rounded-lg font-bold shadow-md hover:shadow-lg active:shadow-none active:bg-lightTan">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddBlurb