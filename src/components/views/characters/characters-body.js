import React from 'react';
import { connect } from 'react-redux';
import StatCard from './stat-card'

 function CharactersBody(props) {
    let charInfo = props.chars.find(info => info.displayName === props.activeTab);

    return (
        <div id="content" className="container-fluid">
            <div className="row h-100 justify-content-center">
                <div className="col-lg-3 col-sm-12 align-self-center">
                    <StatCard stat="Attack" value={charInfo.attack}/>
                </div>
                <div className="col-lg-3 col-sm-12  align-self-center">
                    <StatCard stat="Strength" value={charInfo.strength}/>
                </div>
                <div className="col-lg-3 col-sm-12  align-self-center">
                    <StatCard stat="Defence" value={charInfo.defence}/>
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