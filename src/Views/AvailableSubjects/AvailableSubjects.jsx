import React , { useState , useEffect } from 'react';
import jwt from "jsonwebtoken";
import SubjectComponents from '../../Components/SubjectsAvailable/SubjectsAvailable';
import axious from '../../hoc/Axious/Axious';
import Aux from '../../hoc/Aux';
import './AvailableSubjects.css';

const SubjectsAvailable = (Props) =>{ 
  console.log(Props.NewUserData); 

 const [subjectState , setSubjectsState] =  useState({ 
      SubjectsDetails:{},
      ChoosedSubjects:[],
      MaximumValue:[],
      CurrentValue:{},
      ToggleSelectedForm:false,
      EitherOr: true
    });
       
    useEffect(() => {
      const Standard = Props.NewUserData.Standart.value;
        axious.get('/AvailableSubjectsList/'+Standard+'.json')
        .then(response =>{ 
          setSubjectsState(prevState => ({
            ...prevState,SubjectsDetails:response.data}));
          })  
        .then(err=>console.log(err));
      }, [])
       
     
    console.log(subjectState.SubjectsDetails);
 
    const AddSubjects = (e,dataToAdd) =>{
      e.preventDefault();
      const PreviousAddedSubjects =subjectState.CurrentValue;
      const id = dataToAdd.id;
      const SubjectName = dataToAdd.Subjects;
      PreviousAddedSubjects[id] ={Subject:SubjectName};    
      setSubjectsState(prevState => ({
        ...prevState,CurrentValue:PreviousAddedSubjects}));
        console.log(subjectState.CurrentValue);
    }
   

    const RemoveSubjects = (e,dataToReduce,index) =>{
      e.preventDefault();
      const SelectedSubject = {...subjectState.CurrentValue};
      console.log(subjectState.CurrentValue);
      const Id = dataToReduce.id;
      delete(SelectedSubject[Id]);
      setSubjectsState(prevState => ({
        ...prevState,CurrentValue:SelectedSubject}));
        console.log(subjectState.CurrentValue);
    }

    const BuyPlan= (e ) =>{
      console.log(e);
     e.preventDefault();
      const Details = {
        PlanName:Props.NewUserData.PlanName.value,
        name:Props.NewUserData.name.value,
        emailId:Props.NewUserData.emailId.value,
        workAs:Props.NewUserData.workAs.value,
        class:Props.NewUserData.Standart.value,
        SchoolName:Props.NewUserData.SchoolName.value,
        mobileNo:Props.NewUserData.mobileNo.value,
        dateOfBirth:Props.NewUserData.dateOfBirth.value,
        sex:Props.NewUserData.sex.value,
        fatherName:Props.NewUserData.fatherName.value,
        currentAddress:Props.NewUserData.currentAddress.value,
        landMark:Props.NewUserData.landMark.value,
        postoffice:Props.NewUserData.postoffice.value,
        Subjects:subjectState.CurrentValue,
        district:Props.NewUserData.district.value,
        pincode:Props.NewUserData.pincode.value,
        states:Props.NewUserData.states.value,
        Password : Props.Password
      }
      console.log(Details);
      
     const JWT_KEY = "7cb716a9ee1095ad11c16f4c4f13168a8bcca0fb5e5156b8ceaa8a6cc0b4bfc05d302ebba29bd98bd6a7a536977a376000c8c37e9d6b807141b131bb1d1fc9ea"
     const loginUserData={
      EmailId :Props.NewUserData.emailId.value,
      Name :Props.NewUserData.name.value,
      WorkAs : Props.NewUserData.workAs.value
    } 

     const token = jwt.sign( 
      {loginUserData},
      JWT_KEY,
      {expiresIn:"3h"}
    );
     localStorage.clear(); 
     axious.post('/userDetails.json',Details)
     .then(res=>{
       localStorage.setItem("UserDetail",res.data.name);
       localStorage.setItem("token",token);
       Props.IsUserSignedUp(res.data.name,true);
      })
     .then(setSubjectsState({EitherOr:!subjectState.EitherOr}))
     .catch(err => console.log(err));
     
    }

    const  Arrayofsubjects = [];
    console.log(subjectState.SubjectsDetails);
    for(let key in subjectState.SubjectsDetails ){
      Arrayofsubjects.push({
          ...subjectState.SubjectsDetails[key],
          id:key
        });
      }

   
    let form =(<div className='backgroundOfSubjectList' >
      <form className='backgroundOfSubjectList1' >
        {Arrayofsubjects.map((SubjectsElement,index) => (
           <SubjectComponents 
           key={SubjectsElement.id} 
           data={SubjectsElement}
           AddSubjects={(e)=>AddSubjects(e,SubjectsElement)}
           RemoveSubjects={(e)=>RemoveSubjects(e,SubjectsElement,index)}
           />
        ))}
      </form>
      </div>
    );

    console.log(subjectState.CurrentValue);
    
    const  ArrayofSelectedsubjects = [];
    console.log(subjectState.CurrentValue);
    for(let key in subjectState.CurrentValue ){
      ArrayofSelectedsubjects.push({
        ...subjectState.CurrentValue[key],
        id:key
      });
    } 
  
    let AddedSubjectToggle ; 
    if(0  < ArrayofSelectedsubjects.length ){
      AddedSubjectToggle =(
       <div className="selectedSubjectDisplay">
         <form>
            {ArrayofSelectedsubjects.map((SubjectsElement,index) => (
              <button className="PlanDisplay" key={SubjectsElement.id}>{SubjectsElement.Subject}</button>
            ))}
         </form>
       </div>
      ) 
    }else{
      AddedSubjectToggle = ( <div className="selectedSubjectDisplay">
       <h3 style={{textDecoration: "underline" , margin:"1% 0% 5% 3%"}}>Add subject in your cart :</h3>
       <h5 style={{margin:"3% 0% 2.5% 5%" , padding:"0% 0% 2% 0%"}}>1. To add new subject please click on " + " (Add)  sign  button</h5>
       <h5 style={{margin:"3% 0% 0% 5%"}}>2. To remove the selected subject  please  click on " - " (Add) sign button</h5>
       </div>
      )
    }
    
    
      
    let SubjectsDashBoard = (
    <div className="BAckGroundSubjects">
    <div className="AvailableSubjectBackGroung">
      <div className="AvailableSubjectsPage"> 
         <div className="AddSubjects">
          {form}
         </div>
         <div className="DisplayButton">
            {Props.NewUserData.PlanName.value}
         </div>
           
      </div>   
      <div className="AvailableSubjectsDiscription">
       <div className="SubjectLimitDisplay">

             {AddedSubjectToggle}
       
         <div className="GoOrGoBackButtons">
         <div className="GoBackButton">
          <a href="/PricingPackage">
             <i className="arrow left icon"></i>
              Go Back
          </a>
          </div>
          <button className="BuyButton" onClick={(e)=>BuyPlan(e)}>
            Buy Plan <i className="arrow right icon"></i>
          </button>
         </div>
       </div>   
     </div> 
    </div>  
 </div>     
   );
  return (
     <Aux> 
       <div>
         {SubjectsDashBoard}
       </div>
     </Aux>
   );
    
}

export default SubjectsAvailable;