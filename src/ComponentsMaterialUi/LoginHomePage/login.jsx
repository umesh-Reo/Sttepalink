import React , { Component } from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { createBrowserHistory } from "history";
import CustomInput from '../CustomInput/CustomInput.jsx';
import GridContainer from '../Grid/GridContainer.jsx';
import Button from '../CustomButtons/Button.jsx';
import GridItem from '../Grid/GridItem.jsx';
import Card from '../Card/Card.jsx';
import CardHeader from '../Card/CardHeader.jsx';
import CardBody from '../Card/CardBody.jsx';
import CardFooter from '../Card/CardFooter.jsx';
//import Btn from '../Ui/Button/Button';
import axious from '../../hoc/Axious/Axious';
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

class Loginclass extends Component {
    constructor(props) {
     super(props);
     this.state = {
        LoginDetails:{
          name:{
            elementType:"input",
            type:'text',
            placeholder:'name',
            value:''
           },
          emailId:{
            elementType:"input",
            type:'email',
            placeholder:'e-mail id',
            value:' '
           }, 
           Password:{
            elementType:'input',
            type:'password',
            placeholder:'Password',
            value:''
          },
        },
        nameSuccess: false,
        nameError: false,
        emailSuccess: false,
        emailError: false,
        passwordSuccess: false,
        passwordError: false,
        ExistingUser :{},
        UserAutheticated:false,
        show:false
      }
    };
  
 
    clearCache() {
      localStorage.clear();
      sessionStorage && sessionStorage.clear();
     
      const CopyOfLoginDetails = {
        ...this.state.LoginDetails
      };
      
      CopyOfLoginDetails.name.value="";
      CopyOfLoginDetails.emailId.value="";
      CopyOfLoginDetails.Password.value="";
      this.setState({LoginDetails:CopyOfLoginDetails});
     
      if(history.location.pathname !== "/"){
        history.push("/");
      }

     // method = "GET";
     // url = "/user/logout";
     // postObj = {};
     // APICall(method, url, postObj)
     //   .then(response => {
     //     console.log(response);
     //   })
    }

    componentDidMount() {
      this.clearCache();
      console.log(this.state.LoginDetails);
      // we add a hidden class to the card and after 700 ms we delete it and the transition appears
     // setTimeout(
     //   function () {
     //     this.setState({ cardAnimaton: "" });
     //   }.bind(this),
     //   700
     // );
    }
    

