import React, { useState } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
// import {useDispatch} from 'react-redux'

import {logIn} from '../../redux/actions/logger-actions'
import LoginInput from "./auth-input"

function LoginForm(props) {
    const [creds, setCreds] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/auth/login", creds)
            .then((res) => {
                console.log(res);
                // console.log(props);
                props.logIn();
            })
            .catch((err) => {
                if (err.response) {
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

            <LoginInput name="username" onChange={handleChange}></LoginInput>
            <LoginInput name="password" onChange={handleChange}></LoginInput>
            <br/>
            <button className="btn btn-block btn-primary">Login</button>
        </form>
    );
}

function mapDispatchToProps(dispatch) {
    return {
      logIn: () =>
        dispatch(logIn()),
        // dispatch({type: "LOG_IN"})
    };
  }
  
  export default connect(null, mapDispatchToProps)(LoginForm);