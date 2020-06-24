import React from 'react';
import { connect } from 'react-redux';
import CharacterTab from './char-tab';

function CharactersSidebar(props) {
    // const tabNames = ['total', 'attack', 'strength', 'defence'];
    const tabs = []

    for (let charInfo of props.chars) {
        let charName = charInfo.displayName;
        let isActive = (charName === props.activeTab ? true : false);
        tabs.push(<CharacterTab 
            name={charName} 
            updateTab={props.updateTab}
            isActive={isActive}
            key={`${charName}-char-tab`} 
        />);
    }

    // for (let tab of tabNames) {
        // let isActive = tab === props.activeTab ? true : false;
        // tabs.push(<RankingsTab 
        //     name={tab} 
        //     updateTab={props.updateTab}
        //     isActive={isActive}
        //     key={`${tab}-tab`} 
        // />);
    // }

    return (
        <nav className="sidebar">
            <div className="container-fluid sidebar-container">
            <div className="sidebar-header">
                <h3>Characters</h3>
            </div>
            
            <div className="row ranking-tabs">
                {tabs}
            </div>
                
            </div>

        </nav>
    )
}

function mapStateToProps(store) {
    return {
        chars : store.userCharacters,
    }
}

export default connect(mapStateToProps)(CharactersSidebar);