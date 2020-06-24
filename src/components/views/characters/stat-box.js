import React from 'react';

export default function StatBox(props) {
    return (
        <div>
            {`${props.stat} : ${props.statVal}`}
        </div>
    );
}