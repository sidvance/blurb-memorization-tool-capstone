import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const MemoryPage = () => {
    const {blurbId} = useParams()
    const [blurb, setBlurb] = useState({})

    const getBlurb = () => {
        axios.get(`/api/blurb/${blurbId}`)
            .then(res => setBlurb(res.data))
            .catch(theseHands => console.log(theseHands))
    }

    useEffect(getBlurb, [])
    console.log(blurb)

    return (
        <div className='bg-lightTan w-screen h-screen' id='memory-page-bg'>
            <div id='container' className='flex w-3/4 h-3/4 bg-black m-auto shadow-lg rounded flex items-end'>
                <h1 className='text-lightTan'>{blurb.title}</h1>
                <h2 className='text-lightTan'>{blurb.source}</h2>
                <div className='w-11/12 h-3/4 bg-lightTan m-auto rounded'>
                    <h4>{blurb.quote}</h4>
                </div>
            </div>
        </div>
        )

}

export default MemoryPage