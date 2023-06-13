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
        <div>
            <form className='mt-[10vh]' onSubmit={handleSubmitForm}>
                <input placeholder='Title of your blurb' onChange={e => setTitle(e.target.value)} />
                <input placeholder='Source of your blurb' onChange={e => setSource(e.target.value)} />
                <input placeholder='Your blurb' onChange={e => setQuote(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddBlurb