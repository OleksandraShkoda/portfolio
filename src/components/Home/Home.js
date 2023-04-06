import React from "react";
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from "react-router-dom";
import '../../components/Layout/index.scss'
import './Home.scss'
const Home = () => { 
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi!<br />
                    I`m Oleksandra
                <img src={LogoTitle} alt="first letter" /> hkoda
                <br />
                    web developer</h1>
                <h2> Frontend Developer / JavaScript / React / TypeScript </h2>
                <Link to = "/contacts" className = "flat-button">CONTACT ME</Link>
            </div>
        </div>
        )
}
export default Home;