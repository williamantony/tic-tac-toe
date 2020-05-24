import React from "react";
import Home from "../pages/Home/Home";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    component: () => <React.Fragment>NOT FOUND</React.Fragment>,
  },
];

export default routes;
