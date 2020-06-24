import React from 'react';
import { connect } from 'react-redux';
import CharactersSidebar from './characters-sidebar'
import CharactersBody from './characters-body'

class CharactersView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: props.chars[0].displayName};
    }

    updateTab = (newTab) => {
        this.setState({activeTab: newTab});
    };

    render() {
        return (
            <div className="wrapper">
                <CharactersSidebar activeTab={this.state.activeTab} updateTab={this.updateTab} />
                <CharactersBody activeTab={this.state.activeTab} />
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        chars : store.userCharacters,
    }
}

export default connect(mapStateToProps)(CharactersView);