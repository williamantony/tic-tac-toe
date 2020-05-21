import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = function ({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  );
};

export default Routes;
