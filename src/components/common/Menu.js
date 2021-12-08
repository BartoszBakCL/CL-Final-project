import * as React from 'react';
 // import Button from '@mui/material/Button';
 // import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import logo2 from '../../images/logo2.png'

 export default function BasicMenu() {
    return (
        <div className="header__container">
            <div className="container">
                <MenuItem style={{"display": "inline-block"}}>
                    <Link to="/">
                        <img style={{"width": "30%", "height": "30%"}} src={logo2} alt="Logo"/>
                    </Link>
                </MenuItem>
                <ul className="nav__list">
                    <MenuItem
                        className="list__element"
                        style={{"display": "inline-block"}}>
                            <Link to="/getstarted">Get Started</Link>
                    </MenuItem>
                    <MenuItem
                        className="list__element"
                        style={{"display": "inline-block"}}
                    >
                        <Link to="/aboutus">About Us</Link>
                    </MenuItem>
                    <MenuItem className="list__element" style={{"display": "inline-block"}}><Link to="/something">Login</Link></MenuItem>
                    <MenuItem className="list__element" style={{"display": "inline-block"}}><Link to="/kontakt">Contact</Link> </MenuItem>
                </ul>
            </div>
        </div>
    );
}

