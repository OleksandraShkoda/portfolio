import './about.scss';
import AnimatedLetters from'../AnimatedLetters/AnimatedLetters';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About  = () => { 

const [letterClass, setLetterClass] = useState('text-animate');
 useEffect(() => { 
         setTimeout(() => {
           return setLetterClass('text-animate-hover')
        },3000)
    },[])

     return (<>
          <div className='container about-page'>
               <div className='text-zone'>
                    <h1>
                         <AnimatedLetters  letterClass={letterClass} strArr={['A','b','o','u','t', ' ', 'm', 'e']} index={15}/>
                    </h1>
                    <p>I`m very ambitious Junior front-end developer looking for a role in an IT company with opportunity to work and improve my skills.</p>
                    <p>I`m hardworking, curious and persistent workerthat creates a friendly and supportive atmosphere in the team.
                    </p>
                    <p> I can define myself as a friendly and positive person, fun of sports, travelling and technologies.</p>
               </div>
               <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                         <div className='face1'>
                              <FontAwesomeIcon icon={faHtml5} color='#DD0031'/>
                         </div>
                          <div className='face2'>
                              <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                         </div>
                          <div className='face3'>
                              <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                         </div>
                          <div className='face4'>
                              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                         </div>
                          <div className='face5'>
                              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                         </div>
                         
                    </div>

               </div>
          </div>
    <Loader type='pacman'/>
    </> );
}
export default About;