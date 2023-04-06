import React from "react";
import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, strArr, index }) => { 
    return (
        <span>{strArr.map((letter, i) => (
                <span key={letter + i} className={`${letterClass} _${i+index}`}>{letter}</span>
            ))
            }
        </span>
    )
}
    export default AnimatedLetters