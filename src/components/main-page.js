import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavHeader from './nav/nav-header'
import CharactersPage from './characters/characters-view'
import RankingsPage from './rankings/rankings-view'
import UsersPage from './users/users-view'

export default function MainPage(props) {
    return (
        <Router>
            <NavHeader></NavHeader>
            <Switch>
                <Route exact path="/">
                    <CharactersPage></CharactersPage>;
                </Route>
                <Route path="/characters">
                    <CharactersPage></CharactersPage>;
                </Route>
                <Route path="/rankings">
                    <RankingsPage></RankingsPage>;
                </Route>
                <Route path="/users">
                    <UsersPage></UsersPage>;
                </Route>
                {/* <Route exact path="/">
                    <MainPage></MainPage>
                </Route> */}
            </Switch>
        </Router>
    )
}