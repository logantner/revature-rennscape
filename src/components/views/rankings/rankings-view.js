import React from 'react';
import RankingsSidebar from './rankings-sidebar'
import RankingsBody from './rankings-body'

export default class RankingsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 'total'};
    }

    updateTab = (newTab) => {
        this.setState({activeTab: newTab});
    };

    render() {
        return (
            <div className="wrapper">
                <RankingsSidebar activeTab={this.state.activeTab} updateTab={this.updateTab} />
                <RankingsBody activeTab={this.state.activeTab} />
            </div>
        )
    }
}