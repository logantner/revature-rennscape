import React from 'react';
import background from '../../img/Background.png'
import { useHistory } from "react-router-dom";

export default function UnknownPage(props) {
    document.body.style.backgroundImage = `url(${background})`
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/login');
        
    }

    return (
        <div className="App auth-backdrop">
            <div className="login-app container-fluid row">
                <div className="login-container col-3 row align-self-center unknown-box">
                    <div className="col-12 align-self-center unknown-title">
                        <h2>404: Not Found</h2>
                    </div>
                    <div className="col-12 align-self-center login-form-box">
                        You've found yourself in a strange place. Click below to return to safety...
                    </div>
                    <div className="col-12 align-self-center unknown-button-box">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <button className="btn btn-block btn-success unknown-btn">Escape!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}