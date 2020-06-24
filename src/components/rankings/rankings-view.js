import React from 'react';
import RankingsSidebar from './rankings-sidebar'
import RankingsBody from './rankings-body'

export default class RankingsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 'total'};
    }

    updateActiveTab = (newActive) => {
        this.setState({activeTab: newActive});
    }

    render() {
        return (
            <div className="wrapper">
                <RankingsSidebar activeTab={this.state.activeTab}></RankingsSidebar>
                <RankingsBody></RankingsBody>
            </div>
        )
    }
    
}