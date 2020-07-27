import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
//
import Header from "./Header";
import TinderCards from "./TinderCards"

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <TinderCards></TinderCards>
          </Route>
          <Route path="/chat">
            <h1>Chat Page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
