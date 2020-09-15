import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';

function MenuItems({ ...props }) {
  const {
    inputValue,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    value,
    onChange
  } = props;

 // <MenuItem value="">
 //    <em>None</em>
 // </MenuItem>

  return (
    <MenuItem value={inputValue}>{inputValue}</MenuItem>
  );
}

MenuItems.propTypes = {
  //classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default MenuItems;