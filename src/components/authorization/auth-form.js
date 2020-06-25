import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import {logIn} from '../../redux/actions/logger-actions'
import LoginInput from "./auth-input"

function LoginForm(props) {
    const [creds, setCreds] = useState({});
    const [warning, setWarning] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/auth/login", creds)
            .then((res) => {
                props.logIn();
                history.push('/');
            })
            .catch((err) => {
                if (err.response) {
                    setWarning("Username or password is incorrect");
                    console.error(err.response.status);
                } else {
                    console.error(err);
                }
            });
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setCreds({...creds, [inputField] : inputValue} );
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <LoginInput name="username" type="text" onChange={handleChange}></LoginInput>
            <LoginInput name="password" type="password" onChange={handleChange}></LoginInput>
            <div className="login-warning"> {warning} </div>
            <button className="btn btn-block btn-primary">Login</button>
        </form>
    );
}

function mapDispatchToProps(dispatch) {
    return {
      logIn: () =>
        dispatch(logIn()),
    };
  }
  
  export default connect(null, mapDispatchToProps)(LoginForm);