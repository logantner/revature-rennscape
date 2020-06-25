import React from 'react';
import { connect } from 'react-redux';
import CharacterTab from './character-tab';

function CharactersSidebar(props) {
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

    return (
        <nav className="sidebar">
            {/* <div className="container-fluid sidebar-container"> */}
                <div className="sidebar-header">
                    <h3>Characters</h3>
                </div>

                <ul className="row char-tabs-box align-items-center justify-content-center">
                    {tabs}
                    {/* <div className="row ranking-tabs">{tabs}</div> */}
                </ul>
            {/* </div> */}
        </nav>
    )
}

function mapStateToProps(store) {
    return {
        chars : store.userCharacters,
    }
}

export default connect(mapStateToProps)(CharactersSidebar);