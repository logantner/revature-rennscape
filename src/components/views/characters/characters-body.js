import React from 'react';
import { connect } from 'react-redux';

 function CharactersBody(props) {
    console.log(props.chars);
    return (
        <div id="content" className="container-fluid">
            <div className="row h-100">
                <div className="col align-self-center">
                    This is the characters page!
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