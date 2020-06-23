import React, {useEffect, useState}  from 'react';
// import axios from 'axios'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from './nav/nav-header'
import CharactersPage from './characters/characters-view'
import RankingsPage from './rankings/rankings-view'
import UsersPage from './users/users-view'

import * as loadingActions from '../redux/actions/loading-actions'
import {getCharacters, getRankings, getUsers, getUserInfo} from '../helpers/loading-helpers'

function MainPage(props) {
    let [loadingStatus, setLoadingStatus] = useState(0);

    useEffect(() => {
        const storeMainPageData = async () => {
            let status = await getRankings(props);
            if (status === 200) {
                status = await getUserInfo(props);
            }
            if (status === 200) {
                status = await getCharacters(props);
            }
            if (status === 200) {
                status = await getUsers(props);
            }
            
            setLoadingStatus(status);
         }

         storeMainPageData();        
    }, [props]);

    if (loadingStatus === 200) {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/characters" component={CharactersPage} />
                    <Route exact path="/" component={RankingsPage} />
                    <Route exact path="/users" component={UsersPage} />
                </Switch>
            </Router>
        )
    }
    else if (loadingStatus === 400) {
        return <h1>You do not have permission to view this page.</h1>
    } 
    else if (loadingStatus === 500) {
        return (
            <div>
                <h3>There was a problem connecting to the server.</h3>
                <h3>Please consult Rennie Wallin at {`(206) 802-9956`}</h3>
            </div>
        );
    }
    else {
        return <h1>Loading...</h1>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserCharacters: (chars) =>
            dispatch(loadingActions.loadUserCharacters(chars)),
        loadRanksTotal: (chars) =>
            dispatch(loadingActions.loadRanksTotal(chars)),
        loadRanksAttack: (chars) =>
            dispatch(loadingActions.loadRanksAttack(chars)),
        loadRanksStrength: (chars) =>
            dispatch(loadingActions.loadRanksStrength(chars)),
        loadRanksDefence: (chars) =>
            dispatch(loadingActions.loadRanksDefence(chars)),
        loadUsers: (chars) =>
            dispatch(loadingActions.loadUsers(chars)),
        loadUserInfo: (chars) =>
            dispatch(loadingActions.loadUserInfo(chars)),
    };
  }
  
  export default connect(null, mapDispatchToProps)(MainPage);