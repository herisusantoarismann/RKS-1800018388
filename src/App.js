import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  AddSeminar,
  Home,
  Login,
  MassMailer,
  NotFound,
  Registration,
  RegistrationSuccess,
  UpdateSeminar,
} from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Home} />
        <Route path="/mass-mailer" exact component={MassMailer} />
        <Route path="/seminar/add" component={AddSeminar} />
        <Route path="/seminar/update/:id" component={UpdateSeminar} />
        <Route path="/registration/:id" component={Registration} />
        <Route
          path="/successful-registration"
          component={RegistrationSuccess}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
