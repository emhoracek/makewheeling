import * as React from "react";
import { Route, Router, Switch } from "wouter";
import Zine from "../pages/zine";


export default () => (
    <Router>
      <Switch>
        <Route path="/" component={Zine} />
      </Switch>
    </Router>
);