    validateInputs(data){
      console.log("welcom to the Validations")
      if((data.EmailId !== "") && (data.password !== "" )&& (data.name!== "")){
        console.log("working");

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

    SignUp = ( ) =>{
      history.push("/PricingPackage");
    }

    SubmitUserDetails = ( event) => {
      event.preventDefault();
      const loginUserData={
        EmailId : this.state.LoginDetails.emailId.value,
        name : this.state.LoginDetails.name.value,
        password:this.state.LoginDetails.Password.value
      }
      console.log(loginUserData)
      let validateLoginInputs = this.validateInputs(loginUserData);
      if(validateLoginInputs){
        console.log(loginUserData)
        const JWT_KEY = "7cb716a9ee1095ad11c16f4c4f13168a8bcca0fb5e5156b8ceaa8a6cc0b4bfc05d302ebba29bd98bd6a7a536977a376000c8c37e9d6b807141b131bb1d1fc9ea"
        axious.get('/userDetails.json')
        .then(res => {  
          console.log(res);
          let UserId;
          let UserInfo;
          const fetchExistingUserDetails = [];
          for ( let key in res.data){
            fetchExistingUserDetails.push({
             ExistingUserDetails: {...res.data[key]},
             id: key
            });
          }
          
          fetchExistingUserDetails.map(rew =>
            {
              bcrypt.compare( loginUserData.password, rew.ExistingUserDetails.Password)
              .then(result=>{
                console.log(result)
                if(result){
                  console.log(rew);
                  if((rew.ExistingUserDetails.name === loginUserData.name )&&(rew.ExistingUserDetails.emailId === loginUserData.EmailId )){
                     UserInfo = rew.ExistingUserDetails;
                     console.log("you done")
                     UserId = rew.id;
                    const token = jwt.sign( 
                     {loginUserData},
                     JWT_KEY,
                     {expiresIn:"3h"}
                    );
                    localStorage.clear();
                    localStorage.setItem("token",token);
                    localStorage.setItem("UserDetail",UserId);
                    localStorage.setItem("UserName",loginUserData.name);

                    this.setState(PrevState =>({
                      ...PrevState,ExistingUser:UserInfo,UserAutheticated:true}));
                    this.props.UserDetailsHandler(UserId,true);
                    console.log("done , user Verified");
                  }else{
                    console.log("only password passed");
                  } 
                }else{
                  //console.log("Password Invalid");
                }  
            })
         
           //  

          //  bcrypt.compare(this.state.LoginDetails.Password.value, rew.ExistingUserDetails.Password,function(err, result) {
          //    if(result){
          //      if((rew.ExistingUserDetails.name === loginUserData.name )&&(rew.ExistingUserDetails.emailId === loginUserData.EmailId ) &&(rew.ExistingUserDetails.workAs === loginUserData.WorkAs)){
          //        UserId = rew.ExistingUserDetails;
          //        UserInfo = rew.id;
          //        const token = jwt.sign( 
          //         {loginUserData},
          //         JWT_KEY,
          //         {expiresIn:"3h"}
          //        );
          //        localStorage.setItem("token",token);
          //        console.log("done");
          //      }
          //    }
          //    if(err){
          //      console.log(err);
          //    }
          //  });    
        });
        console.log(UserId);
        console.log(UserInfo);
      })
    }
    }
      
  
    render(){
      console.log(this.state.LoginDetails);
      const formArray = [];
      for(let key in this.state.LoginDetails){
        formArray.push({
         Id: key,
         config: this.state.LoginDetails[key]
        });
      }
      return (
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
              success={this.state.nameSuccess}
              error={this.state.nameError}
              labelText={this.state.LoginDetails.name.placeholder}
              formControlProps={{
                fullWidth: true,
              }}
              id="name"
              elementType={this.state.LoginDetails.name.elementType}
              value={this.state.LoginDetails.name.value}
              handleChange={(event) =>this.Inputhandler(event , "name")}
              inputProps={{
                autoComplete:"off",
                readOnly: false,
                type:this.state.LoginDetails.name.type,
              }}
            />  
          </GridItem>

          <GridItem   xs={12} sm={12} md={8}>
            <CustomInput
              success={this.state.emailSuccess}
              error={this.state.emailError}
              labelText={this.state.LoginDetails.emailId.placeholder}
              formControlProps={{
                fullWidth: true,
              }}
              id="emailId"
              elementType={this.state.LoginDetails.emailId.elementType}
              value={this.state.LoginDetails.emailId.value}
              handleChange={(event) =>this.Inputhandler(event , "emailId")}
              inputProps={{
                autoComplete:"off",
                readOnly: false,
                type:this.state.LoginDetails.emailId.type,
              }}
            />  
          </GridItem>
          
          <GridItem   xs={12} sm={12} md={8}>
            <CustomInput
              success={this.state.passwordSuccess}
              error={this.state.passwordError}
              labelText={this.state.LoginDetails.Password.placeholder}
              formControlProps={{
                fullWidth: true,
              }}
              id="Password"
              elementType={this.state.LoginDetails.Password.elementType}
              value={this.state.LoginDetails.Password.value}
              handleChange={(event) =>this.Inputhandler(event , "Password")}
              inputProps={{
                autoComplete:"off",
                readOnly: false,
                type:this.state.LoginDetails.Password.type,
              }}
            />  
          </GridItem>

            <GridItem style={{margin:"3% 0% 0% .1%"}} xs={5} sm={12} md={4}>
               <Button className="price" onClick={this.SignUp}> Sign Up</Button>
           </GridItem>
           <GridItem style={{margin:"3% 0% 2% 0%"}}  xs={5} sm={12} md={4}>
           <Button onClick={(event)=>this.SubmitUserDetails(event)}>Login</Button>
           </GridItem> 
           </GridContainer>
           </form>
        </CardBody>
      );
    }
    //<Button simple color="success" size="sm" onClick={SubmitUserDetails}>Login</Button>
    
  }

export default  withStyles(useStyles)(Loginclass);