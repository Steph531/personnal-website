import react, {useRef, useEffect, useState} from 'react';
import Experiences from './Experiences.tsx';
import Biographie from './Biographie.tsx';
import Portfolio from './portfolio.tsx';
import Competences from './Competences.tsx';
import classnames from 'classnames';
import MyParallax from './Parallax.tsx';
import { animateScroll as scroll } from "react-scroll";
import { ParallaxProvider } from 'react-scroll-parallax';

function Moi(props){
    const [disableScroll, setDisableScroll] = useState(true);
    const lastScroll = useRef(0);
    const bioRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        
        function handleScroll() {
            if(window.pageYOffset == 0){
                setDisableScroll(true);
            }
        }
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      const handleScrollClick = () =>{
        setDisableScroll(false);
      };

    return(

        <div className={`font-sans h-screen ${disableScroll ? "overflow-hidden" : ""}`}>
            <div ref={bioRef} >
                <Biographie handleScroll={handleScrollClick}/>
            </div>
            <div id="main" ref={mainRef}>
                <Experiences/>
                <Competences/>
                <Portfolio/>
            </div>
        </div>
    )
}

export default Moi;