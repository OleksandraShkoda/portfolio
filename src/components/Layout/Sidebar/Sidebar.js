import React from "react";
import './sidebar.scss';
import LogoS from "../../../assets/images/logo-s.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Sidebar = () =>{
    return(
        <div className="nav-bar">
            <Link className="logo" to ="/">
                    <img src={LogoS} alt="logo" />
                    <span>Shkoda </span>
            </Link>
            <ul className="socialNetworks">
                <li>
                    <a href="https://www.linkedin.com/in/oleksandra-shkoda-06792826b/" target="_blank" rel ="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/OleksandraShkoda" target="_blank" rel ="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
                 <li>
                    <a href="https://www.facebook.com/oleksandra.shkoda" target="_blank" rel ="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome}  color='#074f74'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className ='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser}  color='#074f74'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className = 'contacts-link' to="/contacts">
                    <FontAwesomeIcon icon={faEnvelope}  color='#074f74'/>
                </NavLink>
            </nav>
        </div>
    )
}
export default Sidebar