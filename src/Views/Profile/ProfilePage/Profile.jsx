import React , { Component } from 'react';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

import EditProfileForm from '../UpdateUser/UpdateUser';
import Modal from '../../../ComponentsMaterialUi/Modal/Modal';
import ProfileForm from '../ProfileForm/ProfileForm.jsx';
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer';
import GridItem from "../../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import * as actions from "../../../Store/actions/index";
import ProfileStyle from "../../../assets/jss/material-dashboard-react/components/ProfileStyle.jsx";

class UserProfile extends Component {
  
  state={
    userDetails :[],
    UserDetailId:'',
    EditeduserDetails:[],
    fullProfile:true,
    ProfileUpdateToggle:false,
    TempId : []
  }

  componentDidMount(){
   this.props.GetUserProfile(this.props.userId,this.props.tokenId);
   }

   ToggleUserEditForm=()=>{
    this.setState({ProfileUpdateToggle:!this.state.ProfileUpdateToggle});
   }

   userProfileUpdates= ( ) =>{
       this.setState({ProfileUpdateToggle:!this.state.ProfileUpdateToggle});
   }
 
  

   render(){
      const { classes, ...rest } = this.props;
 
      let EditProfile=this.state.ProfileUpdateToggle?(
        <Modal 
          show={this.state.ProfileUpdateToggle} 
          title="Update Your Profile" 
          left="42%"
          right="25%"
          BlackDrop={this.ToggleUserEditForm}
         >
           <EditProfileForm  
           BlackDrop={this.ToggleUserEditForm}
           />
        </Modal>
     ):null;
      
      let Profilecontainer = this.props.userDetail?(  
        <GridContainer justify="center">
           <GridItem item={true} xs={12} sm={11} md={10}>
              <ProfileForm
                userName={ this.props.userDetail.userData.name}
                userPricingPlan={ this.props.userDetail.userData.PlanName}
                useremailId={ this.props.userDetail.userData.emailId}
                userworkAs={ this.props.userDetail.userData.workAs}
                usersex={ this.props.userDetail.userData.sex}
                userClass={ this.props.userDetail.userData.class}
                usermobileNo={ this.props.userDetail.userData.mobileNo}
                userfatherName={ this.props.userDetail.userData.fatherName}
                userSchoolName={ this.props.userDetail.userData.SchoolName}
                usercurrentAddress={ this.props.userDetail.userData.currentAddress}
                userlandMark={ this.props.userDetail.userData.landMark}
                userpostoffice={ this.props.userDetail.userData.postoffice}
                userdistrict={ this.props.userDetail.userData.district}
                userpincode={ this.props.userDetail.userData.pincode}
                userstates={ this.props.userDetail.userData.states}
                ProfileUpdateToggle={this.state.ProfileUpdateToggle}
                FetchedDetail={this.state.EditeduserDetails}
                updateUserProfile={()=>this.userProfileUpdates( )}
               />
           </GridItem>
         </GridContainer>
      ):null;

     // <div>
     // <Headder HeadderForm="container2" check={true}/>
     // </div> 
      
    return (
       // headder should be here
          <div className={classes.ProfileGril}>
               {Profilecontainer}
               {EditProfile}
          </div> 
      );
   }
}
const mapStatetoProps = (state) =>{
   return{
    userId  : state.Auth.userId,
    tokenId : state.Auth.token,
    userDetail:state.Profile.userDetails
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      GetUserProfile : ( userId , token) => dispatch(actions.getProfile(userId , token))
   }
}
export default connect(mapStatetoProps,mapDispatchToProps)(withStyles(ProfileStyle)(UserProfile));