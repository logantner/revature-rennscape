import React from 'react';
import RankingsTab from './rankings-sidebar-tab';

export default function RankingsSidebar(props) {
    const tabNames = ['total', 'attack', 'strength', 'defence'];
    const tabs = []

    for (let tab of tabNames) {
        let isActive = tab === props.activeTab ? true : false;
        tabs.push(<RankingsTab name={tab} isActive={isActive} key={`${tab}-tab`}></RankingsTab>);
    }

    return (
        <nav className="sidebar">
            <div className="container-fluid sidebar-container">
            <div className="sidebar-header">
                <h3>Rankings</h3>
            </div>
            
            <div className="row ranking-tabs"></div>
                {tabs}
            </div>

        </nav>
    )
}