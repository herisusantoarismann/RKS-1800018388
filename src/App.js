import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, NotFound } from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
