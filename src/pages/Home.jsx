import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
import BlurbCard from "../elements/BlurbCard";

const Home = () => {
    const [allBlurbs, setAllBlurbs] = useState([])
    const {userId} = useContext(AuthContext)

    const getUserBlurbs = () => {
        axios.get(`/api/blurbs/${userId}`)
            .then(res => {
                console.log(res.data)
                setAllBlurbs(res.data)
            })
            .catch(theseHands => console.log(theseHands))
    }

    useEffect(() => {
        getUserBlurbs()
    }, [])

    return (
        <div>
            <div id='card-container' className='flex flex-wrap justify p-10'>
            {allBlurbs.map(blurb => <BlurbCard blurb={blurb}/>)}
            </div>
        </div>
    )
}

export default Home