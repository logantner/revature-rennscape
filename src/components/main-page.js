import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from './nav/nav-header'
import CharactersPage from './characters/characters-view'
import RankingsPage from './rankings/rankings-view'
import UsersPage from './users/users-view'

export default function MainPage(props) {
    return (
        <Router>
            <NavHeader />
            <Switch>
                <Route exact path="/characters" component={CharactersPage} />
                <Route exact path="/" component={RankingsPage} />
                <Route exact path="/users" component={UsersPage} />
            </Switch>
        </Router>
    )
}