import React, {useEffect, useState}  from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from './nav/nav-header'
import CharactersPage from './views/characters/characters-view'
import RankingsPage from './views/rankings/rankings-view'
import UsersPage from './views/users/users-view'

import background from '../img/Background.png';

import * as loadingActions from '../redux/actions/loading-actions'
import {getCharacters, getRankings, getUsers, getUserInfo} from '../helpers/loading-helpers'

function MainPage(props) {
    document.body.style.backgroundImage = `url(${background})`
    let [loadingStatus, setLoadingStatus] = useState(0);

    useEffect(() => {
        const storeMainPageData = async () => {
            const userStatus = await getUserInfo(props);
            let loadCode = userStatus.code;
            if (loadCode === 200) {
                loadCode = await getRankings(props);
            }
            if (loadCode === 200 && userStatus.loggedIn) {
                loadCode = await getCharacters(props);
            }
            if (loadCode === 200 && userStatus.isAdmin) {
                loadCode = await getUsers(props);
            }
            setLoadingStatus(loadCode);
         }
         
        storeMainPageData();      
    }, []);

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
        return <h1 id="loading-text">Loading...</h1>
    }
}

function mapStateToProps(store) {
    return {
        userInfo: store.userInfo,
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
        updateUserInfo: (chars) =>
            dispatch(loadingActions.updateUserInfo(chars)),
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);