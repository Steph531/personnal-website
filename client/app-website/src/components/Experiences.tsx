import react from 'react';
import Experience from './Experience.tsx';
import Timeline from './Timeline/Timeline.tsx';

function Experiences(props){
    const data = [
        {
            text: 'Wrote my first blog post ever on Medium',
            date: 'March 03 2017',
            category: {
                tag: 'medium',
                color: '#018f69'
            },
            link: {
                url:
                    'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
                text: 'Read more'
            }
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        },
        {
            // Another object with data
        }
        ];
    return(
        <div className="bg-black min-h-screen">
            <h1 className="text-center text-4xl text-white">Experiences</h1>
            {/* <Experience business="Groupe BZ" job="Développeur" date="Mars 2020 - Juin 2023"/> */}
            <Timeline data={data}/>
        </div>
    )
}

export default Experiences;