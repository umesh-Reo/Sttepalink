import React , {Component} from 'react';
import { createBrowserHistory } from "history";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';

import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import LoginNavBar from "./LoginPageComponent/RightSideOfLoginPage/LoginNaveBar/LoginNaveBar.jsx";
import LoginDescriptionSide from "./LoginPageComponent/LeftSideOfLoginPage/LoginDesSide.jsx";
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Card from '../../ComponentsMaterialUi/Card/Card.jsx';
import IntroVideoPlayer from '../../Components/IntroVideo/IntroVideo';
import Login from "./LoginPageComponent/RightSideOfLoginPage/MemberLoginComponent/LoginComponent/login.jsx";
import BlackDropModel from '../../ComponentsMaterialUi/Modal/Modal';
import LoginStyle from "../../assets/jss/material-dashboard-react/components/loginStyle.jsx";
import * as actions from "../../Store/actions/index";

const history = createBrowserHistory({forceRefresh: true});
 
class SttepalinkHome extends Component {
 
  state = {
    LoginDetails:{
        name:{
          elementType:"input",
          type:'text',
          placeholder:'name...',
          value:''
         },
        emailId:{
          elementType:"input",
          type:'email',
          placeholder:'e-mail id...',
          value:' '
         }, 
        Password:{
          elementType:'input',
          type:'password',
          placeholder:'Password...',
          value:''
        },
      },
      nameSuccess: false,
      nameError: false,
      emailSuccess: false,
      emailError: false,
      passwordSuccess: false,
      passwordError: false,
   }

  componentDidMount() {
   const CopyOfLoginDetails = {
     ...this.state.LoginDetails
   };
    
   CopyOfLoginDetails.name.value="";
   CopyOfLoginDetails.emailId.value="";
   CopyOfLoginDetails.Password.value="";
   this.setState({LoginDetails:CopyOfLoginDetails});
  }

  ToggleModel = ( ) =>{
     this.setState({showModel:!this.state.showModel});
  }   

  validateInputs = (data) => {
   if((data.EmailId !== "") && (data.password !== "" )&& (data.name!== "")){
     this.setState({
       emailSuccess: true,
       emailError: false,
       passwordSuccess: true,
       passwordError: false,
       nameSuccess:true,
       nameError:false
     })
     return true
    }else{
    if(data.EmailId === ""){
      this.setState({
        emailSuccess: false,
        emailError: true
      })
    }else{
      this.setState({
        emailSuccess: true,
          emailError: false
        })
      }
    if(data.password === ""){
      this.setState({
        passwordSuccess: false,
        passwordError: true
      })
    }else{
      this.setState({
        passwordSuccess: true,
        passwordError: false
      })
    }
    if(data.name === ""){
      this.setState({
        nameSuccess: false,
        nameError: true
      })
    }else{
      this.setState({
        nameSuccess: true,
        nameError: false
      })
     }
    return false
    }
  }

  Inputhandler = (event, inputIdentifier ) =>{
   event.preventDefault();
   switch (inputIdentifier) {
     case ('name'): this.setState({nameError:false, nameSuccess:true})
     break;
     case ('emailId'): this.setState({emailError:false, emailSuccess:true})
     break;
     case ('Password'): this.setState({passwordError:false, passwordSuccess:true})
     break; 
    }
   const CopyOfLoginDetails = {
    ...this.state.LoginDetails
   };
   
   const UpdatedLoginDetails = {
     ...CopyOfLoginDetails[inputIdentifier]
   };
   
   UpdatedLoginDetails.value = event.target.value;
   CopyOfLoginDetails[inputIdentifier] = UpdatedLoginDetails;
   this.setState({LoginDetails:CopyOfLoginDetails});
  }

  SubmitUserDetails = ( event) => {
    event.preventDefault();                
    const loginUserData={
      EmailId : this.state.LoginDetails.emailId.value,
      name : this.state.LoginDetails.name.value,
      password:this.state.LoginDetails.Password.value
    }
    let validateLoginInputs = this.validateInputs(loginUserData);
    if(validateLoginInputs){
      this.props.onAuth(loginUserData.EmailId,loginUserData.password,false);
    }
  }     

 render(){
    const { classes } =this.props; 
    let  redirectToHomePage = null;
    if(this.props.IsAuthenticated){
      redirectToHomePage = <Redirect to="/home" />
    }
    let Model = this.state.showModel ? (
      <BlackDropModel show={this.state.showModel} BlackDrop={this.ToggleModel}>
         <IntroVideoPlayer/>
      </BlackDropModel>
    ) : null;

    return (
     <div className={classes.LoginFormContainer}> 
       {redirectToHomePage} 
       <Card  mediumCard style={{borderRadius:"0em", marginTop:"8%"}}>
         <GridContainer >
           <GridItem xs={12} sm={12} md={5}>
              <LoginDescriptionSide
                 VideoPlayButton={classes.VideoPlayButton}
                 ToggleModel={this.ToggleModel}
              />
           </GridItem>
           <GridItem  style={{paggingRight: "0% 0% 0% 0%",paddingTop:".5%",color:"white"}} xs={12} sm={12} md={7}>
             <GridContainer >
               <LoginNavBar/>
               <GridItem  style={{paggingRight: "0% 0% 0% 0%"}} xs={12} sm={12} md={12}>
                 <Login  
                   SubmitUserDetails={(event)=>this.SubmitUserDetails(event)}
                  
                   nameSuccess={this.state.nameSuccess}
                   nameError={this.state.nameError}
                   namePlaceholder={this.state.LoginDetails.name.placeholder}
                   nameElementType={this.state.LoginDetails.name.elementType}
                   nameValue={this.state.LoginDetails.name.value}
                   nameType={this.state.LoginDetails.name.type}
                  
                   emailSuccess={this.state.emailSuccess}
                   emailError= {this.state.emailError}
                   emailIdPlaceholder={this.state.LoginDetails.emailId.placeholder}
                   emailIdElementType={this.state.LoginDetails.emailId.elementType}
                   emailIdValue={this.state.LoginDetails.emailId.value}
                   emailIdType={this.state.LoginDetails.emailId.type}
                  
                   passwordSuccess={this.state.passwordSuccess}
                   passwordError={this.state.passwordError}
                   passwordPlaceholder={this.state.LoginDetails.Password.placeholder}
                   passwordElementType={this.state.LoginDetails.Password.elementType}
                   passwordValue={this.state.LoginDetails.Password.value}
                   passwordType={this.state.LoginDetails.Password.type}
                   
                   passwordInputhandler = {(event) =>this.Inputhandler(event ,"Password")}
                   emailIdInputhandler={(event)=>this.Inputhandler(event,"emailId")}
                   nameInputhandler={(event)=>this.Inputhandler(event,"name")}
                  />
               </GridItem>
             </GridContainer>
           </GridItem>
         </GridContainer>
       </Card>
       {Model}
      </div>
    );
  }
}

SttepalinkHome.propTypes = {
   classes: PropTypes.object.isRequired,
 };
const mapStateToProps = state => {
 return{
   IsAuthenticated : state.Auth.token !== null
 } 
}
 const mapDispatchToProps = dispatch => {
    return{
       onAuth: (emailId, password,isSignUp ) => dispatch(actions.Auth(emailId, password,isSignUp))
    }
 }

export default connect(mapStateToProps,mapDispatchToProps) (withStyles(LoginStyle)(SttepalinkHome));