import react from 'react';
import ProgressBar from './ProgressBar.tsx';

function Competences(props){
    return(
        <div className="h-screen bg-black flex flex-col">
            <h1 className="mx-auto text-center text-white font-sans text-4xl">Compétences</h1>

            <div className="flex grow items-center">
                <article className="flex-[2] p-3">
                    <ProgressBar name="WPF" completed="80"></ProgressBar>
                    <ProgressBar name="Anglais" completed="40"></ProgressBar>
                    <ProgressBar name="SqlServer" completed="70"></ProgressBar>
                    <ProgressBar name="React" completed="60"></ProgressBar>
                </article>
                <article className="flex-1 bg-slate-300 h-2/3">
                    
                </article>
            </div>
            
        </div>
        
    )
}

export default Competences;  