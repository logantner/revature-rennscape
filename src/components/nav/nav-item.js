import React from 'react';
import {NavLink} from "react-router-dom"

export default function NavItem(props) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={props.link} exact>
                {props.label} 
            </NavLink>
        </li>
    );
}