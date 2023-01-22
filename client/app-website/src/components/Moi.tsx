import react from 'react';
import Experiences from './Experiences.tsx';
import Biographie from './Biographie.tsx';
import Competences from './Competences.tsx';

function Moi(props){
    return(
        <div className="px-6 font-sans snap-y overflow-y-scroll h-screen snap-mandatory">
            <Biographie/>
            <Experiences className="snap-start"/>
            <Competences className="snap-start"/>
        </div>
    )
}

export default Moi;