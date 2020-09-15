import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";


import ListStyle from "../../assets/jss/material-dashboard-react/components/ListStyleStyle.jsx";

function Lists({ ...props }) {
  const {
    classes,
    color,
    children,
    className,
    PartAfixedTitle,
    PartAToDisplay ,
    PartBToDisplay,
    id,
    clicked,
    ...rest
  } = props;
  console.log();
  const ListClasses = classNames({
    [classes.list]: true,
    [className]: className
  });
  return (
     <div>
      <List component="nav" className={ListClasses} aria-label="Subject List">
      <ListItem
        button
        onClick={clicked}
      >
        <ListItemIcon>
         {children ? children:<MenuBookIcon />} 
        </ListItemIcon>
       <GridContainer>
        <GridItem>{PartAfixedTitle} {PartAToDisplay} :&nbsp; {PartBToDisplay}</GridItem>
       </GridContainer>
      </ListItem>
    </List>
    <Divider />
    </div>
  );
}

Lists.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(["sm", "lg"]),
  className: PropTypes.string,
};

export default withStyles(ListStyle)(Lists);
