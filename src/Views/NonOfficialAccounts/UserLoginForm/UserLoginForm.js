import React from "react";

import LoginForm from "../../../ComponentsMaterialUi/SignUpOrLoginForm/SignUpOrLoginForm.jsx";
import CustomInput from "../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx";
import GridContainer from "../../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import GridItem from "../../../ComponentsMaterialUi/Grid/GridItem.jsx";

const UserEntryForm = (props) => (
        <GridContainer  justify="center" style={{margin:"2% 0 0 0%"}}>   
        <GridItem xs={12} sm={4} md={5}>
        <LoginForm clicked={(e)=>props.SubmitDetails(e)} Title="Login Here..." >
             <GridContainer>
                 <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={props.emailIdPlaceholder}
                     formControlProps={{
                       fullWidth: true,
                     }}
                     id="emailId"
                     elementType={props.emailIdElementType}
                     value={props.emailIdValue}
                     handleChange={(event)=>props.emailIdHandleChange(event, "emailId")}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:props.emailITtype,
                     }}
                    /> 
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={props.SubjectPlaceholder}
                     formControlProps={{
                       fullWidth: true,
                     }}
                     id="Subject"
                     elementType={props.SubjectElementType}
                     value={props.SubjectValue}
                     handleChange={(event)=>props.SubjectHandleChange(event,"Subject")}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:props.SubjectType,
                     }}
                    /> 
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={props.StandartPlaceholder}
                     id="Standart"
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType={props.StandartElementType}
                     selectPlaceholder={props.StandartSelectPlaceholder}
                     menuOptions={props.StandartMenuOptions}
                     value={props.StandartValue}
                     handleChange={(event)=>props.StandartHandleChange(event ,"Standart") }
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:props.StandartType,
                     }}
                    /> 
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={props.PasswordPlaceholder}
                     id="Password"
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType={props.PasswordElementType}
                     value={props.PasswordValue}
                     handleChange={(event)=>props.PasswordHandleChange(event , "Password")}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:props.PasswordType,
                     }}
                    /> 
                  </GridItem>
                  </GridContainer>
             </LoginForm>
      </GridItem>
     </GridContainer>
    );

export default UserEntryForm;