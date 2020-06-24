import React from 'react';

export default function RankingsTab(props) {
    let classes = `col-12 ranking-tab ${props.isActive ? "active" : ""}`
    // let classes = "col-12 ranking-tab";
    // if (props.isActive) {
    //     classes += " active"
    // }

    return (
    <div className={classes} id={`${props.name}-tab`}>{props.name}</div>
    )
}