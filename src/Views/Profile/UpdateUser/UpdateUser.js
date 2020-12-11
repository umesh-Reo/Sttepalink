import React , { Component }  from 'react';
import { createBrowserHistory } from "history";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import * as action from "../../../Store/actions/index";
import Card from '../../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeader from '../../../ComponentsMaterialUi/Card/CardHeader.jsx';
import CardBody from '../../../ComponentsMaterialUi/Card/CardBody.jsx';
import CardFooter from "../../../ComponentsMaterialUi/Card/CardFooter.jsx";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Button from '../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import CustomInput from '../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import userUpdateProfile from "../../../assets/jss/material-dashboard-react/components/ProfileStyle.jsx";

const history = createBrowserHistory({forceRefresh: true});

class UpdateStudentDetails extends Component{ 
  state = { 
   userDetails:{
      name:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Your Full Name', 
        value:this.props.UserProfileId.userData.name
      },
      emailId:{
       elementType:'input',
       type:'email',
       placeholder:'Enter Your e-mail Id',
       value:this.props.UserProfileId.userData.emailId
      },
      workAs:{
        elementType:'select',
        options:[
         { value:"Student", displayValue:"Student" },
         { value:"ClassTeacher", displayValue:"Class Teacher" },
         { value:"Principal", displayValue:"Principal" },
         { value:"Others", displayValue:"Others" }
        ],
        value:this.props.UserProfileId.userData.workAs        
      },
      class:{
       elementType:'input',
       type:'text',
       placeholder:'Class (if not a principal)',
       value:this.props.UserProfileId.userData.class
      },
      SchoolName:{
       elementType:'input',
       type:'text',
       placeholder:"Enter your School's Name",
       value:this.props.UserProfileId.userData.SchoolName
      },
      Password:{
        elementType:'input',
        type:'password',
        placeholder:"Enter your Password First",
        value:""
       },
      mobileNo:{
       elementType:'input',
       type:'number',
       placeholder:'Enter Your Contact Number',
       value:this.props.UserProfileId.userData.mobileNo
      },
      dateOfBirth:{
       elementType:'input',
       type:'date',
       placeholder:'Enter Your Death Of Birth',
       value:this.props.UserProfileId.userData.dateOfBirth
      },
      sex:{
        elementType:'select',
        options:[
          { value:"Male", displayValue:"Male" },
          { value:"Female", displayValue:"Female" },
          {value:"Other",displayValue:"Others"}
        ],
        value:this.props.UserProfileId.userData.sex
      },
      fatherName:{
        elementType:'input',
        type:'text',
        placeholder:"Enter Your Father's Name",
        value:this.props.UserProfileId.userData.fatherName
      },
      currentAddress:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Your Current Address',
        value:this.props.UserProfileId.userData.currentAddress
      },
      landMark:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Your Near By Land Mark',
        value:this.props.UserProfileId.userData.landMark
      },
      postoffice:{
        elementType:'input',
        type:'text',
        placeholder:'Post Office',
        value:this.props.UserProfileId.userData.postoffice
      },
      district:{
        elementType:'input',
        type:'text',
        placeholder:'District',
        value:this.props.UserProfileId.userData.district
      },
      pincode:{
        elementType:'input',
        type:'text',
        placeholder:'Pincode',
        value:this.props.UserProfileId.userData.pincode
      },
      states:{
        elementType:'input',
        type:'text',
        placeholder:'State' ,
        value:this.props.UserProfileId.userData.states
      }  
    },
    passwordSuccess:false,
    passwordError:false,
    emailIdSuccess:false,
    emailIdError:false,
    SchoolNameSuccess:false,
    SchoolNameError:false,
    mobileNoSuccess:false,
    mobileNoError:false,
    currentAddressSuccess:false,
    currentAddressError:false,
    landMarkSuccess:false,
    landMarkError:false,
    postofficeSuccess:false,
    postofficeError:false,
    districtSuccess:false,
    districtError:false,
    pincodeSuccess:false,
    pincodeError:false,
    statesSuccess:false,
    statesError:false,
  };

  UpdatedInputChangehandler = (event, inputIdentifier ) =>{
    event.preventDefault();
    const CopyOfUserDetails = {
      ...this.state.userDetails
    } 
    const UpdatedUserDetails = {
      ...CopyOfUserDetails[inputIdentifier]
    };
    console.log(UpdatedUserDetails.value);
    UpdatedUserDetails.value = event.target.value;
    console.log(UpdatedUserDetails.value);
    CopyOfUserDetails[inputIdentifier] = UpdatedUserDetails;
    this.setState({userDetails:CopyOfUserDetails});
   }
     
 SubmitUpdatedUserDetails = ( ) => {
   const Plan = this.props.UserProfileId.userData.PlanName;
   const updatedUserDetails = {
     PlanName:Plan,
     name:this.state.userDetails.name.value,
     emailId:this.state.userDetails.emailId.value,
     workAs:this.state.userDetails.workAs.value,
     class:this.state.userDetails.class.value,
     SchoolName:this.state.userDetails.SchoolName.value,
     mobileNo:this.state.userDetails.mobileNo.value,
     dateOfBirth:this.state.userDetails.dateOfBirth.value,
     sex:this.state.userDetails.sex.value,
     fatherName:this.state.userDetails.fatherName.value,
     currentAddress:this.state.userDetails.currentAddress.value,
     landMark:this.state.userDetails.landMark.value,
     postoffice:this.state.userDetails.postoffice.value,
     district:this.state.userDetails.district.value,
     pincode:this.state.userDetails.pincode.value,
     states:this.state.userDetails.states.value,
   }
    this.props.SendUpdatedData(updatedUserDetails,this.props.UserProfileId.id,this.props.tokenId,this.props.userId);
    this.props.BlackDrop();  
  };
 
  render(){
    let form =(
      <Card style={{width:"100%" , margin:"0%",borderRadius:".8em .8em .5em .5em"}}>
        <CardHeader 
         style={{fontSize:"20px",
         paddingTop:"7%",
         fontWeight:"650",
         color:"#f7f7f7",
         borderRadius:".5em .5em 0 0",
         backgroundColor:"#b4becf"}}
         >
         Update Your Profile
        </CardHeader>
        <CardBody> 
          <GridContainer
           style={{
             height: '205px',
             backgroundColor: "rgb(253, 252, 252)",
             borderRadius: "1.5em 1.5em 1em 1em",
             overflow: 'auto',
            }}  
          >
         <GridItem xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.passwordSuccess}
             error={this.state.passwordError}
             labelText={this.state.userDetails.Password.placeholder}
             id="Password"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.Password.elementType}
             selectPlaceholder={this.state.userDetails.Password.SelectPlaceholder}
             value={this.state.userDetails.Password.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "Password")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.Password.type,
             }}
            /> 
         </GridItem>
         <GridItem xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.SchoolNameSuccess}
             error={this.state.SchoolNameError}
             labelText={this.state.userDetails.SchoolName.placeholder}
             formControlProps={{
               fullWidth: true,
             }}
             id="SchoolName"
             elementType={this.state.userDetails.SchoolName.elementType}
             value={this.state.userDetails.SchoolName.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "SchoolName")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.SchoolName.type,
             }}
            /> 
         </GridItem>
         <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            labelText={this.state.userDetails.sex.placeholder}
            id="sex"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={this.state.userDetails.sex.elementType}
            selectPlaceholder={this.state.userDetails.sex.SelectPlaceholder}
            menuOptions={this.state.userDetails.sex.options}
            value={this.state.userDetails.sex.value}
            handleChange={(event) =>this.UpdatedInputChangehandler(event , "sex")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.sex.type,
            }}
           /> 
         </GridItem>
         <GridItem xs={12} sm={12} md={12}>
          <CustomInput
            success={this.state.mobileNoSuccess}
            error={this.state.mobileNoError}
            labelText={this.state.userDetails.mobileNo.placeholder}
            id="mobileNo"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={this.state.userDetails.mobileNo.elementType}
            selectPlaceholder={this.state.userDetails.mobileNo.SelectPlaceholder}
            value={this.state.userDetails.mobileNo.value}
            handleChange={(event) =>this.UpdatedInputChangehandler(event , "mobileNo")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.mobileNo.type,
            }}
           /> 
         </GridItem>              
         <GridItem  xs={12} sm={12} md={12}>
          <CustomInput
            success={this.state.currentAddressSuccess}
            error={this.state.currentAddressError}
            labelText={this.state.userDetails.currentAddress.placeholder}
            id="currentAddress"
            formControlProps={{
              fullWidth: true,
            }}
            elementType={this.state.userDetails.currentAddress.elementType}
            selectPlaceholder={this.state.userDetails.currentAddress.SelectPlaceholder}
            value={this.state.userDetails.currentAddress.value}
            handleChange={(event) =>this.UpdatedInputChangehandler(event , "currentAddress")}
            inputProps={{
              autoComplete:"off",
              readOnly: false,
              type:this.state.userDetails.currentAddress.type,
            }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.landMarkSuccess}
             error={this.state.landMarkError}
             labelText={this.state.userDetails.landMark.placeholder}
             id="landMark"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.landMark.elementType}
             selectPlaceholder={this.state.userDetails.landMark.SelectPlaceholder}
             value={this.state.userDetails.landMark.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "landMark")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.landMark.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.postofficeSuccess}
             error={this.state.postofficeError}
             labelText={this.state.userDetails.postoffice.placeholder}
             id="postoffice"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.postoffice.elementType}
             selectPlaceholder={this.state.userDetails.postoffice.SelectPlaceholder}
             value={this.state.userDetails.postoffice.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "postoffice")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.postoffice.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.districtSuccess}
             error={this.state.districtError}
             labelText={this.state.userDetails.district.placeholder}
             id="district"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.district.elementType}
             selectPlaceholder={this.state.userDetails.district.SelectPlaceholder}
             value={this.state.userDetails.district.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "district")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.district.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.pincodeSuccess}
             error={this.state.pincodeError}
             labelText={this.state.userDetails.pincode.placeholder}
             id="pincode"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.pincode.elementType}
             selectPlaceholder={this.state.userDetails.pincode.SelectPlaceholder}
             value={this.state.userDetails.pincode.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "pincode")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.pincode.type,
             }}
           /> 
         </GridItem>
         <GridItem  xs={12} sm={12} md={12}>
           <CustomInput
             success={this.state.statesSuccess}
             error={this.state.statesError}
             labelText={this.state.userDetails.states.placeholder}
             id="states"
             formControlProps={{
               fullWidth: true,
             }}
             elementType={this.state.userDetails.states.elementType}
             selectPlaceholder={this.state.userDetails.states.SelectPlaceholder}
             value={this.state.userDetails.states.value}
             handleChange={(event) =>this.UpdatedInputChangehandler(event , "states")}
             inputProps={{
               autoComplete:"off",
               readOnly: false,
               type:this.state.userDetails.states.type,
             }}
           /> 
         </GridItem>
       </GridContainer>
     </CardBody>
     <CardFooter>
     <Button style={{padding:"3% 0 0 0",marginTop:'0%'}} onClick={this.SubmitUpdatedUserDetails} >Submit</Button> 
     </CardFooter>      
   </Card>  
  );
  return (
      <div> 
        {form}      
      </div>
    );
  }  
}

const mapStateToProps = (state) => {
  return{
    UserProfileId:state.Profile.userDetails,
    tokenId : state.Auth.token,
    userId:state.Auth.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    SendUpdatedData : (userUpdatedData,ProfileId,Token,userId) => dispatch(action.UpdateUserProfile(userUpdatedData,ProfileId,Token,userId))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(userUpdateProfile)(UpdateStudentDetails));