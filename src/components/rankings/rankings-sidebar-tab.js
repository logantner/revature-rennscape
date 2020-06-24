import React from 'react';
import TitleCase from '../general/title-case';

export default function RankingsTab(props) {
    const setActiveTab = () => {
        console.log(props)
        props.updateTab(props.name);
    }

    let classes = `col-12 ranking-tab ${props.isActive ? "active" : ""}`

    return (
        <div className={classes} id={`${props.name}-tab`} onClick={setActiveTab}>
            <TitleCase content={props.name} />
        </div>
    )
}