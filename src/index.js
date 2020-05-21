import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from "./shared/redux/ReduxProvider";
import { BrowserRouter } from 'react-router-dom';
import { default as AppRoutes } from './shared/router/Routes';
import routes from "./shared/router/routes.list";

import * as serviceWorker from './serviceWorker';

import "./reset.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <AppRoutes routes={ routes } />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
