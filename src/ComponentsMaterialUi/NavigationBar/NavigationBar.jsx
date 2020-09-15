import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons


// core components
import NavigationBarStyle from "../../assets/jss/material-dashboard-react/components/navigationBarStyle.jsx";

const NavigationItem = ({...props} ) =>{
 const { 
     classes,
     className,
     children,
     ...rest
    } = props;

 const navBarClasses = classNames({
   [classes.navigationBar]: true,
   [className]: className !== undefined
 });
 return (
   <div className={navBarClasses} {...rest}>
     <div style={{width:"100%"}}>
     {children}
     </div>
   </div>
 );
 }

 NavigationItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

export default withStyles(NavigationBarStyle)(NavigationItem);
