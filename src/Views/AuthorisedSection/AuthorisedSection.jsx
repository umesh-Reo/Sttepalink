import React , {Component} from "react";
import CustomInput  from "../../ComponentsMaterialUi/CustomInput/CustomInput";
import Varification from './CreateTeacher/CreateTeacher';
import SignUpForm from "../../ComponentsMaterialUi/SignUpOrLoginForm/SignUpOrLoginForm.jsx";
import GridContainer from "../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import GridItem from "../../ComponentsMaterialUi/Grid/GridItem";
import axious from '../../hoc/Axious/Axious';
import './AuthorisedSection.css'

class AuthorisedSection extends Component{
    state={
        LoginDetails:{
          name:{
            elementType:'input',
            type:'text',
            placeholder:'name', 
            value:''
          }, 
          emailId:{
            elementType:'input',
            type:'email',
            placeholder:'e-mail id', 
            value:''
          }, 
          Password:{
           elementType:'input',
           type:'password',
           placeholder:'Password',
           value:''
          }
        },
        show:false,
        fetchedChapters:[]
      } 
      
           
      SubmitUserDetails = ( ) => {
      // this.history.push('/PricingPackage');
       const OfficialDetail = {
          emailId: this.state.LoginDetails.emailId.value,
          password: this.state.LoginDetails.Password.value
        }
  
        axious.get('/OfficialData.json')
        .then(res =>{ 
          const officDet = [];
          for(let key in res.data){
            officDet.push({
                ...res.data[key],
                id:key
              });
            }
            officDet.map(rew =>{
              if((rew.emailId  === OfficialDetail.emailId) && (rew.password ===OfficialDetail.Password) &&(rew.workAs === OfficialDetail.workAs)){
                console.log('matched');  
              } 
            });
         })
        .then(this.setState({show:!this.state.show}))
        .then(err => console.log(err));

      }

      ChapterNameInputhandler = (event) =>{
        const CopyOfChapDetails = {
          ...this.state.ChapterDetail
        };
        console.log(CopyOfChapDetails.subject.value);
  
        const UpdatedChapterDetails = {
          ...CopyOfChapDetails.subjects
        };
      
        UpdatedChapterDetails.value = event.target.value;
  
        CopyOfChapDetails.subject.value = UpdatedChapterDetails.value;
        console.log(CopyOfChapDetails);
        this.setState({ChapterDetail:CopyOfChapDetails});
      }
       
      CreateNewChapters = (event) =>{
        event.preventDefault();
        const ClassStandart = this.state.LoginDetails.Standart.value;
        const ClassSubjects = this.state.LoginDetails.subject.value;
  
        const Chapters = {
                  chapter:this.state.ChapterDetail.subject.value
                }
     
        axious.post('/OfficeInfo/'+ClassStandart+'/'+ClassSubjects+'.json',Chapters)
        .then(res =>{
          const TempFetCha =  this.state.fetchedChapters;
          console.log(TempFetCha);
          TempFetCha.push({
            ...Chapters,
            id:res.data.name
          });
          console.log(TempFetCha);
          this.setState({fetchedChapters:TempFetCha});
        })
        .then(err => console.log(err));
      }
  
  
      Inputhandler = (event, inputIdentifier ) =>{
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
    render(){
        let form = !this.state.show?(
         <GridContainer  justify="center">   
           <GridItem xs={12} sm={4} md={5}>
             <SignUpForm clicked={(e)=>this.SubmitUserDetails(e)} Title="Login Here..." >
               <GridContainer>
                 <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={this.state.LoginDetails.name.placeholder}
                     id="name"
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType={this.state.LoginDetails.name.elementType}
                     handleChange={(event) =>this.Inputhandler(event , "name")}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:this.state.LoginDetails.name.type,
                     }}
                    /> 
                  </GridItem>
    
                  <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={this.state.LoginDetails.emailId.placeholder}
                     id="EmailId"
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType={this.state.LoginDetails.emailId.elementType}
                     handleChange={(event) =>this.Inputhandler(event , "EmailId")}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:this.state.LoginDetails.emailId.type,
                     }}
                    /> 
                 </GridItem>
                  
                 <GridItem xs={12} sm={12} md={12}>
                   <CustomInput
                     labelText={this.state.LoginDetails.Password.placeholder}
                     id="Password"
                     formControlProps={{
                       fullWidth: true,
                     }}
                     elementType={this.state.LoginDetails.Password.elementType}
                     handleChange={(event) =>this.Inputhandler(event , "Password")}
                     inputProps={{
                       autoComplete:"off",
                       readOnly: false,
                       type:this.state.LoginDetails.Password.type,
                     }}
                    /> 
                 </GridItem>
               </GridContainer>
             </SignUpForm>
           </GridItem>
           </GridContainer>
        ):null;
      

        let AddAccounts = this.state.show?(<Varification/>): null;

        return (
           <div> 
             {form}
             {AddAccounts}             
           </div>
          );
                       
    }
}


export default AuthorisedSection;