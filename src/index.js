import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";

import Auth from "./Store/reducer/Auth";
import UserProfile from "./Store/reducer/profile";
import StudentCourses from "./Store/reducer/studentCourse";

import "./assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "./routes/index.jsx";
import homePageRoute from "./routes/homePageRoute.jsx";

const  rootReducer = combineReducers({
  Auth : Auth,
  Profile:UserProfile,
  StudentCourses:StudentCourses
})

const store = createStore(rootReducer,applyMiddleware(thunk));
const hist = createBrowserHistory( );
// const hist = createMemoryHistory();


let routeArr = [];
routeArr = indexRoutes.concat(homePageRoute);
console.log(routeArr)
let Login = [];
 Login = homePageRoute;

ReactDOM.render(
  <Provider store={store}>
   <Router history={hist}>
     <Switch>
       {
         (routeArr.map((prop, key) => {
           console.log(prop.path);
            return <Route path={prop.path} component={prop.component} key={key} />;
          }))    
       }
     </Switch>
   </Router>
  </Provider>,
  document.getElementById("root")
);
