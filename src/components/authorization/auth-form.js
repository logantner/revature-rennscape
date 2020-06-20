import React, { useState } from 'react';
import axios from 'axios';
// import {domain} from '../../connection';
import LoginInput from "./auth-input"

export default function LoginForm() {
    const [creds, setCreds] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make a request with axios to send form data
        axios.post("/auth/login", creds)
            .then((res) => {
                console.log(res);
            })
            .catch(() => {console.error("Uh oh.")});
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // axios.get(domain + "/auth/status")
    //     //     .then((res) => {
    //     //         console.log(res);
    //     //     })
    //     //     .catch(() => {console.error("Uh oh.")});

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setCreds({...creds, [inputField] : inputValue} );
        // console.log(creds);
        // console.log(e.target);
        // Dynamically changed keys in object must be wrapped in a bracket 
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            {/* <div className="form-group">
                <label htmlFor="auth-user"><strong>Username</strong></label>
                <input 
                    type="text" 
                    placeholder={`Enter your username`} 
                    className="form-control" 
                    id="auth-user" 
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="auth-pass"><strong>Password</strong></label>
                <input 
                    type="text" 
                    placeholder={`Enter your password`} 
                    className="form-control" 
                    id="auth-pass"
                    onChange={handleChange}
                />
            </div> */}
            <LoginInput name="username" onChange={handleChange}></LoginInput>
            <LoginInput name="password" onChange={handleChange}></LoginInput>
            <br/>
            <button className="btn btn-block btn-primary">Login</button>
        </form>
    );
}