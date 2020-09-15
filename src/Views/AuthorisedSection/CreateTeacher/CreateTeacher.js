import React , { Component } from 'react';
import Person from "@material-ui/icons/Person";
import ListCardForm from "../../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx";
import Li from "../../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import Card from "../../../ComponentsMaterialUi/Card/Card.jsx";
import CardBody from "../../../ComponentsMaterialUi/Card/CardBody.jsx";
import CardFooter from "../../../ComponentsMaterialUi/Card/CardFooter.jsx";
import CustomInput from "../../../ComponentsMaterialUi/CustomInput/CustomInput.jsx";
import GridContainer from "../../../ComponentsMaterialUi/Grid/GridContainer.jsx";
import GridItem from "../../../ComponentsMaterialUi/Grid/GridItem.jsx";
import Button from "../../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import Modal from "../../../ComponentsMaterialUi/Modal/Modal";
import axious from '../../../hoc/Axious/Axious';
import './CreateTeachers.css'


class CreateAccount extends Component{
   state={ 
     NewTeacherDetail:{
       emailId:{
         elementType:'input',
         type:'email',
         placeholder:'Enter Email Id',
         value:''
        }, 
        Subject:{
         elementType:'input',
         type:'text',
         placeholder:'Enter Subject Name' ,
         value:''
        }, 
        Password:{
         elementType:'input',
         type:'password',
         placeholder:'Password',
         value:''
        },
        Standart:{
          elementType:'select',
            options:[
              { 
                value:"Class 12" , 
                displayValue:"Class 12" 
              },
              { 
                value:"Class 11", 
                displayValue:"Class 11" 
              },
              { 
                value:"Class 10", 
                displayValue:"Class 10" 
              },
              { 
                value:"Class 9", 
                displayValue:"Class 9" 
              },
              { 
                value:"Class 8", 
                displayValue:"Class 8" 
              },
              { 
                value:"Class 7", 
                displayValue:"Class 7" 
              },
              { 
                value:"Class 6", 
                displayValue:"Class 6"
              }
             ],
           value:'Class 12'
         }
      },
      NewCreatedTeacherDetail:[ ],
      ToggleNewTeacherForm:false
    };  
  
   yup=( i , f)=>{
     console.log(f);
    }  

    componentDidMount(){
      axious.get('/TeachersAcc/Details.json')
      .then(res =>{
       const TeacherGetData=[];
       for(let key in res.data){
         TeacherGetData.push({
           ...res.data[key],
           id:key
          })
        }
       console.log(TeacherGetData);
      
       this.setState({NewCreatedTeacherDetail:TeacherGetData});
      })
      .then(err => console.log(err));
      console.log("hello Buddy");
    }
  
   TeacherDetailsInputhandler = (event ,Id) =>{
     event.preventDefault();
     console.log(Id);
     const CopyOftechDetails = {
       ...this.state.NewTeacherDetail
     };
     const UpdatedTechDetails = {
       ...CopyOftechDetails[Id]
      };
      UpdatedTechDetails.value = event.target.value;
      CopyOftechDetails[Id] = UpdatedTechDetails;
      this.setState({NewTeacherDetail:CopyOftechDetails});
      console.log(this.state.NewTeacherDetail);
    }  
  
    SubmitNewTeachersDetails = (event) =>{
     event.preventDefault();
     const  StandartWillMarge = this.state.NewTeacherDetail.Standart.value;
     const  SubjectWillMarge = this.state.NewTeacherDetail.Subject.value;
     const MeargedSubjectAndStandard = StandartWillMarge + " (" + SubjectWillMarge + ")";
     const TeacherDetails ={
       Password:this.state.NewTeacherDetail.Password.value,
       Subject :this.state.NewTeacherDetail.Subject.value,
       Standart:this.state.NewTeacherDetail.Standart.value,
       Info : MeargedSubjectAndStandard,
       emailId:this.state.NewTeacherDetail.emailId.value
      };
  
     axious.post('/TeachersAcc/Details.json',TeacherDetails)
     .then(response =>{
       let AddData = this.state.NewCreatedTeacherDetail;
       for(let key in response.data){
         AddData.push({
            ...TeacherDetails,
            id:key
         })
        }
       console.log(this.state.NewCreatedTeacherDetail);
       this.setState({NewCreatedTeacherDetail:AddData});
       console.log(this.state.NewCreatedTeacherDetail);
      })
     .then(Err =>console.log(Err));
  
    }
  
  
  
  
    GetChapters = ( Id ) =>{
      this.setState({GetChapterId:Id});
      console.log(this.state.GetChapterId);
    }    

