import React,{Component} from 'react';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx'
import MenuItem from '../../ComponentsMaterialUi/SelectInput/MenuItem.jsx';
import Card from '../../ComponentsMaterialUi/Card/Card.jsx';
import CardHeadder from '../../ComponentsMaterialUi/Card/CardHeader.jsx'
import SignUp from "../SignUp/SignUp.jsx";
import PricingPlan  from '../../Views/PricingPlanDiscription/PricingPlan.jsx';
import { createBrowserHistory } from "history";
import ChooseTheSubjects from '../../Views/AvailableSubjects/AvailableSubjects';
import './PricingPlanDis.css';
import bcrypt from 'bcryptjs';
import CardBody from '../../ComponentsMaterialUi/Card/CardBody.jsx';

const history = createBrowserHistory({forceRefresh: true});
class SpacingGrid extends Component{
   constructor(props){
     super(props);
      this.state={
       VideoPackages:{
         ThreeDaysVideoPlan:{
           Price:"99",   
           Type:"Video Tutorial With Notes ",       
           Validity:"3 days validity",           
         },
         SevenDaysVideoPlan:{
           Price:"130",
           Type:"Video Tutorial With Notes ",  
           Validity:"7 days validity",
         },
         FourteenDaysVideoPlan:{
           Price:"230",
           Type:"Video Tutorial With Notes ",  
           Validity:"14 days validity",
         },
         TwentyEightDaysVideoPlan:{
           Price:"319",
           Type:"Video Tutorial With Notes",  
           Validity:"28 days validity",
         }
       },
       NotesPackage:{
         ThreeDaysOnlyNotesPlan:{
           Price:"49",        
           Type:"Only Notes Available",   
           Validity:"3 days validity",
          },
          SevenDaysOnlyNotesPlan:{
           Price:"69",
           Type:"Only Notes Available ",   
           Validity:"7 days validity",
          },
          FourteenDaysOnlyNotesPlan:{
           Price:"110",
           Type:"Only Notes Available",   
           Validity:"14 days validity",
          },
          TwentyEightDaysOnlyNotesPlan:{
           Price:"180",
           Type:"Only Notes Available ",   
           Validity:"28 days validity",
          }
       },
       toggleform:false,
       PasswordMatched:false,
       CurrentUsingPlan:'',
       VarifiedPasswords : '',
       SelectedSubjectsForm:false
      }

      this.SignUp = this.SignUp.bind(this);
      this.ChoosedSubjectList = this.ChoosedSubjectList.bind(this);
      this.SubmitUserDetails = this.SubmitUserDetails.bind(this);
      this.IsUserSignedUp = this.IsUserSignedUp.bind(this);
      this.InputChangehandler = this.InputChangehandler.bind(this);
    }


   PasswordValidation = (Password1 , Password2) =>{
      if((Password1 === Password2)){
        console.log("password Matched");
        console.log(Password1);
        console.log(Password2);
        this.setState({PasswordMatched:!this.state.PasswordMatched});
        console.log(this.state.PasswordMatched);
        return Password1;
      }else{
        console.log("Password Didn,t Matched..");
      }
      console.log(this.state.PasswordMatched);
    }


    SignUp = ( e,det) =>{
     e.preventDefault();
     this.setState({toggleform : !this.state.toggleform});
     console.log(det);
     const PacValidity = det.Packages.Validity;
     const PacType = det.Packages.Type;
     const PacPrice = det.Packages.Price;
     let PacNamePacPricw =  PacPrice+ "/-"+"  "+PacType + "("+ PacValidity+")";
    // console.log(PacNamePacPricw);
  //   const PackageDetail = {...this.state.userDetails}
   //  const Package = {...PackageDetail.PlanName}
   //  Package.value=PacNamePacPricw;
    // PackageDetail.PlanName = Package;
    // console.log(PackageDetail);
     localStorage.setItem("Package",PacNamePacPricw);
   //  this.setState({userDetails : PackageDetail});
   history.push("/signUp")
   }

   ChoosedSubjectList = ( e, AllData ) => {
     console.log(AllData);
     this.setState({SelectedSubjectsForm:!this.state.SelectedSubjectsForm});
   }

