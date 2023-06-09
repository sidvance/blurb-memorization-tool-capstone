import React from "react";

const BlurbCard = ({blurb}) => {
    return (
        <div className='h-[300px] w-[300px] border-solid border-color-black border rounded-2xl'>
            <h1>{blurb.title}</h1>
            <h2>{blurb.source}</h2>
            <h4>{blurb.quote}</h4>
            <button>Memorize this blurb</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default BlurbCard