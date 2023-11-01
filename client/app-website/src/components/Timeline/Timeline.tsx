import React from 'react';
import TimelineItem from './TimelineItem.tsx';

function Timeline(props){
        
    return(
        <div className="flex h-full p-3 relative after:absolute after:top-[calc(50%-2px)] after:w-full after:h-1 after:bg-[#e17b77] [&_.circle]:bg-white [&_.circle]:right-[calc(50%-10px)] [&_.circle]:border-2 [&_.circle]:border-red-600 [&_.circle]:w-5 [&_.circle]:h-5 [&_.circle]:z-50 [&_.circle]:absolute [&_.circle]:rounded-[50%]">
            {props.data.map((data, idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
        </div>
    )
}

export default Timeline;