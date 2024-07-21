import React from 'react';

import '../css/header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="header">
            <h3 className="logo" onClick={() => navigate("/")}>LOGO</h3>
            <nav className="nav-menu">
                <div className={"nav-item" + (location.pathname === "/" ? " nav-active" : "")} onClick={() => navigate("/")}>Home</div>
                <div className={"nav-item" + (location.pathname === "/projects" ? " nav-active" : "")} onClick={() => navigate("/projects")}>Projects</div>
                <div className={"nav-item" + (location.pathname === "/about" ? " nav-active" : "")} onClick={() => navigate("/about")}>About</div>
                <div className={"nav-item" + (location.pathname === "/contact" ? " nav-active" : "")} onClick={() => navigate("/contact")}>Contact</div>
            </nav>
        </div>
    );
}

export default Header;