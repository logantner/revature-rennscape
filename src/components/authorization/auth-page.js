import React from 'react';
import LoginForm from './auth-form'

export default function LoginPage() {
    return (
        <div className="App auth-backdrop">
            <div className="login-app container-fluid row">
                <div className="login-container col-3 row align-self-center">
                    <div className="col-12 align-self-center">
                        <h1>RennScape</h1>
                        <br/>
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </div>
    );
}