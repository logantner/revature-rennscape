import React from 'react';

export default function LoginTab(props) {
    const handleLogin = (event) => {
        event.preventDefault();
        window.location.replace("/login");
    };

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <div className="nav-link logger-tab"  onClick={handleLogin}>Sign in</div>
            </li>
        </ul>
    );
}