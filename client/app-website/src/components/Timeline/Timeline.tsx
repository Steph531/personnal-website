import React from 'react';
import TimelineItem from './TimelineItem.tsx';

function Timeline(props){
        
    return(
        <div className="flex flex-col relative my-10 after:absolute after:left-[calc(50%-2px)] after:w-1 after:h-full after:bg-[#e17b77] [&_.circle]:bg-white [&_.circle]:border-2 [&_.circle]:border-red-600 [&_.circle]:right-[-50px] [&_.circle]:w-5 [&_.circle]:h-5 [&_.circle]:z-50 [&_.circle]:top[calc(50%-10px)] [&_.circle]:absolute [&_.circle]:rounded-[50%]">
            {props.data.map((data, idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
        </div>
    )
}

export default Timeline;