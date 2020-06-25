import React from 'react';

export default function StatCard(props) {
    return (
        <div class={`card stat-card ${props.stat}-stat-card`} style={{"width": "80%"}}>
            <div class={`card-header ${props.stat}-card-header`}>
                <h2>{props.stat}</h2>
            </div>
                <div class={`card-body ${props.stat}-card-body`}>
                    <h1 class="card-title">{props.value}</h1>
                </div>
        </div>
    )
}