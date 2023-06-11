import React from "react";
import { useNavigate } from "react-router-dom";

const BlurbCard = ({blurb}) => {
    const navigate = useNavigate()
    return (
        <div className='h-[100px] w-[200px] border-solid border-color-black border rounded flex flex-col items-center p-2 m-2'>
            <h1>{blurb.title}</h1>
            <h2>{blurb.source}</h2>
            <button onClick={() => navigate(`/home/${blurb.id}`)}>Memorize this blurb</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default BlurbCard