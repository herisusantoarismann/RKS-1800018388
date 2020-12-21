import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, MassMailer, NotFound } from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/mass-mailer" exact component={MassMailer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
