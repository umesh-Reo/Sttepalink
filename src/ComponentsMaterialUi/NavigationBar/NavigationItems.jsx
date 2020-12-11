import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import NavigationitemsStyle from "../../assets/jss/material-dashboard-react/components/navigationitemsStyle.jsx";

const Navigationitems = ({...props}) =>{
 const { 
     classes,
     className,
     children,
     Link,
     ...rest
    } = props;

   const navItemClasses = classNames({
    [classes.navigationItem]: true,
    [className]: className !== undefined
   });
 return (
    <div className={navItemClasses} {...rest}>
       <li >
         <a
         style={{color:"#737373"}}
           href={Link}
      //     className={Props.active ? "active" : null}
         >
           {children}
         </a>
       </li>
    </div>
   );
 }

 Navigationitems.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

export default withStyles(NavigationitemsStyle)(Navigationitems);