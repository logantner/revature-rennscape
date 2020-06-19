import React from 'react';

export default function LoginForm() {
    return (
        <form className="form-group">
            <div className="form-group">
                <input type="text" placeholder={`Username`} className="form-control" />
            </div>
            <div className="form-group">
                <input type="text" placeholder={`Password`} className="form-control" />
            </div>
            <button className="btn btn-block btn-primary">Login</button>
        </form>
        
    );
}