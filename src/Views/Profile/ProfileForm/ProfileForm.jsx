import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import Button from '../../../ComponentsMaterialUi/CustomButtons/Button';
import Barlogo from '../../../assets/images/Screenshot-(3).png';
import Card from '../../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeadder from '../../../ComponentsMaterialUi/Card/CardHeader.jsx';
import CardBody from '../../../ComponentsMaterialUi/Card/CardBody.jsx';
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import ProfileFormStyle from '../../../assets/jss/material-dashboard-react/components/ProfileStyle.jsx';

const ProfileFormat = (Props) =>{
   const { classes,...rest} = Props;
  return(
        <Card  style={{marginTop:"2%",width:"100%",background:"whitesmoke", boxShadow: '0 3px 5px 2px  #a6a6a6' , border:"1px solid #b5b4b0"}}>
          <CardHeadder style={{marginTop:"1%" , paddingBottom:".5%"}}>
             <GridContainer justify="center">
                <GridItem  xs={6} sm={4} md={3}> 
                   <div  className={classes.Profile1}>
                      <img  className={classes.Profile} src={Barlogo} alt="Barlogo"/>
                   </div>
                   <GridItem style={{padding:"0"}} xs={12} sm={12} md={10}>
                  <Button style={{padding:"5% 6% 2% 6%"}} onClick={Props.updateUserProfile}>Update Profile</Button>
                 </GridItem>
                 </GridItem>
                 <GridItem  xs={12} sm={8} md={9}> 
                   <GridContainer style={{background:"rgb(203, 200, 208)",height:"140px",margin:"0",padding:"2% 0 2% 0", width:"100%", border:"1px solid #e0dede",borderRadius:".5em"}}>   
                      <GridItem  xs={4} sm={3} md={3}>
                      <p className={classes.HeadderinfoDisplay}>Name </p> 
                      </GridItem>
                      <GridItem  xs={8} sm={9} md={9}>
                       <p className={classes.HeadderinfoDisplay}> : {Props.userName} </p>
                      </GridItem>
                     
                      <GridItem  xs={4} sm={3} md={3}>
                       <p className={classes.HeadderinfoDisplay}> Plan validity Till</p>
                      </GridItem>
                      <GridItem  xs={8} sm={9} md={9}>
                       <p className={classes.HeadderinfoDisplay}>: 25/5/2020</p>
                      </GridItem>
                      
                      <GridItem  xs={4} sm={3} md={3}>
                       <p className={classes.HeadderinfoDisplay}> Email Id </p> 
                      </GridItem>
                      <GridItem xs={8} sm={9} md={9}>
                        <p className={classes.HeadderinfoDisplay} > : {Props.useremailId} </p>
                      </GridItem>
        
                      <GridItem  xs={4} sm={3} md={3}>
                       <p className={classes.HeadderinfoDisplay}> Your Plan </p>
                      </GridItem>
                      <GridItem  xs={8} sm={9} md={9}>
                       <p className={classes.HeadderinfoDisplay}>: {Props.userPricingPlan} </p>
                      </GridItem>  
                   </GridContainer> 
                 </GridItem>
              </GridContainer>
           </CardHeadder>
           <hr style={{margin:"0 0 1% 2%"}}/>
           <CardBody style={{padding:"0 4%"}}> 
             <GridContainer style={{paddingBottom:"2%"}}>
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                       <p className={classes.CardInfoDisplay}>Category &nbsp;:  {Props.userworkAs}</p> 
                 </GridItem>
                
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                  <p className={classes.CardInfoDisplay}>  Gender &nbsp; : {Props.usersex}</p> 
                 </GridItem>
             
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                  <p className={classes.CardInfoDisplay}>  Class &nbsp; : {Props.userClass}</p>  
                 </GridItem>
              
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                  <p className={classes.CardInfoDisplay}> Mob. No. :  &nbsp;{Props.usermobileNo}</p> 
                 </GridItem>
                
                 <GridItem style={{padding:"3px "}} xs={12} sm={12} md={12}>
                  <p className={classes.CardInfoDisplay}> Father's Name :  &nbsp;{Props.userfatherName}</p> 
                 </GridItem>
                 
                 <GridItem style={{padding:"3px "}} xs={12} sm={12} md={12}>
                  <p className={classes.CardInfoDisplay}> School Name :  &nbsp;{Props.userSchoolName}</p> 
                 </GridItem>
                 
                 <GridItem style={{padding:"3px "}} xs={12} sm={12} md={12}>
                  <p className={classes.CardInfoDisplay}> Added Subjects :  &nbsp; Not Available</p> 
                 </GridItem>
              </GridContainer>

              <GridContainer  style={{background:"rgb(203, 200, 208)", padding:"2% 0", marginBottom:'2%'}}>
                 <GridItem style={{padding:"0 0 3% 1%"}} xs={12} sm={4} md={3}>
                   <p className={classes.HeadderinfoDisplay}> Current Address : </p> 
                 </GridItem>
                 <GridItem  xs={12} sm={8} md={8} style={{padding:"0 0" , margin:"1  % 0 1% 0"}}> 
                   <GridContainer style={{margin:"0",padding:"0% 0%", background:"rgb(242, 241, 243)",width:"100%", border:"1px solid #e0dede",borderRadius:".5em"}}>   
                      <GridItem  xs={12} sm={12} md={12}>
                      <p className={classes.AddressInfoDisplay}>{Props.userName} </p> 
                      </GridItem>
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}><span style={{color:"black", fontSize:"100%"}}>C/O</span> {Props.userfatherName}</p>
                      </GridItem>
                     
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}>{Props.usercurrentAddress} , {Props.userlandMark}</p>
                      </GridItem>
                      
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}>{Props.userpostoffice} (Post Office) , {Props.userpincode}  </p> 
                      </GridItem>
                     
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}>{Props.userstates}</p>
                      </GridItem>
                   </GridContainer> 
                 </GridItem>
              </GridContainer>
          </CardBody>
       </Card>
     
  );
}

export default  withStyles(ProfileFormStyle)(ProfileFormat);