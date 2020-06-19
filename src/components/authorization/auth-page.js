import React from 'react';
import LoginForm from './auth-form'

export default function LoginPage() {
    return (
        <div className="App container">
            <h1>RennScape</h1>
            <div className="container login-container">
                <LoginForm></LoginForm>
            </div>
            
        </div>
    );
}