import React from 'react';
import { connect } from "react-redux";

import NavigatorTabs from './navigator-tabs'
import LogoutTab from './logout-tab'
import LoginTab from './login-tab'

function Header(props) {
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
            <NavigatorTabs />

            {props.userInfo.loggedIn ? <LogoutTab/> : <LoginTab/>}
        </nav>

        
    );
}

function mapStateToProps(store) {
    return {
        userInfo: store.userInfo,
    }
}

export default connect(mapStateToProps)(Header);