   SubmitUserDetails = (e ) => {
     e.preventDefault();
     let MatchedPassword = " ";
     const password1 = this.state.userDetails.Password.value ;
     const password2 =  this.state.userDetails.ConfirmPassword.value;
      
     if(password1||password2){
        MatchedPassword = this.PasswordValidation(password1,password2);
       }else{
        console.log("emptyPassword");
     }
     if(this.state.PasswordMatched){
       console.log(MatchedPassword);
     
       bcrypt.hash(MatchedPassword, 10).then(function(hash) {
         return hash  
        })
         .then(Hash =>{
          this.setState({VarifiedPasswords:Hash});
          this.setState({SelectedSubjectsForm:!this.state.SelectedSubjectsForm});
         });

      }else{
       console.log("Password Didnt Matched..")
      } 
      console.log(this.state.VarifiedPasswords);
    };

    Toggle = ( ) => {
     console.log(this.state.toggleform);
     this.setState({toggleform : !this.state.toggleform});
    }
   
    IsUserSignedUp = (UserData,UserAuth) =>{
      this.props.UserAuthorised(UserData,UserAuth);
      history.push("/TutorialScreen");
    }

    InputChangehandler = (event, inputIdentifier ) =>{
    
     const CopyOfUserDetails = {
       ...this.state.userDetails
     };
 
     const UpdatedUserDetails = {
       ...CopyOfUserDetails[inputIdentifier]
     };
   
     UpdatedUserDetails.value = event.target.value;
     CopyOfUserDetails[inputIdentifier] = UpdatedUserDetails;
     this.setState({userDetails:CopyOfUserDetails});
    }


   render(){

      const VideoPackageArray = [];
      for(let key in this.state.VideoPackages){
        VideoPackageArray.push({
          Id: key,
          Packages:this.state.VideoPackages[key]
         });
       }

       const NotesPackageArray = [];
       for(let key in this.state.NotesPackage){
        NotesPackageArray.push({
           Id: key,
           Packages:this.state.NotesPackage[key]
          });
        }

    const GridForm=!this.state.SelectedSubjectsForm?(
     <div>
         <h1 style={{color:"Gray",padding:"1.5% 0% .5% 1.5%",margin:"0%"}}>Sttepalink Pricing</h1>
        <div  style={{padding:"0% 1.5%"}}>
         <Card style={{backgroundColor:"#b1b1cd",margin:"0%"}}>
          <CardHeadder>
           <h2 style={{textDecoration:" underline ",padding:"1% 0 0 0",color:"#666699", textAlign:"center"}}> Video Along With Notes</h2>
          </CardHeadder>
           <CardBody>
           <GridContainer justify="center">
             {VideoPackageArray.map(formLog => (
               <GridItem xs={11} sm={6} md={4} key={formLog.Id} style={{padding:"2% 2% 2% 2%"}}>
                 <PricingPlan 
                   Key={formLog.Id}
                   BeforPrice={formLog.Packages.Price}
                   Validity={formLog.Packages.Validity}
                   Type={formLog.Packages.Type}
                   SignUp= {(e ) => this.SignUp(e, formLog)}    
                 />
               </GridItem>  
             ))} 
           </GridContainer>
           </CardBody>
         </Card>
         
       
         <Card style={{backgroundColor:"#b1b1cd"}}>
           <CardHeadder>
             <h2 style={{textDecoration:" underline ",padding:"1.3% 0 0 0",color:"#666699", textAlign:"center"}}> Only Notes Available</h2>
           </CardHeadder>
           <CardBody>
           <GridContainer justify="center">
             {NotesPackageArray.map(formLog => (
               <GridItem  xs={11} sm={6} md={4} key={formLog.Id} style={{padding:"2% 2% 2% 2%"}}>
                 <PricingPlan 
                   Key={formLog.Id}
                   BeforPrice={formLog.Packages.Price}
                   Validity={formLog.Packages.Validity} 
                   Type={formLog.Packages.Type}
                   SignUp= {(e ) => this.SignUp(e,formLog)}
                 />
               </GridItem>  
             ))} 
           </GridContainer>
           </CardBody>
         </Card>
         </div>
     </div> 
    ) : null;


    const SubjectForm =this.state.SelectedSubjectsForm?(
      <ChooseTheSubjects
      NewUserData = {this.state.userDetails}
      Password ={this.state.VarifiedPasswords}
      IsUserSignedUp={this.IsUserSignedUp}
      ChoosedSubject={(ChoosedSubjects)=>this.ChoosedSubjectList(ChoosedSubjects)}
    /> 
    ):null;

      return (
         <div className="PricingPlanBackground">
           {GridForm}
            {SubjectForm}
         </div>
      );

    }
  }


export default SpacingGrid;