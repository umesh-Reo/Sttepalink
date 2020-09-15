import React from 'react';
import Card from "../../../ComponentsMaterialUi/Card/Card.jsx";
import CardHeader from "../../../ComponentsMaterialUi/Card/CardHeader.jsx";
import CardBody from "../../../ComponentsMaterialUi/Card/CardBody.jsx";
import CardFooter from "../../../ComponentsMaterialUi/Card/CardFooter.jsx";
import CustomButton from "../../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import CustomInput from "../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx";
import Aux from '../../../hoc/Aux';

import './EntryData.css';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';

const DataEntryOfTopic = ( Props )=>{
    console.log(Props);
   return (
      <Card style={{width:"70%", marginLeft:"15%",marginTop:"10px"}}>
         <CardHeader>   
            <h4 style={{margin:"0",fontWeight:"600"}}>Enter The Data Here</h4>
          </CardHeader> 
          <hr style={{marginBottom:"0"}}/>
          <CardBody>
              <GridContainer>
              <GridItem xs={12} sm={12} md={6} >
                      <CustomInput
                          labelText="Class :"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          elementType="text"
                          value= {Props.class}
                          inputProps={{
                             autoComplete:"off",
                             readOnly: true,
                             type:"text ",
                          }}
                       />
                  </GridItem> 
                  <GridItem xs={12} sm={12} md={6} >
                      <CustomInput
                          labelText="Subject :"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          elementType="text"
                          value= {Props.Subject}
                          inputProps={{
                              autoComplete:"off",
                              readOnly: true,
                              type:"text ",
                           }}
                       />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                          labelText="Topic :"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          elementType="text"
                          value= {Props.TopicName}
                          inputProps={{
                             autoComplete:"off",
                             readOnly: false,
                             type:"text ",
                           }}
                       />
                 </GridItem>
                 <GridItem xs={12} sm={12} md={12} >  
                     <CustomInput
                         labelText="Enter VideoUrl Name Here.."
                         formControlProps={{
                           fullWidth: true,
                         }}
                         elementType="text"
                         handleChange={Props.EnteringVideoName}
                         value= {Props.name}
                         inputProps={{
                            autoComplete:"off",
                            readOnly: false,
                            type:"text ",
                          }}
                       />
                 </GridItem>
                 <GridItem xs={12} sm={12} md={12} >
                  <CustomInput
                  labelText="Write Note Here..."
                  formControlProps={{
                    fullWidth: true,
                  }}
                  elementType="textarea"
                  handleChange={Props.EntringNotes}
                  value= {Props.Data}
                  />
                  </GridItem>
              </GridContainer>    
            </CardBody>
            <CardFooter style={{marginTop:"0%",paddingTop:"0%"}}>
              <GridContainer style={{width:"105%"}}>
                  <GridItem xs={12} sm={12} md={6} >
                       <CustomButton 
                        onClick={Props.CancelledTheProcess}
                       >
                         Cancle
                       </CustomButton>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6} >
                       <CustomButton 
                        onClick={Props.SubmitTheData}
                       >
                         Submit
                       </CustomButton>
                  </GridItem>
              </GridContainer>
            </CardFooter>     
           </Card>
        );
}

export default DataEntryOfTopic;