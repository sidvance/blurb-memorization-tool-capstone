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
        <div>
            <h1>{blurb.title}</h1>
            <h2>{blurb.source}</h2>
            <h4>{blurb.quote}</h4>
        </div>
    )
}

export default MemoryPage