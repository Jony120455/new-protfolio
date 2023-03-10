import React from 'react';
import project1 from '../../assets/Project1.jpg'
import project2 from '../../assets/Project (2).jpg'
import project3 from '../../assets/Project (3).jpg'
import project4 from '../../assets/Project (4).jpg'
import project5 from '../../assets/Project (5).jpg'
import project6 from '../../assets/Project (6).jpg'
import project7 from '../../assets/Project7.jpg'
import project8 from '../../assets/Project8.jpg'
import './Protfolio.css'

import Data from './Data';

const Protfolio = () => {
    const data = [
        {
            id:1,
            title:'Travel agency website',
            image:project1,
            gitHub:'https://github.com/Jony120455/contest',
            liveDemo:'https://contest-cit.netlify.app/'
        },
        {
            id:2,
            title:'Bright skill website',
            image:project2,
            gitHub:'https://github.com/Jony120455/bright-skill',
            liveDemo:'https://bright-skill.netlify.app/'
        },
        {
            id:3,
            title:'Dell laptop and computer website',
            image:project3,
            gitHub:'https://github.com/Jony120455/dell-laptop',
            liveDemo:'https://dell-meitner-771945.netlify.app/'
        },
        {
            id:4,
            title:'Doctors portal website',
            image:project4,
            gitHub:'https://github.com/Jony120455/doctors-portal',
            liveDemo:'https://glittering-frangipane-8c82f5.netlify.app/'
        },
        {
            id:5,
            title:'Travel agency website',
            image:project5,
            gitHub:'https://github.com/Jony120455/pack-go',
            liveDemo:'https://pack-go.netlify.app/'
        },
        {
            id:6,
            title:'Web design and Development website',
            image:project6,
            gitHub:'https://github.com/Jony120455/dev-web-repo',
            liveDemo:'https://web-dev-net.netlify.app/'
        },
        {
            id:7,
            title:'Solutation and Discuss',
            image:project7,
            gitHub:'https://github.com/Jony120455/solutation',
            liveDemo:'https://solution-add.netlify.app/'
        },
        {
            id:8,
            title:'Defi.Trending Protocol',
            image:project8,
            gitHub:'https://github.com/Jony120455/defi.',
            liveDemo:'https://defi-f.netlify.app/'
        },
    ]
    
    return (
        <section id='protfolio'>
            <h5>My recent work</h5>
            <h2>Protfolio</h2>
            <div className='container protfolio_container'>
              
              
              
                {
                    data.map(data => <Data
                    
                    id={data.id}
                    data={data}
                    
                    ></Data>)
                }
              
            </div>
            
        </section>
    );
};

export default Protfolio;