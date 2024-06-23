import React from 'react';

import '../css/header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="header">
            <h3 className="logo" onClick={() => navigate("/")}>LOGO</h3>
            <nav className="nav-menu">
                <div className="nav-item" onClick={() => navigate("/")}>Home</div>
                <div className="nav-item" onClick={() => navigate("/projects")}>Projects</div>
                <div className="nav-item" onClick={() => navigate("/about")}>About</div>
                <div className="nav-item" onClick={() => navigate("/contact")}>Contact</div>
            </nav>
        </div>
    );
}

export default Header;