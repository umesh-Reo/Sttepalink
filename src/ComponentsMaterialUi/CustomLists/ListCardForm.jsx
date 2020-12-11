import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";


import ListStyle from "../../assets/jss/material-dashboard-react/components/ListStyleStyle.jsx";

function ListCardForm({ ...props }) {
  const {
    classes,
    heading,
    children,
    className,
    id,
    ...rest
  } = props;
  console.log();
  const ListClasses = classNames({
    [classes.list]: true,
    [className]: className
  });
  
  let ManualChapterListHeight = window.innerWidth >= 960 ? "280px" : "260px";

  return (
   <Card style={{margin:"0",backgroundColor:"whitesmoke"}}>  
       <h2 style={{
                width: "95%",
                fontSize: "180%", 
                fontWeight: "800",
                padding:"2% 0% 0% 1%",
                margin:"0% 2% 0% 2%",
                borderRadius: "10px 10px  0px 0px",
                borderBottom:"2px solid #dee0df"
             }}>{heading}</h2>
      <CardBody>
      <GridContainer style={{maxHeight:ManualChapterListHeight,overflow :"auto"}} >
          {children}
      </GridContainer>
      </CardBody>
   </Card>
  );
}

ListCardForm.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(["sm", "lg"]),
  className: PropTypes.string,
};

export default withStyles(ListStyle)(ListCardForm);
