import React , { useState } from 'react';
import { createBrowserHistory } from "history";
import Card from '../../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeader from '../../../ComponentsMaterialUi/Card/CardHeader.jsx';
import CardBody from '../../../ComponentsMaterialUi/Card/CardBody.jsx';
import CardFooter from "../../../ComponentsMaterialUi/Card/CardFooter.jsx";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Button from '../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import CustomInput from '../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx';
import './UpdateUser.css';
import Aux from '../../../hoc/Aux';
import axious from '../../../hoc/Axious/Axious';

const history = createBrowserHistory({forceRefresh: true});

const UpdateStudentDetails = (Props) =>{ 
   const [studentState , setStudentState] =  useState({ 
     userDetails:{
        name:{
          elementType:'input',
          type:'text',
          placeholder:'Enter Your Full Name', 
          value:Props.DetailsOfTheUser.name
        },
        emailId:{
         elementType:'input',
         type:'email',
         placeholder:'Enter Your e-mail Id',
         value:Props.DetailsOfTheUser.emailId
        },
        workAs:{
          elementType:'select',
          options:[
           { value:"Student", displayValue:"Student" },
           { value:"ClassTeacher", displayValue:"Class Teacher" },
           { value:"Principal", displayValue:"Principal" },
           { value:"Others", displayValue:"Others" }
          ],
          value:Props.DetailsOfTheUser.workAs        
        },
        class:{
         elementType:'input',
         type:'text',
         placeholder:'Class (if not a principal)',
         value:Props.DetailsOfTheUser.class
        },
        SchoolName:{
         elementType:'input',
         type:'text',
         placeholder:"Enter your School's Name",
         value:Props.DetailsOfTheUser.SchoolName
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
         value:Props.DetailsOfTheUser.mobileNo
        },
        dateOfBirth:{
         elementType:'input',
         type:'date',
         placeholder:'Enter Your Death Of Birth',
         value:Props.DetailsOfTheUser.dateOfBirth
        },
        sex:{
          elementType:'select',
          options:[
            { value:"Male", displayValue:"Male" },
            { value:"Female", displayValue:"Female" },
            {value:"Other",displayValue:"Others"}
          ],
          value:Props.DetailsOfTheUser.sex
        },
        fatherName:{
          elementType:'input',
          type:'text',
          placeholder:"Enter Your Father's Name",
          value:Props.DetailsOfTheUser.fatherName
        },
        currentAddress:{
          elementType:'input',
          type:'text',
          placeholder:'Enter Your Current Address',
          value:Props.DetailsOfTheUser.currentAddress
        },
        landMark:{
          elementType:'input',
          type:'text',
          placeholder:'Enter Your Near By Land Mark',
          value:Props.DetailsOfTheUser.landMark
        },
        postoffice:{
          elementType:'input',
          type:'text',
          placeholder:'Post Office',
          value:Props.DetailsOfTheUser.postoffice
        },
        district:{
          elementType:'input',
          type:'text',
          placeholder:'District',
          value:Props.DetailsOfTheUser.district
        },
        pincode:{
          elementType:'input',
          type:'text',
          placeholder:'Pincode',
          value:Props.DetailsOfTheUser.pincode
        },
        states:{
          elementType:'input',
          type:'text',
          placeholder:'State' ,
          value:Props.DetailsOfTheUser.states
        }  
      },
      toggleform:true,
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
   });
     
  
   const SubmitUpdatedUserDetails = ( ) => {
     const Plan = Props.DetailsOfTheUser.PlanName;
     const password = Props.DetailsOfTheUser.Password;
     console.log(studentState.userDetails.sex.value);
     console.log(studentState.userDetails.SchoolName.value);
    const Details = {
      PlanName:Plan,
      name:studentState.userDetails.name.value,
      emailId:studentState.userDetails.emailId.value,
      workAs:studentState.userDetails.workAs.value,
      class:studentState.userDetails.class.value,
      SchoolName:studentState.userDetails.SchoolName.value,
      mobileNo:studentState.userDetails.mobileNo.value,
      dateOfBirth:studentState.userDetails.dateOfBirth.value,
      sex:studentState.userDetails.sex.value,
      fatherName:studentState.userDetails.fatherName.value,
      currentAddress:studentState.userDetails.currentAddress.value,
      landMark:studentState.userDetails.landMark.value,
      postoffice:studentState.userDetails.postoffice.value,
      district:studentState.userDetails.district.value,
      pincode:studentState.userDetails.pincode.value,
      states:studentState.userDetails.states.value,
      Password :password
     }
      
        axious.put('/userDetails/'+Props.UserIdForEdit+'.json',Details)
        .then(response => console.log(response))
        .then(setStudentState({toggleform : !studentState.toggleform}))
        .catch(err => console.log(err));
         Props.BlackDrop();
       
    };
 
     
    const UpdatedInputChangehandler = (event, inputIdentifier ) =>{
      event.preventDefault();
      const CopyOfUserDetails = {
        ...studentState.userDetails
      };

      const UpdatedUserDetails = {
        ...CopyOfUserDetails[inputIdentifier]
      };
      console.log(UpdatedUserDetails.value);
      UpdatedUserDetails.value = event.target.value;
      console.log(UpdatedUserDetails.value);
      CopyOfUserDetails[inputIdentifier] = UpdatedUserDetails;
      setStudentState({userDetails:CopyOfUserDetails});
}


    
    
      
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
             }}  >
          <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.passwordSuccess}
                  error={studentState.passwordError}
                  labelText={studentState.userDetails.Password.placeholder}
                  id="Password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.Password.elementType}
                  selectPlaceholder={studentState.userDetails.Password.SelectPlaceholder}
                  value={studentState.userDetails.Password.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "Password")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.Password.type,
                  }}
                 /> 
               </GridItem>

               <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.emailSuccess}
                  error={studentState.emailError}
                  labelText={studentState.userDetails.emailId.placeholder}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  id="emailId"
                  elementType={studentState.userDetails.emailId.elementType}
                  value={studentState.userDetails.emailId.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "emailId")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.emailId.type,
                  }}
                 /> 
               </GridItem>

               <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.SchoolNameSuccess}
                  error={studentState.SchoolNameError}
                  labelText={studentState.userDetails.SchoolName.placeholder}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  id="SchoolName"
                  elementType={studentState.userDetails.SchoolName.elementType}
                  value={studentState.userDetails.SchoolName.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "SchoolName")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.SchoolName.type,
                  }}
                 /> 
               </GridItem>

               <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText={studentState.userDetails.sex.placeholder}
                  id="sex"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.sex.elementType}
                  selectPlaceholder={studentState.userDetails.sex.SelectPlaceholder}
                  menuOptions={studentState.userDetails.sex.options}
                  value={studentState.userDetails.sex.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "sex")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.sex.type,
                  }}
                 /> 
               </GridItem>

               <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.mobileNoSuccess}
                  error={studentState.mobileNoError}
                  labelText={studentState.userDetails.mobileNo.placeholder}
                  id="mobileNo"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.mobileNo.elementType}
                  selectPlaceholder={studentState.userDetails.mobileNo.SelectPlaceholder}
                  value={studentState.userDetails.mobileNo.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "mobileNo")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.mobileNo.type,
                  }}
                 /> 
               </GridItem>              

               <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.currentAddressSuccess}
                  error={studentState.currentAddressError}
                  labelText={studentState.userDetails.currentAddress.placeholder}
                  id="currentAddress"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.currentAddress.elementType}
                  selectPlaceholder={studentState.userDetails.currentAddress.SelectPlaceholder}
                  value={studentState.userDetails.currentAddress.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "currentAddress")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.currentAddress.type,
                  }}
                 /> 
               </GridItem>

               <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.landMarkSuccess}
                  error={studentState.landMarkError}
                  labelText={studentState.userDetails.landMark.placeholder}
                  id="landMark"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.landMark.elementType}
                  selectPlaceholder={studentState.userDetails.landMark.SelectPlaceholder}
                  value={studentState.userDetails.landMark.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "landMark")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.landMark.type,
                  }}
                 /> 
               </GridItem>

               <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.postofficeSuccess}
                  error={studentState.postofficeError}
                  labelText={studentState.userDetails.postoffice.placeholder}
                  id="postoffice"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.postoffice.elementType}
                  selectPlaceholder={studentState.userDetails.postoffice.SelectPlaceholder}
                  value={studentState.userDetails.postoffice.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "postoffice")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.postoffice.type,
                  }}
                 /> 
               </GridItem>

               <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.districtSuccess}
                  error={studentState.districtError}
                  labelText={studentState.userDetails.district.placeholder}
                  id="district"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.district.elementType}
                  selectPlaceholder={studentState.userDetails.district.SelectPlaceholder}
                  value={studentState.userDetails.district.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "district")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.district.type,
                  }}
                 /> 
               </GridItem>

               <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.pincodeSuccess}
                  error={studentState.pincodeError}
                  labelText={studentState.userDetails.pincode.placeholder}
                  id="pincode"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.pincode.elementType}
                  selectPlaceholder={studentState.userDetails.pincode.SelectPlaceholder}
                  value={studentState.userDetails.pincode.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "pincode")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.pincode.type,
                  }}
                 /> 
               </GridItem>

               <GridItem  xs={12} sm={12} md={12}>
                <CustomInput
                  success={studentState.statesSuccess}
                  error={studentState.statesError}
                  labelText={studentState.userDetails.states.placeholder}
                  id="states"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType={studentState.userDetails.states.elementType}
                  selectPlaceholder={studentState.userDetails.states.SelectPlaceholder}
                  value={studentState.userDetails.states.value}
                  handleChange={(event) =>UpdatedInputChangehandler(event , "states")}
                  inputProps={{
                    autoComplete:"off",
                    readOnly: false,
                    type:studentState.userDetails.states.type,
                  }}
                 /> 
               </GridItem>
          </GridContainer>
          </CardBody>
            <CardFooter>
            <Button style={{padding:"3% 0 0 0",marginTop:'0%'}} onClick={SubmitUpdatedUserDetails} >Submit</Button> 
            </CardFooter>      
         </Card>  
       
      );

  return (
     <Aux> 
       {form}      
     </Aux>
   );
    
}

export default UpdateStudentDetails;