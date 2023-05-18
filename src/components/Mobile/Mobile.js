import React, { useEffect } from "react";
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from "react-router-dom";
import '../../components/Layout/index.scss'
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "../Logo/Logo";
import Loader from "react-loaders";
import useWindowSize from "../Custom Hooks/useWindowSize";


const Mobile = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArr =  ['O', 'l', 'e','k','s','a','n','d','r','a']
    const surnameArr = ['h', 'k', 'o', 'd', 'a'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
 
    useEffect(() => { 
         setTimeout(() => {
           return setLetterClass('text-animate-hover')
        },4000)
    },[])
    const size = useWindowSize();  
    return (<>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={`${letterClass} _1`}>H</span>
                    <span className={`${letterClass} _2`}>i! </span>
                    <span> </span>
                    <span className={`${letterClass} _3`}> I</span>
                    <span className={`${letterClass} _4`}>`m </span>
                    <br />
                    
                    <AnimatedLetters letterClass={letterClass} strArr={nameArr} index={5} /> 
                    <br/>
                    <img src={LogoTitle} alt="first letter"/>
                    <AnimatedLetters letterClass={letterClass} strArr={surnameArr} index={15} />
                <br/>
                   <AnimatedLetters letterClass={letterClass} strArr={jobArray} index={21} />
                   </h1>

                <h2> Frontend Developer / JavaScript / React </h2>
                <Link to = "/contacts" className = "flat-button">CONTACT ME</Link>
            </div>
           {size.width < 600 ?  null :  <Logo/> }
        </div>
        <Loader type="pacman"/>
        </>
        )
}
export default Mobile;