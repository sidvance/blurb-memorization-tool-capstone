import React from "react";
import { useNavigate } from "react-router-dom";

const BlurbCard = ({blurb}) => {
    const navigate = useNavigate()
    return (
        <div className='h-[140px] w-[200px] border-solid border rounded flex flex-col items-center p-2 m-2 shadow-lg'>
            <div className='content-center'>
                <h1 className='m-1 font-xl font-bold'>{blurb.title}</h1>
                <h2>{blurb.source}</h2>
            </div>
            <div className='mt-auto flex flex-col'>
                <button className='text-sm px-1 border-black text-black border-solid border rounded-lg font-bold hover:bg-white hover:bg-shadow-md' onClick={() => navigate(`/home/${blurb.id}`)} >memorize</button>
                <button className='text-sm p-1 hover:underline'>delete</button>
            </div>
        </div>
    )
}

export default BlurbCard