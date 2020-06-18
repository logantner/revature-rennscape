import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './components/authorization/auth-form'

function App() {
  return (
    <div className="App container">
      <h1>RennScape</h1>
      <Router>
        <Switch>
        <Route path="/login">
          <LoginForm></LoginForm>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
