import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, NotFound } from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
