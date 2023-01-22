import React, {useEffect, useState} from 'react';
import {useIsVisible} from './hooks/useIsVisible.tsx';

function ProgressBar(props){
    const [completed, setCompleted] = useState(0);
    const [isIntersecting, elementRef] = useIsVisible({threshold : 1});

    const progressFillStyle = {
        width : `${completed}%`
    }


    useEffect(() => {
        if(isIntersecting){
            setCompleted(props.completed);

        }
      }, [isIntersecting]);

    return(
        <div className="my-3">
            <span>{props.name}</span>
            <div ref={elementRef} className="bg-[#F3F3F3] h-[10px]">
                <div style={progressFillStyle} className="transition-all ease-in-out duration-1000 w-full h-full bg-red-600">
                    
                </div>
            </div>
        </div>
    )
}
export default ProgressBar;