import React from 'react';
import { connect } from "react-redux";

function UsersView(props) {

    const userJSX = [];
    for (let user of props.users) {
        let username = user.username;
        userJSX.push(
            <tr key={`${username}-row`}>
            <th scope="row">{username}</th>
            </tr>
        );
    }

    return (
        <div id="content" className="container-fluid">
            <div className="row h-100">
                <div className="col pre-scrollable ranking-table-window">
                    <table className="table table-hover table-dark ranking-table">
                        <thead>
                            <tr>
                            <th scope="col">User</th>
                            </tr>
                        </thead>
                        <tbody>{userJSX}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(store) {
    return {
        users : store.users,
    };
}

export default connect(mapStateToProps)(UsersView);