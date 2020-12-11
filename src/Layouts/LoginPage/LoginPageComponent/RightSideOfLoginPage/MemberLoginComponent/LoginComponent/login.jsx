import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { createBrowserHistory } from "history";
import CustomInput from '../../../../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import GridContainer from '../../../../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import Button from '../../../../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import GridItem from '../../../../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import CardBody from '../../../../../../ComponentsMaterialUi/Card/CardBody.jsx';

import './login.css';


const history = createBrowserHistory({forceRefresh: true});

const useStyles={
    "routeButton":{
      width: "100%",
      textDecoration: "none",
      padding: "0% 0% 0% 0%",
      color:"rgb(90, 32, 122)",
    } 
};

const Loginclass = ({...props}) =>{
 const {SubmitUserDetails,nameInputhandler,emailIdInputhandler,passwordInputhandler,nameSuccess,nameError,namePlaceholder,nameElementType,nameValue,
    nameType,emailSuccess,emailError,emailIdPlaceholder,emailIdElementType,emailIdValue,emailIdType,
    passwordSuccess,passwordError,passwordPlaceholder,passwordElementType,passwordValue,
    passwordType } = props;

 const SignUp = ( ) =>{
    history.push("/PricingPackage");
 }
 return(
        <CardBody style={{paddingBottom:"0"}}> 
          <form>
          <GridContainer style={{paddingTop:"13%"}}>
           <GridItem xs={12} sm={12} md={6}>
             <div 
               style={{
                 fontSize:"135%",
                 padding:" 0% 0% 5% 0",
                 fontWeight:"700",
                 color:"rgb(101, 101, 105)"
               }}>
               Member Login
              </div>
          </GridItem>
                
          <GridItem   xs={12} sm={12} md={8}>
            <CustomInput
              success={nameSuccess}
              error={nameError}
              labelText={namePlaceholder}
              formControlProps={{
                fullWidth: true,
              }}
              id="name"
              elementType={nameElementType}
              value={nameValue}
              handleChange={(event)=>nameInputhandler(event)}
              inputProps={{
                autoComplete:"off",
                readOnly: false,
                type:nameType,
              }}
            />  
          </GridItem>

          <GridItem   xs={12} sm={12} md={8}>
            <CustomInput
              success={emailSuccess}
              error={emailError}
              labelText={emailIdPlaceholder}
              formControlProps={{
                fullWidth: true,
              }}
              id="emailId"
              elementType={emailIdElementType}
              value={emailIdValue}
              handleChange={(event)=>emailIdInputhandler(event)}
              inputProps={{
                autoComplete:"off",
                readOnly: false,
                type:emailIdType,
              }}
            />  
          </GridItem>
          
          <GridItem   xs={12} sm={12} md={8}>
            <CustomInput
              success={passwordSuccess}
              error={passwordError}
              labelText={passwordPlaceholder}
              formControlProps={{
                fullWidth: true,
              }}
              id="Password"
              elementType={passwordElementType}
              value={passwordValue}
              handleChange={(event)=>passwordInputhandler(event)}
              inputProps={{
                autoComplete:"off",
                readOnly: false,
                type:passwordType,
              }}
            />  
          </GridItem>

            <GridItem style={{margin:"5% 0% 0% .1%"}} xs={5} sm={12} md={4}>
               <Button onClick={SignUp}> Join Us</Button>
           </GridItem>
           <GridItem style={{margin:"5% 0% 2% 0%"}}  xs={5} sm={12} md={4}>
           <Button onClick={(event)=>SubmitUserDetails(event)}>Login</Button>
           </GridItem> 
           </GridContainer>
           </form>
        </CardBody>
      );   
  }

export default  withStyles(useStyles)(Loginclass);