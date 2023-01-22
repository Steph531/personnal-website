import React from 'react';

function TimlineItem(props){

    return(
        <div className="flex justify-end pr-10 relative my-3 w-1/2 odd:self-end odd:justify-start odd:pl-10 odd:pr-0 [&_.circle]:odd:right-auto [&_.circle]:odd:left-[-50px] [&>div]:odd:text-left [&>div]:odd:items-start">
            <div className="shadow rounded bg-white flex flex-col items-end relative text-right max-w-[70%] p-4 w-[400px]">
                <span>test</span>

                <span className="circle"></span>
            </div>
        </div>
    )
}

export default TimlineItem;