import React from 'react';

export default function LoginForm() {
    return (
        <form>
            <input type="text" placeholder={`Username`} />
            <input type="text" placeholder={`Password`} />
            <button className="btn btn-primary">Login</button>
        </form>
    );
}