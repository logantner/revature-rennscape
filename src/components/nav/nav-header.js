import React from 'react';
import {NavLink} from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-brand">RennScape</div>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/characters">
                            Characters 
                            {/* <span className="sr-only">(current)</span> */}
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Rankings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}