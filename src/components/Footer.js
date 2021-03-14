import React from "react";
//import { Button, Card, Row, Col } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png"

// const Footer = () => {
//     return (
//     <div className="footer">
//         <a href="https://github.com/nlop3z">GitHub</a>
//        <FontAwesomeIcon icon={faCoffee} />

//        <a href="https://www.linkedin.com/in/nelllopez/">LinkedIn</a>
//        <FontAwesomeIcon icon={falinkedin} />
//     </div>
// }
// )
    const Footer = () => {
        return (
        <div className="footer">
        <a href="https://github.com/nlop3z" target="_blank" rel="noopener noreferrer">
            <img alt="Github" className="footer-img" src={github} />
        </a> 
    
        <a href="https://www.linkedin.com/in/nelllopez/" target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn" className="footer-img" src={linkedin} />
        </a> 
        </div>
        )
    }
        
export default Footer;