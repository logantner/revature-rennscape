import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {domain} from '../../connection';

export default function Mainpage() {

    let [data, setData] = useState("");

    useEffect(() => {
        axios
            .get("/user/character")
            .then((response) => {
                // console.log(response.data[0]);
                // console.log(response.data[0].displayName);
                setData(response.data);
                // console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });            
    }, []);

    console.log(data);
    if (data) {
        console.log(data[0]);
    
    
    

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href={`${domain}/characters`}>Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`${domain}/characters`}>Link</a>
            </li>
            <li className="nav-item">
                <div>{data[0].displayName}</div>
            </li>
        </ul>
        // <nav className="navbar navbar-default">
        //     <div className="container-fluid">
        //         <div className="navbar-header">
        //             WebSiteName
        //         </div>
        //         <ul className="nav navbar-nav">
        //             <li className="active">Home</li>
        //             <li>Page 1</li>
        //             <li>Page 2</li>
        //             <li>Page 3</li>
        //         </ul>
        //     </div>
        // </nav>
    );
    } else {
        return <h1>Loading...</h1>
    }
}