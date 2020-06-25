import React from 'react';

export default function LoginInput(props) {
    const name = props.name;
    const identifier = `auth-${name}`;
    return (
        <div className="form-group">
            <input 
                type={props.type}
                placeholder={`${name}`} 
                className="form-control" 
                id={identifier}
                name={name}
                onChange={props.onChange}
            />
        </div>
    );
}