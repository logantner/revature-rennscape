import React, { useState } from 'react';
import axios from 'axios';
// import {domain} from '../../connection';
import LoginInput from "./auth-input"

export default function LoginForm() {
    const [creds, setCreds] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/auth/login", creds)
            .then((res) => {
                console.log(res);
            })
            .catch(() => {console.error("Uh oh.")});
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setCreds({...creds, [inputField] : inputValue} );
        // Dynamically changed keys in object must be wrapped in a bracket 
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>

            <LoginInput name="username" onChange={handleChange}></LoginInput>
            <LoginInput name="password" onChange={handleChange}></LoginInput>
            <br/>
            <button className="btn btn-block btn-primary">Login</button>
        </form>
    );
}