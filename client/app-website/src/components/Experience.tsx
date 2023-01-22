import React from 'react';

function Experience(props){
    return(
        <div>
            <p>{props.business} : {props.date}</p>
            <p>{props.job}</p>
            <p>
                
                Développement application WPF en suivant le méthode MVVM.
                Utilisation de Entity Framework.
                Gestion de la base de donnée.
            </p>
        </div>
    )
}

export default Experience;