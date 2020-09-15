/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Footer from "../../ComponentsMaterialUi/Footer/Footer.jsx";
import Sidebar from "../../ComponentsMaterialUi/SideBar/Sidebar.jsx";
import Header from "../../ComponentsMaterialUi/Header/Header.jsx";
import dashboardRoutes from "../../routes/dashboard.jsx";

import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "../../assets/images/Screenshot-(3).png";



const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      appLogo: "App Logo",
      app_Id: ""
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
 
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
   
}
componentDidUpdate(e) {
 
}
componentWillUnmount() {
  window.removeEventListener("resize", this.resizeFunction);
}
render() {
  const { classes, ...rest } = this.props;
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={dashboardRoutes}
        logoText={"Sttepalink"}
        logo = {image}
        image={image}
        handleDrawerToggle={this.handleDrawerToggle}
        open={this.state.mobileOpen}
        color="gray"
        {...rest}
      />
      <div className={classes.mainPanel} ref="mainPanel">
          <Header
          routes={dashboardRoutes}
          handleDrawerToggle={this.handleDrawerToggle}
          {...rest}
          />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
       <div className={classes.content}>
         <div className={classes.container}>{switchRoutes}</div>
       </div>
        <Footer />
      </div>
    </div>
  );
}
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
 

















/* eslint-disable */
 //import React from "react";
 //import PropTypes from "prop-types";
 //import { Switch, Route, Redirect } from "react-router-dom";
 //// creates a beautiful scrollbar
 //import PerfectScrollbar from "perfect-scrollbar";
 //import "perfect-scrollbar/css/perfect-scrollbar.css";
 //// @material-ui/core components
 //import withStyles from "@material-ui/core/styles/withStyles";
 //// core components
 //import Header from "../../components/Header/Header.jsx";
 //import Footer from "../../components/Footer/Footer.jsx";
 //import Sidebar from "../../components/Sidebar/Sidebar.jsx";
 //
 //import dashboardRoutes from "../../routes/dashboard.jsx";
 //
 //import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
 //
 //import image from "../../assets/img/landing-bg.jpg";
 //import logo from "../../assets/img/knitting.png";
 //import { APICall } from '../../APIRequest.js'
 //let method;
 //let url;
 //let postObj;
 //
 //const switchRoutes = (
 //  <Switch>
 //    {dashboardRoutes.map((prop, key) => {
 //      if (prop.redirect)
 //        return <Redirect from={prop.path} to={prop.to} key={key} />;
 //      return <Route path={prop.path} component={prop.component} key={key} />;
 //    })}
 //  </Switch>
 //);
 //
 //class App extends React.Component {
 //  constructor(props) {
 //    super(props);
 //    this.state = {
 //      mobileOpen: false,
 //      appLogo: "App Logo",
 //      app_Id: ""
 //    };
 //    this.resizeFunction = this.resizeFunction.bind(this);
 //  }
 //  handleDrawerToggle = () => {
 //    this.setState({ mobileOpen: !this.state.mobileOpen });
 //  };
 //  getRoute() {
 //    return this.props.location.pathname !== "/maps";
 //  }
 //  resizeFunction() {
 //    if (window.innerWidth >= 960) {
 //      this.setState({ mobileOpen: false });
 //    }
 //  }
 //  componentDidMount() {
 //    if (navigator.platform.indexOf("Win") > -1) {
 //      const ps = new PerfectScrollbar(this.refs.mainPanel);
 //    }
 //    window.addEventListener("resize", this.resizeFunction);
 //    let appId = localStorage.getItem("appId");
 //    method = "GET"
 //    url = "/app/my-apps"
 //    postObj = {}
 //    url = url + "?app_id=" + appId
 //    APICall(method, url, postObj)
 //      .then(response => {
 //        if (response) {
 //          this.setState({
 //            app_Id: appId,
 //            appLogo: response.apps[0] ? response.apps[0].logo_url : ""
 //          })
 //        }
 //      })
 //}
 //componentDidUpdate(e) {
 //  if (e.history.location.pathname !== e.location.pathname) {
 //    this.refs.mainPanel.scrollTop = 0;
 //    if (this.state.mobileOpen) {
 //      this.setState({ mobileOpen: false });
 //    }
 //  }
 //}
 //componentWillUnmount() {
 //  window.removeEventListener("resize", this.resizeFunction);
 //}
 //render() {
 //  const { classes, ...rest } = this.props;
 //  console.log(switchRoutes)
 //  return (
 //    <div className={classes.wrapper}>
 //      <Sidebar
 //        routes={dashboardRoutes}
 //        logoText={"Knitify"}
 //        logo = {this.state.appLogo}
 //        image={image}
 //        handleDrawerToggle={this.handleDrawerToggle}
 //        open={this.state.mobileOpen}
 //        color="red"
 //        {...rest}
 //      />
 //      <div className={classes.mainPanel} ref="mainPanel">
 //        <Header
 //          routes={dashboardRoutes}
 //          handleDrawerToggle={this.handleDrawerToggle}
 //          {...rest}
 //        />
 //        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
 //        {this.getRoute() ? (
 //          <div className={classes.content}>
 //            <div className={classes.container}>{switchRoutes}</div>
 //          </div>
 //        ) : (
 //            <div className={classes.map}>{switchRoutes}</div>
 //          )}
 //        {this.getRoute() ? <Footer /> : null}
 //      </div>
 //    </div>
 //  );
 //}
 //}
 //
 //App.propTypes = {
 //  classes: PropTypes.object.isRequired
 //};
 //
 //export default withStyles(dashboardStyle)(App);
