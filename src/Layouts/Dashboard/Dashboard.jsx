import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect,withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";

import * as action from "../../Store/actions/index";
import Footer from "../../ComponentsMaterialUi/Footer/Footer.jsx";
import Sidebar from "../../ComponentsMaterialUi/SideBar/Sidebar.jsx";
import Header from "../../ComponentsMaterialUi/Header/Header.jsx";
import dashboardRoutes from "../../routes/dashboard.jsx";
import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
import image from "../../assets/images/Screenshot-(3).png";

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect){
        return <Redirect to={prop.to} key={key} />; //There is no use of this code in this program..
      }
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
    state = {
      mobileOpen: false
    };
   
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
 
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  componentDidMount() {
   this.props.onTryAutoSignup();
}
componentDidUpdate(e) {
 
}
componentWillUnmount() {
  window.removeEventListener("resize", this.resizeFunction);
}
render() {
  const { classes, ...rest } = this.props;

  let switchRout = this.props.isAuthenticate?(
   <div className={classes.container}>{switchRoutes}</div>
  ):(<Redirect to="/"/>)
 
  return (
    <div className={classes.wrapper} >
      <Sidebar
        routes={dashboardRoutes}
        logoText={"Sttepalink"}
        logo = {image}
        image={image}
        isAuthenticate={this.props.isAuthenticate}
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
       <div className={classes.content}>
        {switchRout}
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

const mapStateToProp = (state) => {
  return{
    isAuthenticate : state.Auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup : ( ) =>  dispatch(action.authCheckState())
  }
}
export default withRouter(connect(mapStateToProp,mapDispatchToProps) (withStyles(dashboardStyle)(App)));