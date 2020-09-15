import React , { Component } from 'react';
import axios from '../../../hoc/Axious/Axious';
import EditProfileForm from '../UpdateUser/UpdateUser';
import Modal from '../../../ComponentsMaterialUi/Modal/Modal';
import './Profile.css';
import ProfileForm from '../ProfileForm/ProfileForm.jsx';
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer';
import GridItem from "../../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({forceRefresh: true});

class UserProfile extends Component {
  
  state={
    userDetails :[],
    UserDetailId:'',
    EditeduserDetails:[],
    fullProfile:true,
    ProfileUpdateToggle:false,
    TempId : []
  }

  constructor(props){
     super(props)
     console.log(props.localStorage);
  }
 
  componentDidMount(){
   const UserId = localStorage.getItem("UserDetail");
     axios.get('/userDetails/'+UserId+'.json')
     .then(res=> {
        console.log(res);
         this.setState({userDetails:res.data , UserDetailId:UserId});
      })
      .catch(error =>{
         console.log(error);
      })
   }


   ToggleUserEditForm=()=>{
      this.setState({ProfileUpdateToggle:!this.state.ProfileUpdateToggle});
    
   }

   userProfileUpdates= (Id, UserDetailsToUpload ) =>{
     console.log(Id, UserDetailsToUpload);
            if(this.state.UserDetailId===Id){  
               this.setState({EditeduserDetails:UserDetailsToUpload,TempId:Id});
            }else{
              
            }
       this.setState({ProfileUpdateToggle:!this.state.ProfileUpdateToggle});
   }
 
  

   render(){
      console.log(this.state.userDetails);
      
      let EditProfile=this.state.ProfileUpdateToggle?(
         <Modal 
          show={this.state.ProfileUpdateToggle} 
          title="Update Your Profile" 
          left="42%"
          right="25%"
          BlackDrop={this.ToggleUserEditForm}
         >
           <EditProfileForm  
           DetailsOfTheUser={this.state.EditeduserDetails}
           UserIdForEdit={this.state.TempId}
           BlackDrop={this.ToggleUserEditForm}
           />
         </Modal>
     ):null;
      
          const subjectArray = [];
          for(let key in this.state.userDetails.Subjects){
            subjectArray.push({
             Id: key,
             listOfTheSubjects:this.state.userDetails.Subjects[key]
            });
          }
           
          
      let Profilecontainer = (  
        <GridContainer justify="center">
           <GridItem xs={12} sm={11} md={10}>
              <ProfileForm
                key={this.state.UserDetailId}
                userName={ this.state.userDetails.name}
                userPricingPlan={ this.state.userDetails.PlanName}
                useremailId={ this.state.userDetails.emailId}
                userworkAs={ this.state.userDetails.workAs}
                usersex={ this.state.userDetails.sex}
                userClass={ this.state.userDetails.class}
                usermobileNo={ this.state.userDetails.mobileNo}
                userfatherName={ this.state.userDetails.fatherName}
                userSchoolName={ this.state.userDetails.SchoolName}
                usercurrentAddress={ this.state.userDetails.currentAddress}
                userlandMark={ this.state.userDetails.landMark}
                userpostoffice={ this.state.userDetails.postoffice}
                userdistrict={ this.state.userDetails.district}
                userpincode={ this.state.userDetails.pincode}
                userstates={ this.state.userDetails.states}
                ProfileUpdateToggle={this.state.ProfileUpdateToggle}
                FetchedDetail={this.state.EditeduserDetails}
                UserProfileUpdate={()=>this.userProfileUpdates(this.state.UserDetailId,this.state.userDetails)}
               />
           </GridItem>
         </GridContainer>
      )

     // <div>
     // <Headder HeadderForm="container2" check={true}/>
     // </div> 
      
    return (
       // headder should be here
          <div className="ProfileGril">
               {Profilecontainer}
               {EditProfile}
          </div> 
      );
   }
}

export default UserProfile;