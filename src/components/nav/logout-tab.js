import React from 'react';
import axios from 'axios'
import { connect } from "react-redux";
// import {logoutUser} from '../../redux/actions/loading-actions'

function LogoutTab(props) {
    const handleLogout = (event) => {
        event.preventDefault();

        axios.get("/auth/logout")
            .then((res) => {
                window.location.replace("/");
            })
            .catch((err) => {
                if (err.response) {
                    console.error(err.response.status);
                } else {
                    console.error(err);
                }
            });
    };

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <div className="nav-link active">{props.userInfo.username}</div>
            </li>
            <li className="nav-item">
                <div className="nav-link logger-tab"  onClick={handleLogout}>Sign out</div>
            </li>
        </ul>
    );
}

function mapStateToProps(store) {
    return {
        userInfo: store.userInfo,
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         logout : () => {
//             dispatch(logoutUser())
//         }
//     };
// }

export default connect(mapStateToProps)(LogoutTab);