//import React from 'react';
//import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
//import './index.css';
//
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//
//const JWT_KEY = "7cb716a9ee1095ad11c16f4c4f13168a8bcca0fb5e5156b8ceaa8a6cc0b4bfc05d302ebba29bd98bd6a7a536977a376000c8c37e9d6b807141b131bb1d1fc9ea"
//
//const app = (
//   <BrowserRouter>
//      <App  TheToken={JWT_KEY}/>
//   </BrowserRouter>
//);
//
//ReactDOM.render( app, document.getElementById('root'));
//
//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "./routes/index.jsx";
import homePageRoute from "./routes/homePageRoute.jsx";
import login from "./ComponentsMaterialUi/LoginHomePage/login.jsx";


const hist = createBrowserHistory( );
// const hist = createMemoryHistory();
const token = localStorage.getItem('token');
const userId = localStorage.getItem('UserDetail');


let routeArr = [];
routeArr = indexRoutes.concat(homePageRoute);

let Login = [];
 Login = homePageRoute;

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {
          (routeArr.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
           }))
         
      }
    </Switch>
  </Router>,
  document.getElementById("root")
);
