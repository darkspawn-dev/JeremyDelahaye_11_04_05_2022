import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import '../styles/navbar.css'

function Navbar () {
    return (
        <header>
            <img src={logo} alt="logo"/>
        <div className="nav">
            <ul>
                <li><Link to ="/">Accueil</Link></li>
                <li><Link to ="/About">A propos</Link></li>
            </ul>
        </div>
        </header>
    )
}

export default Navbar;