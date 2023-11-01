import {useState} from 'react';
import img from '../assets/img/test.jpg';
import './card-portfolio.css';

function CardPortfolio(props){
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        console.log(rect)
        const x = -1 * (e.clientX - rect.left - rect.width / 2);
        const y = e.clientY - rect.top - rect.height / 2;
        console.log('x' + x);
        console.log('y' + y);
        setPosX(y / 5);
        setPosY(x / 5);
    };

    const handleMouseOut = () => {
        setPosX(0);
        setPosY(0);
    };

    const handleMouseOver = (e) => {
        console.log(0)
    }

    return(
        <div className='w-[100px] h-[100px] m-28 bg-red-600 transition-transform duration-300 ease-in-out'
        style={{
            transform: `rotateX(${posX}deg) rotateY(${posY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}>
        <img className="h-full w-full object-cover" src={img}/>
        <svg className='absolute top-[7px] left-[7px] w-[86px] h-[86px]' xmlns="http://www.w3.org/2000/svg">
            <rect fill='transparent' height="100%" width="100%" />
        </svg>
    </div>
    );
}

export default CardPortfolio;