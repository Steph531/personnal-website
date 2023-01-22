import React, {useEffect, useRef, useState} from 'react';

export function useIsVisible(options){
    const [isIntersecting, setIntersecting] = useState(false);
    const elementRef = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setIntersecting(entry.isIntersecting);
        }, options);

        if(elementRef.current){
            observer.observe(elementRef.current);
        }
        
        return ()=>{
            observer.disconnect()
        }
    }, [options, elementRef]);

    return [isIntersecting, elementRef];
}