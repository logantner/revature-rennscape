import React from 'react';
import { connect } from 'react-redux';
import StatBox from './stat-box'

 function CharactersBody(props) {
    const stats = ['attack', 'strength', 'defence'];
    let charInfo = props.chars.find(info => info.displayName === props.activeTab);

    const statElements = stats.map((stat) => {
        return (<StatBox 
            stat={stat}
            statVal={charInfo[stat]}
            key={`${props.activeTab}-${stat}`}
        />);
    })

    return (
        <div id="content" className="container-fluid">
            <div className="row h-100">
                <div className="col align-self-center">
                    {props.activeTab}!
                    {statElements}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(store) {
    return {
        chars : store.userCharacters,
    }
}

export default connect(mapStateToProps)(CharactersBody);