import React from 'react';
import {Link} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="container">
                <div className=" footer__info">
                    <div className="footer__socials">
                        <div>
                            <FontAwesomeIcon className="footer__github" icon={faGithub}/>
                        <span className="footer__link" style={{"display": "inline-block"}}><a href="https://github.com/BartoszBakCL">Check out my GitHub!</a></span>
                        </div>
                        <div>
                            <FontAwesomeIcon className="footer__github" icon={faDiscord} />
                        <span className="footer__link" style={{"display": "inline-block"}}><a href="/">Or visit my Discord Community!</a></span>
                        </div>
                    </div>
                    <span className="footer__copyright">© 2021 Vigour, All Rights Reserved</span>
                    <MenuItem className="footer__logo" style={{"display": "inline-block"}}><Link to="/">VIgOuR</Link></MenuItem>
                </div>
            </div>
        </footer>
    );
};

export default Footer;