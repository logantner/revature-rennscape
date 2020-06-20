import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './components/authorization/auth-page'
import axios from "axios";

axios.defaults.baseURL = "http://13.56.200.157:8082";
axios.defaults.withCredentials = true;

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