    ToggleBlackDrop = ( ) => {
      this.setState({ToggleNewTeacherForm:!this.state.ToggleNewTeacherForm})
    }
    render(){
     const ListArray = this.state.NewCreatedTeacherDetail;

     let WidthOfTheCArd = window.innerWidth >= 960 ? "20px 10% 0 10%" : "0px";
    
     const newTeachersArray = [];
     for(let key in this.state.NewTeacherDetail){
        console.log(key);
        newTeachersArray.push({
         Id: key,
          config: this.state.NewTeacherDetail[key]
        });
      }
  
      let TeacherEntryForm = this.state.ToggleNewTeacherForm ? (
        <Modal show={this.state.ToggleNewTeacherForm} BlackDrop={this.ToggleBlackDrop}>
         <Card
          style={{
            paddingTop:"0",
            backgroundColor: "rgb(253, 252, 252)",
            borderRadius: "1.5em 1.5em 1em 1em",
            borderRight:"1px solid #d2d4d2",
            boxShadow: "-6px 10px 6px rgb(82, 82, 86)",
            margin:'0'
          }}>
           <h2 style={{
              width: "100%",
              fontSize: "180%", 
              fontWeight: "800",
              padding:"8% 0% 1% 2%",
              margin:"0%",
              borderRadius: "15px 15px  0px 0px",
              color:"rgb(255, 255, 255)",
              backgroundColor: "rgb(181, 181, 182)"
           }}>Add New Teachers :</h2>
           <CardBody>
              <GridContainer>
               <GridItem xs={12} sm={12} md={12}>
                 <CustomInput
                    labelText={this.state.NewTeacherDetail.emailId.placeholder}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="emailId"
                    elementType={this.state.NewTeacherDetail.emailId.elementType}
                    handleChange={(event) =>this.TeacherDetailsInputhandler(event , "emailId")}
                    inputProps={{
                      autoComplete:"off",
                      readOnly: false,
                      type:this.state.NewTeacherDetail.emailId.type,
                    }}
                   /> 
               </GridItem>
 
               <GridItem xs={12} sm={12} md={12}>
                 <CustomInput
                    labelText={this.state.NewTeacherDetail.Subject.placeholder}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="Subject"
                    elementType={this.state.NewTeacherDetail.Subject.elementType}
                    value={this.state.NewTeacherDetail.Subject.value}
                    handleChange={(event) =>this.TeacherDetailsInputhandler(event , "Subject")}
                    inputProps={{
                      autoComplete:"off",
                      readOnly: false,
                      type:this.state.NewTeacherDetail.Subject.type,
                    }}
                 /> 
               </GridItem> 
 
               <GridItem xs={12} sm={12} md={12}>
                 <CustomInput
                    labelText={this.state.NewTeacherDetail.Standart.placeholder}
                    id="Standart"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    elementType={this.state.NewTeacherDetail.Standart.elementType}
                    selectPlaceholder={this.state.NewTeacherDetail.Standart.SelectPlaceholder}
                    menuOptions={this.state.NewTeacherDetail.Standart.options}
                    value={this.state.NewTeacherDetail.Standart.value}
                    handleChange={(event) =>this.TeacherDetailsInputhandler(event , "Standart")}
                    inputProps={{
                      autoComplete:"off",
                      readOnly: false,
                      type:this.state.NewTeacherDetail.Standart.type,
                    }}
                 /> 
               </GridItem>
               <GridItem xs={12} sm={12} md={12}>
                 <CustomInput
                    labelText={this.state.NewTeacherDetail.Password.placeholder}
                    id="Password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    elementType={this.state.NewTeacherDetail.Password.elementType}
                    menuOptions={this.state.NewTeacherDetail.Password.options}
                    value={this.state.NewTeacherDetail.Password.value}
                    handleChange={(event) =>this.TeacherDetailsInputhandler(event , "Password")}
                    inputProps={{
                      autoComplete:"off",
                      readOnly: false,
                      type:this.state.NewTeacherDetail.Password.type,
                    }}
                  /> 
               </GridItem>
             </GridContainer>
           </CardBody>
           <CardFooter>
             <Button onClick={(e)=>this.SubmitNewTeachersDetails(e)} >Create New Account</Button>             
           </CardFooter>
         </Card>
       </Modal>
      ):null;
  
    
     let ComponentToCreateNewTeacher = (
       <div style={{margin:WidthOfTheCArd}}>
         <ListCardForm  heading="Available Teachers">
            {this.state.NewCreatedTeacherDetail.map(formLog => (
             <GridItem key={formLog.id} xs={12} sm={12} md={12}>
               <Li
                 style={{
                   fontWeight:"650",
                   padding:"0 0 0 0 ",
                   border:"1px solid  #e6e6e6"
                  }}
                 id={formLog.id} 
                 clicked= {(e)=>this.yup(e,formLog)} 
                 PartAfixedTitle= {formLog.Standart}
                 PartAToDisplay=" "
                 PartBToDisplay={formLog.Subject}
               >
                 <Person/>
               </Li>    
             </GridItem>
            ))}
         </ListCardForm>
         {TeacherEntryForm}  

         <GridContainer>
           <GridItem  md={3} style={{marginLeft:"74%",paddingBottom:".5%",paddingTop:"4%"}}>
             <Button  onClick={this.ToggleBlackDrop}>+Add Teacher</Button>
           </GridItem>
         </GridContainer>
         
       </div> 
      );
      
    
    
      return(
          <div>
            {ComponentToCreateNewTeacher}
          </div>

      );
    }    
  }    
    
export default CreateAccount;