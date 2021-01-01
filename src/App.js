import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddSeminar, Home, Login, MassMailer, NotFound } from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/mass-mailer" exact component={MassMailer} />
        <Route path="/seminar/add" component={AddSeminar} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
