import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './components/authorization/auth-page'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
