import React from 'react';
import LoginForm from './auth-form'
import background from '../../img/Background.png'

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        document.body.style.backgroundImage = `url(${background})`
    }

    render() {
        return (
            <div className="App auth-backdrop">
                <div className="login-app container-fluid row">
                    <div className="login-container col-3 row align-self-center">
                        <div className="col-12 align-self-start login-title-box">
                            RennScape
                        </div>
                        <div className="col-12 align-self-center login-form-box">
                            <LoginForm></LoginForm>
                        </div>
                        <div className="col-12 align-self-end login-title-box"></div>
                    </div>
                </div>
            </div>
        );
    }
    
}