import React from 'react';

export default function CharacterTab(props) {
    const setActiveTab = () => {
        props.updateTab(props.name);
    }

    let classes = `col-12 character-tab ${props.isActive ? "active" : ""}`

    return (
        <div className={classes} id={`${props.name}-tab`} onClick={setActiveTab}>
            {props.name}
        </div>
    )
}