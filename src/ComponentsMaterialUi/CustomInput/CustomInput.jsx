import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle.jsx";

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    handleChange,
    elementType,
    selectPlaceholder,
    className,
    menuOptions,
    id,
    labelProps,
    inputProps,
    error,
    success,
    value,
    onChange
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [className]: className !== undefined
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
    
  });

 let inputElement = null;
 
 switch (elementType) {
     case ('input'):
      inputElement =  <FormControl
      {...formControlProps}
      className={formControlProps.className + " "}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        className={classes.InputStyle}
        id={id}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
    
     break;
    
     case ('textarea'):
      inputElement = (
       <TextareaAutosize
       style={{width:"99%",marginTop:"4%",height:"95px",padding:"1%"}}
           rowsMax={7}
           aria-label="maximum height"
           placeholder={labelText}  
           onChange={handleChange}
       />
      );
     break;
     
     case ('Display'):
       inputElement = (
       <p
       style={{fontSize:"130%", width:"100%"}}
         className="Display" 
       >
        &#8377; {value}
        </p>
        );
      break;
     case ('select'):
      inputElement=  <FormControl style={{width:"100%"}}>
      <InputLabel id={selectPlaceholder}>{selectPlaceholder}</InputLabel>
      <Select
        labelid={selectPlaceholder}
        id="demo-controlled-open-select"
        open={open}
        className={classes.InputStyle}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
      >
  
      {menuOptions.map(meunItems => (
       <MenuItem 
         key={meunItems.value}
         value={meunItems.value}
       >
        {meunItems.displayValue}
       </MenuItem>
      ))}
      </Select>
    </FormControl>
       
     break;
     default:
      inputElement =  <FormControl
      {...formControlProps}
      className={formControlProps.className + " "}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        className={classes.InputStyle}
        id={id}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
    
 }
 return(
     <div>
         {inputElement}
     </div>
 );
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  //value: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(customInputStyle)(CustomInput);
