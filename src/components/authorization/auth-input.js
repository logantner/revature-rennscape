import React from 'react';

export default function LoginInput(props) {
    const name = props.name;
    const identifier = `auth-${name}`;
    return (
        <div className="form-group">
            <label htmlFor={identifier}><strong>{name}</strong></label>
            <input 
                type="text" 
                placeholder={`Enter your ${name}`} 
                className="form-control" 
                id={identifier}
                name={name}
                onChange={props.onChange}
            />
        </div>
    );
}