import React, {useEffect, useState} from 'react';
import axios from 'axios'
// import {domain} from '../../connection';
import {NavLink} from "react-router-dom"

export default function NavHeader() {

    let [data, setData] = useState("");

    useEffect(() => {
        axios
            .get("/user/character")
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                console.error(err);
            });            
    }, []);


    if (data) {
        return (
            <div class="container-fluid">
                <ul className="nav nav-tabs navbar-dark bg-dark">
                    <li className="nav-item">
                        {/* <a className="nav-link active" href={`${domain}/characters`}>Active</a> */}
                        <NavLink className="nav-link" to="/characters">Characters</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href={`${domain}/characters`}>Link</a> */}
                        <NavLink className="nav-link" to="/rankings">Rankings</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href={`${domain}/characters`}>Link</a> */}
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <div>{data[0].displayName}</div>
                    </li> */}
                </ul>
            </div>
        );
    } else {
        return <h1>Loading...</h1>
    }
}