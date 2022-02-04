import { Router, Route, Switch } from "react-router-dom";

import Navigation from "app1/Navigation";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "app1/routes";
import history from "app1/history";

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <Router history={history}>
    <div>
      <h1>App 2</h1>
      <Navigation />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </Router>
);

export default App;
