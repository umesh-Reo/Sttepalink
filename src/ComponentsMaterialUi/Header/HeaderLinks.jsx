/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
//import React from "react";
// @material-ui/core components
//import withStyles from "@material-ui/core/styles/withStyles";
//import { createBrowserHistory } from "history";
//
//import headerLinksStyle from "../../assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Switch from "@material-ui/core/Switch";
//import { APICall } from "../../APIRequest.js";
//import SnackbarContent from "../../components/Snackbar/SnackbarContent.jsx";
//import Snackbar from "../../components/Snackbar/Snackbar.jsx";
//import AddAlert from "@material-ui/icons/AddAlert";
//import { connect } from "react-redux";
//import showNotificationTopCenter from "../../actions/showNotificationTopCenter.js";
//import prodModeData from "../../actions/appDataActions.js";
//
//const history = createBrowserHistory( );
//
//class HeaderLinks extends React.Component {
//  constructor(props) {
//    super(props);
//    let isDev = localStorage.getItem("isDev");
//    isDev = JSON.parse(isDev);
//    this.state = {
//      open: false,
//      currentAppState: !isDev,
//      tl: false,
//      tc: false,
//      tr: false,
//      bl: false,
//      bc: false,
//      br: false
//    };
//  }
//
//  componentDidUpdate() {
//    if (this.props.n_show && this.props.n_show == true) {
//      this.showNotification(this.props.n_place);
//
//      this.props.showNotificationTopCenter({
//        n_show: false,
//        n_type: this.props.n_type,
//        n_message: this.props.n_message
//      });
//    }
//  }
//
//  // to stop the warning of calling setState of unmounted component
//  componentWillUnmount() {
//    var id = window.setTimeout(null, 0);
//    while (id--) {
//      window.clearTimeout(id);
//    }
//  }
//
//  handleToggle = () => {
//    this.setState(state => ({ open: !state.open }));
//  };
//
//  handleClose = event => {
//    if (this.anchorEl.contains(event.target)) {
//      return;
//    }
//    this.setState({ open: false });
//  };
//
//  showNotification(place) {
//    var x = [];
//    x[place] = true;
//    this.setState(x);
//    this.alertTimeout = setTimeout(
//      function() {
//        x[place] = false;
//        this.setState(x);
//      }.bind(this),
//      5000
//    );
//  }
//
//  handleAppStateSwitcher(event) {
//    const self = this;
//    // var isOn = event.target.checked;
//    let sisterAppId = localStorage.getItem("sisterAppId");
//    let method = "GET";
//    let url = "/app/my-apps";
//    let postObj = {};
//    url += "?app_id=" + sisterAppId;
//    APICall(method, url, postObj).then(response => {
//      if (response) {
//        localStorage.setItem("appId", response.apps[0]._id);
//        localStorage.setItem("sisterAppId", response.apps[0].sister_app_id);
//        localStorage.setItem("isDev", response.apps[0].is_dev);
//        this.setState({
//          currentAppState: !response.apps[0].is_dev
//        },function(){
//          self.props.prodModeData(response.apps[0])
//        });
//      }
//    });
//  }
//
//  render() {
//    return (
//      <div>
//        <FormControlLabel
//          control={
//            <Switch
//              checked={this.state.currentAppState}
//              onChange={event => this.handleAppStateSwitcher(event)}
//            />
//          }
//          label="Production Mode"
//        />
//        <Snackbar
//          place="tc"
//          color={this.props.n_type}
//          icon={AddAlert}
//          message={this.props.n_message}
//          open={this.state.tc}
//          closeNotification={() => this.setState({ tc: false })}
//          close
//        />
//      </div>
//    );
//  }
//}
//
//
//const mapStateToProps = state => ({
//  ...state
//});
//
//const mapDispatchToProps = dispatch => ({
//  showNotificationTopCenter: payload =>
//    dispatch(showNotificationTopCenter(payload)),
//    prodModeData: payload => dispatch(prodModeData(payload))
//});
//
//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(withStyles(headerLinksStyle)(HeaderLinks));
//