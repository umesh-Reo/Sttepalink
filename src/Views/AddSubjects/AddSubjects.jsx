import React ,{Component} from "react";
import Input from '../../Components/Ui/Inputs/Inputs';
import Btn   from '../../Components/Ui/Button/Button';
import validator from 'validator';
import axious from '../../hoc/Axious/Axious';

class AddSubjects extends Component{
    state={
        detailsOfSubjects:{
            Standard:{
                elementType:'select',
                elementConfig:{
                  options:[
                    { value:"Class 12" , displayValue:"Class 12" },
                    { value:"Class 11",  displayValue:"Class 11" },
                    { value:"Class 10",  displayValue:"Class 10" },
                    { value:"Class 9",   displayValue:"Class 9" },
                    { value:"Class 8",   displayValue:"Class 8" },
                    { value:"Class 7",   displayValue:"Class 7" },
                    { value:"Class 6",   displayValue:"Class 6"}
                  ]
                  },
              value:"Class 12"
            },
            Subjects:{
              elementType:'input',
              elementConfig:{
                 type:'text',
                 placeholder:'Enter Subjects Name' 
               },
              value:''
            }
        }
     
    }

    Inputhandler = (event, inputIdentifier ) =>{
        event.preventDefault();
        const CopyOfLoginDetails = {
          ...this.state.detailsOfSubjects
        };
        
  
        const UpdatedLoginDetails = {
          ...CopyOfLoginDetails[inputIdentifier]
        };
      
        UpdatedLoginDetails.value = event.target.value;
  
        CopyOfLoginDetails[inputIdentifier] = UpdatedLoginDetails;
        this.setState({detailsOfSubjects:CopyOfLoginDetails});
      }
   
      ToggleToPricingPlan = ( ) => {
        // this.history.push('/PricingPackage');
        console.log(this.Props);
          console.log(this.state.show);
      }
      
      SubmitUserDetails = ( ) => {
          const  Standard = this.state.detailsOfSubjects.Standard.value;
        const Subjects ={
             Subjects : this.state.detailsOfSubjects.Subjects.value
        }
  
        axious.post('/AvailableSubjectsList/'+Standard+'.json',Subjects)
        .then(res => console.log(res)
         );
      }
  
      validation=(data)=>{
        const errors ={ };
        if(!data.Password.value){
          errors.Password="Can't be blank";
          console.log(errors);
        }
        if(!validator.isEmail(data.emailId.value)){
          errors.EmailId="Invalid email Id";
          console.log(errors);
        }
      }
        
     
  
      render(){ 
     
  
        const SubjectArrayForm = [];
        for(let key in this.state.detailsOfSubjects){
            SubjectArrayForm.push({
           Id: key,
           config: this.state.detailsOfSubjects[key]
          });
        }
        let form = (
        <div className="Login">
           <form className='SttepalinkLoginLable'>
             <div>Add Subjects :</div>
          </form>
          <form className='backgroundLogin'>
            {SubjectArrayForm.map(formLog => (
               <Input 
                key={formLog.Id}
                elementType= {formLog.config.elementType}
                elementConfig={formLog.config.elementConfig}
                value={formLog.config.value}
                label={formLog.Id}
                changed={(event) =>this.Inputhandler(event , formLog.Id)}
               />
               
            ))}
          </form>
          <div className="LoginButtons">
          <Btn btnType="Danger" elementTypes="submit" clicked={this.SubmitUserDetails}>Submit</Btn>
          </div>
        </div>
        );
      
        return (
          <div className="loginCom">
            {form}
          </div>
        );
      }
  }

export default AddSubjects;