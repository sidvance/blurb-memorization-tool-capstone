import React from "react";
import { useNavigate } from "react-router-dom";

const BlurbCard = ({blurb}) => {
    const navigate = useNavigate()
    return (
        <div className='h-[140px] w-[200px] border-solid border border-darkerTan bg-white rounded flex flex-col items-center p-2 m-2 shadow-md'>
            <div className='flex flex-col content-center items-center' id='title-container'>
                <h1 className='m-1 text-lg font-bold'>{blurb.title}</h1>
                <h2 className='text-base'>{blurb.source}</h2>
            </div>
            <div className='mt-auto flex flex-col'>
                <button className='text-sm p-1 px-2 bg-white border-darkerTan border text-black rounded-lg font-bold hover:bg-darkerTan hover:text-white active:bg-lightTan active:p-1 active:shadow-none' onClick={() => navigate(`/memory-page/${blurb.id}`)} >memorize</button>
            </div>
        </div>
    )
}

export default BlurbCard