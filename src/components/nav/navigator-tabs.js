import React from 'react';
import NavItem from './nav-item'
import { connect } from "react-redux";

function NavigatorTabs(props) {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {props.userInfo.loggedIn ? 
                    <NavItem label="Characters" link="/characters" /> : ""}
                <NavItem label="Rankings" link="/" />
                {props.userInfo.role > 1 ? 
                    <NavItem label="Users" link="/users" /> : ""}

            </ul>
        </div>
        
    );
}

function mapStateToProps(store) {
    return {
        userInfo: store.userInfo,
    }
}

export default connect(mapStateToProps)(NavigatorTabs);