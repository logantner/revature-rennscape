import React from 'react';

export default function CharacterTab(props) {
    const setActiveTab = () => {
        props.updateTab(props.name);
    }

    let classes = `col-12 character-tab ${props.isActive ? "active" : ""} align-self-start`
    let divStyle = {"font-size":"15px", }

    return (
        <li style={divStyle} className={classes} id={`${props.name}-tab`} onClick={setActiveTab}>
            {props.name}
        </li>
    )
}